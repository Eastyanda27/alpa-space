import { colors } from '@/assets/styles/colors';
import { gs } from '@/assets/styles/globalstyle';
import CardDetail from '@/components/cardDetail';
import Header from '@/components/header';
import React, { JSX } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

function Checkout(): JSX.Element {
    const checkoutData = [
        {
            label: 'Price per day',
            value: '$500',
            isBold: true,
        },
        {
            label: 'Total days',
            value: '18 days',
            isBold: false,
        },
        {
            label: 'Date',
            value: '22 Januari 2023',
            isBold: false,
        },
        {
            label: 'End',
            value: '2 February 2023',
            isBold: false,
        },
        {
            label: 'Tax 15%',
            value: '$890',
            isBold: true,
        },
        {
            label: 'Insurance',
            value: '$20,000',
            isBold: true,
        },
        {
            label: 'Grand total',
            value: '$2,899,000',
            isBold: true,
            isPrimary: true,
        },
    ];

    const borderBottom = {
        borderBottomWidth: 1,
        borderColor: colors.greyContainer,
    }

    const renderCheckoutDetail = () => {
        return (
            <View style={styles.sectionContainer}>
                <Text style={styles.titleContainer}>Your Space</Text>
                <CardDetail/>
            </View>
        );
    }

    const renderCheckoutData = () => {
        return (
            <View style={styles.sectionContainer}>
                {
                    checkoutData.map((val, idx) => {
                        const isLast = idx === checkoutData?.length - 1;
                        return (
                            <View key={idx} style={[styles.checkoutItem, !isLast && borderBottom]}>
                                <Text style={gs.textBlack}>{val.label}</Text>
                                <Text style={[gs.textBlack, val.isBold && gs.font700, val.isPrimary && gs.textPrimary]}>{val.value}</Text>
                            </View>
                        );
                    })
                }
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Header title="Checkout" subTitle="Ready to start working?"/>
            <View>
                <ScrollView>
                    {renderCheckoutDetail()}
                    {renderCheckoutData()}
                    {/* {renderPaymentMethod()} */}
                </ScrollView>
                {/* {renderPayNoq()} */}
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
    checkoutItem: {
        ...gs.flexRow,
        ...gs.justifyBetween,
        paddingVertical: 14,
    }
});

export default Checkout;