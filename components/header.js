import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Box, HStack, Image, Heading, Pressable } from "native-base";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title, withBack = false }) => {
  const trueGray900 = "#171717";
  const navigation = useNavigation();
  return (
    <SafeAreaView edges={['right', 'left', 'top']}>
      <StatusBar barStyle="auto" backgroundColor={"white"} />
      <Box bg={"white"} p={"2"}>
        <HStack justifyContent="space-between" alignItems="center">
          <HStack alignItems="center">
            {!withBack ? (
              <>
                <Image
                source={require("../assets/logo.png")}
                w="12"
                h="12"
                alt="Logo"
                mr={"3"}
                />
                
              </>
            ) : (
              <Pressable
                activeOpacity={0.5}
                onPress={() => navigation.goBack()}
              >
                <Box mr={"3"}>
                  <Ionicons name="arrow-back-outline" size={32} color="black" />
                </Box>
              </Pressable>
            )}
            <Heading color={"black"}>{title}</Heading>
            
          </HStack>
          <Image
                source={require("../assets/logosearch.png")}
                w="7"
                h="7"
                alt="Search Icon"
                alignItems={"flex-end"}
                />
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

export default Header;