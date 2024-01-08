import React from "react";
import { Heading, Image, Text, Box, ScrollView, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
import databerita from "../databerita";

const Article = () => {
  const navigation = useNavigation();

  const renderNewsItem = (item) => {
    return (
      <TouchableOpacity
        key={item.id}  // Add a unique key here
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Berita Detail", { item: item })}
      >
        <Box
          alignSelf={"center"}
          w={"100%"}
          mt={2}
          p={3}
          borderBottomColor={"coolGray.600"}
          borderBottomWidth={0.5}
          flexDirection="row"
          flex={1}
          bg={"#C4E9F5"}
        >
          <Box flex={1} mr={5}>
            <Image
              size="xl"
              borderRadius="xl"
              source={{ uri: item.image }}
              alt="Image Data"
              role="img"
            />
          </Box>
          <Box flex={2} mt={1}>
            <Text fontSize={"md"}>{item.date}</Text>
            <Heading lineHeight={"md"} fontSize={"lg"}>
              {item.title}
            </Heading>
          </Box>
        </Box>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Header title={"Article Mentalife"} withBack={true} />

      <ScrollView>
        <Box alignSelf={"flex-start"} ml={3} mt={2} w={"90%"}>
          <Text fontSize={"23"} fontWeight={"semibold"}>
            Jelajahi Article Mentalife
          </Text>
        </Box>

        <Box alignSelf={"flex-start"} ml={3} mt={2} w={"95%"}>
          <Text fontSize={"14"} fontWeight={"normal"}>
            Kumpulan tips kesehatan, informasi penyakit, dan kesehatan yang
            lengkap dan terpercaya di Article Mentalife
          </Text>
        </Box>

        <Box py={3} bg={"#C4E9F5"} mt={5}>
          <Text bold fontSize={20} ml={6}>
            Berita yang sedang hangat
          </Text>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {[
              {
                id: "1",
                image:
                  "https://www.shutterstock.com/image-vector/newspaper-breaking-news-scraps-pages-600nw-2195536169.jpg",
                title: "Pentingnya Mental Health",
                description:
                  "Banyaknya generasi muda yang mulai mengalami depresi",
              },
              {
                id: "2",
                image:
                  "https://www.shutterstock.com/image-vector/newspaper-breaking-news-scraps-pages-600nw-2195536169.jpg",
                title: "Tekanan Pekerjaan",
                description: "Pentingnya kesehatan mental untuk pegawai",
              },
              {
                id: "3",
                image:
                  "https://www.shutterstock.com/image-vector/newspaper-breaking-news-scraps-pages-600nw-2195536169.jpg",
                title: "Lingkungan kerja yang Toxic",
                description:
                  "Belum tentu ketika anda bekerja mendapatkan lingkungan kerja yang menyenangkan",
              },
            ].map((newsItem) => (
              <Box key={newsItem.id} w={"48"} mr={"4"} mt={4}>
                <Image
                  source={{ uri: newsItem.image }}
                  alignSelf={"center"}
                  size={"xl"}
                  alt="Image Data"
                  mb={"2"}
                  borderRadius={10}
                  w={"90%"}
                />
                <Heading
                  fontSize={"15"}
                  lineHeight={"xs"}
                  ellipsizeMode="tail"
                  numberOfLines={1}
                  bold
                  alignSelf={"center"}
                >
                  {newsItem.title}
                </Heading>
                <Text fontSize={"xs"} color="black" ml={3} numberOfLines={1}>
                  {newsItem.description}
                </Text>
              </Box>
            ))}
          </ScrollView>
        </Box>

        <Box alignSelf={"flex-start"} ml={3} mt={6} w={"90%"}>
          <Text fontSize={"23"} fontWeight={"semibold"}>
            Daftar Article Mentalife
          </Text>
        </Box>

        {databerita.map((item) => renderNewsItem(item))}
      </ScrollView>
    </>
  );
};

export default Article;
