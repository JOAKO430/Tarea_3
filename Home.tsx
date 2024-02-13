import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface MenuItem {
  name: string;
  image: any;
}

const menuItems: MenuItem[] = [
  { name: 'Fresa', image: require('./imagenes/fresa.png') },
  { name: 'Capuccino', image: require('./imagenes/capucciono.png') },
  { name: 'Latte', image: require('./imagenes/latte.png') },
  { name: 'Frapuccino', image: require('./imagenes/frappuccino.jpg') },
];

const HomeScreen: React.FC = () => {
  const handleButtonPress = () => {
    console.log('Botón circular presionado');
  };

  const renderMenuItem = ({ item }: { item: MenuItem }) => (
    <TouchableOpacity style={styles.menuItemContainer}>
      <Image source={item.image} style={styles.menuItemImage} />
      <Text style={styles.menuItemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Svg
        width={20}
        height={70}
        
        viewBox="0 0 1200 1200"
        fill="#e3e3e3"
        stroke="#e3e3e3"
        style={styles.svgIcon}
      >
        <Path d="M0,0v240h1200V0H0z M0,480v240h1200V480H0z M0,960v240h1200V960H0z" />
      </Svg>

      <Text style={styles.title}>Starbucks</Text>

      <View style={styles.header}>
        <Text style={styles.greeting}>Good Morning,</Text>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Diego Burgos</Text>
          <Image source={require('./imagenes/hombre_de_chocolate.jpg')} style={styles.profileImage} />
        </View>
        <Image source={require('./imagenes/tarjeta_bucks.png')} style={styles.cardImage} />
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.reward}>
          <Image source={require('./imagenes/logo_registro.png')} style={styles.rewardImage} />
          <View style={styles.rewardInfo}>
            <Text style={styles.level}>Green super Level</Text>
            <Text style={styles.stars}>81/100</Text>
            <Text style={styles.next}>To Stars to Next Reward</Text>
          </View>
        </View>
        <View style={styles.balance}>
          <Text style={[styles.balanceText, styles.centeredText]}>Card Balance</Text>
          <Text style={[styles.balanceAmount, styles.centeredText]}>Rp 1987654.000</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>                             Select</Text>
        </View>
      </View>

      <View style={styles.content}>
        <FlatList
          data={menuItems}
          renderItem={renderMenuItem}
          keyExtractor={(item) => item.name}
          horizontal
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#265c42',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
    textAlign: 'center',
  },
  header: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  greeting: {
    fontSize: 18,
    color: '#ffffff',
    marginLeft: -230,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 55,
    marginLeft: 160,
  },
  cardImage: {
    width: 700,
    height: 120,
    resizeMode: 'contain',
    borderRadius: 10,
    marginTop: 10,
  },
  infoContainer: {
    width: '100%',
  },
  reward: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  rewardImage: {
    width: 150,
    height: 90,
    marginRight: 10,
  },
  rewardInfo: {
    marginLeft: 10,
  },
  level: {
    fontSize: 16,
    color: '#ffffff',
  },
  stars: {
    fontSize: 16,
    color: '#ffffff',
  },
  next: {
    fontSize: 14,
    color: '#ffffff',
  },
  balance: {
    marginBottom: 20,
  },
  centeredText: {
    textAlign: 'center',
  },
  balanceText: {
    fontSize: 18,
    color: '#ffffff',
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  buttonContainer: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#006241',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  menuItemContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  menuItemImage: {
    width: 90,
    height: 120,
    borderRadius: 15,
    marginBottom: 10,
  },
  menuItemText: {
    fontSize: 16,
    color: '#ffffff',
  },
  svgIcon: {
    position: 'absolute',
    top: 0,
    right: 32,
  },
});

export default HomeScreen;
