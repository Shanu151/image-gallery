import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "../screens/HomeScreen";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const [isHomeOpen, setIsHomeOpen] = useState(false);

  const handleHomeToggle = () => {
    setIsHomeOpen(!isHomeOpen);
  };

  const handleHomeClick = () => {
    setIsHomeOpen(true); // Open HomeScreen when the text "Home" is clicked
  };
  return (
    <SafeAreaView style={{ flexDirection: "row" }}>
      {isOpen && (
        <View
          style={{
            backgroundColor: "lightgrey",
            width: 150,
            position: "absolute",
            top: 85,
            flex: 1,
            height: 1200,
          }}
        >
          <TouchableOpacity
            onPress={handleHomeClick}
            style={{
              backgroundColor: isHomeOpen ? "lightgrey" : "grey",
              padding: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: isHomeOpen ? "black" : "white" }}>Home</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity
        onPress={handleToggle}
        style={{
          backgroundColor: isOpen ? "lightgrey" : "grey",
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
          flex: 0.275,
        }}
      >
        <Text style={{ color: isOpen ? "black" : "white" }}>
          {isOpen ? "Close" : "Open"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Navigation;
