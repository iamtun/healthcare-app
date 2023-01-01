import { useCallback, useRef, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import TextInputPrimary from "../../components/InputPrimary";
import { Button } from "@ant-design/react-native";
import { BACKGROUND_IMAGE } from "../../utils/image";

function RegisterScreen({ navigation }) {
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const handleLogin = () => {
        console.log(phone, name, password, confirmPass);
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
        navigation.navigate("LoginScreen");
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

                <Button
                    type="primary"
                    style={styles.btnLogin}
                    onPress={handleLogin}
                >
                    Đăng nhập
                </Button>
                <View style={styles.actionView}>
                    <Text style={styles.action} onPress={handleBackLogin}>
                        Quay lại
                    </Text>
                </View>
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
    btnLogin: {
        width: "90%",
    },
    actionView: {
        marginTop: 16,
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    action: {
        fontSize: 16,
        textDecorationLine: "underline",
        color: "#0019FE",
    },
});

export default RegisterScreen;
