import { ActivityIndicator, Modal, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "../../shared/card";
import axios from "axios";
import { API_URL } from "../../services/api";

const Hotlines = () => {
  const [hotlines, setHotlines] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchHotlines = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`${API_URL}/api/v1/hotlines`);
        console.log(response.data);
        setHotlines(response.data);
        setLoading(false)
      } catch (error) {
        console.log(error);
        setError("An error occurred please try again later");
      }
    };
    fetchHotlines();
  }, []);

  return (
    <ScrollView>
      <View style={hotline.container}>
      <Modal animationType="fade" transparent={true} visible={loading}>
          <View style={hotline.modal}>
            <View style={hotline.modalContainer}>
              <ActivityIndicator size={"large"} color={"green"} />
              <Text>Loading.....</Text>
            </View>
          </View>
        </Modal>
        <View>
          <Text style={hotline.heading}>Emergency Hotlines</Text>
        </View>

        <View style={hotline.content}>
          {hotlines &&
            hotlines.map((eachHotline) => (
              <Card
                key={eachHotline.hotline_id}
                hotline_name={eachHotline.hotline_name}
                description={eachHotline.hotline_description}
                contact={eachHotline.hotline_contact}
              />
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Hotlines;

const hotline = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  heading: {
    color: "#FF0F00",
    fontWeight: "700",
    lineHeight: 36,
    fontSize: 32,
    textAlign: "center",
    padding: 10,
  },
  content: {
    flex: 1,
    gap: 10,
  },
});
