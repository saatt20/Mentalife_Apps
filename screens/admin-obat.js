import React, { useState } from "react";
import { Heading, Image, Box, Input, Pressable, Button, HStack, Text, ScrollView, Modal } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/header";
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { addObat } from "../src/actions/AuthAction";


const AdminObat = () => {
  const navigation = useNavigation();
  const [namaObat, setNamaObat] = useState("");
  const [keteranganObat, setKeterangaObat] = useState("");
  const [hargaObat, setHargaObat] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleSaveChange = () => {
    addObat(namaObat, keteranganObat, hargaObat);
    toggleModal(); // Show the modal after saving the data
  };

  const handleModalOK = () => {
    toggleModal(); // Hide the modal
    navigation.navigate("AdminHome"); // Replace "Admin" with the name of your admin screen
  };

  return (
    <>
      <Header title={"AdminObat"} withBack={true} />
      <ScrollView>
        <SafeAreaView>
          <Box flex={1} borderWidth={0} borderColor={"black"} >

            {/* IMAGE */}
            <Box mt={0} padding={0} w="100%">
              <Image source={require("../assets/medicine.png")} blurRadius={2} borderRadius={0} resizeMode="cover" h={180} w="100%" alt="imgg" />
            </Box>
            <Box borderColor={"black"} borderWidth={0} alignItems={"flex-start"} ml={4}
              h={32} w={32} mt={-20} borderRadius={"full"} shadow={7} >
              <Image
                source={require("../assets/admin1.jpg")} h={32} w={32} mt={-6} borderRadius={"full"} borderColor={"light.100"} alt="imgg" />
            </Box>

            {/* NAMA OBAT */}
            <Box alignSelf="center" w={"100%"} bgColor={"white"} h={110} mt={-2}
              mb={0} borderBottomWidth={1} borderBottomColor={"gray.500"} borderRadius={0}>
              <Box alignContent={"center"} w={"100%"} h={"100%"} mt={0}>
                <Heading ml={6} mt={2} fontSize={27}  bold color={"gray.500"}>
                  Nama Obat :
                </Heading>
                <Input borderColor={"white"} ml={5} mt={4} w={"85%"}
                  color={"blue.400"} placeholder="Nama Obat" fontSize={23} value={namaObat} onChangeText={(namaObat) => setNamaObat(namaObat)} />
              </Box>
            </Box>

            {/* KETERANGAN OBAT */}
            <Box alignSelf="center" w={"100%"} bgColor={"white"} h={110} mt={3}
              mb={0} borderBottomWidth={1} borderBottomColor={"gray.500"} borderRadius={0}>
              <Box alignContent={"center"} w={"100%"} h={"100%"} mt={0}>
                <Heading ml={6} mt={2} fontSize={27} bold fontWeight={"thin"} color={"gray.500"}>
                  Keterangan Obat :
                </Heading>
                <Input borderColor={"white"} ml={5} mt={4} w={"85%"}
                  color={"blue.400"} placeholder="Keterangan Obat" value={keteranganObat} fontSize={23} onChangeText={(keteranganObat) => setKeterangaObat(keteranganObat)} />
              </Box>
            </Box>

            {/* HARGA OBAT */}
            <Box alignSelf="center" w={"100%"} bgColor={"white"} h={110} mt={3}
              mb={0} borderBottomWidth={1} borderBottomColor={"gray.500"} borderRadius={0}>
              <Box alignContent={"center"} w={"100%"} h={"100%"} mt={0}>
                <Heading ml={6} mt={2} fontSize={27} bold fontWeight={"thin"} color={"gray.500"}>
                  Harga Obat :
                </Heading>
                <Input borderColor={"white"} ml={5} mt={4} w={"85%"}
                  color={"blue.400"} placeholder="Harga Obat" value={hargaObat} fontSize={23} onChangeText={(hargaObat) => setHargaObat(hargaObat)} />
              </Box>
            </Box>

            {/* tombol save */}
            <Button
              alignSelf={"flex-end"}
              p={4}
              mt={5}
              mr={5}
              w={"48"}
              bgColor={"blue.400"}
              onPress={handleSaveChange}
            >
              <Heading size="md" color={"black"}>
                Save Change
              </Heading>
            </Button>

          </Box>
        </SafeAreaView>
      </ScrollView>

      <Modal isOpen={isModalVisible} onClose={toggleModal}>
        <Box p={4} bgColor={"white"} borderRadius={8}>
          <Text fontSize={20}>Obat Berhasil Ditambahkan</Text>
          <Button mt={4} onPress={handleModalOK}>
            <Text fontSize={18} color={"white"} bold >
              OK
            </Text>
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default AdminObat;
