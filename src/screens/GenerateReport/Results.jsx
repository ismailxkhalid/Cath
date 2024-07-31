import {
  View,
  Text,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
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
import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

const Results = ({ navigation }) => {
  const [selectedText, setSelectedText] = useState(null);

  const handleTextPress = (text) => {
    setSelectedText(text);
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
              <View className="flex flex-row items-center">
                <Foundation name="results" size={w(7)} color="black" />
                <Text
                  style={{ fontSize: w(5.3) }}
                  className="font-semibold ml-1 "
                >
                  Results
                </Text>
              </View>
            </View>

            {/* TODO: CONTENT START HERE */}
            <ScrollView
              style={{ marginBottom: h(1) }}
              showsVerticalScrollIndicator={false}
              className="flex-1"
            >
              <View className="flex flex-row items-start border-b border-orange-800 ">
                <View
                  style={{ width: w(40), height: h(40) }}
                  className="flex items-center border-r border-orange-100"
                >
                  <TouchableOpacity
                    onPress={() => handleTextPress("DIAGNOSIS")}
                    style={[
                      styles.textContainer,
                      selectedText === "DIAGNOSIS" &&
                        styles.selectedTextContainer,
                    ]}
                  >
                    <Text style={styles.text}>DIAGNOSIS</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleTextPress("INDICATIONS")}
                    style={[
                      styles.textContainer,
                      selectedText === "INDICATIONS" &&
                        styles.selectedTextContainer,
                    ]}
                  >
                    <Text style={styles.text}>INDICATIONS</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleTextPress("ROUTE")}
                    style={[
                      styles.textContainer,
                      selectedText === "ROUTE" && styles.selectedTextContainer,
                    ]}
                  >
                    <Text style={styles.text}>ROUTE</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleTextPress("CATHETERS")}
                    style={[
                      styles.textContainer,
                      selectedText === "CATHETERS" &&
                        styles.selectedTextContainer,
                    ]}
                  >
                    <Text style={styles.text}>CATHETERS</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleTextPress("ANGIOGRAM")}
                    style={[
                      styles.textContainer,
                      selectedText === "ANGIOGRAM" &&
                        styles.selectedTextContainer,
                    ]}
                  >
                    <Text style={styles.text}>ANGIOGRAM</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleTextPress("PROCEDURE")}
                    style={[
                      styles.textContainer,
                      selectedText === "PROCEDURE" &&
                        styles.selectedTextContainer,
                    ]}
                  >
                    <Text style={styles.text}>PROCEDURE</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleTextPress("OTHER")}
                    style={[
                      styles.textContainer,
                      selectedText === "OTHER" && styles.selectedTextContainer,
                    ]}
                  >
                    <Text style={styles.text}>OTHER</Text>
                  </TouchableOpacity>
                </View>
                {/* TODO:RIGHT INPUTS STARTS HERE */}
                <View
                  style={{ width: w(56), height: h(40), padding: w(2) }}
                  className=" Right input main container flex w-full "
                >
                  {/* TODO: DIAGNOSIS INPUT STARTS HERE */}
                  <View
                    className={`${
                      selectedText === "DIAGNOSIS" ? "" : "hidden"
                    } `}
                  >
                    <Text
                      style={{ fontSize: w(4) }}
                      className="font-semibold mb-1"
                    >
                      DIAGNOSIS
                    </Text>
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow"
                      multiline={true}
                      placeholder="Type ..."
                    />
                    <TouchableOpacity className="self-center bg-blue-200 px-5 py-2 rounded-lg mt-2">
                      <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                  </View>
                  {/* TODO: INDIICATIONS INPUT STARTS HERE */}
                  <View
                    className={`${
                      selectedText === "INDICATIONS" ? "" : "hidden"
                    } `}
                  >
                    <Text
                      style={{ fontSize: w(4) }}
                      className="font-semibold mb-1"
                    >
                      INDICATIONS
                    </Text>
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow"
                      multiline={true}
                      placeholder="Type ..."
                    />
                    <TouchableOpacity className="self-center bg-blue-200 px-5 py-2 rounded-lg mt-2">
                      <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                  </View>
                  {/* TODO: ROUTE INPUT STARTS HERE */}
                  <View
                    className={`${selectedText === "ROUTE" ? "" : "hidden"} `}
                  >
                    <Text
                      style={{ fontSize: w(4) }}
                      className="font-semibold mb-1"
                    >
                      ROUTE
                    </Text>
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow"
                      multiline={true}
                      placeholder="Type ..."
                    />
                    <TouchableOpacity className="self-center bg-blue-200 px-5 py-2 rounded-lg mt-2">
                      <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                  </View>
                  {/* TODO: CATHETERS INPUT STARTS HERE */}
                  <View
                    className={`${
                      selectedText === "CATHETERS" ? "" : "hidden"
                    } `}
                  >
                    <Text
                      style={{ fontSize: w(4) }}
                      className="font-semibold mb-1"
                    >
                      CATHETERS
                    </Text>
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow"
                      multiline={true}
                      placeholder="Type ..."
                    />
                    <TouchableOpacity className="self-center bg-blue-200 px-5 py-2 rounded-lg mt-2">
                      <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                  </View>
                  {/* TODO: ANGIOGRAM INPUT STARTS HERE */}
                  <View
                    className={`${
                      selectedText === "ANGIOGRAM" ? "" : "hidden"
                    } `}
                  >
                    <Text
                      style={{ fontSize: w(4) }}
                      className="font-semibold mb-1"
                    >
                      ANGIOGRAM
                    </Text>
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow"
                      multiline={true}
                      placeholder="Type ..."
                    />
                    <TouchableOpacity className="self-center bg-blue-200 px-5 py-2 rounded-lg mt-2">
                      <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                  </View>
                  {/* TODO: PROCEDURE INPUT STARTS HERE */}
                  <View
                    className={`${
                      selectedText === "PROCEDURE" ? "" : "hidden"
                    } `}
                  >
                    <Text
                      style={{ fontSize: w(4) }}
                      className="font-semibold mb-1"
                    >
                      PROCEDURE
                    </Text>
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow"
                      multiline={true}
                      placeholder="Type ..."
                    />
                    <TouchableOpacity className="self-center bg-blue-200 px-5 py-2 rounded-lg mt-2">
                      <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                  </View>
                  {/* TODO: OTHER INPUT STARTS HERE */}
                  <View
                    className={`${selectedText === "OTHER" ? "" : "hidden"} `}
                  >
                    <Text
                      style={{ fontSize: w(4) }}
                      className="font-semibold mb-1"
                    >
                      OTHER
                    </Text>
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow"
                      multiline={true}
                      placeholder="Type ..."
                    />
                    <TouchableOpacity className="self-center bg-blue-200 px-5 py-2 rounded-lg mt-2">
                      <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>

            {/* TODO: BOTTOM BUTTONS  STARTS HERE  */}
            <View
              style={{
                height: h(7),
                zIndex: 10,
                backgroundColor: "white",
              }}
              className=" flex flex-row items-center justify-between  "
            >
              <TouchableOpacity
                style={{ paddingHorizontal: w(3), paddingVertical: h(1) }}
                onPress={() => navigation.navigate("PostHyperoxiaCalculations")}
                className=" bg-red-500 flex flex-row  items-center justify-center rounded-lg "
              >
                <Ionicons name="caret-back" size={w(5)} color="white" />
                <Text
                  style={{ fontSize: w(3.5) }}
                  className="text-center font-semibold text-white ml-1"
                >
                  BACK
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ paddingHorizontal: w(3), paddingVertical: h(1.1) }}
                className="bg-blue-500 flex flex-row items-center justify-center rounded-lg"
                onPress={() => navigation.navigate("SupportedInfo")}
              >
                <Text
                  style={{ fontSize: w(3.5) }}
                  className="text-center font-semibold text-white "
                >
                  NEXT
                </Text>
                <Ionicons name="caret-forward" size={w(5)} color="white" />
              </TouchableOpacity>
            </View>
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
    paddingHorizontal: w(4),
    paddingVertical: 5,
    marginBottom: 10,
    backgroundColor: "transparent",
    borderRadius: 5,
  },
  selectedTextContainer: {
    backgroundColor: "lightgray",
  },
  text: {
    fontSize: w(4), // Adjust the font size as needed
    width: w(31),
    color: "#9A3412",
  },
  button: {
    width: w(27),
    height: h(4),
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: w(4),
  },
  placeholderText: {
    height: h(28),
    textAlignVertical: "top",
    fontSize: w(3),
  },
});

export default Results;
