import { Heading, Text, Image, ScrollView, FlatList, View } from "native-base";
import { Header } from "../components";
import databerita from "../databerita";

const Berita = () => {
    const renderItem = ({ item }) => {
        return (
            <ScrollView>
                <View>
                    <Image source={{ uri: item.image }} alt="News Image" w={"full"} h={48} />
                    <Heading p={4} textAlign={"center"}>{item.title}</Heading>
                    <Text p={2}>{item.date}</Text>
                    <Text p={2}>{item.content}</Text>
                </View>
            </ScrollView>
        );
    };

    return (
        <>
            <Header title="News" withBack={true} />
            <FlatList
                data={databerita}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()} // Convert id to string
            />
        </>
    );
};

export default Berita;