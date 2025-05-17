import { colors } from '@/assets/styles/colors';
import { gs } from '@/assets/styles/globalstyle';
import InputText from '@/components/inputText';
import { useNavigation } from '@react-navigation/native';
import React, { JSX } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

function Home(): JSX.Element {
  const navigation = useNavigation();

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={gs.flexRow}>
          <Image 
            source={require('@/assets/gambar/profile_1.png')} 
            style={styles.profileContainer}
          />
          <View>
            <Text style={gs.textBlack}>Hi, Yanda</Text>
            <Text style={[gs.font700, gs.textBlack]}>@eastyanda</Text>
          </View>
        </View>
        <View style={gs.flexRow}>
          <Image 
            source={require('@/assets/icons/gift.png')}
            style={styles.iconContainer}
          />
          <Image 
            source={require('@/assets/icons/notification.png')}
            style={styles.iconContainer}
          />
        </View>
      </View>
    );
  };

  const renderSearch = () => {
    return (
      <View style={styles.sectionContainer}>
        <InputText
          icon={require('@/assets/icons/location.png')}
          placeholder="Find work space in Jakarta"/>
      </View>
    )
  }

  const renderPopularSection = () => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={[styles.sectionTitle, gs.h1]}>Popular</Text>
        <View style={gs.flexRow}>
          <Image 
            source={require('@/assets/gambar/item_1_a.png')}
            style={styles.popularMainImage}
          />
          <View>
            <Image
              source={require('@/assets/gambar/item_1_b.png')}
              style={styles.popularImage}
            />
            <Image
              source={require('@/assets/gambar/item_1_c.png')}
              style={styles.popularImage}
            />
          </View>
        </View>
        <View style={styles.popularContent}>
          <View>
            <Text style={[gs.h2, gs.textBlack]}>IndoorWork</Text>
            <Text style={gs.textGrey}>GedungAshta No.10</Text>
          </View>
          <View>
            <Text>$599/day</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        {renderHeader()}
        {renderSearch()}
        <ScrollView>
          {renderPopularSection()}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyLight,
  },
  headerContainer: {
    ...gs.flexRow,
    ...gs.itemsCenter,
    ...gs.justifyBetween,
    padding: 24,
    marginTop: 30,
  },
  profileContainer: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  iconContainer: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  sectionContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  popularMainImage: {
    ...gs.cornerXL,
    flex: 1,
    height: 200,
    marginRight: 10,
  },
  popularImage: {
    ...gs.cornerMD,
    width: 130,
    height: 95,
    marginBottom: 10,
  },
  sectionTitle: {
    ...gs.textBlack,
    marginBottom: 12,
  },
  popularContent: {
    ...gs.flexRow,
    ...gs.justifyBetween,
  }
});

export default Home;