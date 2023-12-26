import React, { useState } from "react";
import { Heading, Image, Box, Input, Pressable, Button, HStack, Text, ScrollView, Modal } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/header";
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { addDokterPsikolog } from "../src/actions/AuthAction";
import { InputUploadView } from '../components/imagepicker';
import { handlePostPhoto } from "../api/userhandle";

const AdminPsikolog = () => {
  const navigation = useNavigation();
  const [namaDokter, setNamaDokter] = useState("");
  const [keteranganDokter, setKeteranganDokter] = useState("");
  // const [fotoDokter, setFotoDokter] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleSaveChange = () => {
    addDokterPsikolog(namaDokter, keteranganDokter, form);
    toggleModal(); // Show the modal after saving the data
  };

  const handleModalOK = () => {
    toggleModal(); // Hide the modal
    navigation.navigate("AdminHome"); // Replace "Admin" with the name of your admin screen
  };

  const [form, setForm] = useState({
    sending: false,
    text: '',
    file: null,
  });

  const handleSubmit = async () => {
    // form state
    setForm({
      ...form,
      sending: true,
    });

    // submit form
    try {
      const responsePost = await handlePostPhoto(form);
      if (responsePost.data.status === 1) {
        setForm({
          ...form,
          sending: false,
          file: null,
          text: '',
        });
      } else {
        alert('some error');
        setForm({
          ...form,
          sending: false,
        });
      }
    } catch (error) {
      console.error('Error posting photo:', error);
      setForm({
        ...form,
        sending: false,
      });
    }
  };

  return (
    <>
      <Header title={"AdminPsikolog"} withBack={true} />
      <ScrollView>
        <SafeAreaView>
          <Box flex={1} borderWidth={0} borderColor={"black"} >

            {/* IMAGE */}
            <Box mt={0} padding={0} w="100%">
              <Image source={require("../assets/RS.jpeg")} blurRadius={2} borderRadius={0} resizeMode="cover" h="100%" w="100%" alt="imgg" />
            </Box>
            <Box borderColor={"black"} borderWidth={0} alignItems={"flex-start"} ml={4}
              h={32} w={32} mt={-20} borderRadius={"full"} shadow={7} >
              <Image
                source={require("../assets/logo.png")} h={32} w={32} mt={-6} borderRadius={"full"} borderColor={"light.100"} alt="imgg" />
            </Box>

            {/* NAMA DOKTOR */}
            <Box alignSelf="center" w={"100%"} bgColor={"white"} h={110} mt={-2}
              mb={0} borderBottomWidth={1} borderBottomColor={"gray.500"} borderRadius={0}>
              <Box alignContent={"center"} w={"100%"} h={"100%"} mt={0}>
                <Heading ml={6} mt={2} fontSize={27} fontWeight={"thin"} color={"gray.500"}>
                  Nama Dokter
                </Heading>
                <Input borderColor={"white"} ml={5} mt={4} w={"85%"}
                  color={"blue.400"} fontWeight={"semibold"} placeholder="Nama Dokter" fontSize={23} value={namaDokter} onChangeText={(namaDokter) => setNamaDokter(namaDokter)} />
              </Box>
            </Box>

            {/* KETERANGAN DOKTOR */}
            <Box alignSelf="center" w={"100%"} bgColor={"white"} h={110} mt={3}
              mb={0} borderBottomWidth={1} borderBottomColor={"gray.500"} borderRadius={0}>
              <Box alignContent={"center"} w={"100%"} h={"100%"} mt={0}>
                <Heading ml={6} mt={2} fontSize={27} fontWeight={"thin"} color={"gray.500"}>
                  Keterangan Dokter
                </Heading>
                <Input borderColor={"white"} ml={5} mt={4} w={"85%"}
                  color={"blue.400"} fontWeight={"semibold"} placeholder="Keterangan Dokter" value={keteranganDokter} fontSize={23} onChangeText={(keteranganDokter) => setKeteranganDokter(keteranganDokter)} />
              </Box>
            </Box>

            {/* foto */}
              {/* <Box>
                {form.file && (
                  <Image
                    source={{ uri: form.file.uri }}
                    alt="Selected Image"
                    ml={10}
                    mt={2}
                    size="lg"
                  />
                )}
                <InputUploadView
                  form={form}
                  setForm={setForm}
                  name="file"
                  onSubmit={handleSubmit}
                />
              </Box> */}
            

            {/* tombol save */}
            <Box alignSelf="center" w={"100%"} bgColor={"white"} 
              mb={0} borderBottomWidth={1} borderBottomColor={"gray.500"} borderRadius={0}>
            <Button
              alignSelf={"flex-end"}
              p={5}
              w={"48"}
              title="Back"
              color={"amber.200"}
              bgColor={"white"}
              onPress={handleSaveChange}
            >
              <Heading size="md" color={"black"}>
                Save Change
              </Heading>
            </Button>
            </Box>

          </Box>
        </SafeAreaView>
      </ScrollView>

      <Modal isOpen={isModalVisible} onClose={toggleModal}>
        <Box p={4} bgColor={"white"} borderRadius={8}>
          <Text fontSize={20}>Dokter Berhasil Ditambahkan</Text>
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

export default AdminPsikolog;
