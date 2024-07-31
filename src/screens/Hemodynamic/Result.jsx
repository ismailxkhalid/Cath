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

const Result = ({ navigation }) => {
  const { hemodynamicData, setHemodynamicData } = useContext(AppContext);

  return (
    <>
      <SafeAreaView style={styles.AndroidSafeArea} className="">
        <StatusBar barStyle="auto" backgroundColor={"white"} />
        {/* TODO: HEADER START HERE */}

        <View
          style={{
            flex: 1,
            height: h(5.5),
            paddingHorizontal: w(3),
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
              navigation.navigate("Calculations") && setHemodynamicData({})
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
            className="flex flex-row items-center justify-between bg-slate-200 rounded-lg pl-2 pr-20"
          >
            <Text style={{ fontSize: h(2.3) }}>HB</Text>
            <Text style={{ fontSize: h(2), width: w(20) }}>
              ={hemodynamicData.HB}
            </Text>
          </View>
          <View
            style={{ flex: 1 }}
            className="flex flex-row items-center justify-between rounded-lg pl-2 pr-20"
          >
            <Text style={{ fontSize: h(2.3) }} className="font-semibold">
              AO O2 Sat
            </Text>
            <Text
              style={{ fontSize: h(2), width: w(20) }}
              className="font-semibold"
            >
              ={hemodynamicData.AOO2Sat}
            </Text>
          </View>
          <View
            style={{ flex: 1 }}
            className="flex flex-row items-center justify-between bg-slate-200 rounded-lg pl-2 pr-20"
          >
            <Text style={{ fontSize: h(2.3) }}>MV O2 SAT</Text>
            <Text style={{ fontSize: h(2), width: w(20) }}>
              ={hemodynamicData.MVO2Sat}
            </Text>
          </View>
          <View
            style={{ flex: 1 }}
            className="flex flex-row items-center justify-between  rounded-lg pl-2 pr-20"
          >
            <Text style={{ fontSize: h(2.3) }} className="font-semibold">
              PV O2 SAT
            </Text>
            <Text
              style={{ fontSize: h(2), width: w(20) }}
              className="font-semibold"
            >
              ={hemodynamicData.PVO2Sat}
            </Text>
          </View>
          <View
            style={{ flex: 1 }}
            className="flex flex-row items-center justify-between bg-slate-200 rounded-lg pl-2 pr-20"
          >
            <Text style={{ fontSize: h(2.3) }}>PA O2 SAT</Text>
            <Text style={{ fontSize: h(2), width: w(20) }}>
              ={hemodynamicData.PAO2Sat}
            </Text>
          </View>
          <View
            style={{ flex: 1 }}
            className="flex flex-row items-center justify-between  rounded-lg pl-2 pr-20"
          >
            <Text style={{ fontSize: h(2.3) }} className="font-semibold">
              AO Mean P
            </Text>
            <Text
              style={{ fontSize: h(2), width: w(20) }}
              className="font-semibold"
            >
              ={hemodynamicData.AOMeanP}
            </Text>
          </View>
          <View
            style={{ flex: 1 }}
            className="flex flex-row items-center justify-between bg-slate-200 rounded-lg pl-2 pr-20"
          >
            <Text style={{ fontSize: h(2.3) }}>RA Mean P</Text>
            <Text style={{ fontSize: h(2), width: w(20) }}>
              ={hemodynamicData.RAMeanP}
            </Text>
          </View>
          <View
            style={{ flex: 1 }}
            className="flex flex-row items-center justify-between  rounded-lg pl-2 pr-20"
          >
            <Text style={{ fontSize: h(2.3) }} className="font-semibold">
              PA Mean P
            </Text>
            <Text
              style={{ fontSize: h(2), width: w(20) }}
              className="font-semibold"
            >
              ={hemodynamicData.PAMeanP}
            </Text>
          </View>
          <View
            style={{ flex: 1 }}
            className="flex flex-row items-center justify-between bg-slate-200 rounded-lg pl-2 pr-20"
          >
            <Text style={{ fontSize: h(2.3) }}>LA Mean P</Text>
            <Text style={{ fontSize: h(2), width: w(20) }}>
              ={hemodynamicData.LAMeanP}
            </Text>
          </View>
          <View
            style={{ flex: 1 }}
            className="flex flex-row items-center justify-between  rounded-lg pl-2 pr-20"
          >
            <Text style={{ fontSize: h(2.3) }} className="font-semibold">
              O2 Caring Capacity
            </Text>
            <Text
              style={{ fontSize: h(2), width: w(20) }}
              className="font-semibold"
            >
              =0.0
            </Text>
          </View>
          <View
            style={{ flex: 1 }}
            className="flex flex-row items-center justify-between bg-slate-200 rounded-lg pl-2 pr-20"
          >
            <Text style={{ fontSize: h(2.3) }}>AO O2 Content</Text>
            <Text style={{ fontSize: h(2), width: w(20) }}>=0.0</Text>
          </View>
          <View
            style={{ flex: 1 }}
            className="flex flex-row items-center justify-between  rounded-lg pl-2 pr-20"
          >
            <Text style={{ fontSize: h(2.3) }} className="font-semibold">
              MV O2 Content
            </Text>
            <Text
              style={{ fontSize: h(2), width: w(20) }}
              className="font-semibold"
            >
              =0.0
            </Text>
          </View>
          <View
            style={{ flex: 1 }}
            className="flex flex-row items-center justify-between bg-slate-200 rounded-lg pl-2 pr-20"
          >
            <Text style={{ fontSize: h(2.3) }}>PV O2 Content</Text>
            <Text style={{ fontSize: h(2), width: w(20) }}>=0.0</Text>
          </View>
          <View
            style={{ flex: 1 }}
            className="flex flex-row items-center justify-between  rounded-lg pl-2 pr-20"
          >
            <Text style={{ fontSize: h(2.3) }} className="font-semibold">
              PA O2 Content
            </Text>
            <Text
              style={{ fontSize: h(2), width: w(20) }}
              className="font-semibold"
            >
              =0.0
            </Text>
          </View>
          <View
            style={{ flex: 1 }}
            className="flex flex-row items-center justify-between bg-slate-200 rounded-lg pl-2 pr-20"
          >
            <Text style={{ fontSize: h(2.3) }}>SBF</Text>
            <Text style={{ fontSize: h(2), width: w(20) }}>=0.0</Text>
          </View>
          <View
            style={{ flex: 1 }}
            className="flex flex-row items-center justify-between rounded-lg pl-2 pr-20"
          >
            <Text style={{ fontSize: h(2.3) }} className="font-semibold">
              SVR
            </Text>
            <Text
              style={{ fontSize: h(2), width: w(20) }}
              className="font-semibold"
            >
              =0.0
            </Text>
          </View>
          <View
            style={{ flex: 1 }}
            className="flex flex-row items-center justify-between bg-slate-200 rounded-lg pl-2 pr-20"
          >
            <Text style={{ fontSize: h(2.3) }}>PBF</Text>
            <Text style={{ fontSize: h(2), width: w(20) }}>=0.0</Text>
          </View>
          <View
            style={{ flex: 1 }}
            className="flex flex-row items-center justify-between  rounded-lg pl-2 pr-20"
          >
            <Text style={{ fontSize: h(2.3) }} className="font-semibold">
              PVR
            </Text>
            <Text
              style={{ fontSize: h(2), width: w(20) }}
              className="font-semibold"
            >
              =0.0
            </Text>
          </View>
          <View
            style={{ flex: 1 }}
            className="flex flex-row items-center justify-between bg-slate-200 rounded-lg pl-2 pr-20"
          >
            <Text style={{ fontSize: h(2.3) }}>QEP</Text>
            <Text style={{ fontSize: h(2), width: w(20) }}>=0.0</Text>
          </View>
          <View
            style={{ flex: 1 }}
            className="flex flex-row items-center justify-between  rounded-lg pl-2 pr-20"
          >
            <Text style={{ fontSize: h(2.3) }} className="font-semibold">
              QP|OS
            </Text>
            <Text
              style={{ fontSize: h(2), width: w(20) }}
              className="font-semibold"
            >
              =0.0
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Result;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});
