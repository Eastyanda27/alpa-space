import { colors } from '@/assets/styles/colors';
import Header from '@/components/header';
import React, { JSX } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

function Detail(): JSX.Element {
  return (
    <View style={styles.container}>
      <Header title="Office Detail" subTitle="Space available for today" showRightButton/>
      <ScrollView>
        {/* {renderSlider()} */}
        {/* {renderTitle()} */}
        {/* {renderDescription()} */}
        {/* {renderOwner()} */}
      </ScrollView>
      {/* {renderBookingButton()} */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default Detail;