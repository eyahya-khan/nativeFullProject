import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("About")}>
        <Text>about</Text>
      </TouchableOpacity>
      <Text>course</Text>
      <Text>contact</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  menuContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Menu;
