import { Heading, ScrollView, VStack, Stack, Divider, Box, Image} from "native-base";
import { Header } from "../components";
import { TouchableOpacity } from "react-native";

const Lainnya = ({navigation}) => {
  return (
    <ScrollView>
      <Header title={"Lainnya"}/> 
      <VStack p={4} w={"max"} h={"max"} >
        <Stack direction="column">

        {/* home */}
        <TouchableOpacity onPress={() => navigation.navigate("Langganan")} >
          <Box
              p={"4"}
              flexDirection="row"
              flex={1} 
              bg={"#C4E9F5"}
              borderRadius={25}
              mt={5}
              >
              
              <Box flex={2} mr={"5"}>
              <Image
                  size="lg"
                  source={{ uri:"https://cdn-icons-png.flaticon.com/512/2851/2851439.png" }}
                  alt="iamge00"
                  role="img"
                  ml={5}
                />
              </Box>

              <Box flex={3}>
                <Heading mt={8} lineHeight={"lg"} fontSize={"2xl"}color={"#28AADC"}>
                  Berlangganan 
                </Heading>
              </Box>
            </Box>
          </TouchableOpacity>
        
        {/* Pengaturan */}
        <TouchableOpacity onPress={() => navigation.navigate("Pengaturan")}>
        <Box
          p={"4"}
          flexDirection="row"
          flex={1}
          bg={"#C4E9F5"}
          borderRadius={25}
          mt={6}
        >
            <Box flex={2} mr={"5"}>
            <Image
                size="lg"
                source={{ uri:"https://cdn-icons-png.flaticon.com/512/900/900834.png" }}
                alt="Image Data5"
                role="img"
                ml={5}
              />
            </Box>
            <Box flex={3} >
              <Heading mt={8} fontSize={"2xl"} color={"#28AADC"}>
                Pengaturan
              </Heading>
            </Box>
          </Box>
        </TouchableOpacity>

        {/* Bantuan */}
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Bantuan")}>
        <Box
          p={"4"}
          flexDirection="row"
          flex={1}
          bg={"#C4E9F5"}
          borderRadius={25}
          mt={6}
        >
            <Box flex={2} mr={"5"}>
            <Image
                size="lg"
                borderRadius="xl"
                source={{ uri:"https://static-00.iconduck.com/assets.00/call-center-icon-2048x2047-wn5rj4y3.png" }}
                alt="Image Data7"
                role="img"
                ml={5}
              />
            </Box>
            <Box flex={3} >
              <Heading mt={10} fontSize={"2xl"} color={"#28AADC"}>
                Pusat Bantuan
              </Heading>
            </Box>
          </Box>
        </TouchableOpacity>

        </Stack>
        <Divider />
      </VStack>
    </ScrollView>
  );
};

export default Lainnya;