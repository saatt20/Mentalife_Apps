import { Text, Button, Heading } from "native-base"
import FIREBASE from '../config/FIREBASE';

const AdminProfile = () => {
    // KODE UNTUK MELAKUKAN LOG OUT
  const onSubmit = (profile) => {
    if (profile) {
      FIREBASE.auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          clearStorage();
          navigation.replace("Login");
        })
        .catch((error) => {
          // An error happened.
          alert(error);
        });
    } else {
      navigation.replace("Login");
    }
  };
  
    return (
        <>
        <Text>
            HALO INI ADMIN Profile
        </Text>
        <Button onPress={() => onSubmit(profile)} bg={"#38bdf8"} mt={7} h={50}>
        <Heading color={"white"}>Keluar</Heading>
      </Button>
      </>
    )
}

export default AdminProfile;