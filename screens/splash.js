import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { getData } from '../src/utils/localStorage';

const Splash = ({ navigation }) => {
  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        const userData = await getData('user');
        if (userData) {
          // Jika user data ada, periksa status admin
          const isAdmin = userData.status === 'admin';

          if (isAdmin) {
            navigation.replace('AdminTabs');
          } else {
            navigation.replace('Tabs');
          }
        } else {
          navigation.replace('Login');
        }
      } catch (error) {
        console.error('Error checking user status:', error);
        navigation.replace('Login');
      }
    };

    // Periksa status user saat komponen di-mount
    checkUserStatus();
  }, [navigation]);

  return (
    <View style={styles.pages}>
      {/* Mungkin tambahkan elemen atau indikator loading jika diperlukan */}
    </View>
  );
};

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Splash;