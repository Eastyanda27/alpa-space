import { colors } from '@/assets/styles/colors';
import Header from '@/components/header';
import SliderItem from '@/components/sliderItem';
import React, { JSX } from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';

function Detail(): JSX.Element {
  const slider = [
    require('@/assets/gambar/item_2_a.png'),
    require('@/assets/gambar/item_2_b.png'),
    require('@/assets/gambar/item_2_c.png')
  ]

  const renderSlider = () => {
    return (
      <View style= {styles.sectionContainer}>
        <FlatList 
          data={slider} 
          keyExtractor={({index}) => index}
          renderItem={({item}) => <SliderItem image={item}/>} 
          horizontal 
          showsHorizontalScrollIndicator={false}/>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Office Detail" subTitle="Space available for today" showRightButton/>
      <ScrollView>
        {renderSlider()}
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
  sectionContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
});

export default Detail;