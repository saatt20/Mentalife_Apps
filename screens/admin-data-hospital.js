import React, { useState, useEffect } from 'react';
import { getHospital, deleteHospital, editHospital } from '../src/actions/AuthAction';
import { Header } from '../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, FlatList, Box, Button, Modal, ScrollView, Heading, Input, HStack } from "native-base";

const AdminDataHospital = () => {
    const [hospitalsData, setHospitalsData] = useState([]);
    const [selectedHospital, setSelectedHospital] = useState(null);
    const [isEditModalVisible, setEditModalVisible] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const hospitalsData = await getHospital();
                console.log('Hospitals Data:', hospitalsData);
                setHospitalsData(hospitalsData);
            } catch (error) {
                console.error('Error fetching hospitals data:', error);
            }
        };
    
        fetchData();
    }, []);

    const handleDeleteHospital = async (hospitalId) => {
        try {
            await deleteHospital(hospitalId);
            // Refresh data setelah menghapus rumah sakit
            const updatedHospitals = await getHospital();
            setHospitalsData(updatedHospitals);
        } catch (error) {
            console.error('Error deleting hospital:', error);
            Alert.alert('Error', 'Gagal menghapus rumah sakit');
        }
    };

    const handleEditHospital = (hospital) => {
        setSelectedHospital(hospital);
        setEditModalVisible(true);
    };

    const handleUpdateHospital = async (updatedData) => {
        try {
            await editHospital(selectedHospital.hospitalId, updatedData);
            // Refresh data setelah mengedit rumah sakit
            const updatedHospitals = await getHospital();
            setHospitalsData(updatedHospitals);
            setEditModalVisible(false);
        } catch (error) {
            console.error('Error updating hospital:', error);
            Alert.alert('Error', 'Gagal mengupdate rumah sakit');
        }
    };

    const renderEditModal = () => {
        if (!selectedHospital) {
            return null;
        }

        return (
            <Modal isOpen={isEditModalVisible} onClose={() => setEditModalVisible(false)}>
                <Modal.Content>
                    <Modal.CloseButton />
                    <Modal.Header>Edit Data Rumah Sakit</Modal.Header>
                    <Modal.Body>
                        <Input value={selectedHospital.namaRs} onChangeText={(text) => setSelectedHospital({ ...selectedHospital, namaRs: text })} placeholder="Nama Rumah Sakit" />
                        <Input value={selectedHospital.alamat} onChangeText={(text) => setSelectedHospital({ ...selectedHospital, alamat: text })} placeholder="Alamat" />
                        <Input value={selectedHospital.telepon} onChangeText={(text) => setSelectedHospital({ ...selectedHospital, telepon: text })} placeholder="No Telepon" keyboardType='numeric'/>
                        <Button onPress={() => handleUpdateHospital(selectedHospital)}>Perbarui Data</Button>
                    </Modal.Body>
                </Modal.Content>
            </Modal>
        );
    };

    const renderItem = ({ item }) => {
        return (
            <SafeAreaView>
                <ScrollView>
                    <Box>
                        <Box
                            bg="#28AADC"
                            w="88%"
                            rounded={20}
                            flexDirection="row"
                            alignSelf="center"
                            mb={5}
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
                                    Provinsi: {item.provinceName}
                                </Text>
                                <HStack space={2} mt={2} alignSelf={'flex-end'}>
                                <Button
                                    onPress={() => handleEditHospital(item)}
                                     w={20} mt={1} bgColor={"white"}
                                    borderRadius={'full'}
                                >
                                    <Text bold>Edit</Text>
                                </Button>
                                <Button
                                    onPress={() => handleDeleteHospital(item.hospitalId)} // Open the modal for verification
                                     w={20} mt={1} bgColor={"white"}
                                    borderRadius={'full'}
                                >
                                    <Text bold>Hapus</Text>
                                </Button>
                                </HStack>
                        
                            </Box>
                        </Box>
                    </Box>
                </ScrollView>
            </SafeAreaView>
        );
    };

    return (
        <>
            <Header title={"Input Data RS"} withBack={true} />
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 16 }}>Daftar Rumah Sakit</Text>
            <FlatList
                data={hospitalsData}
                renderItem={renderItem}
                keyExtractor={(item) => item.hospitalId}
                showsVerticalScrollIndicator={false}
            />
            <Box h={50}/>
            {renderEditModal()}
        </>
    );
};

export default AdminDataHospital;