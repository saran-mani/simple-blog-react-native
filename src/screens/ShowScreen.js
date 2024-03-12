import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import { useNavigation } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const ShowScreen = ({ route }) => {
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id == route.params.id);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions(
      {
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Edit", { id: route.params.id })}
          >
            <EvilIcons name="pencil" size={35} color="black" />
          </TouchableOpacity>
        ),
      },
      [navigation]
    );
  });

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};
const style = StyleSheet.create({});

export default ShowScreen;
