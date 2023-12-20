import { SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import { Avatar, Box, HStack, Text } from 'native-base';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Hi_profile = ({ title }) => {
    const navigation = useNavigation();
    
    return (
        <SafeAreaView>
            <StatusBar barStyle="light" backgroundColor={'#7F7F7F'} alignItems={'center'} />
            <Box mt={22} justifyContent={'center'} w={330} h={75}>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    backgroundColor: '#FAF9F9',
                    paddingHorizontal: 15,
                    paddingVertical: 15,
                    borderRadius: 10,
                    elevation: 2,
                }} onPress={() => navigation.navigate('Profile')}>
                    <HStack justifyContent={'center'} alignItems={'center'} space={3}>
                        <Avatar bg="#7dd3fc" source={{
                            uri: ""
                        }} size={35}>
                        </Avatar>
                        <Text style={{ color: '#1C1C1C', fontSize: 18, fontWeight: 600 }}>{title}</Text>
                    </HStack>
                </TouchableOpacity>
            </Box>
        </SafeAreaView >
    )
}

export default Hi_profile
