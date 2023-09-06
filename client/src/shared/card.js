import { Linking, StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = ({ hotline_name, description, contact }) => {
  return (
    <View style={cardStyle.container}>
      <Text style={cardStyle.header}>{hotline_name}</Text>
      <Text style={cardStyle.desc}>{description}</Text>
      <Text
        onPress={() => {
          const phoneNumber = `${contact}`;
          const url = `tel:${phoneNumber}`;
          Linking.canOpenURL(url)
            .then((supported) => {
              if (supported) {
                return Linking.openURL(url);
              } else {
                console.log("Phone call not supported");
              }
            })
            .catch((error) => console.error(error));
        }}
        style={cardStyle.contact}
      >
        Hotline Number: {contact}
      </Text>
    </View>
  );
};

export default Card;

const cardStyle = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    width: 345,
    padding: 12,
    borderColor: "#545F71",
    borderWidth: 1,
  },
  header: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 22,
    color: "#545F71",
  },
  contact: {
    marginBottom: 10,
  },
});
