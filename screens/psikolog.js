import { Heading, Image, Text, FlatList, Button, Box, ScrollView, Pressable } from "native-base";
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
        <Box
          p={"4"}
          borderBottomColor={"coolGray.300"}
          borderBottomWidth={1}
          flexDirection="row"
          flex={1}
        >
          <Box flex={1}>
            <Image
              source={{ uri: item.image }}
              w="150"
              h="40"
              borderRadius={10}
              alt="Image Data"
            />
          </Box>
          <Box flex={1} alignSelf={"center"}>
            <Heading lineHeight={"md"} fontSize={"md"}>
              {item.title}
            </Heading>
            {/* <Text fontSize={"sm"}>{item.job}</Text> */}
            <Text fontSize={"sm"}>{item.keahlian}</Text>
            {/* <Text fontSize={"sm"}>{item.harga}</Text> */}
            <Button onPress={() => navigation.navigate("about-psikolog", {item:item} )}  alignSelf="flex-end"  borderRadius="full"  w={"100"} h={"10"} mt={"7"}>Konsultasi</Button>
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