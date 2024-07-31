import {
  View,
  Text,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import AppContext from "../../context/AppContext";

const HemodynamicInfo = ({ navigation }) => {
  const {
    doctorList,
    setDoctorList,
    doctors,
    setDoctors,
    removeDoctorFromList,
    selectDoctorFromList,
  } = useContext(AppContext);

  const handleSelectDoctor = (index) => {
    selectDoctorFromList(index);
    navigation.navigate("Profile");
  };

  return (
    <SafeAreaView edges={["top", "left", "right"]} style={{ flex: 1 }}>
      <StatusBar barStyle="auto" backgroundColor="white" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 5 : 5}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              paddingHorizontal: w(3),
            }}
          >
            {/* TODO: HEADER START HERE */}

            <View
              style={{
                height: h(7),
                zIndex: 10,
                backgroundColor: "white",
              }}
              className=" flex flex-row items-center justify-between "
            >
              <TouchableOpacity
                style={{ paddingHorizontal: w(3), paddingVertical: h(1) }}
                onPress={() => navigation.navigate("Profile")}
                className=" bg-red-500 flex flex-row  items-center justify-center rounded-lg "
              >
                <Ionicons name="caret-back" size={w(6)} color="white" />
                <Text
                  style={{ fontSize: w(3.5) }}
                  className="text-center font-semibold text-white ml-1"
                >
                  BACK
                </Text>
              </TouchableOpacity>
              <View className="flex flex-row items-center">
                <FontAwesome6 name="user-doctor" size={w(6)} color="black" />
                <Text
                  style={{ fontSize: w(5.3) }}
                  className="font-semibold ml-1 "
                >
                  Doctor's List
                </Text>
              </View>
            </View>

            {/* TODO: CONTENT START HERE */}
            {doctorList.length <= 0 ? (
              <View className="flex flex-1 items-center justify-center">
                <Text className="text-lg font-semibold text-center">
                  Doctor's List is Empty, First add the Doctor Name from Profile
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Profile")}
                  className="flex flex-row items-center border border-slate-200 px-2 py-2 rounded-lg bg-blue-500 mt-2"
                >
                  <AntDesign name="adduser" size={w(6)} color="white" />
                  <Text className="text-white font-semibold"> Add Doctor</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={{ marginBottom: h(1) }} className="flex-1">
                {/* // Flat List of Added doctors */}
                <FlatList
                  data={doctorList}
                  renderItem={({ item, index }) => (
                    <View className="flex flex-row items-center justify-between border-b border-slate-100 mb-2">
                      <Text className="text-lg capitalize" key={index}>
                        Dr. {item}
                      </Text>
                      <View className="flex flex-row items-center gap-3">
                        <TouchableOpacity
                          className="border border-slate-200 px-2 py-1 rounded-lg bg-blue-400 "
                          onPress={() => handleSelectDoctor(index)}
                        >
                          <Text className="font-semibold text-white">
                            Select
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          className="border border-slate-200 px-1 py-1 rounded-lg bg-red-500 "
                          onPress={() => {
                            removeDoctorFromList(index);
                          }}
                        >
                          <Text className="font-semibold text-white">
                            Remove
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                />
              </View>
            )}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  textContainer: {
    paddingHorizontal: 50,
    paddingVertical: 5,
    marginBottom: 10,
    backgroundColor: "transparent",
    borderRadius: 5,
  },
  selectedTextContainer: {
    backgroundColor: "lightgray",
  },
  text: {
    fontSize: w(5.6), // Adjust the font size as needed
    color: "#9A3412",
  },
  valueText: {
    fontSize: w(4), // Adjust the font size as needed
  },
  valueInput: { width: w(27), height: h(3.8) },
});

export default HemodynamicInfo;
