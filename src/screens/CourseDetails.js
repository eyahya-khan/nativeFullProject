import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { courseApi } from "../API/CourseApi";

const CourseDetails = ({ navigation, route }) => {
  const id = route.params.courseId;
  const selectedCourse = courseApi.find((item) => id === item.id);
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.courseContainer}>
        <View>
          <Image
            style={styles.cardImage}
            resizeMode="contain"
            source={selectedCourse.image}
          />
        </View>
        <Text style={styles.mainHeader}>{selectedCourse.title}</Text>
        <Text style={styles.description}>{selectedCourse.description}</Text>
        <Text style={[styles.description,{textAlign:"center"}]}>{selectedCourse.course1}</Text>
        <Text style={[styles.description,{textAlign:"center"}]}>{selectedCourse.course2}</Text>
        <Text style={[styles.description,{textAlign:"center"}]}>{selectedCourse.course3}</Text>
        <Text style={styles.mainHeader}>{selectedCourse.price} SEK</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("Course")}
          >
            <Text style={styles.buttonText}> Back </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  cardImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  mainContainer: {
    paddingHorizontal: 30,
  },
  courseContainer: {
    padding: 15,
    backgroundColor: "rgba(255, 255, 255, 0.90)",
    textAlign: "center",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 20,
  },
  mainHeader: {
    fontSize: 22,
    color: "#344055",
    textTransform: "uppercase",
    paddingBottom: 10,
    textAlign: "center",
    fontFamily: "Nunito_700Bold",
  },
  description: {
    textAlign: "left",
    fontFamily: "WorkSans_400Regular",
    paddingBottom: 15,
    lineHeight: 20,
    fontSize: 16,
    color: "#7d7d7d",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonStyle: {
    backgroundColor: "#000",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#eee",
    fontFamily: "WorkSans_400Regular",
    textTransform: "capitalize",
  },
});

export default CourseDetails;
