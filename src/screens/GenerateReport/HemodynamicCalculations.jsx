import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

import AppContext from "../../context/AppContext";
const HemodynamicCalculations = ({ navigation }) => {
  const {
    hemodynamicInfoData,
    setHemodynamicInfoData,
    resetHemodynamicInfoData,
  } = useContext(AppContext);

  return (
    <SafeAreaView edges={["top", "left", "rightc"]} style={{ flex: 1 }}>
      <StatusBar barStyle="auto" backgroundColor="white" />

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
          <View className="flex flex-row items-center justify-center">
            <Text style={{ fontSize: w(4.3) }} className="font-bold ml-1">
              Hemodynamic Calculations
            </Text>
          </View>
        </View>

        {/* TODO: CONTENT START HERE */}
        <ScrollView
          style={{ marginBottom: h(1) }}
          showsVerticalScrollIndicator={false}
          className="flex-1"
        >
          {/* TODO:MV CALCULATIONS  */}
          <View className="flex-1">
            <Text
              style={{ fontSize: w(3.5) }}
              className="font-bold leading-none tracking-tighter text-orange-800 underline"
            >
              MV
            </Text>
            <View className="flex flex-row">
              <Text style={styles.text}>Po2:</Text>
              <Text style={styles.value}>{hemodynamicInfoData?.mv?.Po2}</Text>
              <Text style={styles.text}>O2 SAT%:</Text>
              <Text style={styles.value}>{hemodynamicInfoData?.mv?.O2Sat}</Text>
              <Text style={styles.text}>a:</Text>
              <Text style={styles.value}>{hemodynamicInfoData?.mv?.a}</Text>
            </View>
            <View className="flex flex-row">
              <Text style={styles.text}>V:</Text>
              <Text style={styles.value}>{hemodynamicInfoData?.mv?.v}</Text>
            </View>
            <Text style={styles.text}>
              Remarks:{hemodynamicInfoData?.mv?.remarks}
            </Text>
          </View>
          {/* TODO:RA CALCULATIONS  */}
          <View className="flex-1">
            <Text
              style={{ fontSize: w(4) }}
              className="font-bold leading-none tracking-tighter text-orange-800 underline"
            >
              RA
            </Text>
            <View className="flex flex-row">
              <Text style={styles.text}>Po2:</Text>
              <Text style={styles.value}>{hemodynamicInfoData?.ra?.Po2}</Text>
              <Text style={styles.text}>O2 SAT%:</Text>
              <Text style={styles.value}>{hemodynamicInfoData?.ra?.O2Sat}</Text>
              <Text style={styles.text}>a:</Text>
              <Text style={styles.value}>{hemodynamicInfoData?.ra?.a}</Text>
            </View>
            <View className="flex flex-row">
              <Text style={styles.text}>V:</Text>
              <Text style={styles.value}>{hemodynamicInfoData?.ra?.v}</Text>
              <Text style={styles.text}>Mean:</Text>
              <Text style={styles.value}>{hemodynamicInfoData?.ra?.mean}</Text>
            </View>
            <Text style={styles.text}>
              Remarks: {hemodynamicInfoData?.ra?.remarks}
            </Text>
          </View>
          {/* TODO:RV CALCULATIONS  */}
          <View className="flex-1">
            <Text
              style={{ fontSize: w(4) }}
              className="font-bold leading-none tracking-tighter text-orange-800 underline"
            >
              RV
            </Text>
            <View className="flex flex-row">
              <Text style={styles.text}>Po2:</Text>
              <Text style={styles.value}>{hemodynamicInfoData?.rv?.Po2}</Text>
              <Text style={styles.text}>O2 SAT%:</Text>
              <Text style={styles.value}>{hemodynamicInfoData?.rv?.O2Sat}</Text>
              <Text style={styles.text}>SYSTOLIC:</Text>
              <Text style={styles.value}>
                {hemodynamicInfoData?.rv?.systolic}
              </Text>
            </View>
            <View className="flex flex-row">
              <Text style={styles.text}>EDP:</Text>
              <Text style={styles.value}>{hemodynamicInfoData?.rv?.edp}</Text>
            </View>
            <Text style={styles.text}>
              Remarks {hemodynamicInfoData?.rv?.remarks}
            </Text>
          </View>
          {/* TODO:PA CALCULATIONS  */}
          <View className="flex-1">
            <Text
              style={{ fontSize: w(4) }}
              className="font-bold leading-none tracking-tighter text-orange-800 underline"
            >
              PA
            </Text>
            <View className="flex flex-row">
              <Text style={styles.text}>Po2:</Text>
              <Text style={styles.value}>{hemodynamicInfoData?.pa?.Po2}</Text>
              <Text style={styles.text}>O2 SAT%:</Text>
              <Text style={styles.value}>{hemodynamicInfoData?.pa?.O2Sat}</Text>
              <Text style={styles.text}>SYSTOLIC:</Text>
              <Text style={styles.value}>
                {hemodynamicInfoData?.pa?.systolic}
              </Text>
            </View>
            <View className="flex flex-row">
              <Text style={styles.text}>DISYSTOLIC:</Text>
              <Text style={styles.value}>
                {hemodynamicInfoData?.pa?.disystolic}
              </Text>
              <Text style={styles.text}>Mean:</Text>
              <Text style={styles.value}>{hemodynamicInfoData?.pa?.mean}</Text>
            </View>
            <Text style={styles.text}>
              Remarks: {hemodynamicInfoData?.pa?.remarks}
            </Text>
          </View>
          {/* TODO:DAo CALCULATIONS  */}
          <View className="flex-1">
            <Text
              style={{ fontSize: w(4) }}
              className="font-bold leading-none tracking-tighter text-orange-800 underline"
            >
              DAo
            </Text>
            <View className="flex flex-row">
              <Text style={styles.text}>Po2:</Text>
              <Text style={styles.value}>{hemodynamicInfoData?.dao?.Po2}</Text>
              <Text style={styles.text}>O2 SAT%:</Text>
              <Text style={styles.value}>
                {hemodynamicInfoData?.dao?.O2Sat}
              </Text>
              <Text style={styles.text}>SYSTOLIC:</Text>
              <Text style={styles.value}>
                {hemodynamicInfoData?.dao?.systolic}
              </Text>
            </View>
            <View className="flex flex-row">
              <Text style={styles.text}>DISYSTOLIC:</Text>
              <Text style={styles.value}>
                {hemodynamicInfoData?.dao?.disystolic}
              </Text>
              <Text style={styles.text}>Mean:</Text>
              <Text style={styles.value}>{hemodynamicInfoData?.dao?.mean}</Text>
            </View>
            <Text style={styles.text}>
              Remarks: {hemodynamicInfoData?.dao?.remarks}
            </Text>
          </View>
          {/* TODO:AAo CALCULATIONS  */}
          <View className="flex-1">
            <Text
              style={{ fontSize: w(4) }}
              className="font-bold leading-none tracking-tighter text-orange-800 underline"
            >
              AAo
            </Text>
            <View className="flex flex-row">
              <Text style={styles.text}>Po2:</Text>
              <Text style={styles.value}>{hemodynamicInfoData?.aao?.Po2}</Text>
              <Text style={styles.text}>O2 SAT%:</Text>
              <Text style={styles.value}>
                {hemodynamicInfoData?.aao?.O2Sat}
              </Text>
              <Text style={styles.text}>SYSTOLIC:</Text>
              <Text style={styles.value}>
                {hemodynamicInfoData?.aao?.systolic}
              </Text>
            </View>
            <View className="flex flex-row">
              <Text style={styles.text}>DISYSTOLIC:</Text>
              <Text style={styles.value}>
                {hemodynamicInfoData?.aao?.disystolic}
              </Text>
              <Text style={styles.text}>Mean:</Text>
              <Text style={styles.value}>{hemodynamicInfoData?.aao?.mean}</Text>
            </View>
            <Text style={styles.text}>
              Remarks: {hemodynamicInfoData?.aao?.remarks}
            </Text>
          </View>
          {/* TODO:LV CALCULATIONS  */}
          <View className="flex-1">
            <Text
              style={{ fontSize: w(4) }}
              className="font-bold leading-none tracking-tighter text-orange-800 underline"
            >
              LV
            </Text>
            <View className="flex flex-row">
              <Text style={styles.text}>Po2:</Text>
              <Text style={styles.value}>{hemodynamicInfoData?.lv?.Po2}</Text>
              <Text style={styles.text}>O2 SAT%:</Text>
              <Text style={styles.value}>{hemodynamicInfoData?.lv?.O2Sat}</Text>
              <Text style={styles.text}>SYSTOLIC:</Text>
              <Text style={styles.value}>
                {hemodynamicInfoData?.lv?.systolic}
              </Text>
            </View>
            <View className="flex flex-row">
              <Text style={styles.text}>EDP:</Text>
              <Text style={styles.value}>{hemodynamicInfoData?.lv?.edp}</Text>
            </View>
            <Text style={styles.text}>
              Remarks: {hemodynamicInfoData?.lv?.remarks}
            </Text>
          </View>
          {/* TODO:LA CALCULATIONS  */}
          <View className="flex-1">
            <Text
              style={{ fontSize: w(4) }}
              className="font-bold leading-none tracking-tighter text-orange-800 underline"
            >
              LA
            </Text>
            <View className="flex flex-row">
              <Text style={styles.text}>Po2:</Text>
              <Text style={styles.value}>{hemodynamicInfoData?.la?.Po2}</Text>
              <Text style={styles.text}>O2 SAT%:</Text>
              <Text style={styles.value}>{hemodynamicInfoData?.la?.O2Sat}</Text>
              <Text style={styles.text}>a:</Text>
              <Text style={styles.value}>{hemodynamicInfoData?.la?.a}</Text>
            </View>
            <View className="flex flex-row">
              <Text style={styles.text}>V:</Text>
              <Text style={styles.value}>{hemodynamicInfoData?.la?.v}</Text>
              <Text style={styles.text}>Mean:</Text>
              <Text style={styles.value}>{hemodynamicInfoData?.la?.mean}</Text>
            </View>
            <Text style={styles.text}>
              Remarks:{hemodynamicInfoData?.la?.remarks}
            </Text>
          </View>
          {/* TODO:PV CALCULATIONS  */}
          <View className="flex-1">
            <Text
              style={{ fontSize: w(4) }}
              className="font-bold leading-none tracking-tighter text-orange-800 underline"
            >
              PV
            </Text>
            <View className="flex flex-row">
              <Text style={styles.text}>Po2:</Text>
              <Text style={styles.value}>{hemodynamicInfoData?.pv?.Po2}</Text>
              <Text style={styles.text}>O2 SAT%:</Text>
              <Text style={styles.value}>{hemodynamicInfoData?.pv?.O2Sat}</Text>
            </View>

            <Text style={styles.text}>
              Remarks:{hemodynamicInfoData?.pv?.remarks}
            </Text>
          </View>
          {/* TODO:PV WEDGE CALCULATIONS  */}
          <View className="flex-1">
            <Text
              style={{ fontSize: w(4) }}
              className="font-bold leading-none tracking-tighter text-orange-800 underline"
            >
              PV WEDGE
            </Text>
            <View className="flex flex-row">
              <Text style={styles.text}>Po2:</Text>
              <Text style={styles.value}>
                {hemodynamicInfoData?.pvWedge?.Po2}
              </Text>
              <Text style={styles.text}>O2 SAT%:</Text>
              <Text style={styles.value}>
                {hemodynamicInfoData?.pvWedge?.O2Sat}
              </Text>
              <Text style={styles.text}>SYSTOLIC:</Text>
              <Text style={styles.value}>
                {hemodynamicInfoData?.pvWedge?.systolic}
              </Text>
            </View>
            <View className="flex flex-row">
              <Text style={styles.text}>DISYSTOLIC:</Text>
              <Text style={styles.value}>
                {hemodynamicInfoData?.pvWedge?.disystolic}
              </Text>
              <Text style={styles.text}>Mean:</Text>
              <Text style={styles.value}>
                {hemodynamicInfoData?.pvWedge?.mean}
              </Text>
            </View>
            <Text style={styles.text}>
              Remarks: {hemodynamicInfoData?.pvWedge?.remarks}
            </Text>
          </View>
          {/* // TODO:OTHER INFO  */}
          <View>
            {hemodynamicInfoData?.otherInfo?.length > 0 && (
              <Text
                style={{ fontSize: w(4) }}
                className="font-bold leading-none tracking-tighter text-orange-800 underline text-center my-2"
              >
                {" "}
                OTHER INFO
              </Text>
            )}
            {hemodynamicInfoData?.otherInfo?.map((item, index) => (
              <View key={index} className="my-2">
                <View className="flex flex-row items-center justify-between">
                  <Text
                    style={{ fontSize: w(4) }}
                    className="font-bold leading-none tracking-tighter text-orange-800 underline"
                  >
                    {item.title}
                  </Text>
                  <Text>Value: {item.value}</Text>
                </View>
                <Text>Remarks: {item.remarks}</Text>
              </View>
            ))}
          </View>
        </ScrollView>

        {/* TODO: BOTTOM BUTTONS  STARTS HERE  */}
        <View
          style={{
            height: h(6),
            zIndex: 10,
            // backgroundColor: "pink",
          }}
          className=" flex flex-row items-start justify-between "
        >
          <TouchableOpacity
            style={{ paddingHorizontal: w(3), paddingVertical: h(1) }}
            onPress={() => navigation.navigate("HemodynamicInfo")}
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
          <TouchableOpacity
            style={{ paddingHorizontal: w(3), paddingVertical: h(1.1) }}
            className="bg-blue-500 flex flex-row items-center justify-center rounded-lg"
            onPress={() => navigation.navigate("PostHyperoxiaInfo")}
          >
            <Text
              style={{ fontSize: w(3.5) }}
              className="text-center font-semibold text-white "
            >
              NEXT
            </Text>
            <Ionicons name="caret-forward" size={w(6)} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    fontSize: Platform.OS === "android" ? w(3.6) : w(3.6),
    lineHeight: Platform.OS === "android" ? h(1.7) : undefined,
    // fontWeight: "bold",
  },
  value: {
    fontSize: Platform.OS === "android" ? w(3.6) : w(3.6),
    lineHeight: Platform.OS === "android" ? h(1.7) : undefined,
    width: w(17),
  },
});

export default HemodynamicCalculations;
