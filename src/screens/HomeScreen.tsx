import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchRecentPhotos } from "../utils/api";
import PhotoItem from "../components/PhotoItem";
import PhotoSlider from "../components/PhotoSlider";

const HomeScreen: React.FC = () => {
  const [photos, setPhotos] = useState<any[]>([]);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedPhotos = await AsyncStorage.getItem("cachedPhotos");
        if (cachedPhotos) {
          setPhotos(JSON.parse(cachedPhotos));
        } else {
          const data = await fetchRecentPhotos();
          setPhotos(data);
          AsyncStorage.setItem("cachedPhotos", JSON.stringify(data));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handlePhotoPress = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        numColumns={3}
        data={photos}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handlePhotoPress(index)}>
            <PhotoItem title={item.title} url={item.url_s} />
          </TouchableOpacity>
        )}
      />
      <PhotoSlider
        photos={photos}
        selectedIndex={selectedPhotoIndex}
        onClose={() => setSelectedPhotoIndex(null)}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
