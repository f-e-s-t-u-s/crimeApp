import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = () => {
  return (
    <View style={cardStyle.container}>
      <Text style={cardStyle.header} >Gender Based Violence</Text>
      <Text style={cardStyle.desc} >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
        veritatis blanditiis nostrum totam iste provident quasi esse nobis
        dolore quidem.
      </Text>
      <Text style={cardStyle.contact} >Hotline: 0790504636</Text>
    </View>
  );
};

export default Card;

const cardStyle = StyleSheet.create({
    container: {
        flex: 1,
        width: 345,
        top: 1170,
        left: 46,
        gap: 7,
        color: "white",
        
    },
    header: {

    }
});
