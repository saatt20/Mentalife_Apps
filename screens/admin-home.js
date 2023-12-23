import React, { useState, useEffect } from "react";
import { Box, Image,Text, FlatList, Heading, StatusBar, VStack, HStack, ScrollView, Pressable } from "native-base";
// import { CategoryTab, ListNote } from "../../components";
import { getNote } from "../src/actions/AuthAction";
import { SafeAreaView } from "react-native-safe-area-context";

const AdminHome = ({ navigation }) => {
  const [userNotes, setUserNotes] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const notes = await getNote();
      const categories = notes.map((note) => note.category);
      const uniqueCategories = Array.from(new Set(categories));
      setUserNotes(notes);
      setCategory(uniqueCategories);
    };

    const unsubscribe = navigation.addListener("focus", fetchData);

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const onCategoryPress = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };

  const filteredNotes = selectedCategory ? userNotes.filter((note) => note.category === selectedCategory) : userNotes;

  return (
    <ScrollView>
    <SafeAreaView>
    <StatusBar backgroundColor="" barStyle="dark-content" />
    <Box marginTop="0" bgColor={""}>
      <FlatList data={category} renderItem={({ item, index }) => <CategoryTab key={index} title={item} padding="$2" margin="$2" onPress={() => onCategoryPress(item)} />} horizontal={true} mb={"$4"} />
      <FlatList
        data={filteredNotes}
        renderItem={({ item }) => <ListNote key={item.noteId} judul={item.title} isi={item.content} tanggal="tanggal" status={item.status} category={item.category} noteId={item.noteId} />}
        keyExtractor={(item) => item.noteId}/>

    
    {/* <Box ml={2} alignSelf={"start"} bgColor={""} w={"90%"} h={"10"}
    mt={5}>
      <Heading fontWeight={"extrabold"} fontSize={"3xl"}>
        Welcome Back, Admin
      </Heading>
    
    </Box> */}

      <Box alignSelf={"center"} mt={-1} w={"100%"} h={"56"} borderRadius={""} borderWidth={""}>
      <Image
          source={{ uri: 'https://i.pinimg.com/564x/ff/8a/77/ff8a772640d60ce562eaca5f1cdb0c33.jpg'}} 
          alignSelf={"center"} mt={0} borderRadius={""} h={"100%"} resizeMode="cover" w= "full" opacity={50} />
      <Heading fontWeight={"extrabold"} fontSize={"3xl"} mt={-24} ml={2} shadow={4}>
        Welcome Back, Admin
      </Heading>
      </Box>

      <Box shadow={"4"} alignSelf={"center"} mt={0} w={"100%"} h={"32"} 
      bgColor={"white"} borderColor={""} borderRadius={""} borderWidth={""}>

      </Box>

      <Box shadow={"4"} alignSelf={"center"} mt={-179} w={"95%"} h={"40"} bgColor={"white"} 
      borderColor={"indigo.200"} borderRadius={5} borderWidth={"2"}>
        
      <VStack alignItems="start" ml={3} mt={2} space={"3"}>
          <Box>
          <Image h={10} w={10}
          source={{ uri: 'https://i.pinimg.com/564x/59/e1/d6/59e1d669dcb061341c8d512c8eaa9ef8.jpg'}}/>
          </Box>

          <Box>
          <Image h={12} w={12} ml={-1}
          source={{ uri: 'https://i.pinimg.com/564x/39/89/de/3989dedb6cfedb5f7adab991d1750ab0.jpg'}}/>
          </Box>

          <Box>
          <Image h={8} w={8} ml={1}
          source={{ uri: 'https://i.pinimg.com/564x/7e/21/b9/7e21b9661c85d61676143a8ae2c9a73b.jpg'}}/>
          </Box>
        </VStack>
        </Box>

        <Box>
        <VStack alignItems="start" ml={"112"} mt={-141} space={"6"}>
          <Box borderBottomWidth={"2"} borderBottomColor={"blue.200"}>
          <Text fontSize={18} fontWeight={"bold"}  >
            Muhammad Reinanto Saputra
          </Text>
          </Box>

          <Box borderBottomWidth={"2"} borderBottomColor={"blue.200"}>
          <Text fontSize={18} fontWeight={"normal"}  >
            Jl. Ketintang baru no. 45
          </Text>
          </Box>

          <Box borderBottomWidth={"2"} borderBottomColor={"blue.200"}>
          <Text fontSize={18} fontWeight={"hairline"}  >
            088654372132
          </Text>
          </Box>

        </VStack>
      </Box>
      
      
      <Box shadow={"4"} alignSelf={"center"} mt={7} w={"100%"} h={"32"} 
      bgColor={"white"} borderColor={""} borderRadius={""} borderWidth={""}>
        <Heading mt={2} fontWeight={"semibold"} fontSize={"2xl"} ml={5}>
          Berita
        </Heading>

        <Pressable onPress={() => { navigation.navigate('admin-berita'); }}>
        <Box alignSelf={"center"} mt={0} w={"90%"} h={"20"} 
          bgColor={"info.50"} borderColor={""} borderRadius={"5"} borderWidth={""}>
          <Image h={16} w={16} ml={1} mt={2}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2540/2540832.png'}}/>

        <Box ml={"24"} mt={"-16"}>
          <VStack space={""}>
          <Text color={""} fontWeight={"semibold"} fontSize={"xl"}>
            Berita MentaLife
          </Text>

          <Text color={"blue.600"} fontSize={12} fontWeight={"bold"}>
            Untuk mengelola berita yang ditampilkan pada pengguna 
          </Text>
          </VStack>
        </Box>

        </Box>
        </Pressable>

      </Box>

      <Box shadow={"4"} alignSelf={"center"} mt={2} w={"100%"} h={"32"} 
      bgColor={"white"} borderColor={""} borderRadius={""} borderWidth={""}>
        <Heading mt={2} fontWeight={"semibold"} fontSize={"2xl"} ml={5}>
          Psikolog
        </Heading>

        <Pressable onPress={() => { navigation.navigate('admin-psikolog'); }}>
        <Box alignSelf={"center"} mt={0} w={"90%"} h={"20"} 
          bgColor={"green.50"} borderColor={""} borderRadius={"5"} borderWidth={""}>
          <Image h={16} w={16} ml={1} mt={2}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3997/3997819.png'}}/>

        <Box ml={"24"} mt={"-16"}>
          <VStack space={""}>
          <Text color={""} fontWeight={"semibold"} fontSize={"xl"}>
            Psikolog MentaLife
          </Text>

          <Text color={"blue.600"} fontSize={12} fontWeight={"bold"}>
            Untuk mengelola psikolog yang ditampilkan pada pengguna 
          </Text>
          </VStack>
        </Box>
        </Box>
        </Pressable>
        
      </Box>
     
      <Box shadow={"4"} alignSelf={"center"} mt={2} w={"100%"} h={"32"} 
      bgColor={"white"} borderColor={""} borderRadius={""} borderWidth={""}>
        <Heading mt={2} fontWeight={"semibold"} fontSize={"2xl"} ml={5}>
          Resep & Obat
        </Heading>

        <Pressable onPress={() => { navigation.navigate('admin-obat'); }}>
        <Box alignSelf={"center"} mt={0} w={"90%"} h={"20"} 
          bgColor={"yellow.50"} borderColor={""} borderRadius={"5"} borderWidth={""}>
          <Image h={16} w={16} ml={1} mt={2}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/647/647237.png'}}/>

        <Box ml={"24"} mt={"-16"}>
          <VStack space={""}>
          <Text color={""} fontWeight={"semibold"} fontSize={"xl"}>
            Resep dan Obat MentaLife
          </Text>

          <Text color={"blue.600"} fontSize={12} fontWeight={"bold"}>
            Untuk mengelola resep dan obat yang ditampilkan pada pengguna 
          </Text>
          </VStack>
        </Box>

        </Box>
        </Pressable>
      </Box>

    </Box>
    </SafeAreaView>
    </ScrollView>

    
  );
};

export default AdminHome;