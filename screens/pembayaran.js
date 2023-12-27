import React, { useState, useEffect } from "react";
import { Box, Text, Image, HStack, Button, Heading, VStack, Modal, Radio } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
import { getData } from "../src/utils/localStorage";

const Pembayaran = ({ route }) => {
  const navigation = useNavigation();
  const params = route.params.item;

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const [Pembayaran, setPembayaran] = useState(null);

  const getUserData = () => {
    getData("user").then((res) => {
      const data = res;
      if (data) {
        console.log("isi data", data);
        setPembayaran(data);
      } else {
        // navigation.replace('Login');
      }
    });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getUserData();
    });

    return () => {
      unsubscribe();
    };
  }, [navigation]);


  return (
    <>
      <Header title={"Pembayaran"} withBack={true} />
      <Box bgColor={"#D9E8ED"}>
        <Text fontSize={20} p={3} mt={1} color={'black'}>Konsultasi Untuk</Text>
        <Text fontWeight={'bold'} ml={3} mb={3} mt={-3} fontSize={20} mcolor={'white'}>{Pembayaran?.name}</Text>
      </Box>

      <Box
          p={"4"}
          bg="#28AADC"
          borderBottomColor={"#D9E8ED"}
          borderBottomWidth={1}
          flexDirection="row"
        >
          <Box flex={1}>
            <Image
              source={{ uri: params.image }}
              w="150"
              h="40"
              borderRadius={10}
              alt="image"
            />
          </Box>
          <Box flex={1} alignSelf={"center"} mr={5}>
            <Heading lineHeight={"lg"} fontSize={"lg"} color={"white"}>
            {params.title}
            </Heading>
            <Text fontSize={"md"} mt={1} color={"white"}>{params.job}</Text>
          </Box>
      </Box>

      <Box mt={5} bg="#28AADC" p={4} mx={5} borderRadius={10}>
        <HStack>
          <Text color="white" textAlign="left" mt={2} bold fontSize="md">
            Sesi Konsultasi
          </Text>
          <Text color="white" textAlign="left" mt={2} bold ml={155} fontSize="md">
            30 Menit
          </Text>
        </HStack>
        <HStack mt={2}>
          <Heading color="white" textAlign="left" fontSize="md">
            Total Biaya
          </Heading>
          <Text color="white" textAlign="left" bold ml={180} fontSize="md">
            {params.harga}
          </Text>
        </HStack>

      </Box>

      <Box p={2} mt={10} mx={5} bg="#D9E8ED">
        <Button onPress={() => setShowModal(true)} bg="#28AADC">
          Bayar Sekarang
        </Button>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
          <Modal.Content maxWidth={350}>
            <Modal.CloseButton />
            <Modal.Header>Ringkasan Pembayaran</Modal.Header>
            <Modal.Body>
              <VStack space={3}>
                <HStack alignItems="center" justifyContent="space-between">
                  <Text fontWeight="medium">Biaya Konsultasi</Text>
                  <Text color="blueGray.400" bold>{params.harga}</Text>
                </HStack>
                <HStack alignItems="center" justifyContent="space-between">
                  <Text fontWeight="medium">Total Bayar</Text>
                  <Text color="green.500"bold >{params.harga}</Text>
                </HStack>
              </VStack>
            </Modal.Body>
            <Modal.Footer>
              <Button
                flex={1}
                onPress={() => {
                  setShowModal2(true);
                }}
              >
                Lanjutkan
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
        <Modal isOpen={showModal2} size="lg" onClose={() => setShowModal2(false)}>
          <Modal.Content maxWidth={350}>
            <Modal.CloseButton />
            <Modal.Header>Pilih Pembayaran</Modal.Header>
            <Modal.Body>
              <Radio.Group name="payment" size="sm">
                <VStack space={3}>
                  <Radio
                    alignItems="flex-start"
                    _text={{
                      mt: "-1",
                      ml: "2",
                      fontSize: "sm",
                    }}
                    value="payment1"
                  >
                    M-Banking
                  </Radio>
                  <Radio
                    alignItems="flex-start"
                    _text={{
                      mt: "-1",
                      ml: "2",
                      fontSize: "sm",
                    }}
                    value="payment2"
                  >
                    Qris
                  </Radio>
                  <Radio
                    alignItems="flex-start"
                    _text={{
                      mt: "-1",
                      ml: "2",
                      fontSize: "sm",
                    }}
                    value="payment3"
                  >
                    LinkAja
                  </Radio>
                </VStack>
              </Radio.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button
                flex={1}
                onPress={() => {
                  setShowModal(false);
                  setShowModal2(false);
                  alert("Pembayaran Berhasil");
                  navigation.navigate("Konsultasi", { item: params });
                }}
              >
                Bayar
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Box>
      {/* <Box p={16} mt={72} bg="#D9E8ED">
        <Button onPress={() => navigation.navigate("Konsultasi")} bg="#28AADC">
          Konsultasi Sekarang
        </Button>
      </Box> */}
    </>
  );
};

export default Pembayaran;
