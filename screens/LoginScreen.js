import { useRef, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import TextInputPrimary from "../components/InputPrimary";
import { Button } from "@ant-design/react-native";

function LoginScreen() {
    const image = require("../assets/background/bg-login.png");

    const handleLogin = () => {
        console.info("login!");
    };

    return (
        <>
            <View style={styles.titleView}>
                <Text style={styles.title}>T&T HEALTHCARE</Text>
            </View>
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.container}
            >
                <TextInputPrimary isPhone={true} placeholder="Số điện thoại"/>
                <TextInputPrimary isPass={true} placeholder="Mật khẩu"/>
                <Button
                    type="primary"
                    style={styles.btnLogin}
                    onPress={handleLogin}
                >
                    Đăng nhập
                </Button>
                <View style={styles.actionView}>
                    <Text style={styles.action}>Đăng ký ngay</Text>
                    <Text style={styles.action}>Quên mật khẩu</Text>
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
        width: '100%',
        position: "absolute",
        top: 64,
        left: '25%',
        zIndex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: "#fff",
    },
    btnLogin: {
        width: "90%",
    },
    actionView: {
        marginTop: 16,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    action: {
        fontSize: 16,
        textDecorationLine: 'underline',
        color: '#0019FE'
    }
});

export default LoginScreen;
