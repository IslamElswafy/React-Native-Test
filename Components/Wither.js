import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import * as Location from "expo-location";

const BASE_URL = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={fb384c9d7d382b512e1811bc51b273cb}`;

export default function WeatherApp() {
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    console.log("Location effect");
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log("Location set", location);
    })();
  }, []);

  useEffect(() => {
    console.log("Weather effect");
    if (location) {
      fetch(
        `${BASE_URL}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          console.log("Weather set", data);
        })
        .catch((error) => console.error(error));
    }
  }, [location]);

  console.log("Location:", location);
  console.log("Weather data:", weatherData);

  if (!location || !weatherData) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.city}>{weatherData.name}</Text>
      <View style={styles.weather}>
        <Image
          source={{
            uri: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`,
          }}
          style={styles.weatherIcon}
        />
        <Text style={styles.temperature}>
          {Math.round(weatherData.main.temp)}°C
        </Text>
      </View>
      <Text style={styles.description}>
        {weatherData.weather[0].description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5fcff",
  },
  city: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 16,
  },
  weather: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  weatherIcon: {
    width: 64,
    height: 64,
    marginRight: 16,
  },
  temperature: {
    fontSize: 48,
    fontWeight: "bold",
  },
  description: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
