import { StyleSheet, Animated, View, Dimensions } from "react-native";
import React from "react";

const { width } = Dimensions.get("screen");

const Pagination = ({ data, scrollX, index }) => {
  return (
    <View style={styles.container}>
      {data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ["#edeced", "#fecf33", "#edeced"],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={idx.toString()}
            style={[styles.dot, { backgroundColor }]}
          />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  dot: {
    width: 93,
    height: 8,
    marginHorizontal: 3,
    borderRadius: 10,
  },
});
