// AddObat.js

import FIREBASE from "../../config/FIREBASE";

const addDataObat = async (dataObat) => {
  try {
    // Check if Firebase is initialized
    if (!FIREBASE.apps.length) {
      throw new Error("Firebase is not initialized");
    }

    const { image, namaObat, keteranganObat, hargaObat, ...otherAddObat } =
      dataObat;

    // Convert the image URI to a Blob
    const response = await fetch(image);
    const blob = await response.blob();

    // Upload image to Firebase Storage with the obat name as the file name
    const storageRef = FIREBASE.storage().ref();
    const imageRef = storageRef.child(`images/${namaObat}.jpg`);
    await imageRef.put(blob);

    // Get the download URL for the uploaded image
    const imageURL = await imageRef.getDownloadURL();

    // Include the image URL and namaObat in the obatData
    const dataObatWithImage = {
      ...otherAddObat,
      imageURL,
      namaObat,
      keteranganObat,
      hargaObat,
    };

    // Assuming you have a reference to the 'obat' node in your database
    const obatRef = FIREBASE.database().ref("obat");

    // Push the obat data to the 'obat' node
    await obatRef.push(dataObatWithImage);

    console.log("Obat data added successfully");
  } catch (error) {
    console.error("Error adding obat data:", error);
    throw error;
  }
};

export default addDataObat;
