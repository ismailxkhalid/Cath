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

const PostHyperoxiaCalculations = ({ navigation }) => {
  const { postHyperoxiaInfoData, setPostHyperoxiaInfoData } =
    useContext(AppContext);
  return (
    <SafeAreaView edges={["top", "left", "right"]} style={{ flex: 1 }}>
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
              Post Hyperoxia Calculations
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
              <Text style={styles.value}>{postHyperoxiaInfoData?.mv?.Po2}</Text>
              <Text style={styles.text}>O2 SAT%:</Text>
              <Text style={styles.value}>
                {postHyperoxiaInfoData?.mv?.O2Sat}
              </Text>
              <Text style={styles.text}>a:</Text>
              <Text style={styles.value}>{postHyperoxiaInfoData?.mv?.a}</Text>
            </View>
            <View className="flex flex-row">
              <Text style={styles.text}>V:</Text>
              <Text style={styles.value}>{postHyperoxiaInfoData?.mv?.v}</Text>
              <Text style={styles.text}>BPM:</Text>
              <Text style={styles.value}>{postHyperoxiaInfoData?.mv?.bpm}</Text>
            </View>
            <Text style={styles.text}>
              Remarks: {postHyperoxiaInfoData?.mv?.remarks}
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
              <Text style={styles.value}>{postHyperoxiaInfoData?.ra?.Po2}</Text>
              <Text style={styles.text}>O2 SAT%:</Text>
              <Text style={styles.value}>
                {postHyperoxiaInfoData?.ra?.O2Sat}
              </Text>
              <Text style={styles.text}>a:</Text>
              <Text style={styles.value}>{postHyperoxiaInfoData?.ra?.a}</Text>
            </View>
            <View className="flex flex-row">
              <Text style={styles.text}>V:</Text>
              <Text style={styles.value}>{postHyperoxiaInfoData?.ra?.v}</Text>
              <Text style={styles.text}>Mean:</Text>
              <Text style={styles.value}>
                {postHyperoxiaInfoData?.ra?.mean}
              </Text>
              <Text style={styles.text}>BPM:</Text>
              <Text style={styles.value}>{postHyperoxiaInfoData?.ra?.bpm}</Text>
            </View>
            <Text style={styles.text}>
              Remarks: {postHyperoxiaInfoData?.ra?.remarks}
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
              <Text style={styles.value}>{postHyperoxiaInfoData?.rv?.Po2}</Text>
              <Text style={styles.text}>O2 SAT%:</Text>
              <Text style={styles.value}>
                {postHyperoxiaInfoData?.rv?.O2Sat}
              </Text>
              <Text style={styles.text}>SYSTOLIC:</Text>
              <Text style={styles.value}>
                {postHyperoxiaInfoData?.rv?.systolic}
              </Text>
            </View>
            <View className="flex flex-row">
              <Text style={styles.text}>EDP:</Text>
              <Text style={styles.value}>{postHyperoxiaInfoData?.rv?.edp}</Text>
              <Text style={styles.text}>BPM:</Text>
              <Text style={styles.value}>{postHyperoxiaInfoData?.rv?.bpm}</Text>
            </View>
            <Text style={styles.text}>
              Remarks: {postHyperoxiaInfoData?.rv?.remarks}
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
              <Text style={styles.value}>{postHyperoxiaInfoData?.pa?.Po2}</Text>
              <Text style={styles.text}>O2 SAT%:</Text>
              <Text style={styles.value}>
                {postHyperoxiaInfoData?.pa?.O2Sat}
              </Text>
              <Text style={styles.text}>SYSTOLIC:</Text>
              <Text style={styles.value}>
                {postHyperoxiaInfoData?.pa?.systolic}
              </Text>
            </View>
            <View className="flex flex-row">
              <Text style={styles.text}>DISYSTOLIC:</Text>
              <Text style={styles.value}>
                {postHyperoxiaInfoData?.pa?.disystolic}
              </Text>
              <Text style={styles.text}>Mean:</Text>
              <Text style={styles.value}>
                {postHyperoxiaInfoData?.pa?.mean}
              </Text>
              <Text style={styles.text}>BPM:</Text>
              <Text style={styles.value}>{postHyperoxiaInfoData?.pa?.bpm}</Text>
            </View>
            <Text style={styles.text}>
              Remarks: {postHyperoxiaInfoData?.pa?.remarks}
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
              <Text style={styles.value}>
                {postHyperoxiaInfoData?.dao?.Po2}
              </Text>
              <Text style={styles.text}>O2 SAT%:</Text>
              <Text style={styles.value}>
                {postHyperoxiaInfoData?.dao?.O2Sat}
              </Text>
              <Text style={styles.text}>SYSTOLIC:</Text>
              <Text style={styles.value}>
                {postHyperoxiaInfoData?.dao?.systolic}
              </Text>
            </View>
            <View className="flex flex-row">
              <Text style={styles.text}>DISYSTOLIC:</Text>
              <Text style={styles.value}>
                {" "}
                {postHyperoxiaInfoData?.dao?.disystolic}
              </Text>
              <Text style={styles.text}>Mean:</Text>
              <Text style={styles.value}>
                {" "}
                {postHyperoxiaInfoData?.dao?.mean}
              </Text>
              <Text style={styles.text}>BPM:</Text>
              <Text style={styles.value}>
                {" "}
                {postHyperoxiaInfoData?.dao?.bpm}
              </Text>
            </View>
            <Text style={styles.text}>
              Remarks: {postHyperoxiaInfoData?.dao?.remarks}
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
              <Text style={styles.value}>
                {postHyperoxiaInfoData?.aao?.Po2}
              </Text>
              <Text style={styles.text}>O2 SAT%:</Text>
              <Text style={styles.value}>
                {postHyperoxiaInfoData?.aao?.O2Sat}
              </Text>
              <Text style={styles.text}>SYSTOLIC:</Text>
              <Text style={styles.value}>
                {postHyperoxiaInfoData?.aao?.systolic}
              </Text>
            </View>
            <View className="flex flex-row">
              <Text style={styles.text}>DISYSTOLIC:</Text>
              <Text style={styles.value}>
                {postHyperoxiaInfoData?.aao?.disystolic}
              </Text>
              <Text style={styles.text}>Mean:</Text>
              <Text style={styles.value}>
                {postHyperoxiaInfoData?.aao?.mean}
              </Text>
              <Text style={styles.text}>BPM:</Text>
              <Text style={styles.value}>
                {postHyperoxiaInfoData?.aao?.bpm}
              </Text>
            </View>
            <Text style={styles.text}>
              Remarks: {postHyperoxiaInfoData?.aao?.remarks}
            </Text>
          </View>
          {/* TODO:LV CALCULATIONS  */}
          <View className="flex-1">
            <Text
              style={{ fontSize: w(4) }}
              className="font-bold leading-none tracking-tighter text-orange-800 underline "
            >
              LV
            </Text>
            <View className="flex flex-row">
              <Text style={styles.text}>Po2:</Text>
              <Text style={styles.value}>{postHyperoxiaInfoData?.lv?.Po2}</Text>
              <Text style={styles.text}>O2 SAT%:</Text>
              <Text style={styles.value}>
                {" "}
                {postHyperoxiaInfoData?.lv?.O2Sat}
              </Text>
              <Text style={styles.text}>SYSTOLIC:</Text>
              <Text style={styles.value}>
                {postHyperoxiaInfoData?.lv?.systolic}
              </Text>
            </View>
            <View className="flex flex-row">
              <Text style={styles.text}>EDP:</Text>
              <Text style={styles.value}>{postHyperoxiaInfoData?.lv?.edp}</Text>
              <Text style={styles.text}>BPM:</Text>
              <Text style={styles.value}>{postHyperoxiaInfoData?.lv?.bpm}</Text>
            </View>
            <Text style={styles.text}>
              Remarks: {postHyperoxiaInfoData?.lv?.remarks}
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
              <Text style={styles.value}>{postHyperoxiaInfoData?.la?.Po2}</Text>
              <Text style={styles.text}>O2 SAT%:</Text>
              <Text style={styles.value}>
                {postHyperoxiaInfoData?.la?.O2Sat}
              </Text>
              <Text style={styles.text}>a:</Text>
              <Text style={styles.value}>{postHyperoxiaInfoData?.la?.a}</Text>
            </View>
            <View className="flex flex-row">
              <Text style={styles.text}>V:</Text>
              <Text style={styles.value}>{postHyperoxiaInfoData?.la?.v}</Text>
              <Text style={styles.text}>Mean:</Text>
              <Text style={styles.value}>
                {postHyperoxiaInfoData?.la?.mean}
              </Text>
              <Text style={styles.text}>BPM:</Text>
              <Text style={styles.value}>{postHyperoxiaInfoData?.la?.bpm}</Text>
            </View>
            <Text style={styles.text}>
              Remarks: {postHyperoxiaInfoData?.la?.remarks}
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
              <Text style={styles.value}>{postHyperoxiaInfoData?.pv?.Po2}</Text>
              <Text style={styles.text}>O2 SAT%:</Text>
              <Text style={styles.value}>
                {postHyperoxiaInfoData?.pv?.O2Sat}
              </Text>
              <Text style={styles.text}>BPM:</Text>
              <Text style={styles.value}>{postHyperoxiaInfoData?.pv?.bpm}</Text>
            </View>

            <Text style={styles.text}>
              Remarks: {postHyperoxiaInfoData?.pv?.remarks}
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
                {postHyperoxiaInfoData?.pvWedge?.Po2}
              </Text>
              <Text style={styles.text}>O2 SAT%:</Text>
              <Text style={styles.value}>
                {postHyperoxiaInfoData?.pvWedge?.O2Sat}
              </Text>
              <Text style={styles.text}>SYSTOLIC:</Text>
              <Text style={styles.value}>
                {postHyperoxiaInfoData?.pvWedge?.systolic}
              </Text>
            </View>
            <View className="flex flex-row">
              <Text style={styles.text}>DISYSTOLIC:</Text>
              <Text style={styles.value}>
                {postHyperoxiaInfoData?.pvWedge?.disystolic}
              </Text>
              <Text style={styles.text}>Mean:</Text>
              <Text style={styles.value}>
                {postHyperoxiaInfoData?.pvWedge?.mean}
              </Text>
              <Text style={styles.text}>BPM:</Text>
              <Text style={styles.value}>
                {postHyperoxiaInfoData?.pvWedge?.bpm}
              </Text>
            </View>
            <Text style={styles.text}>
              Remarks: {postHyperoxiaInfoData?.pvWedge?.remarks}
            </Text>
          </View>

          {/* // TODO:OTHER INFO  */}
          <View>
            {postHyperoxiaInfoData?.otherInfo?.length > 0 && (
              <Text
                style={{ fontSize: w(4) }}
                className="font-bold leading-none tracking-tighter text-orange-800 underline text-center my-2"
              >
                {" "}
                OTHER INFO
              </Text>
            )}
            {postHyperoxiaInfoData?.otherInfo?.map((item, index) => (
              <View key={index} className="my-2">
                <View className="flex flex-row items-center justify-between">
                  <Text
                    style={{ fontSize: w(4) }}
                    className="font-bold leading-none tracking-tighter text-orange-800 underline"
                  >
                    {item.title}
                  </Text>
                </View>
                <View className="flex flex-row items-start justify-between">
                  <Text>Value: {item.value} </Text>
                  <Text>Remarks: {item.remarks}</Text>
                </View>
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
            onPress={() => navigation.navigate("PostHyperoxiaInfo")}
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
            onPress={() => navigation.navigate("Results")}
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
    color: "blue",
    opacity: 0.7,
  },
});

export default PostHyperoxiaCalculations;
