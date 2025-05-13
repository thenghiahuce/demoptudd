import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const DetailScreen = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.back}>{'< Back'}</Text></TouchableOpacity>
      <View style={styles.imagePlaceholder} />
      <Text style={styles.tag}>{product.badge}</Text>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.body}>
        Donating to a cause you care about can make a positive impact on the world. Whether it's a monetary gift, time or resources, every donation can help make a difference. Charitable organizations rely on the generosity of people like you to support their mission and provide assistance to those in need. So why not consider giving a gift today and feel the satisfaction of knowing you've made a difference in someone's life. Your donation, no matter how small, can help change lives for the better.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Payment')}>
        <Text style={styles.buttonText}>Donate</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 24, backgroundColor: '#fff', flexGrow: 1 },
  back: { fontSize: 16, color: '#2563eb', marginBottom: 16 },
  imagePlaceholder: {
    height: 150,
    backgroundColor: '#e5e7eb',
    borderRadius: 12,
    marginBottom: 16,
  },
  tag: {
    backgroundColor: '#047857',
    color: '#fff',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  body: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 22,
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 16,
    borderRadius: 24,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DetailScreen;