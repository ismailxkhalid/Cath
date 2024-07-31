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
  FlatList,
  Alert,
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
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AppContext from "../../context/AppContext";
import { FontAwesome6 } from "@expo/vector-icons";
import RadioForm from "react-native-simple-radio-button";

const Profile = ({ navigation }) => {
  const {
    profileData,
    setProfileData,
    doctors,
    setDoctors,
    addDoctor,
    setAddDoctor,
    addToProfile,
    removeDoctor,
    saveAndAdd,
  } = useContext(AppContext);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const options = { day: "2-digit", month: "long", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-GB", options);
    hideDatePicker();
    setProfileData({ ...profileData, date: formattedDate });
  };
  const [ageValue, setAgeValue] = useState(0);
  const items = [
    { label: "Years", value: 0 },
    { label: "Months", value: 1 },
  ];
  const [genderValue, setGenderValue] = useState(0);
  const items2 = [
    { label: "Male", value: 0 },
    { label: "Female", value: 1 },
  ];

  return (
    <SafeAreaView edges={["top", "left", "right"]} style={{ flex: 1 }}>
      <StatusBar barStyle="auto" backgroundColor="white" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        // resetScrollToCoords={{ x: 0, y: 0 }}
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
                <Ionicons name="home-outline" size={w(4.4)} color="white" />
                <Text
                  style={{ fontSize: w(3.5) }}
                  className="text-center font-semibold text-white ml-2"
                >
                  HOME
                </Text>
              </TouchableOpacity>
              <View className="flex flex-row items-center">
                <AntDesign name="profile" size={w(6)} color="black" />
                <Text
                  style={{ fontSize: w(5.5) }}
                  className="font-semibold ml--1"
                >
                  Profile
                </Text>
              </View>
            </View>

            {/* TODO: CONTENT START HERE */}
            <ScrollView
              style={{ marginBottom: h(2) }}
              showsVerticalScrollIndicator={false}
            >
              <View
                style={{ height: h(5.8) }}
                className="flex flex-row items-center justify-between"
              >
                <Text style={{ fontSize: w(4.5) }}>Date : </Text>

                <TouchableOpacity
                  onPress={showDatePicker}
                  style={{ width: w(45) }}
                  className="flex flex-row items-center justify-center border border-slate-200 px-1 py-1 rounded-lg "
                >
                  <Text style={{ fontSize: w(3.7) }}>
                    {profileData.date
                      ? profileData.date
                      : "Click to Select Date"}
                  </Text>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
                <TouchableOpacity
                  onPress={() => setProfileData({ date: "" })}
                  className="flex flex-row items-center border border-slate-300 px-1 py-1 rounded-lg bg-slate-100"
                >
                  <Text style={{ fontSize: w(3.7) }}>Clear Date</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{ height: h(10) }}
                className="flex items-start border-t border-slate-300 "
              >
                <Text
                  style={{ fontSize: w(4.5), marginTop: h(1) }}
                  className="font-bold"
                >
                  Add/Select Doctors{" "}
                  <FontAwesome6
                    name="user-doctor"
                    size={w(4.5)}
                    color="black"
                  />
                </Text>

                <TouchableOpacity
                  onPress={() => navigation.navigate("DoctorList")}
                  style={{ width: w(94), marginTop: h(1) }}
                  className="flex flex-row items-center border border-slate-200 px-1 py-1 rounded-lg bg-slate-0"
                >
                  <Text style={{ fontSize: w(3.7) }}>
                    Click to Select Doctor from List{" "}
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{ height: h(5.8) }}
                className="flex flex-row items-center justify-between border-t border-slate-300 mt-1"
              >
                <TextInput
                  style={{ width: w(25), fontSize: w(3.5) }}
                  placeholder="Add Doctor"
                  className="border border-slate-400 px-1 py-1 rounded-lg"
                  value={addDoctor}
                  onChangeText={(text) => setAddDoctor(text)}
                />
                <TouchableOpacity
                  onPress={() => saveAndAdd(addDoctor)}
                  style={{ width: w(27) }}
                  className="flex flex-row items-center justify-center border border-slate-300 px-1 py-1 rounded-lg bg-slate-100"
                >
                  <Text style={{ fontSize: w(3.7) }}>Save & Add</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => addToProfile()}
                  style={{ width: w(33) }}
                  className="flex flex-row items-center justify-center border border-slate-300 px-1 py-1 rounded-lg bg-slate-100"
                >
                  <Text style={{ fontSize: w(3.7) }}>Add to Profile </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{ height: h(5.8) }}
                className="flex justify-center border-t border-slate-300"
              >
                <Text style={{ fontSize: w(4.5) }} className="font-bold">
                  Doctor Profile
                </Text>
              </View>
              <View>
                {doctors.map((doctor, index) => (
                  <View
                    key={index}
                    className="flex flex-row items-center justify-between border-b border-slate-300 px-1 py-1"
                  >
                    <TouchableOpacity className="">
                      <Text
                        className="font-semibold py-1 capitalize"
                        style={{ fontSize: w(4) }}
                      >
                        Dr. {doctor}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => removeDoctor(index)}
                      className="flex flex-row items-center border border-slate-300 px-2 py-1 rounded-lg bg-red-300"
                    >
                      <Text>Remove</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
              <View
                style={{ height: h(5.8) }}
                className="flex justify-center border-t border-slate-300"
              >
                <Text style={{ fontSize: w(4.5) }} className="font-bold">
                  Patient Profile
                </Text>
              </View>
              <View style={{ height: h(5.8) }}>
                <TextInput
                  placeholder="Patient Name"
                  style={{ fontSize: w(3.5) }}
                  className="border border-slate-400 px-2 py-1 rounded-lg "
                  onChangeText={(text) =>
                    setProfileData((prevData) => ({
                      ...prevData,
                      patientName: text,
                    }))
                  }
                />
              </View>
              <View
                style={{ height: h(5.8) }}
                className="flex flex-row items-start justify-between  "
              >
                <TextInput
                  placeholder="Patient Age"
                  style={{ fontSize: w(3.5), width: w(60) }}
                  className="border border-slate-400 px-2 py-1 rounded-lg"
                  onChangeText={(text) =>
                    setProfileData((prevData) => ({
                      ...prevData,
                      patientAge: text,
                    }))
                  }
                />
                <RadioForm
                  radio_props={items}
                  initial={ageValue}
                  onPress={(ageValue) => {
                    setAgeValue(ageValue);
                    setProfileData((prevData) => ({
                      ...prevData,
                      agePattern: ageValue === 0 ? "Years" : "Months", // Update profileData.agePattern
                    }));
                  }}
                  buttonColor="black"
                  labelHorizontal={false}
                  formHorizontal
                  buttonSize={10}
                  labelStyle={{ fontSize: w(3) }}
                  animation={true}
                />
              </View>
              <View
                style={{ height: h(5.8) }}
                className="flex flex-row items-center justify-between"
              >
                <Text style={{ fontSize: w(4) }}>Gender</Text>
                <RadioForm
                  radio_props={items2}
                  initial={genderValue}
                  onPress={(genderValue) => {
                    setGenderValue(genderValue); // Update genderValue
                    setProfileData((prevData) => ({
                      ...prevData,
                      gender: genderValue === 0 ? "Male" : "Female", // Update profileData.gender
                    }));
                  }}
                  buttonColor="black"
                  labelHorizontal={false}
                  formHorizontal
                  buttonSize={10}
                  labelStyle={{ fontSize: w(3) }}
                />
              </View>
              <View style={{ height: h(5.2) }} className="">
                <TextInput
                  placeholder="Height (cm)"
                  style={{ fontSize: w(3.5) }}
                  className="border border-slate-400 px-2 py-1 rounded-lg "
                  onChangeText={(text) =>
                    setProfileData((prevData) => ({
                      ...prevData,
                      height: text,
                    }))
                  }
                />
              </View>
              <View style={{ height: h(5.2) }}>
                <TextInput
                  placeholder="MR #"
                  style={{ fontSize: w(3.5) }}
                  className="border border-slate-400 px-2 py-1 rounded-lg "
                  onChangeText={(text) =>
                    setProfileData((prevData) => ({ ...prevData, mr: text }))
                  }
                />
              </View>
              <View style={{ height: h(5.2) }}>
                <TextInput
                  placeholder="Cath #"
                  style={{ fontSize: w(3.5) }}
                  className="border border-slate-400 px-2 py-1 rounded-lg "
                  onChangeText={(text) =>
                    setProfileData((prevData) => ({ ...prevData, cath: text }))
                  }
                />
              </View>
              <View style={{ height: h(5.2) }}>
                <TextInput
                  placeholder="Vessels"
                  style={{ fontSize: w(3.5) }}
                  className="border border-slate-400 px-2 py-1 rounded-lg "
                  onChangeText={(text) =>
                    setProfileData((prevData) => ({
                      ...prevData,
                      vessels: text,
                    }))
                  }
                />
              </View>
              <View style={{ height: h(5.2) }}>
                <TextInput
                  placeholder="Catheters"
                  style={{ fontSize: w(3.5) }}
                  className="border border-slate-400 px-2 py-1 rounded-lg "
                  onChangeText={(text) =>
                    setProfileData((prevData) => ({
                      ...prevData,
                      catheters: text,
                    }))
                  }
                />
              </View>
              <View style={{ height: h(5.2) }}>
                <TextInput
                  placeholder="Weight (KG)"
                  style={{ fontSize: w(3.5) }}
                  className="border border-slate-400 px-2 py-1 rounded-lg "
                  onChangeText={(text) =>
                    setProfileData((prevData) => ({
                      ...prevData,
                      weight: text,
                    }))
                  }
                />
              </View>
            </ScrollView>

            {/* TODO: BOTTOM BUTTONS  STARTS HERE  */}
            <View
              style={{
                height: h(6),
                zIndex: 10,
                backgroundColor: "white",
              }}
              className=" flex flex-row items-start justify-between "
            >
              <TouchableOpacity
                style={{ paddingHorizontal: w(3), paddingVertical: h(1) }}
                onPress={() => navigation.navigate("Home")}
                className=" bg-red-500 flex flex-row  items-center justify-center rounded-lg "
              >
                <Ionicons name="caret-back" size={w(4.5)} color="white" />
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
                onPress={() => navigation.navigate("HemodynamicInfo")}
              >
                <Text
                  style={{ fontSize: w(3.5) }}
                  className="text-center font-semibold text-white "
                >
                  NEXT
                </Text>
                <Ionicons name="caret-forward" size={w(4.5)} color="white" />
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
  inner: {
    // padding: 24,
    flex: 1,
    // justifyContent: "space-around",
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
});

export default Profile;
