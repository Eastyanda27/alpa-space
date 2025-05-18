import { colors } from '@/assets/styles/colors';
import { gs } from '@/assets/styles/globalstyle';
import Header from '@/components/header';
import SliderItem from '@/components/sliderItem';
import { useNavigation } from '@react-navigation/native';
import React, { JSX } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Detail(): JSX.Element {
  const navigation = useNavigation();

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

  const renderTitle = () => {
    return (
      <View style={styles.sectionContainer}>
        <View style={styles.titleContainer}>
          <View>
            <Text style={[gs.textBlack, gs.h1]}>Mahligai Office</Text>
            <Text style={[gs.textGrey]}>Jl.Telanaipura</Text>
          </View>
          <View style={gs.flexRow}>
            <Image source={require('@/assets/icons/star_yellow.png')}/>
            <Text style={[gs.textBlack, gs.h3]}>4.5/5</Text>
          </View>
        </View>
      </View>
    );
  }

  const renderDescription = () => {
    return (
      <View style={styles.sectionContainer}>
        <View style={styles.descriptionContainer}>
          <Text style={[gs.textBlack, gs.h3, styles.title]}>About</Text>
          <Text style={gs.textGrey}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla ultrices magna nec efficitur. Ut vitae fringilla neque. Mauris bibendum purus orci. Nunc risus eros, aliquam sed erat at, accumsan molestie leo. Duis consectetur sem sed urna varius molestie. Etiam eget purus eu ex finibus sodales sed non enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
          </Text>
        </View>
      </View>
    );
  }

  const renderOwner = () => {
    return (
      <View style={styles.sectionContainer}>
        <View style={styles.ownerContainer}>
          <Text style={[gs.textBlack, gs.h3, styles.title]}>Space Owner</Text>
          <View style={[gs.flexRow, gs.itemsCenter]}>
            <Image source={require('@/assets/gambar/profile_2.png')} style={styles.ownerImage}/>
            <View>
              <View style={gs.flexRow}>
                <Text>JuneBug</Text>
                <Image source={require('@/assets/icons/verified_orange.png')} style={styles.icon}/>
              </View>
              <Text style={[gs.font700, gs.textBlack]}>@junebug</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
  
  const renderBookingButton = () => {
    return (
      <View style={styles.bookingButtonContainer}>
        <View>
          <Text style={[gs.textPrimary, gs.h1]}>$5.899</Text>
          <Text style={gs.textGrey}>/day</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate('(booking)');
        }}>
          <Text style={[gs.textWhite, gs.h3]}>Start Booking</Text>
          <Image source={require('@/assets/icons/arrow_right_white.png')} style={styles.icon}/>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Office Detail" subTitle="Space available for today" showRightButton/>
      <ScrollView>
        {renderSlider()}
        {renderTitle()}
        {renderDescription()}
        {renderOwner()}
      </ScrollView>
      {renderBookingButton()}
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
  },
  titleContainer: {
    ...gs.flexRow,
    ...gs.itemsCenter,
    ...gs.justifyBetween,
  },
  title: {
    marginBottom: 12,
  },
  descriptionContainer: {
    marginTop: 24,
  },
  ownerContainer: {
    marginTop: 24,
  },
  ownerImage: {
    marginRight: 10,
  },
  icon: {
    marginLeft: 4,
  },
  bookingButtonContainer: {
    ...gs.flexRow,
    ...gs.justifyBetween,
    padding: 24,
  },
  button: {
    ...gs.flexRow,
    ...gs.cornerMD,
    paddingHorizontal: 22,
    paddingVertical: 14,
    backgroundColor: colors.primary,
  },
});

export default Detail;