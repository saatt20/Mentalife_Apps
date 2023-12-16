import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, HStack, Image, Heading, Pressable } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = React.memo(({ title, withBack = false }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView edges={['right', 'left', 'top']}>
      <StatusBar barStyle="auto" backgroundColor="white" />
      <Box bg="white" p={2}>
        <HStack justifyContent="space-between" alignContent="center">
          <HStack alignContent="center">
            {!withBack ? (
              <Image
                source={require('../assets/logo.png')}
                w={12}
                h={12}
                alt="Logo"
                mr={3}
              />
            ) : (
              <Pressable
                activeOpacity={0.5}
                onPress={() => navigation.goBack()}
              >
                <Box mr={3}>
                  <Ionicons name="arrow-back-outline" size={32} color="black" />
                </Box>
              </Pressable>
            )}
            <Heading color="black">{title}</Heading>
          </HStack>
          <Image
            source={require('../assets/logosearch.png')}
            w={7}
            h={7}
            alt="Search Icon"
            alignSelf="flex-end"
          />
        </HStack>
      </Box>
    </SafeAreaView>
  );
});

export default Header;
