import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";

interface PhotoItemProps {
  title: string;
  url: string;
}

const screenWidth = Dimensions.get("window").width;
const imageWidth = screenWidth * 0.3;

const PhotoItem: React.FC<PhotoItemProps> = ({ title, url }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={[
          styles.image,
          styles.card,
          styles.shadowProp,
          { width: imageWidth },
        ]}
        source={{ uri: url }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 8,
  },
  image: {
    height: 200,
    borderRadius: 10,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: "100%",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default PhotoItem;
