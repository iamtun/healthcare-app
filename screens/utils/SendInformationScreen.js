// import { Button } from "@ant-design/react-native";
import { useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import ActionView from "../../components/ActionView";
import ButtonPrimary from "../../components/ButtonPrimary";
import DateTimePicker from "../../components/Input/DateTimePicker";
import DropDownPicker from "../../components/Input/DropdownPicker";
import TextInputPrimary from "../../components/Input/InputPrimary";
import { BACKGROUND_IMAGE } from "../../utils/image";

function SendInformationScreen({ navigation, route }) {
    const { name } = route.params;
    const [gender, setGender] = useState("Nam");
    const [date, setDate] = useState(new Date());

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
                    isName={true}
                    placeholder="Họ và tên"
                    value={name}
                    editable={false}
                    selectTextOnFocus={false}
                />

                <DropDownPicker gender={gender} setGender={setGender} />

                <DateTimePicker date={date} setDate={setDate} />

                <TextInputPrimary
                    isAddress={true}
                    placeholder="Địa chỉ"
                    value={name}
                    editable={false}
                    selectTextOnFocus={false}
                />

                <TextInputPrimary
                    isInsurance={true}
                    placeholder="Số bảo hiểm"
                    value={name}
                    editable={false}
                    selectTextOnFocus={false}
                />

                <ButtonPrimary title="Cập nhật thông tin" />

                <ActionView title="Quay lại" />
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
export default SendInformationScreen;
