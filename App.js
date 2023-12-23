import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Home,
  Psikolog,
  Profile,
  AboutPsikolog,
  Pembayaran,
  Konsultasi,
  Login,
  Register,
  AdminHome,
  AdminProfile,
  Lainnya,
  Pengaturan,
  Splash,
} from "./screens"
import Bantuan from "./screens/bantuan";
import Berita from "./screens/berita";
import Hospital from "./screens/hospital";
import AdminBerita from "./screens/admin-berita" 
import AdminPsikolog from "./screens/admin-psikolog"
import AdminObat from "./screens/admin-obat"
import Edit from "./screens/edit-profile";
// import Pembayaran from "./screens/pembayaran";

// Navigator Declaration
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const insets = useSafeAreaInsets();

const noHead = { headerShown: false };

const Tabs = () => {
  return (
  
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home";
              break;

            case "Psikolog":
              iconName = "git-network-outline";
              break;

            case "Profile":
              iconName = "person-circle-outline";
              break;

              case "Lainnya":
                iconName = "menu-outline";
                break;

          }
          return (
            <Ionicons
              name={iconName}
              size={30}
              color={focused ? "black" : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: -2 },
        tabBarStyle: {
          height: 85,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          margin: 20,
          borderTopWidth: 0,
          position: 'absolute',
          backgroundColor: '#C4E9F5',
          // paddingTop: insets.center,
          // paddingBottom: insets.center, 
          padding: 5,
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.50,
          shadowRadius: 10.0,

        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text color={focused ? "black" : color} mb={2}>
              {children}
            </Text>
          );
        },
      })}
    >
    
      <Tab.Screen name="Home" component={Home} options={noHead} />
      <Tab.Screen name="Psikolog" component={Psikolog} options={noHead} />
      <Tab.Screen name="Profile" component={Profile} options={noHead} />
      <Tab.Screen name="Lainnya" component={Lainnya} options={noHead} />
    
    </Tab.Navigator>

  );
};

const TabsAdmin = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "AdminHome":
              iconName = "home";
              break;

            case "AdminProfile":
              iconName = "person-circle-outline";
              break;

          }
          return (
            <Ionicons
              name={iconName}
              size={30}
              color={focused ? "black" : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          height: 80,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          margin: 20,
          borderTopWidth: 0,
          position: 'absolute',
          backgroundColor: '#C4E9F5',
          // paddingTop: insets.center,
          // paddingBottom: insets.center, 
          padding: 5,
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.50,
          shadowRadius: 10.0,

        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text color={focused ? "black" : color} mb={2}>
              {children}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="AdminHome" component={AdminHome} options={noHead} />
      <Tab.Screen name="AdminProfile" component={AdminProfile} options={noHead} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
          <Stack.Screen name="AdminTabs" component={TabsAdmin} options={noHead} />
          <Stack.Screen name="Splash" component={Splash} options={noHead} />
          <Stack.Screen name="about-psikolog" component={AboutPsikolog} options={noHead} />
          <Stack.Screen name="Pembayaran" component={Pembayaran} options={noHead} />
          <Stack.Screen name="Konsultasi" component={Konsultasi} options={noHead} />
          <Stack.Screen name="Login" component={Login} options={noHead} />
          <Stack.Screen name="Register" component={Register} options={noHead} />
          <Stack.Screen name="Bantuan" component={Bantuan} options={noHead} />
          <Stack.Screen name="Pengaturan" component={Pengaturan} options={noHead} />
          <Stack.Screen name="Berita" component={Berita} options={noHead} />
          <Stack.Screen name="Hospital" component={Hospital} options={noHead} />
          <Stack.Screen name="admin-berita" component={AdminBerita} options={noHead}/>
          <Stack.Screen name="admin-psikolog" component={AdminPsikolog} options={noHead}/>
          <Stack.Screen name="admin-obat" component={AdminObat} options={noHead}/>
          <Stack.Screen name="edit-profile" component={Edit} options={noHead}/>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;