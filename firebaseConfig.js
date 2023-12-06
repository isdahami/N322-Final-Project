import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp, getApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUd8Bfh0GHYJAKPJoWt0PZXCIajcjToAU",
  authDomain: "n322-mobileapp-ih.firebaseapp.com",
  projectId: "n322-mobileapp-ih",
  storageBucket: "n322-mobileapp-ih.appspot.com",
  messagingSenderId: "506690685161",
  appId: "1:506690685161:web:4a32795d88548d29210878",
  measurementId: "G-QWFW8L5GDK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const auth = getAuth(app);
export { app, auth, getApp, getAuth };
