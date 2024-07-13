import { View, Text } from "react-native";
import React from "react";
import { Colors } from "./../../constants/Colors";

export default function OptionCard({ option, selectedTraveler }) {
  return (
    <View
      style={[{
        padding: 25,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: Colors.LIGHT_GRAY,
        borderRadius: 15
      }, selectedTraveler.id==option.id && {borderWidth: 2}]}
    >
      <View >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
          }}
        >
          {option?.title}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
            color: Colors.WHITE,
          }}
        >
          {option?.desc}
        </Text>
      </View>
      <Text style={{
        fontSize: 30,
      }}>
        {option?.icon}
      </Text>
    </View>
  );
}
