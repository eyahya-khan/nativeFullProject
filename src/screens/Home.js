import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Menu from "../component/Menu";

const Home = (props) => {
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos doloremque, soluta quidem repellendus modi. Cupiditate, earum reprehenderit.";
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          source={require("../../assets/homeImage.jpeg")}
        />
      <Text style={styles.mainHeader}>Welcome to </Text>
      <Text style={[styles.mainHeader, { fontSize: 30, color: "#4c5dab", marginTop:0 }]}>
        {props.channelName}
      </Text>
      <Text style={styles.paraStyle}>{description} </Text>
      </View>
      <Menu/>
    </View>
  );
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
    paddingHorizontal: 10,
  },
  mainHeader: {
    textAlign: "center",
    fontSize: 25,
    color: "#344055",
    textTransform: "uppercase",
    marginTop: 10
  },
  headerImage: {
    width: "100%",
    height: "50%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 10,
    borderRadius: 20
  },
  paraStyle: {
    textAlign: "center",
    fontSize: 16,
    color: "#7d7d7d",
    marginTop: 10,
  },
});
export default Home;
