import React, { useRef, useState } from "react";
import {
  Text,
  Image,
  View,
  FlatList,
  Dimensions,
  Animated,
} from "react-native";
import Pagination from "../Components/Pagination";
import MainBottom from "../Constant/MainBottom";
const Welcome = ({ navigation }) => {
  const window = Dimensions.get("window");
  const width = window.width;
  const height = window.height;
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
    <View style={{ alignItems: "center", width: width }}>
      <Image
        source={item.image}
        style={{
          width: width,
          height: height * 0.4,
          resizeMode: "cover",
          marginBottom: 60,
        }}
      />
      <View
        style={{ justifyContent: "center", alignItems: "center", width: "90%" }}
      >
        <Text
          style={{
            fontSize: 40,
            color: "#ee6723",
            fontWeight: "bold",
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 40,
            color: "#ee6723",
            fontWeight: "bold",
          }}
        >
          {item.title2}
        </Text>
        <Text
          style={{
            fontSize: 30,
            color: "#ee6723",
            fontWeight: "bold",
          }}
        >
          {item.title3}
        </Text>
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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
      }}
    >
      <View
        style={{ height: height * 0.7, alignItems: "center", marginBottom: 40 }}
      >
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
      <View style={{ alignItems: "center", width: "90%" }}>
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
