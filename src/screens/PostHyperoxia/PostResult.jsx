import React, { useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from "react-native-responsive-screen";
import AppContext from "../../context/AppContext";

const PostResult = ({ navigation }) => {
  const { postHyperoxiaData, setPostHyperoxiaData } = useContext(AppContext);

  return (
    <>
      <SafeAreaView style={styles.AndroidSafeArea} className="">
        <StatusBar barStyle="auto" />
        {/* TODO: HEADER START HERE */}

        <View
          style={{
            flex: 1,
            height: h(5.5),
            paddingHorizontal: w(6),
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
          <TouchableOpacity
            style={{ paddingHorizontal: w(3), paddingVertical: h(1) }}
            onPress={() =>
              navigation.navigate("PostCalculations") && setPostHypoxiaData({})
            }
            className="bg-red-500 flex flex-row items-center justify-center rounded-lg"
          >
            <Ionicons name="caret-back" size={w(5)} color="white" />
            <Text
              style={{ fontSize: w(3.5) }}
              className="text-center font-semibold text-white ml-2"
            >
              RECALCULATE
            </Text>
          </TouchableOpacity>
        </View>
        {/* //TODO: RESULTS START HERE */}

        <View style={{ flex: 14 }}>
          <View
            style={{ flex: 1 }}
            className=" bg-slate-200 rounded-lg flex justify-center "
          >
            <View
              style={{ width: w(70) }}
              className="flex flex-row items-center justify-between pl-2 "
            >
              <Text style={{ fontSize: h(2) }}>HB</Text>
              <Text style={{ fontSize: h(2), width: w(21) }}>
                ={postHyperoxiaData.HB}
              </Text>
            </View>
          </View>
          <View
            style={{ flex: 1 }}
            className="flex flex-row items-center justify-between "
          >
            <View
              style={{ width: w(70) }}
              className="flex flex-row justify-between items-center rounded-lg pl-2  "
            >
              <Text style={{ fontSize: h(2) }} className="font-semibold">
                AO O2 Sat
              </Text>
              <Text
                style={{ fontSize: h(2), width: w(21) }}
                className="font-semibold"
              >
                ={postHyperoxiaData.AOO2Sat}
              </Text>
            </View>
            <View className="flex flex-row items-center rounded-lg pr-2">
              <Text style={{ fontSize: h(2) }} className="font-semibold">
                PO2
              </Text>
              <Text
                style={{ fontSize: h(2), width: w(19) }}
                className="font-semibold"
              >
                ={postHyperoxiaData.AOPO2}
              </Text>
            </View>
          </View>
          <View
            style={{ flex: 1 }}
            className="flex flex-row items-center justify-between  bg-slate-200 rounded-lg "
          >
            <View
              style={{ width: w(70) }}
              className="flex flex-row items-center justify-between pl-2"
            >
              <Text style={{ fontSize: h(2) }}>MV O2 SAT</Text>
              <Text style={{ fontSize: h(2), width: w(21) }}>
                ={postHyperoxiaData.MVO2Sat}
              </Text>
            </View>
            <View className="flex flex-row items-center justify-between pr-2">
              <Text style={{ fontSize: h(2) }} className="font-semibold">
                PO2
              </Text>
              <Text
                style={{ fontSize: h(2), width: w(19) }}
                className="font-semibold"
              >
                ={postHyperoxiaData.MVPO2}
              </Text>
            </View>
          </View>
          <View
            style={{ flex: 1 }}
            className="flex flex-row items-center justify-between "
          >
            <View
              style={{ width: w(70) }}
              className="flex flex-row justify-between items-center rounded-lg pl-2  "
            >
              <Text style={{ fontSize: h(2) }} className="font-semibold">
                PV O2 Sat
              </Text>
              <Text
                style={{ fontSize: h(2), width: w(21) }}
                className="font-semibold"
              >
                ={postHyperoxiaData.PVO2Sat}
              </Text>
            </View>
            <View className="flex flex-row items-center rounded-lg pr-2">
              <Text style={{ fontSize: h(2) }} className="font-semibold">
                PO2
              </Text>
              <Text
                style={{ fontSize: h(2), width: w(19) }}
                className="font-semibold"
              >
                ={postHyperoxiaData.PVPO2}
              </Text>
            </View>
          </View>
          <View
            style={{ flex: 1 }}
            className="flex flex-row items-center justify-between  bg-slate-200 rounded-lg "
          >
            <View
              style={{ width: w(70) }}
              className="flex flex-row items-center justify-between pl-2"
            >
              <Text style={{ fontSize: h(2) }}>PA O2 SAT</Text>
              <Text style={{ fontSize: h(2), width: w(21) }}>
                ={postHyperoxiaData.PAO2Sat}
              </Text>
            </View>
            <View className="flex flex-row items-center justify-between pr-2">
              <Text style={{ fontSize: h(2) }} className="font-semibold">
                PO2
              </Text>
              <Text
                style={{ fontSize: h(2), width: w(19) }}
                className="font-semibold"
              >
                ={postHyperoxiaData.PAPO2}
              </Text>
            </View>
          </View>
          <View
            style={{ flex: 1 }}
            className="flex flex-row items-center justify-between  rounded-lg "
          >
            <View
              style={{ width: w(70) }}
              className="flex flex-row items-center justify-between pl-2"
            >
              <Text style={{ fontSize: h(2) }} className="font-semibold">
                AO Mean P
              </Text>
              <Text
                style={{ fontSize: h(2), width: w(21) }}
                className="font-semibold"
              >
                ={postHyperoxiaData.AOMeanP}
              </Text>
            </View>
          </View>
          <View
            style={{ flex: 1 }}
            className=" bg-slate-200 rounded-lg flex justify-center "
          >
            <View
              style={{ width: w(70) }}
              className="flex flex-row items-center justify-between pl-2 "
            >
              <Text style={{ fontSize: h(2) }}>RA Mean P</Text>
              <Text style={{ fontSize: h(2), width: w(21) }}>
                ={postHyperoxiaData.RAMeanP}
              </Text>
            </View>
          </View>
          <View
            style={{ flex: 1 }}
            className="  rounded-lg flex justify-center "
          >
            <View
              style={{ width: w(70) }}
              className="flex flex-row items-center justify-between pl-2 "
            >
              <Text style={{ fontSize: h(2) }}>PA Mean P</Text>
              <Text style={{ fontSize: h(2), width: w(21) }}>
                ={postHyperoxiaData.PAMeanP}
              </Text>
            </View>
          </View>
          <View
            style={{ flex: 1 }}
            className=" bg-slate-200 rounded-lg flex justify-center "
          >
            <View
              style={{ width: w(70) }}
              className="flex flex-row items-center justify-between pl-2 "
            >
              <Text style={{ fontSize: h(2) }}>LA Mean P</Text>
              <Text style={{ fontSize: h(2), width: w(21) }}>
                ={postHyperoxiaData.LAMeanP}
              </Text>
            </View>
          </View>
          <View
            style={{ flex: 1 }}
            className="  rounded-lg flex justify-center "
          >
            <View
              style={{ width: w(70) }}
              className="flex flex-row items-center justify-between pl-2  "
            >
              <Text style={{ fontSize: h(2), fontWeight: "bold" }}>
                O2 Caring Capicity
              </Text>
              <Text style={{ fontSize: h(2), width: w(21) }}>=0.0</Text>
            </View>
          </View>
          <View
            style={{ flex: 1 }}
            className=" bg-slate-200 rounded-lg flex justify-center "
          >
            <View
              style={{ width: w(70) }}
              className="flex flex-row items-center justify-between pl-2 "
            >
              <Text style={{ fontSize: h(2) }}>AO O2 Content</Text>
              <Text style={{ fontSize: h(2), width: w(21) }}>=0.0</Text>
            </View>
          </View>
          <View
            style={{ flex: 1 }}
            className="  rounded-lg flex justify-center "
          >
            <View
              style={{ width: w(70) }}
              className="flex flex-row items-center justify-between pl-2 "
            >
              <Text style={{ fontSize: h(2) }}>MV O2 Content</Text>
              <Text style={{ fontSize: h(2), width: w(21) }}>=0.0</Text>
            </View>
          </View>
          <View
            style={{ flex: 1 }}
            className=" bg-slate-200 rounded-lg flex justify-center "
          >
            <View
              style={{ width: w(70) }}
              className="flex flex-row items-center justify-between pl-2 "
            >
              <Text style={{ fontSize: h(2) }}>PV O2 Content</Text>
              <Text style={{ fontSize: h(2), width: w(21) }}>=0.0</Text>
            </View>
          </View>
          <View
            style={{ flex: 1 }}
            className="  rounded-lg flex justify-center "
          >
            <View
              style={{ width: w(70) }}
              className="flex flex-row items-center justify-between pl-2 "
            >
              <Text style={{ fontSize: h(2) }}>PA O2 Content</Text>
              <Text style={{ fontSize: h(2), width: w(21) }}>=0.0</Text>
            </View>
          </View>
          <View
            style={{ flex: 1 }}
            className=" bg-slate-200 rounded-lg flex justify-center "
          >
            <View
              style={{ width: w(70) }}
              className="flex flex-row items-center justify-between pl-2 "
            >
              <Text style={{ fontSize: h(2) }}>SBF</Text>
              <Text style={{ fontSize: h(2), width: w(21) }}>=0.0</Text>
            </View>
          </View>
          <View
            style={{ flex: 1 }}
            className="  rounded-lg flex justify-center "
          >
            <View
              style={{ width: w(70) }}
              className="flex flex-row items-center justify-between pl-2 "
            >
              <Text style={{ fontSize: h(2) }}>SVR</Text>
              <Text style={{ fontSize: h(2), width: w(21) }}>=0.0</Text>
            </View>
          </View>
          <View
            style={{ flex: 1 }}
            className=" bg-slate-200 rounded-lg flex justify-center "
          >
            <View
              style={{ width: w(70) }}
              className="flex flex-row items-center justify-between pl-2 "
            >
              <Text style={{ fontSize: h(2) }}>PBF</Text>
              <Text style={{ fontSize: h(2), width: w(21) }}>=0.0</Text>
            </View>
          </View>
          <View
            style={{ flex: 1 }}
            className="  rounded-lg flex justify-center "
          >
            <View
              style={{ width: w(70) }}
              className="flex flex-row items-center justify-between pl-2 "
            >
              <Text style={{ fontSize: h(2) }}>PVR</Text>
              <Text style={{ fontSize: h(2), width: w(21) }}>=0.0</Text>
            </View>
          </View>
          <View
            style={{ flex: 1 }}
            className=" bg-slate-200 rounded-lg flex justify-center "
          >
            <View
              style={{ width: w(70) }}
              className="flex flex-row items-center justify-between pl-2 "
            >
              <Text style={{ fontSize: h(2) }}>QEP</Text>
              <Text style={{ fontSize: h(2), width: w(21) }}>=0.0</Text>
            </View>
          </View>
          <View
            style={{ flex: 1 }}
            className="  rounded-lg flex justify-center "
          >
            <View
              style={{ width: w(70) }}
              className="flex flex-row items-center justify-between pl-2 "
            >
              <Text style={{ fontSize: h(2) }}>QP|OS</Text>
              <Text style={{ fontSize: h(2), width: w(21) }}>=0.0</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default PostResult;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});
