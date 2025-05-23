import { colors } from "@/assets/styles/colors";
import { gs } from "@/assets/styles/globalstyle";
import React, { JSX } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function BottomNav(): JSX.Element {
    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                <TouchableOpacity style={styles.activeTab}>
                    <Image source={require('@/assets/icons/discover.png')}/>
                    <Text style={styles.tabLabel}>Discover</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                    <Image source={require('@/assets/icons/messages.png')}/>
                </TouchableOpacity >
                <TouchableOpacity style={styles.tab}>
                    <Image source={require('@/assets/icons/payment.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                    <Image source={require('@/assets/icons/settings.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        paddingVertical: 30,
        paddingHorizontal: 54,
    },
    tabContainer: {
        ...gs.flexRow,
        ...gs.justifyBetween,
    },
    activeTab: {
        ...gs.flexRow,
        ...gs.itemsCenter,
        ...gs.cornerXS,
        paddingHorizontal: 14,
        paddingVertical: 8,
        backgroundColor: colors.secondary,
    },
    tab: {
        padding: 8,
    },
    tabLabel: {
        ...gs.font600,
        ...gs.textPrimary,
        marginLeft: 8,
    },
});

export default BottomNav;