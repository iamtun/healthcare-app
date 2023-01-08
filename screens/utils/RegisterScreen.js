import { useCallback, useRef, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import TextInputPrimary from "../../components/Input/InputPrimary";
import ButtonPrimary from "../../components/ButtonPrimary";
import { BACKGROUND_IMAGE } from "../../utils/image";
import ActionView from "../../components/ActionView";
import RouterKey from "../../utils/Routerkey";

function RegisterScreen({ navigation }) {
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const handleRegister = () => {
        console.log(phone, name, password, confirmPass);
        navigation.navigate("SendInformationScreen", { name });
    };

    const handleChangePhoneInput = useCallback(
        (val) => {
            setPhone(val);
        },
        [phone]
    );

    const handleChangeNameInput = useCallback(
        (val) => {
            setName(val);
        },
        [name]
    );

    const handleChangePassInput = useCallback(
        (val) => {
            setPassword(val);
        },
        [password]
    );

    const handleChangeConfirmPassInput = useCallback(
        (val) => {
            setConfirmPass(val);
        },
        [confirmPass]
    );

    const handleBackLogin = () => {
        navigation.navigate(RouterKey.LOGIN_SCREEN);
    };

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
                    isName={true}
                    placeholder="Họ và tên"
                    value={name}
                    onChangeText={handleChangeNameInput}
                />

                <TextInputPrimary
                    isPass={true}
                    placeholder="Mật khẩu"
                    value={password}
                    onChangeText={handleChangePassInput}
                />

                <TextInputPrimary
                    isPass={true}
                    placeholder="Nhập lại mật khẩu"
                    value={confirmPass}
                    onChangeText={handleChangeConfirmPassInput}
                />

                <ButtonPrimary title="Đăng ký" handle={handleRegister} />
                <ActionView title="Quay lại" handle={handleBackLogin} />
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

export default RegisterScreen;
