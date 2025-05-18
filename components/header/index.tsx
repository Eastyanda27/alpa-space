import { gs } from "@/assets/styles/globalstyle";
import { useNavigation } from "@react-navigation/native";
import React, { JSX } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface HeaderProps {
    title: string;
    subTitle: string;
    showRightButton?: boolean;
}

function Header({title, subTitle, showRightButton}: HeaderProps): JSX.Element {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => {
                navigation.goBack();
            }}>
                <Image source={require('@/assets/icons/arrow_left_black.png')}/>
            </TouchableOpacity>
            <View>
                <Text style={[gs.textCenter, gs.textBlack, gs.h1]}>{title}</Text>
                <Text style={[gs.textCenter, gs.textGrey]}>{subTitle}</Text>
            </View>
            <TouchableOpacity>
                {showRightButton && (
                    <Image source={require('@/assets/icons/menu.png')}/>
                )}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        ...gs.flexRow,
        ...gs.itemsCenter,
        ...gs.justifyBetween,
        padding: 24,
        marginTop: 30,
    },
    button: {
        width: 24,
        height: 24,
    }
})

export default Header;