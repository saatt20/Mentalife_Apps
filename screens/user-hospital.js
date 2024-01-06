import { getHospital } from "../src/actions/AuthAction";
import { Text, FlatList, Box, Button, Modal, ScrollView, View, Heading, } from "native-base";
import React, {useState, useEffect} from "react";
import { Header } from "../components";
import { SafeAreaView } from "react-native-safe-area-context";

const Hospital = () => {
  const [hospitals, setHospitals] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
        try {
            const hospitals = await getHospital();
            console.log('Hospitals Data:', hospitals);
            setHospitals(hospitals);
        } catch (error) {
            console.error('Error fetching hospitals data:', error);
        }
    };

    fetchData();
}, []);

  useEffect(() => {
    const fetchData = async () => {
      const { success, data, error } = await getHospital();

      if (success) {
        setHospitals(data);
      } else {
        console.error("Error fetching hospitals data:", error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <SafeAreaView>
        <ScrollView>
          <Box>
            <Box
              bg="#28AADC"
              w="88%"
              mt={5}
              rounded={20}
              flexDirection="row"
              alignSelf="center"
            >
              <Box mx={5} my={5} flex={1}>
                <Heading lineHeight="lg" fontSize="lg" color="white">
                  {item.namaRs}
                </Heading>
                <Text fontSize="md" color="white" mt={1} numberOfLines={1}>
                  Alamat: {item.alamat}
                </Text>
                <Text fontSize="md" color="white" numberOfLines={1}>
                  No. Telepon: {item.telepon}
                </Text>
                <Text fontSize="md" color="white" numberOfLines={1}>
                  Provinsi : {item.provinceName}
                </Text>
                <Button alignSelf={"flex-end"} w={20} mt={1} bgColor={"white"}>
                  <Text bold>Detail</Text>
                </Button>
                </Box>
            </Box>
          </Box>
        </ScrollView>
      </SafeAreaView>
    );
  };

return (
    <>
        <Header title={"Kembali"} withBack={true} />
        <Text mt={5} style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Daftar Rumah Sakit</Text>
       <FlatList
                data={hospitals}
                renderItem={renderItem}
                keyExtractor={(item) => item.hospitalId}
                showsVerticalScrollIndicator={false}
            />
    </>
);
};

export default Hospital;