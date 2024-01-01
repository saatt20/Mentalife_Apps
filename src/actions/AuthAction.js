import { Alert } from "react-native";
import FIREBASE from "../../config/FIREBASE";
import { clearStorage, storeData } from "../utils/localStorage";

export const registerUser = async (data, password) => {
  try {
    const success = await FIREBASE.auth().createUserWithEmailAndPassword(data.email, password);

    const dataBaru = {
      ...data,
      uid: success.user.uid,
    };

    await FIREBASE.database()
      .ref("users/" + success.user.uid)
      .set(dataBaru);

    // Local storage (Async Storage)
    storeData("user", dataBaru);
    return dataBaru;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const success = await FIREBASE.auth().signInWithEmailAndPassword(email, password);
    const resDB = await FIREBASE.database()
      .ref("/users/" + success.user.uid)
      .once("value");

    if (resDB.val()) {
      // Local storage (Async Storage)
      await storeData("user", resDB.val());
      return resDB.val();
    } else {
      throw new Error("User data not found");
    }
  } catch (error) {
    throw error;
  }
};

export const logoutUser = () => {
  FIREBASE.auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      clearStorage();
    })
    .catch((error) => {
      // An error happened.
      Alert.alert("Error", error.message);
    });
};


export const updateUserData = async (uid, updatedData) => {
  try {
    const userRef = FIREBASE.database().ref(`users/${uid}`);
    const snapshot = await userRef.once("value");
    const existingUserData = snapshot.val();

    if (existingUserData) {
      const updatedUser = {
        ...existingUserData,
        ...updatedData,
      };

      await userRef.update(updatedUser);
      console.log("User data updated successfully");
    } else {
      console.log("User data not found");
    }
  } catch (error) {
    throw error;
  }
};


export const getObatData = () => {
  const obatRef = FIREBASE.database().ref("obat");

  obatRef.once("value")
    .then((snapshot) => {
      // The data is available in snapshot.val()
      const data = snapshot.val();
      console.log("Data retrieved successfully:", data);
      // You can update your React component state with the retrieved data here
    })
    .catch((error) => {
      console.error("Error retrieving data: ", error);
    });
};

// Function to edit data in Firebase
export const editObat = (key, updatedData) => {
  const obatRef = FIREBASE.database().ref(`obat/${key}`);

  obatRef.update(updatedData)
    .then(() => {
      console.log("Data updated successfully");
    })
    .catch((error) => {
      console.error("Error updating data: ", error);
    });
};


