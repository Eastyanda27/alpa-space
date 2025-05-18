import { colors } from '@/assets/styles/colors';
import { gs } from '@/assets/styles/globalstyle';
import { useNavigation } from '@react-navigation/native';
import React, { JSX } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Success(): JSX.Element {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <Image source={require('@/assets/gambar/item_2_a.png')} style={styles.image}/>
                <View style={styles.overlay}>
                    <View style={styles.rating}>
                        <Image source={require('@/assets/icons/star_white.png')}/>
                        <Text style={[gs.h5, gs.textWhite]}>4.5/5</Text>
                    </View>
                    <View style={styles.booked}>
                        <Text style={[gs.h5, gs.textWhite]}>Booked</Text>
                    </View>
                    <View style={styles.label}>
                        <Text style={[gs.h2, gs.textWhite]}>Mahligai Office</Text>
                        <Text style={gs.textWhite}>Jl.Telanaipura</Text>
                    </View>
                </View>
            </View>
            <View style={styles.textContainer}>
                <Text style={[gs.h1, gs.textBlack]}>Success Booking</Text>
                <Text style={[gs.textCenter, gs.textGrey]}>Your space is ready to use for your growing business and life</Text>
            </View>
            <TouchableOpacity style={styles.detailButton} onPress={() => {
                navigation.navigate('(home)')
            }}>
                <Text style={[gs.h4, gs.textWhite]}>View Details</Text>
                <Image source={require('@/assets/icons/arrow_right_white.png')} style={styles.icon}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    ...gs.justifyCenter,
    ...gs.itemsCenter,
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    ...gs.cornerXL,
    width: 240,
    height: 320,
  },
  overlay: {
    ...gs.cornerXL,
    width: 240,
    height: 320,
    backgroundColor: colors.transparentBlack,
    position: 'absolute',
  },
  rating: {
    ...gs.itemsCenter,
    ...gs.justifyCenter,
    ...gs.cornerLG,
    backgroundColor: colors.primary,
    padding: 14,
    width: 60,
    height: 60,
    position: 'absolute',
    right: -30,
    top: 30,
  },
  booked: {
    ...gs.itemsCenter,
    ...gs.justifyCenter,
    ...gs.cornerLG,
    backgroundColor: colors.primary,
    padding: 14,
    width: 100,
    height: 50,
    position: 'absolute',
    left: -50,
    bottom: 120,
  },
  label: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  textContainer: {
    ...gs.itemsCenter,
    paddingHorizontal: 76,
    marginVertical: 30,
  },
  icon: {
    marginLeft: 4,
  },
  detailButton: {
    ...gs.flexRow,
    ...gs.itemsCenter,
    ...gs.justifyCenter,
    ...gs.cornerMD,
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 24,
  }
});

export default Success;