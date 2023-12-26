import { Heading, Center, Text, Box, Image, ScrollView, Button, HStack } from "native-base";
import { Header } from "../components";
import { useNavigation } from "@react-navigation/native";


const Konsultasi = ({ route }) => {
  const navigation = useNavigation();
  const params = route.params?.item;
  return (
    <>
      <Header title={"Konsultasi"} withBack="true"/>
      <ScrollView>
      <Box
          p={"4"}
          bgColor={"#D9E8ED"}
          borderBottomColor={"#D9E8ED"}
          borderBottomWidth={1}
          flexDirection="row"
          flex={1}
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
            <Heading lineHeight={"lg"} fontSize={"lg"}>
            {params.title}
            </Heading>
            <Text fontSize={"md"} mt={1}>{params.job}</Text>
          </Box>
      </Box>
      <Box  p={"2"} mt={"5"} bg={"#D9E8ED"} >
      <Button onPress={() => console.log("Fitur Chat")}>Chat</Button>
      </Box>
      <Box  p={"2"} mt={"3"} bg={"#D9E8ED"} >
      <Button onPress={() => console.log("Fitur Telpon")}>Voice Call</Button>
      </Box>
      <Box  p={"2"} mt={"3"} bg={"#D9E8ED"} >
      <Button onPress={() => console.log("Fitur VideoCall")}>Video Call</Button>
      </Box>
        </ScrollView>
    </>
  );
};

export default Konsultasi;
