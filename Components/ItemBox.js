import React, { useState } from "react";
import {
  FlatList,
  TextInput,
  Modal,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

const ItemBox = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAddItem = () => {
    if (text) {
      const newItem = { name: text, image: require("../assets/favicon.png") };
      setItems([...items, newItem]);
      setText("");
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedItem(item)}>
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <Image
          source={item.image}
          style={{ width: 50, height: 50, marginRight: 10 }}
        />
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        onChangeText={setText}
        value={text}
        onSubmitEditing={handleAddItem}
        placeholder="Enter item name"
      />
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      {selectedItem && (
        <Modal
          animationType="slide"
          transparent={true}
          onRequestClose={() => setSelectedItem(null)}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View style={{ backgroundColor: "white", padding: 20 }}>
              <Image
                source={selectedItem.image}
                style={{ width: 100, height: 100, marginBottom: 10 }}
              />
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {selectedItem.name}
              </Text>
              <TouchableOpacity
                onPress={() => setSelectedItem(null)}
                style={{ marginTop: 10 }}
              >
                <Text style={{ color: "blue" }}>Dismiss</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default ItemBox;
