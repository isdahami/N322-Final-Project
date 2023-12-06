import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "./screens/HomeScreen";
import SignInScreen from "./screens/SignInScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={() => ({
            tabBarStyle: styles.tabBarStyle,
            tabBarLabelStyle: styles.tabLabelStyle,
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Icon name="ios-home" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Sign In"
            component={SignInScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Icon name="ios-person" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabBarStyle: {
    backgroundColor: "#fff",
  },
  tabLabelStyle: {
    fontSize: 18,
  },
});
