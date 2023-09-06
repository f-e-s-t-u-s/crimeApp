import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Hotlines = () => {
  return (
    <View style={hotline.container}>
      <View>
        <Text style={hotline.heading} >
            Emergency Hotlines
        </Text>
      </View>
    </View>
  );
};

export default Hotlines;

const hotline = StyleSheet.create({
    container: {
        flex: 1,
    },
    heading: {
        color: '#FF0F00',
        // fontFamily: 'Inter',
        fontWeight: '700',
        lineHeight: 36,
    }
});
