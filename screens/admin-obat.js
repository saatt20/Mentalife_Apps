import React, { useState, useEffect } from "react";
import { Heading, Image, Box, Input, Pressable, Button, HStack, Text, ScrollView, Modal } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/header";
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { addObat } from "../src/actions/AuthAction";
import * as ImagePicker from 'expo-image-picker';
import addDataObat from "../src/actions/AddObat";


const AdminObat = () => {
  const navigation = useNavigation();
  const [namaObat, setNamaObat] = useState("");
  const [keteranganObat, setKeterangaObat] = useState("");
  const [hargaObat, setHargaObat] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(null);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleSaveChange = () => {
    addDataObat(namaObat, keteranganObat, hargaObat, image);
    handleAddObat(); // Call handleAddObat to process the data
    toggleModal(); // Show the modal after saving the data
  };

  const handleModalOK = () => {
    toggleModal(); // Hide the modal
    navigation.navigate("AdminHome");
  };

  useEffect(() => {
    // Request permission to access the device's photo library
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    })();
  }, []);

  const pickImage = async () => {
    try {
      // Launch the image picker
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error picking image:", error);
    }
  };

  const handleAddObat = async () => {
    try {
      // Validate input data (add more validation as needed)
      if (!namaObat || !image || !hargaObat || !keteranganObat) {
        alert("Please fill in all fields");
        return;
      }

      const dataObat = {
        namaObat,
        image,
        hargaObat: parseInt(hargaObat, 10), // Convert harga to integer
        keteranganObat,
      };

      // Add obat data
      await addDataObat(dataObat);

      // Clear input fields after adding data
      setNamaObat("");
      setImage(null);
      setHargaObat("");
      setKeterangaObat("");

      alert("Data Obat added successfully");
    } catch (error) {
      console.error("Error adding data Obat:", error);
      // Handle the error here, e.g., display an error message

    }
  };

  return (
    <>
      <Box bgColor={"white"} h={20}>
        <Header title={"Admin Obat"} withBack={true} />
        <Button onPress={() => navigation.navigate("admin-data-obat")}
          alignSelf="flex-end"
          bgColor="info.500"
          borderRadius="full"
          w={"100"} h={"10"} mr={10}
          mt={-10}><Text bold color={"white"}>Data Obat</Text>
        </Button>
      </Box>

      <ScrollView>
        <SafeAreaView>
          <Box flex={1} p={3} borderWidth={1} borderRadius={50} borderColor={"black"} bgColor={"info.100"} mx={5} mt={5}>

            {/* GAMBAR OBAT */}
            <Box alignSelf="center" w={"100%"} h={120} 
              borderBottomWidth={1} borderBottomColor={"info.500"}>
              <Box alignContent={"center"} w={"100%"} h={"100%"} >
                <Heading ml={4} mt={2} fontSize={27} bold> Gambar Obat :</Heading>
                <Button backgroundColor="#28AADC" borderRadius={"full"} w={150} mt={3} alignSelf={"center"} onPress={pickImage}>
                  <Text fontWeight="bold" color="white" >Pilih Gambar</Text>
                </Button>
                {image && (
                  <Image
                    source={{ uri: image }}
                    alt="gambarwisata"
                    size="lg"
                    resizeMode="cover"
                  />
                )}
              </Box>
            </Box>


            {/* NAMA OBAT */}
            <Box alignSelf="center" w={"100%"} h={120} 
              mb={0} borderBottomWidth={1} borderBottomColor={"info.500"}>
              <Box alignContent={"center"} w={"100%"} h={"100%"}>
                <Heading ml={6} mt={2} fontSize={27} bold >
                  Nama Obat :
                </Heading>
                <Input borderColor={"white"} ml={5} mt={4} w={"85%"}  borderRadius={10}
                  bgColor={"white"} placeholder="Masukan Nama Obat" fontSize={23} value={namaObat} onChangeText={(namaObat) => setNamaObat(namaObat)} />
              </Box>
            </Box>

            {/* KETERANGAN OBAT */}
            <Box alignSelf="center" w={"100%"} h={120} 
              mb={0} borderBottomWidth={1} borderBottomColor={"info.500"}>
              <Box alignContent={"center"} w={"100%"} h={"100%"}>
                <Heading ml={6} mt={2} fontSize={27} bold>
                  Keterangan Obat :
                </Heading>
                <Input borderColor={"white"} ml={5} mt={4} w={"85%"} borderRadius={10}
                  bgColor={"white"} placeholder="Masukan Keterangan" value={keteranganObat} fontSize={23} onChangeText={(keteranganObat) => setKeterangaObat(keteranganObat)} />
              </Box>
            </Box>

            {/* HARGA OBAT */}
            <Box alignSelf="center" w={"100%"} h={120} >
              <Box alignContent={"center"} w={"100%"} h={"100%"}>
                <Heading ml={6} mt={2} fontSize={27} bold>
                  Harga Obat :
                </Heading>
                <Input borderColor={"white"} ml={5} mt={4} w={"85%"}  borderRadius={10}
                  bgColor={"white"} placeholder="Masukan Harga Obat" value={hargaObat} fontSize={23} onChangeText={(hargaObat) => setHargaObat(hargaObat)} />
              </Box>
            </Box>
          </Box>

          {/* tombol save */}
          <Button
              alignSelf={"flex-end"}
              p={4}
              mt={5}
              mr={5}
              w={"48"}
              backgroundColor="#28AADC"
              onPress={handleSaveChange}
            >
              <Heading size="md" color={"white"}>
                Save Change
              </Heading>
            </Button>
        </SafeAreaView>
      </ScrollView>

      <Modal isOpen={isModalVisible} onClose={toggleModal}>
        <Box p={4} bgColor={"white"} borderRadius={8}>
          <Text fontSize={20}>Obat Berhasil Ditambahkan</Text>
          <Button mt={4} onPress={handleModalOK}>
            <Text fontSize={18} color={"white"} bold>
              OK
            </Text>
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default AdminObat;
