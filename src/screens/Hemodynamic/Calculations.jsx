import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from "react-native-responsive-screen";
import AppContext from "../../context/AppContext";

const Calculations = ({ navigation }) => {
  const { hemodynamicData, setHemodynamicData } = useContext(AppContext);
  const [textInputValue, setTextInputValue] = useState("");

  const handleChange = (key, value) => {
    setHemodynamicData((prevData) => ({
      ...prevData,
      [key]: value === "" ? undefined : Number(value), // Check for empty input
    }));
  };

  // HANDEL CLEAR METHOD
  const handleClear = () => {
    setHemodynamicData({});
    setTextInputValue("");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="auto" backgroundColor={"white"} />
      {/* TODO: HEADER START HERE */}
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
            <View
              style={{
                height: h(5),
                zIndex: 10,
                backgroundColor: "white",
                marginBottom: h(1),
              }}
              className=" flex flex-row items-center justify-between "
            >
              <TouchableOpacity
                style={{ paddingHorizontal: w(3), paddingVertical: h(1) }}
                onPress={() => navigation.navigate("Home")}
                className="bg-blue-500 flex flex-row  items-center justify-center rounded-lg "
              >
                <Ionicons name="home-outline" size={w(5)} color="white" />
                <Text
                  style={{ fontSize: w(3.5) }}
                  className="text-center font-semibold text-white ml-2"
                >
                  HOME
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ paddingHorizontal: w(5.5), paddingVertical: h(1.1) }}
                className="bg-red-500 flex flex-row-reverse items-center justify-center rounded-lg "
                onPress={handleClear}
              >
                <Text
                  style={{ fontSize: w(3.5) }}
                  className="text-center font-semibold text-white "
                >
                  CLEAR
                </Text>
              </TouchableOpacity>
            </View>
            {/* //TODO: CALCULATIONS START HERE */}

            <View style={{ flex: 1 }}>
              <ScrollView
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
              >
                <View className="px-1 ">
                  <View
                    style={{ height: h(6) }}
                    className="flex flex-row items-center justify-between bg-slate-200 rounded-xl"
                  >
                    <Text
                      style={{ fontSize: w(5) }}
                      className="text-center  leading-none ml-2"
                    >
                      HB
                    </Text>
                    <TextInput
                      value={textInputValue}
                      onChange={(e) => setTextInputValue(e.target.value)}
                      placeholder="HB"
                      style={{
                        fontSize: w(4),
                        paddingVertical: h(0.9),
                        width: w(40),
                        paddingLeft: w(2),
                      }}
                      className="border rounded-lg border-slate-600"
                      keyboardType="numeric"
                      onChangeText={(text) => handleChange("HB", text)}
                    />
                  </View>
                  <View
                    style={{ height: h(6) }}
                    className="flex flex-row items-center justify-between rounded-xl   "
                  >
                    <Text
                      style={{ fontSize: w(5) }}
                      className="text-center font-semibold leading-none ml-2"
                    >
                      AO O2 Sat
                    </Text>
                    <TextInput
                      placeholder="AO O2 Sat"
                      value={textInputValue}
                      onChange={(e) => setTextInputValue(e.target.value)}
                      style={{
                        fontSize: w(4),
                        paddingVertical: h(0.9),
                        width: w(40),
                        paddingLeft: w(2),
                      }}
                      className="border rounded-lg border-slate-600"
                      keyboardType="numeric"
                      onChangeText={(text) => handleChange("AOO2Sat", text)}
                    />
                  </View>
                  <View
                    style={{ height: h(6) }}
                    className="flex flex-row items-center justify-between bg-slate-200 rounded-xl"
                  >
                    <Text
                      style={{ fontSize: w(5) }}
                      className="text-center  leading-none ml-2"
                    >
                      MV O2 Sat
                    </Text>
                    <TextInput
                      placeholder="MV O2 Sat"
                      value={textInputValue}
                      onChange={(e) => setTextInputValue(e.target.value)}
                      style={{
                        fontSize: w(4),
                        paddingVertical: h(0.9),
                        width: w(40),
                        paddingLeft: w(2),
                      }}
                      className="border rounded-lg border-slate-600"
                      keyboardType="numeric"
                      onChangeText={(text) => handleChange("MVO2Sat", text)}
                    />
                  </View>
                  <View
                    style={{ height: h(6) }}
                    className="flex flex-row items-center justify-between rounded-xl"
                  >
                    <Text
                      style={{ fontSize: w(5) }}
                      className="text-center font-semibold leading-none ml-2"
                    >
                      PV O2 Sat
                    </Text>
                    <TextInput
                      placeholder="PV O2 Sat"
                      value={textInputValue}
                      onChange={(e) => setTextInputValue(e.target.value)}
                      style={{
                        fontSize: w(4),
                        paddingVertical: h(0.9),
                        width: w(40),
                        paddingLeft: w(2),
                      }}
                      className="border rounded-lg border-slate-600"
                      keyboardType="numeric"
                      onChangeText={(text) => handleChange("PVO2Sat", text)}
                    />
                  </View>
                  <View
                    style={{ height: h(6) }}
                    className="flex flex-row items-center justify-between bg-slate-200 rounded-xl"
                  >
                    <Text
                      style={{ fontSize: w(5) }}
                      className="text-center  leading-none ml-2"
                    >
                      PA O2 Sat
                    </Text>
                    <TextInput
                      placeholder="PA O2 Sat"
                      value={textInputValue}
                      onChange={(e) => setTextInputValue(e.target.value)}
                      style={{
                        fontSize: w(4),
                        paddingVertical: h(0.9),
                        width: w(40),
                        paddingLeft: w(2),
                      }}
                      className="border rounded-lg border-slate-600"
                      keyboardType="numeric"
                      onChangeText={(text) => handleChange("PAO2Sat", text)}
                    />
                  </View>
                  <View
                    style={{ height: h(6) }}
                    className="flex flex-row items-center justify-between rounded-xl"
                  >
                    <Text
                      style={{ fontSize: w(5) }}
                      className="text-center font-semibold leading-none ml-2"
                    >
                      AO Mean P
                    </Text>
                    <TextInput
                      placeholder="AO Mean P"
                      value={textInputValue}
                      onChange={(e) => setTextInputValue(e.target.value)}
                      style={{
                        fontSize: w(4),
                        paddingVertical: h(0.9),
                        width: w(40),
                        paddingLeft: w(2),
                      }}
                      className="border rounded-lg border-slate-600"
                      keyboardType="numeric"
                      onChangeText={(text) => handleChange("AOMeanP", text)}
                    />
                  </View>
                  <View
                    style={{ height: h(6) }}
                    className="flex flex-row items-center justify-between bg-slate-200 rounded-xl"
                  >
                    <Text
                      style={{ fontSize: w(5) }}
                      className="text-center  leading-none ml-2"
                    >
                      RA Mean P
                    </Text>
                    <TextInput
                      placeholder="RA Mean P"
                      value={textInputValue}
                      onChange={(e) => setTextInputValue(e.target.value)}
                      style={{
                        fontSize: w(4),
                        paddingVertical: h(0.9),
                        width: w(40),
                        paddingLeft: w(2),
                      }}
                      className="border rounded-lg border-slate-600"
                      keyboardType="numeric"
                      onChangeText={(text) => handleChange("RAMeanP", text)}
                    />
                  </View>
                  <View
                    style={{ height: h(6) }}
                    className="flex flex-row items-center justify-between  rounded-xl"
                  >
                    <Text
                      style={{ fontSize: w(5) }}
                      className="text-center font-semibold leading-none ml-2"
                    >
                      PA Mean P
                    </Text>
                    <TextInput
                      placeholder="PA Mean P"
                      value={textInputValue}
                      onChange={(e) => setTextInputValue(e.target.value)}
                      style={{
                        fontSize: w(4),
                        paddingVertical: h(0.9),
                        width: w(40),
                        paddingLeft: w(2),
                      }}
                      className="border rounded-lg border-slate-600"
                      keyboardType="numeric"
                      onChangeText={(text) => handleChange("PAMeanP", text)}
                    />
                  </View>
                  <View
                    style={{ height: h(6) }}
                    className="flex flex-row items-center justify-between bg-slate-200 rounded-xl"
                  >
                    <Text
                      style={{ fontSize: w(5) }}
                      className="text-center leading-none ml-2"
                    >
                      LA Mean P
                    </Text>
                    <TextInput
                      placeholder="LA Mean P"
                      value={textInputValue}
                      onChange={(e) => setTextInputValue(e.target.value)}
                      style={{
                        fontSize: w(4),
                        paddingVertical: h(0.9),
                        width: w(40),
                        paddingLeft: w(2),
                      }}
                      className="border rounded-lg border-slate-600"
                      keyboardType="numeric"
                      onChangeText={(text) => handleChange("LAMeanP", text)}
                    />
                  </View>

                  {/* Other input fields omitted for brevity */}
                </View>
              </ScrollView>

              <TouchableOpacity
                style={{
                  paddingHorizontal: w(3),
                  paddingVertical: h(1.3),
                  width: w(60),
                  // zIndex: 10,
                  alignSelf: "center",
                  marginBottom: Platform.OS === "ios" ? h(1) : h(1), // Adjust the marginBottom for iOS to accommodate the keyboard
                }}
                onPress={() => {
                  navigation.navigate("Result");
                }}
                className="bg-blue-500 flex items-center justify-center rounded-lg self-center mt-3"
              >
                <Text
                  style={{ fontSize: w(3.5) }}
                  className="text-center font-semibold uppercase text-white"
                >
                  Calculate
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Calculations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
