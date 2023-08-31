import { View, Text } from "./Themed";
import { StyleSheet } from "react-native";
import GlobalStyles from "../GlobalStyles";
import { ThemeDark, ThemeLight } from "../Theme";

export interface Data {
  device: string;
  owner: string;
  percentage: string;
  time: string;
}

export default function CurrentLoad({ data }: { data: Data }) {
  return (
    <View
      style={[
        styles.CustomerDetailsContainers, 
        styles.paddingV,
        {
          borderBottomColor: ThemeLight.border,
          borderBottomWidth: 1,
          marginHorizontal: 30,
        },]}
    >
      <View 
      
      >
        <Text style={{ color: "#999999" }}>DEVICE</Text>
        <Text style={{ color: "#999999" }}>OWNER</Text>
        <Text style={{ color: "#999999" }}>CHARGE PERCENTAGE</Text>
        <Text style={{ color: "#999999" }}>Remaining charging time</Text>
      </View>
      <View>
      <Text>
        {data.device}
      </Text>
      <Text>
        {data.owner}
      </Text>
      <Text style={{ color: "#00FF00" }}>
        {data.percentage}
      </Text>
      <Text>
        {data.time}
      </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ...GlobalStyles,
  CustomerDetailsContainers: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: "30"
  },
});