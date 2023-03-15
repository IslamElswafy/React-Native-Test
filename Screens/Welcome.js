import React, { useRef, useState } from "react";
import {
  Text,
  Image,
  View,
  FlatList,
  Dimensions,
  Animated,
  StyleSheet,
} from "react-native";
import Pagination from "../Components/Pagination";
import MainBottom from "../Constant/MainBottom";
const Welcome = ({ navigation }) => {
  const Images = [
    {
      image: require("../assets/Images/Untitled.png"),
      title: "hand-pickle high  ",
      title2: "quality snachs ",
    },
    {
      image: require("../assets/Images/Untitled.png"),
      title: "Indulge in the",
      title2: "Irresistible Crunch ",
      title3: "of Our Artisanal Snacks",
    },
    {
      image: require("../assets/Images/Untitled.png"),
      title: "Unleash Your Taste ",
      title2: " Buds with Us !",
    },
  ];

  const ImagesSlideItem = ({ item }) => (
    <View style={Styles.ProContainer}>
      <Image source={item.image} style={Styles.logo} />
      <View style={Styles.innerCont}>
        <Text style={Styles.textInner}>{item.title}</Text>
        <Text style={Styles.textInner}>{item.title2}</Text>
        <Text style={Styles.textInner}>{item.title3}</Text>
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

  const handleSubmit = () => {
    navigation.navigate("SignIn");
  };
  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View style={Styles.mainCont}>
      <View style={Styles.flatCont}>
        <FlatList
          ref={flatListRef}
          data={Images}
          renderItem={({ item }) => <ImagesSlideItem item={item} />}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onScroll={handleOnScroll}
          onViewableItemsChanged={handleOnViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
        <Pagination data={Images} scrollX={scrollX} index={index} />
      </View>
      <View style={Styles.btnCont}>
        <MainBottom
          onPress={handleSubmit}
          background={"#ee6723"}
          TextColor={"#fff"}
        >
          Get started
        </MainBottom>
      </View>
    </View>
  );
};

export default Welcome;
const window = Dimensions.get("window");
const width = window.width;
const height = window.height;
const Styles = StyleSheet.create({
  ProContainer: { alignItems: "center", width: width },
  screen4: {
    alignItems: "center",
    width: width,
    justifyContent: "center",
  },
  screen4Text: {
    fontSize: 40,
    color: "#ee6723",
    fontWeight: "bold",
  },
  mainCont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  btnCont: {
    alignItems: "center",
    width: "90%",
  },
  flatCont: {
    height: height * 0.7,
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: width,
    height: height * 0.4,
    resizeMode: "cover",
    marginBottom: 60,
  },
  innerCont: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  textInner: {
    fontSize: 40,
    color: "#ee6723",
    fontWeight: "bold",
  },
});
