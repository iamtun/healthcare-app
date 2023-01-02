import { useEffect, useState } from "react";
import { Text } from "react-native";
import { Asset } from 'expo-asset';
import RootStackNavigator from "./routers/RootNavigator";

//load image before run app
function useImages(images) {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        Asset.loadAsync(images)
            .then(() => setLoaded(true))
            .catch(setError);
    }, []);

    return [loaded, error];
}

export default function App() {
    const [imagesLoaded] = useImages([
        require("./assets/background/bg-login.png"),
    ]);

    if(!imagesLoaded) {
      return <Text>Loading ...</Text>;
    }

    return <RootStackNavigator />;
}
