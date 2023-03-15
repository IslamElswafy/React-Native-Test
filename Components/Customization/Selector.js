import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Animated,
  Image,
  ScrollView,
} from "react-native";
import MainBottom from "../../Constant/MainBottom";
const Selector = ({ onPress, onPress2 }) => {
  const Images = [
    {
      image: require("../../assets/Images/iStock-1220107586-1-720x720.jpg"),
      title: "Dalgona",
      title2: "coffee",
    },
    {
      image: require("../../assets/Images/delish-091621-samosas-04-jg-1632847515.jpg"),
      title: "Authentic",
      title2: "samosa",
    },
    {
      image: require("../../assets/Images/depositphotos_378126034-stock-photo-fresh-bagel-burger-stuffed-breakfast.jpg"),
      title: "Simit for",
      title2: "breakfast",
    },
    {
      image: require("../../assets/Images/14333641_175488296188873_4191830636852674148_n.0.jpg"),
      title: "Taiyaki Ice",
      title2: "cream",
    },
    {
      image: require("../../assets/Images/coffee-smoothie-8.jpg"),
      title: "Shaved ice",
      title2: "with coffee",
    },
    {
      image: require("../../assets/Images/FullSizeRender.jpg"),
      title: "Red bean",
      title2: "mochi",
    },
    {
      image: require("../../assets/Images/OREO-HOLDING-resized-e1430182942202.jpg"),
      title: "Original Oreo",
      title2: "Coochies",
    },
    {
      image: require("../../assets/Images/Chocolate-Dip-square.jpg"),
      title: "Strawberry in",
      title2: "chocolate",
    },
  ];

  const ImagesSlideItem = ({ item }) => (
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
        width: "45%",
        marginRight: 20,
        height: 250,
        marginBottom: 20,
      }}
    >
      <View
        style={{
          backgroundColor: "#f7f7f7",
          marginBottom: 20,
          borderRadius: 5,
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={item.image}
          style={{
            marginTop: 20,
            height: 120,
            width: "70%",
            resizeMode: "cover",
            marginBottom: 15,
            borderRadius: 10,
          }}
        />
        <View
          style={{
            width: "70%",
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#655d66",
              fontWeight: "bold",
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "#655d66",
              fontWeight: "bold",
            }}
          >
            {item.title2}
          </Text>
        </View>
      </View>
    </View>
  );

  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const handleOnScroll = (event) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };
  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View style={Styles.container}>
      <View style={{ width: "100%" }}>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#554d56" }}>
          Select 4 items below
        </Text>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#554d56" }}>
          that suits your mood.
        </Text>
      </View>
      <ScrollView
        style={{ flex: 1, marginBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginTop: 30 }}>
          <FlatList
            ref={flatListRef}
            data={Images}
            renderItem={({ item }) => <ImagesSlideItem item={item} />}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            pagingEnabled
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            onScroll={handleOnScroll}
            onViewableItemsChanged={handleOnViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
          />
        </View>
        <View style={Styles.textCont}>
          <View style={{ width: "100%", marginBottom: 10 }}>
            <MainBottom
              background={"#ee6723"}
              TextColor={"#fff"}
              onPress={onPress}
            >
              Build a snack bundle box
            </MainBottom>
          </View>
          <View style={{ width: "100%" }}>
            <MainBottom
              background={"#f7f7f7"}
              TextColor={"#ee6723"}
              onPress={onPress2}
            >
              Back
            </MainBottom>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Selector;
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
  },
  logoCont: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  textCont: { alignItems: "center", marginBottom: 30 },
  welcomeText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF",
  },

  welcomeIcon: {
    width: 30,
    height: 40,
    resizeMode: "stretch",
  },
  bar: {
    borderColor: "#fff",
    borderBottomWidth: 2,
    width: "60%",
    alignItems: "center",
    marginTop: 35,
    opacity: 0.5,
    marginBottom: 35,
  },
  TextLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  Text1: {
    fontSize: 20,
  },
  Text2: {
    fontSize: 18,
    color: "#c1bec1",
  },
});
