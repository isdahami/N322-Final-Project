import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

export default function ShopScreen() {
  const products = [
    {
      id: "1",
      name: "Electric Guitar",
      image: require("../assets/gc-1.png"),
      price: "$499.99",
    },
    {
      id: "2",
      name: "Electric Guitar",
      image: require("../assets/gc-2.png"),
      price: "$299.99",
    },
    {
      id: "3",
      name: "Electric Guitar",
      image: require("../assets/gc-3.png"),
      price: "$899.99",
    },
    {
      id: "4",
      name: "Electric Guitar",
      image: require("../assets/gc-4.png"),
      price: "$1499.99",
    },
    {
      id: "5",
      name: "Acoustic Guitar",
      image: require("../assets/gc-5.png"),
      price: "$399.99",
    },
    {
      id: "6",
      name: "Acoustic Guitar",
      image: require("../assets/gc-8.png"),
      price: "$899.99",
    },
    {
      id: "7",
      name: "Electric Guitar",
      image: require("../assets/gc-10.png"),
      price: "$199.99",
    },
    {
      id: "8",
      name: "Electric Guitar",
      image: require("../assets/gc-11.png"),
      price: "$799.99",
    },
  ];

  const renderProductItem = ({ item }) => (
    <Card style={styles.productCard}>
      <Card.Cover source={item.image} />
      <Card.Content>
        <Title>{item.name}</Title>
        <Paragraph>{item.price}</Paragraph>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Products</Text>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#F8F8F8",
  },
  productList: {
    justifyContent: "space-between",
  },
  productCard: {
    marginBottom: 16,
    marginRight: 16,
    flex: 0.5,
    backgroundColor: "#e0e0de",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
});
