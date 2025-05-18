import { colors } from '@/assets/styles/colors';
import { gs } from '@/assets/styles/globalstyle';
import CardDetail from '@/components/cardDetail';
import Header from '@/components/header';
import InputText from '@/components/inputText';
import { useNavigation } from '@react-navigation/native';
import React, { JSX } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Booking(): JSX.Element {
    const navigation = useNavigation();

    const forms = [
        {
            label: 'Total days',
            placeholder: 'Total days',
            icon: require('@/assets/icons/days.png'),
        },
        {
            label: 'Date start at',
            placeholder: 'Date start at',
            icon: require('@/assets/icons/calendar.png'),
        },
        {
            label: 'Complete name',
            placeholder: 'Complete name',
            icon: require('@/assets/icons/user.png'),
        },
        {
            label: 'Phone number',
            placeholder: 'Phone number',
            icon: require('@/assets/icons/phone.png'),
        },
    ]

    const renderBookingDetail = () => {
        return (
            <View style={styles.sectionContainer}>
                <Text style={styles.titleContainer}>Your Space</Text>
                <CardDetail/>
            </View>
        )
    }

    const renderBookingInformation = () => {
        return (
            <View style={styles.sectionContainer}>
                <Text style={[gs.h3, gs.textBlack]}>Booking Informations</Text>
                <Text style={gs.textGrey}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
                {forms.map((val, idx) => {
                    return (
                        <InputText key={idx} label={val.label} placeholder={val.placeholder} icon={val.icon}/>
                    );
                })}
            </View>
        );
    }

    const renderProceedPayment = () => {
        return (
            <View style={styles.sectionContainer}>
                <TouchableOpacity style={styles.proceedButton} onPress={() => {
                    navigation.navigate('(checkout)');
                }}>
                    <Text style={[gs.h4, gs.textWhite]}>Proceed to Payment</Text>
                    <Image source={require('@/assets/icons/arrow_right_white.png')} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.termsConditionButton}>
                    <Text style={gs.textGrey}>Read Terms & All Conditions</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Header title="Booking" subTitle="Space available for today"/>
            <View style={styles.contentWrapper}>
                <ScrollView style={styles.scrollContainer}>
                    {renderBookingDetail()}
                    {renderBookingInformation()}
                </ScrollView>
                {renderProceedPayment()}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  titleContainer: {
    ...gs.h3,
    ...gs.textBlack,
    marginBottom: 12,
  },
  sectionContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  proceedContainer: {
    position: 'absolute',
    bottom: 0,
  },
  proceedButton: {
    ...gs.flexRow,
    ...gs.itemsCenter,
    ...gs.justifyCenter,
    ...gs.cornerMD,
    backgroundColor: colors.primary,
    padding: 14,
  },
  icon: {
    marginLeft: 4,
  },
  termsConditionButton: {
    ...gs.itemsCenter,
    ...gs.justifyCenter,
    padding: 14,
  },
  contentWrapper: {
    flex: 1,
    ...gs.justifyBetween,
  },
  scrollContainer: {
    paddingBottom: 24,
  }
});

export default Booking;