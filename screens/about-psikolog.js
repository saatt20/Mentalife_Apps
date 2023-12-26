import React from "react";
import { Heading, Box, Image, ScrollView, Button } from "native-base";
import { Header } from "../components";
import { useNavigation } from "@react-navigation/native";

const AboutPsikolog = ({ route }) => {
  const navigation = useNavigation();
  const params = route.params?.item; 
  
  return (
    <>
      <Header title={"About"} withBack={true} />
      <ScrollView>
        <Image source={{ uri: params.image }} w={"full"} h={"80"} mt={2} alt="Image" />
        <Box p={4} borderBottomColor={"#28AADC"} bg={"#28AADC"} mt={5} rounded={10} borderBottomWidth={1} mx={5}>
          <Heading color={"white"} fontSize={"xl"}>{params.title}</Heading>
          <Box>
            <Heading fontSize={"md"} color={"white"} mt={1}>
              {params.job}
            </Heading>
            <Heading fontSize={"md"} color={"white"}>
              {params.keahlian}
            </Heading>
          </Box>
          <Heading bold fontSize={"lg"} mt={6} color={"white"}>
            {params.harga}
          </Heading>
        </Box>

        <Box p={4} bg={"#28AADC"} mt={3} rounded={10} mx={5}>
          <Heading color={"white"} fontSize={"sm"}>
            {params.content}
          </Heading>
        </Box>

        <Button
          onPress={() => navigation.navigate("Pembayaran", { item: params })} // Perhatikan penggunaan params
          alignSelf="flex-end"
          borderRadius="full"
          w={"150"}
          h={"12"}
          mr={"5"}
          mt={"7"}
          bg={"#28AADC"}
        >
          Pembayaran
        </Button>
        <Box p={4}></Box>
      </ScrollView>
    </>
  );
};

export default AboutPsikolog;
