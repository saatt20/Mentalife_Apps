import React, { useState, useEffect } from "react";
import { Heading, Image, Text, FlatList, Box, Button, Modal } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { getDatabase, ref, onValue } from "firebase/database";
import { Header } from "../components";

const Obat = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
  const [totalPayment, setTotalPayment] = useState(0);

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

  const renderCartItem = ({ item }) => {
    return (
      <Box bg="#28AADC" w="90%" mt={2} rounded={20} flexDirection="row" alignSelf="center" shadow={4}>
        <Text color="white">{item.namaObat}</Text>
        <Text color="white" ml="auto">{item.hargaObat}</Text>
      </Box>
    );
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);

    // Check if item.hargaObat is defined and a string
    if (item.hargaObat && typeof item.hargaObat === 'string') {
      const priceString = item.hargaObat.replace(/[^\d.]/g, ''); // Remove non-numeric characters from the price
      const itemPrice = parseFloat(priceString);
      
      // Check if the parsed price is a valid number
      if (!isNaN(itemPrice)) {
        setTotalPayment((prevTotal) => prevTotal + itemPrice);
      }
    }

    setCartVisible(true);
  };

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  const renderItem = ({ item }) => {
    return (
      <Box
        activeOpacity={0.5}
        onPress={() => navigation.navigate("about-psikolog", { item: item })}
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
            <Heading lineHeight="md" fontSize="md" color={"white"} ml={-4}>
              {item.namaObat}
            </Heading>
            <Text fontSize="sm" color={"white"} ml={-4}>{item.keteranganObat}</Text>
            <Text fontSize="sm" color={"white"} ml={-4}>{item.hargaObat}</Text>
            <Button
              onPress={() => addToCart(item)}
              ml={"24"}
              
              bgColor="white"
              borderRadius="full"
              w="50"
              h="10"
              mt="7"
            >
              <Text bold>+</Text>
            </Button>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <>
      <Header title={"Obat Mentalife"} withBack="true" />
      <Button onPress={toggleCart} alignSelf="flex-end" m="2">
        <Text bold>Keranjang</Text>
      </Button>
      {cartVisible && (
        <Modal isOpen={cartVisible} onClose={toggleCart} size="lg">
          <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>Keranjang Pembelian</Modal.Header>
            <Modal.Body>
              {cartItems.map((cartItem) => (
                <Box key={cartItem.id} bg="" w="90%" mt={2} rounded={20} flexDirection="row" alignSelf="center" shadow={4}>
                  <Text color="black">{cartItem.namaObat}</Text>
                  <Text color="black" ml="auto">{cartItem.hargaObat}</Text>
                </Box>
              ))}
              <Text fontSize="xl" mt="3" mb="2">
                Total Pembayaran: {totalPayment}
              </Text>
              <Button onPress={toggleCart} bgColor="green.500">
                <Text color="white">Beli</Text>
              </Button>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      )}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => (item && item.id ? item.id.toString() : Math.random().toString())}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default Obat