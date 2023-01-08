import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RouterKey from "../utils/Routerkey";
import { LoginScreen, RegisterScreen, SendInformationScreen } from "../screens/utils";
import MainScreen from "../screens/main/Main";


const Stack = createNativeStackNavigator();

function RootStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={RouterKey.LOGIN_SCREEN}
            >
                <Stack.Screen name={RouterKey.LOGIN_SCREEN} component={LoginScreen} />
                <Stack.Screen name={RouterKey.REGISTER_SCREEN} component={RegisterScreen} />
                <Stack.Screen name={RouterKey.SEND_IN4_SCREEN} component={SendInformationScreen} />
                <Stack.Screen name={RouterKey.MAIN_SCREEN} component={MainScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootStackNavigator;
