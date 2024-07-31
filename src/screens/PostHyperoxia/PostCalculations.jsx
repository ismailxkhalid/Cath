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
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from "react-native-responsive-screen";
import AppContext from "../../context/AppContext";
1;

const PostCalculations = ({ navigation }) => {
  const { postHyperoxiaData, setPostHyperoxiaData } = useContext(AppContext);
  const [textInputValue, setTextInputValue] = useState("");

  const handleChange = (key, value) => {
    setPostHyperoxiaData((prevData) => ({
      ...prevData,
      [key]: value === "" ? undefined : Number(value), // Check for empty input
    }));
  };

  // HANDEL CLEAR METHOD
  const handleClear = () => {
    setPostHyperoxiaData({});
    setTextInputValue("");
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="auto" />
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
                paddingHorizontal: w(1),
              }}
            >
              <View
                style={{
                  height: h(5.5),
                  zIndex: 10,
                  paddingHorizontal: w(2),
                  backgroundColor: "white",
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
                      className="flex flex-row items-center justify-between  bg-slate-200 rounded-xl "
                    >
                      <Text
                        style={{ fontSize: w(5) }}
                        className="text-center  leading-none ml-2"
                      >
                        HB
                      </Text>
                      <TextInput
                        placeholder="HB"
                        style={{
                          fontSize: w(4),
                          paddingVertical: h(0.9),
                          width: w(40),
                          paddingLeft: w(2),
                        }}
                        className="border rounded-lg border-slate-600"
                        keyboardType="numeric"
                        value={textInputValue}
                        onChange={(e) => setTextInputValue(e.target.value)}
                        onChangeText={(text) => handleChange("HB", text)}
                      />
                    </View>
                    <View
                      style={{ height: h(6) }}
                      className="flex flex-row items-center justify-between rounded-xl   "
                    >
                      <View className="flex flex-row items-center">
                        <Text
                          style={{ fontSize: w(5) }}
                          className="text-center font-semibold leading-none mx-2 "
                        >
                          AO O2 Sat
                        </Text>
                        <TextInput
                          placeholder="AO O2 Sat"
                          style={{
                            fontSize: w(4),
                            paddingVertical: h(0.9),
                            width: w(25),
                            paddingHorizontal: w(1),
                          }}
                          className="border rounded-lg border-slate-600"
                          keyboardType="numeric"
                          value={textInputValue}
                          onChange={(e) => setTextInputValue(e.target.value)}
                          onChangeText={(text) => handleChange("AOO2Sat", text)}
                        />
                      </View>
                      <View className="flex flex-row items-center">
                        <Text
                          style={{ fontSize: w(5.5) }}
                          className="text-center font-semibold leading-none mx-2 "
                        >
                          PO2
                        </Text>
                        <TextInput
                          placeholder="PO2"
                          style={{
                            fontSize: w(4),
                            paddingVertical: h(0.9),
                            width: w(15),
                            paddingLeft: w(2),
                          }}
                          className="border rounded-lg border-slate-600 bg-lime-50"
                          keyboardType="numeric"
                          value={textInputValue}
                          onChange={(e) => setTextInputValue(e.target.value)}
                          onChangeText={(text) => handleChange("AOPO2", text)}
                        />
                      </View>
                    </View>
                    <View
                      style={{ height: h(6) }}
                      className="flex flex-row items-center justify-between bg-slate-200 rounded-xl"
                    >
                      <View className="flex flex-row items-center">
                        <Text
                          style={{ fontSize: w(5) }}
                          className="text-center leading-none ml-2 mr-1"
                        >
                          MV O2 Sat
                        </Text>
                        <TextInput
                          placeholder="MV O2 Sat"
                          style={{
                            fontSize: w(4),
                            paddingVertical: h(0.9),
                            width: w(25),
                            paddingHorizontal: w(1),
                          }}
                          className="border rounded-lg border-slate-600 "
                          keyboardType="numeric"
                          value={textInputValue}
                          onChange={(e) => setTextInputValue(e.target.value)}
                          onChangeText={(text) => handleChange("MVO2Sat", text)}
                        />
                      </View>
                      <View className="flex flex-row items-center">
                        <Text
                          style={{ fontSize: w(5.5) }}
                          className="text-center  leading-none mx-2 "
                        >
                          PO2
                        </Text>
                        <TextInput
                          placeholder="PO2"
                          style={{
                            fontSize: w(4),
                            paddingVertical: h(0.9),
                            width: w(15),
                            paddingLeft: w(2),
                          }}
                          className="border rounded-lg border-slate-600 bg-lime-50"
                          keyboardType="numeric"
                          value={textInputValue}
                          onChange={(e) => setTextInputValue(e.target.value)}
                          onChangeText={(text) => handleChange("MVPO2", text)}
                        />
                      </View>
                    </View>
                    <View
                      style={{ height: h(6) }}
                      className="flex flex-row items-center justify-between rounded-xl"
                    >
                      <View className="flex flex-row items-center">
                        <Text
                          style={{ fontSize: w(5) }}
                          className="text-center font-semibold leading-none mx-2 "
                        >
                          PV O2 Sat
                        </Text>
                        <TextInput
                          placeholder="PV O2 Sat"
                          style={{
                            fontSize: w(4),
                            paddingVertical: h(0.9),
                            width: w(25),
                            paddingHorizontal: w(1),
                          }}
                          className="border rounded-lg border-slate-600"
                          keyboardType="numeric"
                          value={textInputValue}
                          onChange={(e) => setTextInputValue(e.target.value)}
                          onChangeText={(text) => handleChange("PVO2Sat", text)}
                        />
                      </View>
                      <View className="flex flex-row items-center">
                        <Text
                          style={{ fontSize: w(5.5) }}
                          className="text-center font-semibold leading-none mx-2 "
                        >
                          PO2
                        </Text>
                        <TextInput
                          placeholder="PO2"
                          style={{
                            fontSize: w(4),
                            paddingVertical: h(0.9),
                            width: w(15),
                            paddingLeft: w(2),
                          }}
                          className="border rounded-lg border-slate-600 bg-lime-50"
                          keyboardType="numeric"
                          value={textInputValue}
                          onChange={(e) => setTextInputValue(e.target.value)}
                          onChangeText={(text) => handleChange("PVPO2", text)}
                        />
                      </View>
                    </View>
                    <View
                      style={{ height: h(6) }}
                      className="flex flex-row items-center justify-between bg-slate-200 rounded-xl"
                    >
                      <View className="flex flex-row items-center">
                        <Text
                          style={{ fontSize: w(5) }}
                          className="text-center  leading-none mx-2 "
                        >
                          PA O2 Sat
                        </Text>
                        <TextInput
                          placeholder="PA O2 Sat"
                          style={{
                            fontSize: w(4),
                            paddingVertical: h(0.9),
                            width: w(25),
                            paddingHorizontal: w(1),
                          }}
                          className="border rounded-lg border-slate-600"
                          keyboardType="numeric"
                          value={textInputValue}
                          onChange={(e) => setTextInputValue(e.target.value)}
                          onChangeText={(text) => handleChange("PAO2Sat", text)}
                        />
                      </View>
                      <View className="flex flex-row items-center">
                        <Text
                          style={{ fontSize: w(5.5) }}
                          className="text-center  leading-none mx-2 "
                        >
                          PO2
                        </Text>
                        <TextInput
                          placeholder="PO2"
                          style={{
                            fontSize: w(4),
                            paddingVertical: h(0.9),
                            width: w(15),
                            paddingLeft: w(2),
                          }}
                          className="border rounded-lg border-slate-600 bg-lime-50"
                          keyboardType="numeric"
                          value={textInputValue}
                          onChange={(e) => setTextInputValue(e.target.value)}
                          onChangeText={(text) => handleChange("PAPO2", text)}
                        />
                      </View>
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
                        style={{
                          fontSize: w(4),
                          paddingVertical: h(0.9),
                          width: w(40),
                          paddingLeft: w(2),
                        }}
                        className="border rounded-lg border-slate-600"
                        keyboardType="numeric"
                        value={textInputValue}
                        onChange={(e) => setTextInputValue(e.target.value)}
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
                        style={{
                          fontSize: w(4),
                          paddingVertical: h(0.9),
                          width: w(40),
                          paddingLeft: w(2),
                        }}
                        className="border rounded-lg border-slate-600"
                        keyboardType="numeric"
                        value={textInputValue}
                        onChange={(e) => setTextInputValue(e.target.value)}
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
                        style={{
                          fontSize: w(4),
                          paddingVertical: h(0.9),
                          width: w(40),
                          paddingLeft: w(2),
                        }}
                        className="border rounded-lg border-slate-600"
                        keyboardType="numeric"
                        value={textInputValue}
                        onChange={(e) => setTextInputValue(e.target.value)}
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
                        style={{
                          fontSize: w(4),
                          paddingVertical: h(0.9),
                          width: w(40),
                          paddingLeft: w(2),
                        }}
                        className="border rounded-lg border-slate-600"
                        keyboardType="numeric"
                        value={textInputValue}
                        onChange={(e) => setTextInputValue(e.target.value)}
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
                    zIndex: 10,
                    alignSelf: "center",
                    marginBottom: Platform.OS === "ios" ? h(1) : h(1), // Adjust the marginBottom for iOS to accommodate the keyboard
                  }}
                  onPress={() => {
                    navigation.navigate("PostResult");
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
    </>
  );
};

export default PostCalculations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
