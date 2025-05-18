import { colors } from "@/assets/styles/colors";
import { gs } from "@/assets/styles/globalstyle";
import { useNavigation } from "@react-navigation/native";
import React, { JSX } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function CardDetail(): JSX.Element {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.leftContent}>
                <Image source={require('@/assets/gambar/item_2_a.png')} style={styles.thumbnail}/>
                <View>
                    <Text style={[gs.h2, gs.textBlack]}>Indoorwork</Text>
                    <View style={[gs.flexRow, gs.itemsCenter]}>
                        <Image source={require('@/assets/icons/star_yellow.png')} style={styles.icon}/>
                        <Text style={[gs.h5, gs.textBlack]}>4.5/5</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('(detail)')
            }}>
                <Text style={[gs.h4, gs.textPrimary]}>Details</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...gs.flexRow,
        ...gs.itemsCenter,
        ...gs.justifyBetween,
        ...gs.cornerLG,
        paddingVertical: 10,
        paddingLeft: 10,
        paddingRight: 24,
        borderWidth: 1,
        borderColor: colors.greyContainer,
    },
    leftContent: {
        ...gs.flexRow,
        ...gs.itemsCenter,
    },
    thumbnail: {
        ...gs.cornerSM,
        width: 70,
        height: 70,
        marginRight: 12,
    },
    icon:{
        width: 20,
        height: 20,
        marginRight: 4,
    },
});

export default CardDetail;