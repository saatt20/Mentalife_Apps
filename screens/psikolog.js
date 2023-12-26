import { Heading, Image, Text, FlatList, Button, Box, ScrollView, Pressable, HStack, Center} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
//datapsikolog//
import datapsikolog from "../datapsikolog";

const Psikolog = () => {
  const navigation = useNavigation();

  const renderitem = ({ item }) => {
    return (
      <Box
        activeOpacity={0.5}
        onPress={() => navigation.navigate("about-psikolog", { item: item })}
      >
        <Box bg={"#28AADC"} w={'90%'} mt={5} rounded={20}
          flexDirection="row"
          alignSelf="center"
          shadow="4"
        >
          <Box flex={1}>
            <Image
              source={{ uri: item.image }}
              w="32"
              h="32"
              m="5"
              paddingLeft={10}
              borderRadius={20}
              alignSelf={"flex-start"}
              alignContent={"center"}
              alt="Image Data"
            />
          </Box>
          <Box flex={1} alignSelf={"center"}>
            <Heading lineHeight={"md"} fontSize={"md"} color={"white"} >
              {item.title}
            </Heading>
            {/* <Text fontSize={"sm"}>{item.job}</Text> */}
            <Text fontSize={"sm"} color={"white"}>{item.keahlian}</Text>
            {/* <Text fontSize={"sm"}>{item.harga}</Text> */}
            <Button onPress={() => navigation.navigate("about-psikolog", {item:item} )}  alignSelf="center" bgColor="white" borderRadius="full"  w={"100"} h={"10"} mt={"7"}><Text bold>Konsultasi</Text></Button>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <>
      <Header title={"Psikolog"} />
      <FlatList
        data={datapsikolog}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default Psikolog;