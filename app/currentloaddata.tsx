import GlobalStyles from "../GlobalStyles";
import { ThemeLight } from "../Theme";
import CurrentLoad, { Data } from "../components/currentload";
import { Text, View } from "../components/Themed";
import { FlatList, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

 
export default function DataTabScreen() {
  const  data: Data[] = [
    {
      device: "SAMSUNG A10",
      owner: "BRIAN MUIGAI",
      percentage: "28%",
      time: "02 :24 :06 HRS",
    },
    {
      device: "SAMSUNG A10",
      owner: "BRIAN MUIGAI",
      percentage: "28%",
      time: "02 :24 :06 HRS",
    },
    {
      device: "SAMSUNG A10",
      owner: "BRIAN MUIGAI",
      percentage: "28%",
      time: "02 :24 :06 HRS",
    },
    {
      device: "SAMSUNG A10",
      owner: "BRIAN MUIGAI",
      percentage: "28%",
      time: "02 :24 :06 HRS",
    },
    {
      device: "SAMSUNG A10",
      owner: "BRIAN MUIGAI",
      percentage: "28%",
      time: "02 :24 :06 HRS",
    },
    {
      device: "SAMSUNG A10",
      owner: "BRIAN MUIGAI",
      percentage: "28%",
      time: "02 :24 :06 HRS",
    },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: ThemeLight.background }}>
      <FlatList
        data={data}
        style={{
          marginTop: 0,
          // marginBottom: 100,
          padding: 0,
          flex: 1,
        }}
        renderItem={({ item }) => <CurrentLoad data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ...GlobalStyles,
});