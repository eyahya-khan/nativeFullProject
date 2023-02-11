import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  WorkSans_400Regular
} from "@expo-google-fonts/dev";

const UserData = () => {
  const [userData, setUserdata] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUserData = () => {
    fetch("https://thapatechnical.github.io/userapi/users.json")
      .then((res) => res.json())
      .then((json) => setUserdata(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    getUserData();
  }, []);

  const showUserData = ({ item }) => {
    return (
      loading ? <Text>...loading</Text> :
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgStyle} source={{ uri: item.image }} />
        </View>

        <View>
          <View style={styles.bioDataContainer}>
            <Text style={styles.bioData}> Bio-Data </Text>
            <Text style={styles.idNumber}>
              {item.id < 10 ? `#0${item.id}` : `#{item.id}`}
            </Text>
          </View>

          <View style={styles.mainContain}>
            <Text style={styles.myName}> Name: {item.name} </Text>
            <Text style={styles.myName}> email: {item.email} </Text>
            <Text style={styles.myName}> mobile: {item.mobile} </Text>
          </View>
        </View>
      </View>
    );
  };
  const [fontsLoaded] = useFonts({
    WorkSans_400Regular
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }else{

  return (
    <View>
      <Text style={styles.mainHeader}>List of user</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={userData}
        renderItem={(item) => showUserData(item)}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )}
};
const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    minHeight: "100%",
    paddingVertical: 50,
    backgroundColor: "#ebedee",
  },
  card: {
    width: 250,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginHorizontal: 20,
  },
  bioDataContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#353535",
    paddingVertical: 10,
    fontFamily: "WorkSans_400Regular",
  },
  idNumber: {
    fontSize: 20,
    color: "rgba(255, 255, 255, 0.5)",
    fontFamily: "WorkSans_400Regular",
    paddingRight: 10,
  },
  bioData: {
    fontSize: 30,
    color: "#fff",
    fontFamily: "WorkSans_400Regular",
  },
  mainHeader: {
    fontSize: 20,
    color: "green",
    textAlign: "center",
    fontFamily: "WorkSans_400Regular",
    paddingVertical: 30,
  },
  imgContainer: {
    padding: 10,
  },
  imgStyle: {
    width: "100%",
    height: 180,
  },
  mainContain: {
    padding: 10,
    backgroundColor: "#353535",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    paddingBottom: 20,
  },
  myName: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 10,
    alignSelf: "flex-start",
    textTransform: "capitalize",
    fontFamily: "WorkSans_400Regular",
  },
});

export default UserData;
