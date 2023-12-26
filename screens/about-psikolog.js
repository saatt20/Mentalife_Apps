import { Heading, Center, Text, Box, Image, ScrollView, Button, HStack } from "native-base";
import { Header } from "../components";
import { useNavigation } from "@react-navigation/native";


const AboutPsikolog = ({ route }) => {
  const navigation = useNavigation();
 const params = route.params.item; 
 
//  <Box bg={"#28AADC"} w={'90%'} mt={5} rounded={20}
//  flexDirection="row"
//  alignSelf="center"
//  shadow="4"
// >
//  <Box flex={1}>
//    <Image
//      source={{ uri: item.image }}
//      w="32"
//      h="32"
//      m="5"
//      paddingLeft={10}
//      borderRadius={20}
//      alignSelf={"flex-start"}
//      alignContent={"center"}
//      alt="Image Data"
//    />
//  </Box>
  return (
    <>
      <Header title={"About"} withBack="true"/>
      <ScrollView >
        <Image source={{uri: params.image}} w={"full"} h={"80"} alt="Image"/>
        <Box  p={"4"} borderBottomColor={"#28AADC"} bg={"#28AADC"} mt={2} rounded={20} borderBottomWidth={1}>
          <Heading color={"white"}>{params.title}</Heading>
          <Text color={"white"}>{params.job}</Text>
          <Text color={"white"}>{params.keahlian}</Text>
          <Text bold fontSize={"lg"} color={"white"}>
            {params.harga}
          </Text>
        </Box>
        {/* <Box p={"4"} bg={"#28AADC"} mt={2} rounded={20}>
          <Text bold fontSize={"17"} color={"white"}>
            {params.harga}
          </Text>
        </Box> */}
        <Box  p={"4"}  bg={"#28AADC"} mt={2} rounded={20}>
          <Text color={"white"} fontSize={"sm"}>
            {params.content}
          </Text>
        </Box>
        <Button onPress={() => navigation.navigate( "Pembayaran" )}  alignSelf="flex-end"  borderRadius="full" 
         w={"150"} h={"12"} mr={"5"} mt={"7"} bg={"#28AADC"}>Pembayaran</Button>
        <Box  p={"4"}>
        
        </Box>
        </ScrollView>
    </>
  );
};

export default AboutPsikolog;