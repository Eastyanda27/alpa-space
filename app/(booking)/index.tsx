import { colors } from '@/assets/styles/colors';
import { gs } from '@/assets/styles/globalstyle';
import CardDetail from '@/components/cardDetail';
import Header from '@/components/header';
import React, { JSX } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

function Booking(): JSX.Element {
    const renderBookingDetail = () => {
        return (
            <View style={styles.sectionContainer}>
                <Text style={styles.titleContainer}>Your Space</Text>
                <CardDetail/>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Header title="Booking" subTitle="Space available for today"/>
            <View>
                <ScrollView>
                    {renderBookingDetail()}
                    {/* {renderBookingInformation()} */}
                </ScrollView>
                {/* {renderProceedPayment()} */}
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
});

export default Booking;