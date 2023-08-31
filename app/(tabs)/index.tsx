import { StyleSheet, Button } from "react-native";

import { Text, View } from "../../components/Themed";
import { NavigationContainer } from '@react-navigation/native';

import { useRouter } from "expo-router";
 

import React from "react";  
 
export default function Home() {
  //const navigate = useNavigate();
 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
       <a href="./currentloaddata">
      <Button
      title="current load page"
       
      />
      </a> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
