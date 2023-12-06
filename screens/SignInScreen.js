import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Alert,
  Image,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export default function HomeScreen({ navigation }) {
  const [signInEmailAddress, setSignInEmailAddress] = useState("");
  const [signInPW, setSignInPW] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPW, setUserPW] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user != null) {
        console.log("User Logged In", user);
      } else {
        console.log("No user is logged in");
      }
    });

    return () => unsubscribe(); // Unsubscribe when the component unmounts
  }, []);

  const showAlert = (title, message) => {
    Alert.alert(
      title,
      message,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };

  const signInUser = async () => {
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, signInEmailAddress, signInPW)
        .then((userCredential) => {
          console.log("user signed in");
          setSignInEmailAddress("");
          setSignInPW("");
          setLoading(false);
          showAlert("Account Logged In", "You have logged in!");
        })
        .catch((error) => {
          setLoading(false);
          showAlert("Sign In Failed", error.message);
          console.log("error ", error.message);
        });
    } catch (error) {
      console.log("try error ", error.message);
    }
  };

  const createUser = async () => {
    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, userEmail, userPW)
        .then((userCredential) => {
          console.log("user created");
          setUserFirstName("");
          setUserLastName("");
          setUserEmail("");
          setUserPW("");
          setLoading(false);

          showAlert(
            "Account Created",
            "Your account has been successfully created."
          );
        })
        .catch((error) => {
          setLoading(false);
          showAlert("Account Creation Failed", error.message);
          console.log("error ", error.message);
        });
    } catch (error) {
      console.log("try error ", error.message);
    }
  };

  const logoutUser = async () => {
    try {
      await signOut(auth);
      showAlert("Logged Out", "You have been successfully logged out.");
    } catch (error) {
      console.log("Logout Error: ", error.message);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/gc-logo.png")}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.smallHeader}>Sign In</Text>
          <TextInput
            style={styles.input}
            label="User Name"
            onChangeText={setSignInEmailAddress}
            value={signInEmailAddress}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            label="User Password"
            onChangeText={setSignInPW}
            value={signInPW}
          />
          <Button
            style={styles.btn}
            title="Sign In"
            onPress={signInUser}
            mode="contained"
          >
            Sign In
          </Button>
        </View>
        <View>
          <ActivityIndicator size="large" color="#000" animating={loading} />
        </View>
        <View>
          <Text style={styles.smallHeader}>Create Account</Text>
          <TextInput
            style={styles.input}
            label="First Name"
            onChangeText={setUserFirstName}
            value={userFirstName}
          />
          <TextInput
            style={styles.input}
            label="Last Name"
            onChangeText={setUserLastName}
            value={userLastName}
          />
          <TextInput
            style={styles.input}
            label="User Email"
            onChangeText={setUserEmail}
            value={userEmail}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            label="User Password"
            onChangeText={setUserPW}
            value={userPW}
          />
          <Button
            style={styles.btn}
            title="Create Account"
            onPress={createUser}
            mode="contained"
          >
            Create Account
          </Button>
        </View>
        <View>
          <Text style={styles.smallHeader}>User Logout</Text>
          <Button
            style={styles.btn}
            title="Logout"
            onPress={logoutUser}
            mode="contained"
          >
            Logout
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#FAF9F6",
  },
  header: {
    fontWeight: "bold",
    fontSize: 24,
  },
  smallHeader: {
    fontWeight: "bold",
    fontSize: 18,
  },
  input: {
    marginTop: 10,
  },
  btn: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#000",
  },
});
