import { gs } from "@/assets/styles/globalstyle";
import React, { JSX } from "react";
import { Image, StyleSheet, View } from "react-native";

interface SliderItemProps {
    image: any;
}

function SliderItem({image}: SliderItemProps): JSX.Element {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.imageBackground}/>            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginRight: 40,
        marginBottom: 24,
    },
    imageBackground: {
        ...gs.cornerXL,
        width: 240,
        height: 320,
    }
});

export default SliderItem;