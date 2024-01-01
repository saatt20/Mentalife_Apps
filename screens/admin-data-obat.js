import React, { useState, useEffect } from "react";
import { Heading, Image, Text, FlatList, Box, Button, Modal, VStack, NativeBaseProvider } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { Header } from "../components";
import { SafeAreaView } from "react-native-safe-area-context";

const AdminDataObat = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const database = getDatabase();
    const obatRef = ref(database, 'obat');

    const unsubscribe = onValue(obatRef, (snapshot) => {
      const obatData = snapshot.val();
      if (obatData) {
        const obatArray = Object.values(obatData);
        setData(obatArray);
      }
    });

    return () => unsubscribe();
  }, []);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const deleteObat = () => {
    const key = selectedItem.id;
    const database = getDatabase();
    const obatRef = ref(database, `obat/${key}`);
    
    remove(obatRef)
      .then(() => {
        console.log("Data deleted successfully");
        closeModal(); // Close the modal after successful deletion
        navigation.navigate("AdminHome");
      })
      .catch((error) => {
        console.error("Error deleting data: ", error);
      });
  };

  const renderItem = ({ item }) => {
    return (
      <SafeAreaView>
        <Box
          activeOpacity={0.5}
        //   onPress={() => navigation.navigate("about-psikolog", { item: item })}
        >
          <Box
            bg="#28AADC"
            w="90%"
            mt={5}
            rounded={20}
            flexDirection="row"
            alignSelf="center"
            shadow={4}
          >
            <Box flex={1}>
              <Image
                source={{ uri: item.imageURL }}
                w="32"
                h="32"
                m={5}
                paddingLeft={10}
                borderRadius={20}
                alignSelf="flex-start"
                alignContent="center"
                alt="Image"
              />
            </Box>
            <Box flex={1} alignSelf="center">
              <Heading lineHeight="md" fontSize="md" color="white" ml={-4}>
                {item.namaObat}
              </Heading>
              <Text fontSize="sm" color="white" ml={-4}>
                {item.keteranganObat}
              </Text>
              <Text fontSize="sm" color="white" ml={-4}>
                {item.hargaObat}
              </Text>
               <Button
              onPress={() => openModal(item)} // Open the modal for verification
              alignSelf="center"
              bgColor="white"
              borderRadius="full"
              w="100"
              h="10"
              mt="2"
            >
              <Text bold>Hapus</Text>
            </Button>
          </Box>
        </Box>
        </Box>
      </SafeAreaView>
    );
  };

  return (
    <NativeBaseProvider>
      <>
        <Header title="Obat Mentalife" withBack={true} />
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) =>
            item && item.id ? item.id.toString() : Math.random().toString()
          }
          showsVerticalScrollIndicator={false}
        />

        {/* Modal for verification */}
        <Modal isOpen={isModalVisible} onClose={closeModal}>
          <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>Verifikasi Hapus</Modal.Header>
            <Modal.Body>
              <Text>Anda yakin ingin menghapus data ini?</Text>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button onPress={closeModal}>Batal</Button>
                <Button onPress={deleteObat}>Hapus</Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </>
    </NativeBaseProvider>
  );
};

export default AdminDataObat;