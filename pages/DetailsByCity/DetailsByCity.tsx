import { ActivityIndicator, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../Home/components/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../utils/colors";

const DetailsByCity = ({
  route: {
    params: { abbreviation },
  },
}: {
  route: any;
}) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      let res: any = await axios.get(
        `https://www.metaweather.com/api/location/search/?query=${abbreviation}`
      );
      console.log(res);
      setList(res.data);
      setLoading(false);
    };
    load();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      {loading ? (
        <ActivityIndicator color={colors.primary} size="large" />
      ) : (
        <View style={styles.container}>
          <Text>DetailsByCity</Text>
          <Text>{JSON.stringify(list)}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default DetailsByCity;
