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

const SupportedInfo = ({ navigation }) => {
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
                <Ionicons
                  name="document-attach-outline"
                  size={w(7)}
                  color="black"
                />
                <Text
                  style={{ fontSize: w(5.3) }}
                  className="font-semibold ml-1 "
                >
                  Supported Info
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
                  style={{ width: w(41) }}
                  className="flex items-center justify-center border-r border-orange-100"
                >
                  <TouchableOpacity
                    onPress={() => handleTextPress("SV")}
                    style={[
                      styles.textContainer,
                      selectedText === "SV" && styles.selectedTextContainer,
                    ]}
                  >
                    <Text style={styles.text}>SV</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleTextPress("RV")}
                    style={[
                      styles.textContainer,
                      selectedText === "RV" && styles.selectedTextContainer,
                    ]}
                  >
                    <Text style={styles.text}>RV</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleTextPress("MPA")}
                    style={[
                      styles.textContainer,
                      selectedText === "MPA" && styles.selectedTextContainer,
                    ]}
                  >
                    <Text style={styles.text}>MPA</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleTextPress("LPA")}
                    style={[
                      styles.textContainer,
                      selectedText === "LPA" && styles.selectedTextContainer,
                    ]}
                  >
                    <Text style={styles.text}>LPA</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleTextPress("RPA")}
                    style={[
                      styles.textContainer,
                      selectedText === "RPA" && styles.selectedTextContainer,
                    ]}
                  >
                    <Text style={styles.text}>RPA</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleTextPress("LV")}
                    style={[
                      styles.textContainer,
                      selectedText === "LV" && styles.selectedTextContainer,
                    ]}
                  >
                    <Text style={styles.text}>LV</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleTextPress("AORTIC ROOT")}
                    style={[
                      styles.textContainer,
                      selectedText === "AORTIC ROOT" &&
                        styles.selectedTextContainer,
                    ]}
                  >
                    <Text style={styles.text}>AORTIC ROOT</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleTextPress("AORTIC ARCH")}
                    style={[
                      styles.textContainer,
                      selectedText === "AORTIC ARCH" &&
                        styles.selectedTextContainer,
                    ]}
                  >
                    <Text style={styles.text}>AORTIC ARCH</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleTextPress("AAO")}
                    style={[
                      styles.textContainer,
                      selectedText === "AAO" && styles.selectedTextContainer,
                    ]}
                  >
                    <Text style={styles.text}>AAO</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleTextPress("DAO")}
                    style={[
                      styles.textContainer,
                      selectedText === "DAO" && styles.selectedTextContainer,
                    ]}
                  >
                    <Text style={styles.text}>DAO</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleTextPress("COLLATERLS")}
                    style={[
                      styles.textContainer,
                      selectedText === "COLLATERLS" &&
                        styles.selectedTextContainer,
                    ]}
                  >
                    <Text style={styles.text}>COLLATERLS</Text>
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
                  style={{ width: w(55), height: h(40), padding: w(2) }}
                  className=" Right input main container flex w-full "
                >
                  {/* TODO: SV INPUT STARTS HERE */}
                  <View className={`${selectedText === "SV" ? "" : "hidden"} `}>
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow bg-zinc-100 border-zinc-300"
                      multiline={true}
                      placeholder="SV"
                      readOnly={true}
                    />
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow mt-2"
                      multiline={true}
                      placeholder="ML"
                    />
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow mt-2"
                      multiline={true}
                      placeholder="Position"
                    />
                    <TouchableOpacity className="self-center bg-blue-200 px-5 py-2 rounded-lg mt-2">
                      <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                  </View>
                  {/* TODO: RV INPUT STARTS HERE */}
                  <View className={`${selectedText === "RV" ? "" : "hidden"} `}>
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow bg-zinc-100 border-zinc-300"
                      multiline={true}
                      placeholder="RV"
                      readOnly={true}
                    />
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow mt-2"
                      multiline={true}
                      placeholder="ML"
                    />
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow mt-2"
                      multiline={true}
                      placeholder="Position"
                    />
                    <TouchableOpacity className="self-center bg-blue-200 px-5 py-2 rounded-lg mt-2">
                      <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                  </View>
                  {/* TODO: MPA INPUT STARTS HERE */}
                  <View
                    className={`${selectedText === "MPA" ? "" : "hidden"} `}
                  >
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow bg-zinc-100 border-zinc-300"
                      multiline={true}
                      placeholder="MPA"
                      readOnly={true}
                    />
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow mt-2"
                      multiline={true}
                      placeholder="ML"
                    />
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow mt-2"
                      multiline={true}
                      placeholder="Position"
                    />
                    <TouchableOpacity className="self-center bg-blue-200 px-5 py-2 rounded-lg mt-2">
                      <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                  </View>
                  {/* TODO: LPA INPUT STARTS HERE */}
                  <View
                    className={`${selectedText === "LPA" ? "" : "hidden"} `}
                  >
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow bg-zinc-100 border-zinc-300"
                      multiline={true}
                      placeholder="LPA"
                      readOnly={true}
                    />
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow mt-2"
                      multiline={true}
                      placeholder="ML"
                    />
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow mt-2"
                      multiline={true}
                      placeholder="Position"
                    />
                    <TouchableOpacity className="self-center bg-blue-200 px-5 py-2 rounded-lg mt-2">
                      <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                  </View>
                  {/* TODO: RPA INPUT STARTS HERE */}
                  <View
                    className={`${selectedText === "RPA" ? "" : "hidden"} `}
                  >
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow bg-zinc-100 border-zinc-300"
                      multiline={true}
                      placeholder="RPA"
                      readOnly={true}
                    />
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow mt-2"
                      multiline={true}
                      placeholder="ML"
                    />
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow mt-2"
                      multiline={true}
                      placeholder="Position"
                    />
                    <TouchableOpacity className="self-center bg-blue-200 px-5 py-2 rounded-lg mt-2">
                      <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                  </View>
                  {/* TODO: LV INPUT STARTS HERE */}
                  <View className={`${selectedText === "LV" ? "" : "hidden"} `}>
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow bg-zinc-100 border-zinc-300"
                      multiline={true}
                      placeholder="LV"
                      readOnly={true}
                    />
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow mt-2"
                      multiline={true}
                      placeholder="ML"
                    />
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow mt-2"
                      multiline={true}
                      placeholder="Position"
                    />
                    <TouchableOpacity className="self-center bg-blue-200 px-5 py-2 rounded-lg mt-2">
                      <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                  </View>
                  {/* TODO: AORTIC ROOT INPUT STARTS HERE */}
                  <View
                    className={`${
                      selectedText === "AORTIC ROOT" ? "" : "hidden"
                    } `}
                  >
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow bg-zinc-100 border-zinc-300"
                      multiline={true}
                      placeholder="AORTIC ROOT"
                      readOnly={true}
                    />
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow mt-2"
                      multiline={true}
                      placeholder="ML"
                    />
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow mt-2"
                      multiline={true}
                      placeholder="Position"
                    />
                    <TouchableOpacity className="self-center bg-blue-200 px-5 py-2 rounded-lg mt-2">
                      <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                  </View>
                  {/* TODO: AORTIC ARCH INPUT STARTS HERE */}
                  <View
                    className={`${
                      selectedText === "AORTIC ARCH" ? "" : "hidden"
                    } `}
                  >
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow bg-zinc-100 border-zinc-300"
                      multiline={true}
                      placeholder="AORTIC ARCH"
                      readOnly={true}
                    />
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow mt-2"
                      multiline={true}
                      placeholder="ML"
                    />
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow mt-2"
                      multiline={true}
                      placeholder="Position"
                    />
                    <TouchableOpacity className="self-center bg-blue-200 px-5 py-2 rounded-lg mt-2">
                      <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                  </View>
                  {/* TODO: AAO INPUT STARTS HERE */}
                  <View
                    className={`${selectedText === "AAO" ? "" : "hidden"} `}
                  >
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow bg-zinc-100 border-zinc-300"
                      multiline={true}
                      placeholder="AAO"
                      readOnly={true}
                    />
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow mt-2"
                      multiline={true}
                      placeholder="ML"
                    />
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow mt-2"
                      multiline={true}
                      placeholder="Position"
                    />
                    <TouchableOpacity className="self-center bg-blue-200 px-5 py-2 rounded-lg mt-2">
                      <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                  </View>
                  {/* TODO: DAO INPUT STARTS HERE */}
                  <View
                    className={`${selectedText === "DAO" ? "" : "hidden"} `}
                  >
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow bg-zinc-100 border-zinc-300"
                      multiline={true}
                      placeholder="DAO"
                      readOnly={true}
                    />
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow mt-2"
                      multiline={true}
                      placeholder="ML"
                    />
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow mt-2"
                      multiline={true}
                      placeholder="Position"
                    />
                    <TouchableOpacity className="self-center bg-blue-200 px-5 py-2 rounded-lg mt-2">
                      <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                  </View>
                  {/* TODO: COLLATERLS INPUT STARTS HERE */}
                  <View
                    className={`${
                      selectedText === "COLLATERLS" ? "" : "hidden"
                    } `}
                  >
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow bg-zinc-100 border-zinc-300"
                      multiline={true}
                      placeholder="COLLATERLS"
                      readOnly={true}
                    />
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow mt-2"
                      multiline={true}
                      placeholder="ML"
                    />
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow mt-2"
                      multiline={true}
                      placeholder="Position"
                    />
                    <TouchableOpacity className="self-center bg-blue-200 px-5 py-2 rounded-lg mt-2">
                      <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                  </View>
                  {/* TODO: OTHER INPUT STARTS HERE */}
                  <View
                    className={`${selectedText === "OTHER" ? "" : "hidden"} `}
                  >
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow "
                      multiline={true}
                      placeholder="SITE"
                    />
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow mt-2"
                      multiline={true}
                      placeholder="ML"
                    />
                    <TextInput
                      style={styles.placeholderText}
                      className="border rounded-lg py-1 pl-1 text-lg flex flex-grow mt-2"
                      multiline={true}
                      placeholder="Position"
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
                onPress={() => navigation.navigate("Results")}
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
    width: w(32),
    color: "#9A3412",
  },
  buttonText: {
    fontSize: w(4),
  },
  placeholderText: {
    height: h(5),
    fontSize: w(3),
  },
});

export default SupportedInfo;
