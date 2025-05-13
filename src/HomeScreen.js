import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('Highlight');
  const categories = ['Highlight', 'Lifestyle', 'Health', 'Environment'];

  const products = [
    { id: '1', title: 'Tree Cactus Imitation', price: '$44.00', badge: 'Environment' },
    { id: '2', title: 'Genius Rubik', price: '$50.00', badge: 'Education' },
    { id: '3', title: 'Lifestyle Mug', price: '$44.00', badge: 'Lifestyle' },
    { id: '4', title: 'Eco Bag', price: '$50.00', badge: 'Environment' },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello,</Text>
          <Text style={styles.username}>Azzahri A. <Text style={{ fontSize: 16 }}>👋</Text></Text>
        </View>
        <Image
          source={require('../assets/images/MaskGroup.png')}
          style={styles.avatar}
        />
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/54/54481.png' }}
          style={styles.searchIcon}
        />
        <TextInput style={styles.search} placeholder="Search" placeholderTextColor="#888" />
      </View>

      {/* Banner */}
      <View style={styles.bannerBlue}>
        <View style={styles.bannerTextContainer}>
          <Text style={styles.bannerText1}>New Arrival change</Text>
          <Text style={styles.bannerText2}>your <Text style={styles.boldText}>lifestyle.</Text></Text>
          <TouchableOpacity>
            <Text style={styles.checkNowUnderline}>Check Now <Text style={{ fontSize: 16 }}>→</Text></Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require('../assets/images/Group1.png')}
          style={styles.bannerImageBoxCorner}
        />
      </View>

      {/* Categories */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.sectionTitle}>Select Category</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryRow}>
          {categories.map((cat, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.categoryBtn, selectedCategory === cat && styles.categoryBtnActive]}
              onPress={() => setSelectedCategory(cat)}
            >
              <Text style={[styles.categoryText, selectedCategory === cat && styles.categoryTextActive]}>
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Product cards */}
      <View style={styles.products}>
        {products.map(product => (
          <TouchableOpacity
            key={product.id}
            style={styles.card}
            onPress={() => navigation.navigate('Detail', {
              product: {
                ...product,
                description: `Donating to a cause you care about can make a positive impact on the world. Whether it's a monetary gift, time or resources, every donation can help make a difference. Charitable organizations rely on the generosity of people like you to support their mission and provide assistance to those in need. So why not consider giving a gift today and feel the satisfaction of knowing you've made a difference in someone's life. Your donation, no matter how small, can help change lives for the better.`
              }
            })}
          >
            <Text style={styles.badge}>{product.badge}</Text>
            <View style={styles.cardImage} />
            <Text style={styles.cardTitle}>{product.title}</Text>
            <Text style={styles.cardPrice}>{product.price}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  greeting: { fontSize: 16, color: '#333' },
  username: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  avatar: { width: 40, height: 40, borderRadius: 20 },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20,
  },
  searchIcon: { width: 20, height: 20, marginRight: 8, tintColor: '#999' },
  search: { flex: 1, fontSize: 16 },

  bannerBlue: {
    backgroundColor: '#2563eb',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    position: 'relative',
  },
  bannerTextContainer: {
    flex: 1,
    paddingBottom: 10,
  },
  bannerText1: { color: '#fff', fontSize: 22 },
  bannerText2: { color: '#fff', fontSize: 20, marginBottom: 10 },
  boldText: { fontWeight: 'bold' },
  checkNowUnderline: {
    color: '#fff',
    textDecorationLine: 'underline',
    fontWeight: '600',
    fontSize: 14,
  },
  bannerImageBoxCorner: {
    width:180,
    height: 180,
    resizeMode: 'contain',
    position: 'absolute',
    right: 0,
    bottom: -35,
  },

  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 12 },
  categoryRow: { flexDirection: 'row' },
  categoryBtn: {
    backgroundColor: '#f3f4f6',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginRight: 12,
  },
  categoryBtnActive: { backgroundColor: '#2563eb' },
  categoryText: { color: '#1e40af' },
  categoryTextActive: { color: '#fff' },

  products: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#f9fafb',
    borderRadius: 16,
    padding: 12,
    marginBottom: 20,
  },
  badge: {
    backgroundColor: '#10b981',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    alignSelf: 'flex-start',
    fontSize: 12,
    marginBottom: 6,
  },
  cardImage: {
    height: 100,
    backgroundColor: '#e5e7eb',
    borderRadius: 12,
    marginBottom: 8,
  },
  cardTitle: { fontWeight: 'bold', fontSize: 14, marginBottom: 4 },
  cardPrice: { color: '#2563eb', fontWeight: '600' },
});

export default HomeScreen;
