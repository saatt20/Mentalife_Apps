import { Heading, Text, Image, ScrollView, Box, FlatList, View, Center, HStack } from "native-base";
import { Header } from "../components";
import databerita from "../databerita";
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from "react-native";

const Berita = () => {
    const renderItem = ({ item }) => {
        return (
            <ScrollView>
            <SafeAreaView>
                <View mt={6}>
                    <Heading p={2} ml="5" textAlign={"start"}>{item.title}</Heading> 
                    <Box>
                    <HStack space={2} ml={2} mt={"5"}>
                    <Ionicons name="person-circle-outline" size={40} color="black" />
                    <Text ml={0} alignSelf={"center"} fontSize={"15"} font color={"#28AADC"} fontWeight={"bold"} >
                        Amira Fatimatuzzahra
                    </Text>
                    <Text alignSelf={"end"} mt={2} color={"#28AADC"} fontSize={"15"} fontWeight={"normal"} ml={20} >
                        5 hours ago
                    </Text>
                    </HStack>
                    </Box>
                    <Image mt={5} source={{ uri: item.image }} alt="News 1" alignSelf={"center"} w={"90%"} h={56} />
                    <Text w={"95%"} alignSelf={"center"} alignContent={"center"} mt={2} p={2}>{item.content}  </Text>
                </View>
            </SafeAreaView>
            </ScrollView>
        );
    };

    return (
        <>
            <Header  withBack={true} />
            <FlatList
                data={databerita}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()} // Convert id to string
            />
        </>
    );
};

export default Berita;