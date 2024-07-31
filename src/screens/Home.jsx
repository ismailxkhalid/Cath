import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from "react-native-responsive-screen";
import React from "react";

const Home = ({ navigation }) => {
  return (
    // TODO: SCREEN STARTS HERE
    <View className="w-full h-full bg-white">
      <StatusBar barStyle="auto" backgroundColor="white" />
      {/* TODO: HEADER START HERE */}
      <View
        style={{ height: h(50) }}
        className=" flex items-center justify-center "
      >
        <Image
          className=" mt-10"
          style={{
            width: w(60),
            height: h(40),
          }}
          source={require("../../assets/logo.png")}
        />
        <Text className="" style={{ fontSize: w(10), fontWeight: "bold" }}>
          Cath Calculator
        </Text>
      </View>
      {/*TODO: BUTTONS START HERE */}
      <View
        style={{ height: h(40), width: w(100) }}
        className=" flex items-center "
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Calculations")}
          style={{ height: h(8), paddingHorizontal: w(5), marginTop: h(8) }}
          className="bg-red-600 flex items-center justify-center  rounded-full leading-none shadow-2xl"
        >
          <Text
            style={{ fontSize: w(4) }}
            className=" text-white text-center font-bold"
          >
            Hemodynamic Calculations
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ height: h(8), paddingHorizontal: w(3), marginTop: h(2) }}
          onPress={() => navigation.navigate("PostCalculations")}
          className="bg-red-600 flex items-center justify-center  rounded-full"
        >
          <Text
            style={{
              fontSize: w(3.7),

              flexWrap: "nowrap",
            }}
            className=" text-white text-center font-bold"
          >
            Post Hyperoxia Hymodynamic Calculations
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ height: h(8), paddingHorizontal: w(15), marginTop: h(5) }}
          className="bg-blue-600 flex flex-row items-center justify-center  rounded-full shadow-2xl"
          onPress={() => navigation.navigate("Profile")}
        >
          <Text
            style={{
              fontSize: w(4.5),
              fontWeight: "bold",
              flexWrap: "nowrap",
            }}
            className=" text-white mr-2"
          >
            Generate Report
          </Text>
          <Ionicons name="document-text" size={w(9)} color="white" />
        </TouchableOpacity>
      </View>
      {/* BUTTONS END HERE  */}

      {/* TODO: FOOTER START HERE  */}
      <View
        style={{ height: h(10), paddingLeft: w(2), paddingTop: h(3) }}
        className=""
      >
        <Text
          style={{ fontSize: w(3.5) }}
          className="text-red-600 italic font-semibold "
        >
          DR. Talal Arshad
        </Text>
        <Text
          style={{ fontSize: w(3.5) }}
          className="text-red-600 italic font-semibold "
        >
          PAEDS CARDIOLOGIST - NICVD KARACHI
        </Text>
      </View>
    </View>
  );
};

export default Home;
