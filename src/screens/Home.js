import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Menu from "../component/Menu";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_300Light,
  NunitoSans_600SemiBold,
  Lato_400Regular,
  Inter_900Black,
} from "@expo-google-fonts/dev";

const Home = (props) => {
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos doloremque, soluta quidem repellendus modi. Cupiditate, earum reprehenderit.";

  const [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_300Light,
    NunitoSans_600SemiBold,
    Lato_400Regular,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }else{
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          source={require("../../assets/homeImage.jpeg")}
        />
        <Text style={[styles.mainHeader, {fontFamily: "JosefinSans_400Regular", paddingTop:5}]}>Welcome to </Text>
        <Text
          style={[
            styles.mainHeader,
            {
              fontSize: 20,
              color: "#4c5dab",
              marginTop: 5,
            },
          ]}
        >
          {props.channelName}
        </Text>
        <Text style={[styles.paraStyle, {fontFamily: "Lato_400Regular", lineHeight:25},]}>{description} </Text>
      </View>
      <View style={styles.menuStyle}>
        <Menu />
      </View>
    </View>
  );
        }
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  mainHeader: {
    textAlign: "center",
    fontSize: 25,
    color: "#344055",
    textTransform: "uppercase",
    marginTop: 10,
  },
  headerImage: {
    width: "100%",
    height: "50%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 10,
    borderRadius: 20,
  },
  paraStyle: {
    textAlign: "center",
    fontSize: 15,
    color: "#7d7d7d",
    marginTop: 10,
  },
  menuStyle: {
    marginBottom: 10,
  },
});
export default Home;
