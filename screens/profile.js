import { Heading, Center } from "native-base";
import { Header } from "../components";

const Profile = () => {
  return (
    <>
      <Header title={"Home"} />
      <Center flex={1}>
        <Heading>Ini Satria</Heading>
      </Center>
    </>
  );
};

export default Profile;