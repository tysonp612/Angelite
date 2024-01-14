import React,{useEffect, useState} from 'react';
import { View, Text, ScrollView } from "react-native";
import ServiceContainer from "./../components/services/container";
import Button from "../components/addButton";
import {getAllServices} from "./../../../back_end/Control/axios_request/services"


const ServicesScreen = ({ navigation }) => {
  const [services,setServices] = useState();
  useEffect(()=>{
    const fecthData = async () => {


      
    }

  });
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            padding: 15,
            backgroundColor: "#ffff",
            width: "100%",
            height: "100%",
          }}
        >
          <ServiceContainer />
          <ServiceContainer />
          <ServiceContainer />
          <ServiceContainer />
          <ServiceContainer />
          <ServiceContainer />
          <ServiceContainer />
          <ServiceContainer />
          <ServiceContainer />
          <ServiceContainer />
          <ServiceContainer />
        </View>
      </ScrollView>
      <Button state="createService" />
    </View>
  );
};

export default ServicesScreen;
