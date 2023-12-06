import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import { Button, Card, Avatar, List } from "react-native-paper";
import Carousel from "react-native-snap-carousel";

export default function HomeScreen() {
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

  const featuredImages = [
    require("../assets/gc-1.png"),
    require("../assets/gc-2.png"),
    require("../assets/gc-3.png"),
  ];

  const categoriesData = [
    {
      id: "1",
      title: "Electric Guitars",
      image: require("../assets/gc-4.png"),
    },
    {
      id: "2",
      title: "Acoustic Guitars",
      image: require("../assets/gc-5.png"),
    },
    { id: "3", title: "Amplifiers", image: require("../assets/gc-6.png") },
    {
      id: "4",
      title: "Accessories",
      image: require("../assets/gc-7.png"),
    },
  ];

  const renderCarouselItem = ({ item }) => (
    <Card>
      <Card.Cover source={item} />
    </Card>
  );

  const renderCategoryItem = ({ item }) => (
    <View style={styles.categoryItem}>
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryTitle}>{item.title}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <View style={styles.headerContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/gc-logo.png")}
            resizeMode="contain"
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.homeTxt}>
          Welcome to Guitar Center, your one-stop shop for all things
          guitar-related. Explore our wide selection of guitars, accessories,
          and more.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Products</Text>
        <Carousel
          data={featuredImages}
          renderItem={renderCarouselItem}
          sliderWidth={350}
          itemWidth={300}
          loop
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Special Offers</Text>
        <Card>
          <Card.Title
            title="UP TO 35% OFF THIS HOLIDAY, GET LOUD!"
            subtitle="Limited Time"
            left={LeftContent}
          />
          <Card.Cover
            source={{
              uri: "https://i.blackfriday.com/imagery/ad-scan-pages/56086.1606169462.bg_ffffff.fit_lim.quality_90.size_850x.jpg",
            }}
          />
          <Card.Actions>
            <Button>View More</Button>
          </Card.Actions>
        </Card>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Explore Categories</Text>
        <List.Section>
          <List.Subheader>Categories</List.Subheader>
          <FlatList
            data={categoriesData}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
          />
        </List.Section>
      </View>

      <View style={styles.section}>
        <Button
          style={styles.ctaButton}
          mode="contained"
          onPress={() => console.log("Button pressed")}
        >
          Explore Now
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FAF9F6",
  },
  section: {
    marginBottom: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Center content vertically
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginRight: 10,
  },
  shopName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  homeTxt: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  ctaButton: {
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: "#000",
  },
  categoryItem: {
    flex: 1,
    flexDirection: "column",
    margin: 5,
    alignItems: "center",
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  categoryTitle: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
