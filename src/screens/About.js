import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts, WorkSans_400Regular } from "@expo-google-fonts/dev";

const About = () => {
  const [fontsLoaded] = useFonts({
    WorkSans_400Regular,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  } else {
    return (
      <ScrollView>
        <View style={styles.aboutContainer}>
          <Text style={styles.mainHeader}> Eyahya Khan </Text>
          <Text style={styles.paraStyle}> I am a web developer 😀 </Text>
          <View>
            <Image
              style={styles.imgStyle}
              source={{
                uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              }}
            />
          </View>
          <View style={styles.aboutLayout}>
            <Text style={styles.aboutSubHeader}> About me </Text>
            <Text style={[styles.paraStyle, styles.aboutPara]}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit.
            </Text>
          </View>
          <View style={styles.menuContainer}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() =>
                Linking.openURL(
                  "https://www.linkedin.com/in/eyahya-khan-a90b1125/"
                )
              }
            >
              <Image
                style={styles.iconStyle}
                source={require("../../assets/linkedin.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/channel/UCbuHAZjisNiwJkaj8n3mh6w"
                )
              }
            >
              <Image
                style={styles.iconStyle}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png",
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() =>
                Linking.openURL("https://www.facebook.com/eyahyaeyahya")
              }
            >
              <Image
                style={styles.iconStyle}
                source={require("../../assets/facebook.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
};
const styles = StyleSheet.create({
  aboutContainer: {
    display: "flex",
    alignItems: "center",
  },

  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainHeader: {
    fontSize: 18,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    marginTop: 10,
    marginBottom: 10,
    fontFamily: "Nunito_700Bold",
  },
  paraStyle: {
    fontSize: 18,
    color: "#7d7d7d",
    paddingBottom: 10,
    fontFamily: "WorkSans_400Regular",
  },
  aboutLayout: {
    backgroundColor: "#4c5dab",
    paddingHorizontal: 30,
    marginTop: 10,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 15,
    fontFamily: "Nunito_700Bold",
    alignSelf: "center",
  },
  aboutPara: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "WorkSans_400Regular",
    lineHeight: 26,
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 15,
  },

  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});

export default About;
