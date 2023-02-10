import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "./src/screens/About";
import Contact from "./src/screens/Contact";
import Course from "./src/screens/Course";
import Home from "./src/screens/Home";
import UserData from "./src/screens/UserData";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => <Home {...props} channelName={"Education's World"} />}
        </Stack.Screen>
        <Stack.Screen name="About" component={About}/>
        <Stack.Screen name="Course" component={Course}/>
        <Stack.Screen name="Contact" component={Contact}/>
        <Stack.Screen name="User" component={UserData}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
