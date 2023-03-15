import React, { useRef, useState } from "react";
import {
  Text,
  Image,
  View,
  FlatList,
  Dimensions,
  Animated,
} from "react-native";
import MainPagination from "../Components/MainPagination";
import Profile from "../Components/Customization/Profile";
import Goal from "../Components/Customization/Goal";
import Selector from "../Components/Customization/Selector";
const Customization = ({ navigation }) => {
  const window = Dimensions.get("window");
  const width = window.width;
  const height = window.height;
  const Images = [
    {
      image: 1,
    },
    {
      image: 2,
    },
    {
      image: 3,
    },
    {
      image: 4,
    },
  ];

  const ImagesSlideItem = ({ item, index }) => {
    if (index === 0) {
      return (
        <View style={{ alignItems: "center", width: width }}>
          <Profile handleSubmit={() => navigation.navigate("Edit")} />
        </View>
      );
    } else if (index === 1) {
      return (
        <View style={{ alignItems: "center", width: width }}>
          <Goal
            onPress={() => flatListRef.current.scrollToIndex({ index: 2 })}
            onPress2={() => flatListRef.current.scrollToIndex({ index: 0 })}
          />
        </View>
      );
    } else if (index === 2) {
      return (
        <View style={{ alignItems: "center", width: width }}>
          <Selector
            onPress={() => flatListRef.current.scrollToIndex({ index: 3 })}
            onPress2={() => flatListRef.current.scrollToIndex({ index: 1 })}
          />
        </View>
      );
    } else if (index === 3) {
      return (
        <View
          style={{
            alignItems: "center",
            width: width,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 40,
              color: "#ee6723",
              fontWeight: "bold",
            }}
          >
            Coming in the future
          </Text>
        </View>
      );
    }
  };
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
        backgroundColor: "#FFFFFF",
      }}
    >
      <View style={{ marginHorizontal: 10, marginTop: 20, marginBottom: 20 }}>
        <MainPagination data={Images} scrollX={scrollX} index={index} />
      </View>
      <View style={{ height: height, alignItems: "center", marginBottom: 40 }}>
        <FlatList
          ref={flatListRef}
          data={Images}
          renderItem={({ item, index }) => (
            <ImagesSlideItem item={item} index={index} />
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onScroll={handleOnScroll}
          onViewableItemsChanged={handleOnViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
      </View>
    </View>
  );
};

export default Customization;
