import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/main/home";
import MessageScreen from "../screens/main/message";
import RouterKey from "../utils/Routerkey";

const Tab = createBottomTabNavigator();

function MainNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name={RouterKey.HOME_SCREEN} component={HomeScreen} />
            <Tab.Screen name={RouterKey.MESSAGE_SCREEN} component={MessageScreen} />
        </Tab.Navigator>
    );
}

export default MainNavigator;
