import { useCallback, useState } from "react";
import { Alert, ImageBackground, StyleSheet, Text, View } from "react-native";
import TextInputPrimary from "../../components/Input/InputPrimary";
import ButtonPrimary from "../../components/ButtonPrimary";
import { BACKGROUND_IMAGE } from "../../utils/image";
import ActionView from "../../components/ActionView";
import RouterKey from "../../utils/Routerkey";

function LoginScreen({ navigation }) {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (!(phone.trim() && password.trim())) {
            Alert.alert("Thông báo", "Bạn phải điền đầy đủ thông tin!");
        } else {
            navigation.navigate(RouterKey.MAIN_SCREEN);
        }
    };

    const handleClickRegister = () => {
        navigation.navigate(RouterKey.REGISTER_SCREEN);
    };

    const handleChangePhoneInput = useCallback(
        (val) => {
            // console.log(val);
            setPhone(val);
        },
        [phone]
    );

    const handleChangePassInput = useCallback(
        (val) => {
            // console.log(`[pass] -> ${val}`);
            setPassword(val);
        },
        [password]
    );

    return (
        <>
            <View style={styles.titleView}>
                <Text style={styles.title}>T&T HEALTHCARE</Text>
            </View>
            <ImageBackground
                source={BACKGROUND_IMAGE}
                resizeMode="cover"
                style={styles.container}
            >
                <TextInputPrimary
                    isPhone={true}
                    placeholder="Số điện thoại"
                    value={phone}
                    onChangeText={handleChangePhoneInput}
                />
                <TextInputPrimary
                    isPass={true}
                    placeholder="Mật khẩu"
                    value={password}
                    onChangeText={handleChangePassInput}
                />

                <ButtonPrimary title="Đăng nhập" handle={handleLogin} />
                <ActionView
                    title="Đăng ký ngay"
                    isLogin
                    handle={handleClickRegister}
                />
            </ImageBackground>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    titleView: {
        width: "100%",
        position: "absolute",
        top: 64,
        left: "25%",
        zIndex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        color: "#fff",
    },
});

export default LoginScreen;
