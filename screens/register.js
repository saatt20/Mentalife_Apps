import { Text, Button, Box, VStack, Input } from "native-base";
import { registerUser } from "./auth/AuthAction";
import React, {useState} from "react";

const Register = (navigation) => {
    const [name, setName] = useState('');
    const [nomorhp, setNomorhp] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formError, setFormError] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
    const onRegister = async () => {
        if (name && email && nomorhp && password) {
            const data = {
                name: name,
                email: email,
                nomorhp: nomorhp,
                password: password,
                status: "user",
            };

            console.log(data);

            try {
                const user = await registerUser(data, password);
                navigation.replace("Tabs");
            } catch (error) {
                console.log("Error", error.message);
                setFormError(error.message);
                toggleModal();
            }
        } else {
            setFormError("Harap isi form dengan lengkap dan benar");
            toggleModal();
        }
    };
    const Tabs = () => {
        navigation.navigate("Tabs");
      };


    return (
        <>
            <Text>HALO INI REGISTER</Text>

            <Box my={"20"}>
                <VStack>
                    <Input placeholder="Masukan Nama" value={name} onChangeText={(name) => setName(name)} >

                    </Input>
                    <Input my={10} placeholder="Masukan No Telepon" value={nomorhp} onChangeText={(nomorhp) => setNomorhp(nomorhp)}>

                    </Input>

                    <Input placeholder="Masukan Email" value={email} onChangeText={(email) => setEmail(email)}>

                    </Input>
                    <Input
                        placeholder="Masukan Password"
                        mt={10} value={password} onChangeText={(password) => setPassword(password)} secureTextEntry>

                    </Input>
                    <Button onPress={() => {
                        onRegister();
                        }}>

                    </Button>
                </VStack>
            </Box>
        </>
    );
}

export default Register;