import React, { useState, useEffect } from "react";
import { Heading, Image, Text, FlatList, Box, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { getDatabase, ref, onValue } from "firebase/database";
import { Header } from "../components";

const Obat = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

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
              source={{ uri: 'https://cdn1-production-images-kly.akamaized.net/vv_AF_WvQDxjEnG4ngiSWOAra2w=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3394456/original/008890200_1614980718-myriam-zilles-KltoLK6Mk-g-unsplash.jpg' }}
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
            <Button onPress={() => {alert('Pembelian Berhasil')}}
              //   onPress={() => navigation.navigate("about-psikolog", { item: item })}
              alignSelf="center"
              bgColor="white"
              borderRadius="full"
              w="100"
              h="10"
              mt="7"
            >
              <Text bold>Beli</Text>
            </Button>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <>
      <Header title={"Obat Mentalife"} withBack="true" />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => (item && item.id ? item.id.toString() : Math.random().toString())}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default Obat;
