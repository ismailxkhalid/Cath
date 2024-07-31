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
import React, { useContext, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import AppContext from "../../context/AppContext";

const HemodynamicInfo = ({ navigation }) => {
  const { hemodynamicInfoData, setHemodynamicInfoData } =
    useContext(AppContext);
  const [selectedText, setSelectedText] = useState(null);

  const handleTextPress = (text) => {
    setSelectedText(text);
  };

  const updateHemodynamicInfoSubKey = (mainKey, subKey, value) => {
    setHemodynamicInfoData((prevData) => ({
      ...prevData,
      [mainKey]: {
        ...prevData[mainKey],
        [subKey]: value === "" ? undefined : Number(value), // Check if input is empty
      },
    }));
  };
  const updateHemodynamicInfoStrings = (mainKey, subKey, value) => {
    setHemodynamicInfoData((prevData) => ({
      ...prevData,
      [mainKey]: {
        ...prevData[mainKey],
        [subKey]: value === "" ? "" : String(value), // Check if input is empty
      },
    }));
  };
  // Add Other Info
  const [otherInfo, setOtherInfo] = useState({
    title: "",
    value: "",
    remarks: "",
  });

  const handleAddInfo = () => {
    // Logic to handle adding info
    setHemodynamicInfoData((prevData) => ({
      ...prevData,
      otherInfo: [...prevData.otherInfo, otherInfo],
    }));

    setOtherInfo({
      title: "",
      value: "",
      remarks: "",
    });
  };

  const handleRemoveInfo = (indexToRemove) => {
    setHemodynamicInfoData((prevData) => ({
      ...prevData,
      otherInfo: prevData.otherInfo.filter(
        (_, index) => index !== indexToRemove
      ),
    }));
  };

  const otherArray = hemodynamicInfoData.otherInfo || [];
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
                <AntDesign name="infocirlce" size={w(5)} color="black" />
                <Text
                  style={{ fontSize: w(5.3) }}
                  className="font-semibold ml-1 "
                >
                  Hemodynamic Info
                </Text>
              </View>
            </View>

            {/* TODO: CONTENT START HERE */}
            <ScrollView
              style={{ marginBottom: h(1) }}
              showsVerticalScrollIndicator={false}
              className="flex-1"
            >
              <View
                style={{ height: h(5) }}
                className=" flex flex-row items-center justify-around "
              >
                <Text style={{ fontSize: w(4.3) }}>Hemoglobin (HB) </Text>
                <TextInput
                  style={{ fontSize: w(4.3) }}
                  placeholder="Hemoglobin (HB)"
                  className="border px-2 py-2 text-center rounded-lg "
                  value={hemodynamicInfoData.hemoglobin}
                  onChangeText={(text) =>
                    setHemodynamicInfoData({
                      ...hemodynamicInfoData,
                      hemoglobin: text,
                    })
                  }
                />
              </View>
              <View className="flex flex-row items-start border-b border-orange-800 ">
                <View
                  style={{ width: w(40), height: h(60) }}
                  className="flex items-center justify-around border-r border-orange-800"
                >
                  <TouchableOpacity
                    onPress={() => handleTextPress("MV")}
                    style={[
                      styles.textContainer,
                      selectedText === "MV" && styles.selectedTextContainer,
                    ]}
                  >
                    <Text style={styles.text}>MV</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleTextPress("RA")}
                    style={[
                      styles.textContainer,
                      selectedText === "RA" && styles.selectedTextContainer,
                    ]}
                  >
                    <Text style={styles.text}>RA</Text>
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
                    onPress={() => handleTextPress("PA")}
                    style={[
                      styles.textContainer,
                      selectedText === "PA" && styles.selectedTextContainer,
                    ]}
                  >
                    <Text style={styles.text}>PA</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleTextPress("DAo")}
                    style={[
                      styles.textContainer,
                      selectedText === "DAo" && styles.selectedTextContainer,
                    ]}
                  >
                    <Text style={styles.text}>DAo</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleTextPress("AAo")}
                    style={[
                      styles.textContainer,
                      selectedText === "AAo" && styles.selectedTextContainer,
                    ]}
                  >
                    <Text style={styles.text}>AAo</Text>
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
                    onPress={() => handleTextPress("LA")}
                    style={[
                      styles.textContainer,
                      selectedText === "LA" && styles.selectedTextContainer,
                    ]}
                  >
                    <Text style={styles.text}>LA</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleTextPress("PV")}
                    style={[
                      styles.textContainer,
                      selectedText === "PV" && styles.selectedTextContainer,
                    ]}
                  >
                    <Text style={styles.text}>PV</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className=" py-1 px-2"
                    onPress={() => handleTextPress("PV WEDGE")}
                    style={[
                      styles.textContainer,
                      selectedText === "PV WEDGE" &&
                        styles.selectedTextContainer,
                    ]}
                  >
                    <Text style={styles.text}>PV WEDGE</Text>
                  </TouchableOpacity>
                </View>
                {/* TODO:RIGHT INPUTS STARTS HERE */}
                <View
                  style={{ width: w(53.5), padding: w(2) }}
                  className=" Right input main container flex w-full "
                >
                  {/* TODO: MV INPUTS STARTS HERE */}
                  <View className={`${selectedText === "MV" ? "" : "hidden"} `}>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        Po2
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("mv", "Po2", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        O2 SAT%
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("mv", "O2Sat", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        a
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("mv", "a", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        V
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("mv", "v", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between ">
                      <Text style={styles.valueText} className="font-semibold">
                        Remarks
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoStrings("mv", "remarks", text)
                        }
                      />
                    </View>
                  </View>
                  {/* TODO: RA INPUTS STARTS HERE */}
                  <View className={`${selectedText === "RA" ? "" : "hidden"} `}>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        Po2
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("ra", "Po2", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        O2 SAT%
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("ra", "O2Sat", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        a
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("ra", "a", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        V
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("ra", "v", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        MEAN
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("ra", "mean", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between ">
                      <Text style={styles.valueText} className="font-semibold">
                        Remarks
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoStrings("ra", "remarks", text)
                        }
                      />
                    </View>
                  </View>
                  {/* TODO: RV INPUTS STARTS HERE */}
                  <View className={`${selectedText === "RV" ? "" : "hidden"} `}>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        Po2
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("rv", "Po2", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        O2 SAT%
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("rv", "O2Sat", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        SYSTOLIC
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("rv", "systolic", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        EDP
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("rv", "edp", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between ">
                      <Text style={styles.valueText} className="font-semibold">
                        Remarks
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoStrings("rv", "remarks", text)
                        }
                      />
                    </View>
                  </View>
                  {/* TODO: PA INPUTS STARTS HERE */}
                  <View className={`${selectedText === "PA" ? "" : "hidden"} `}>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        Po2
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("pa", "Po2", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        O2 SAT%
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("mv", "O2Sat", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        SYSTOLIC
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("pa", "systolic", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={{ fontSize: w(3.2) }} className="font-bold">
                        DISYSTOLIC
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("pa", "disystolic", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        MEAN
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("pa", "mean", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between ">
                      <Text style={styles.valueText} className="font-semibold">
                        Remarks
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoStrings("pa", "remarks", text)
                        }
                      />
                    </View>
                  </View>
                  {/* TODO: DAo INPUTS STARTS HERE */}
                  <View
                    className={`${selectedText === "DAo" ? "" : "hidden"} `}
                  >
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        Po2
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("dao", "Po2", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        O2 SAT%
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("dao", "O2Sat", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        SYSTOLIC
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("dao", "systolic", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={{ fontSize: w(3.2) }} className="font-bold">
                        DISYSTOLIC
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("dao", "disystolic", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        MEAN
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("dao", "mean", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between ">
                      <Text style={styles.valueText} className="font-semibold">
                        Remarks
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoStrings("dao", "remarks", text)
                        }
                      />
                    </View>
                  </View>
                  {/* TODO: AAo INPUTS STARTS HERE */}
                  <View
                    className={`${selectedText === "AAo" ? "" : "hidden"} `}
                  >
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        Po2
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("aao", "Po2", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        O2 SAT%
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("aao", "O2Sat", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        SYSTOLIC
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("aao", "systolic", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={{ fontSize: w(3.2) }} className="font-bold">
                        DISYSTOLIC
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("aao", "disystolic", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        MEAN
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("aao", "mean", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between ">
                      <Text style={styles.valueText} className="font-semibold">
                        Remarks
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoStrings("aao", "remarks", text)
                        }
                      />
                    </View>
                  </View>

                  {/* TODO: LV INPUTS STARTS HERE */}
                  <View className={`${selectedText === "LV" ? "" : "hidden"} `}>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        Po2
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("lv", "Po2", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        O2 SAT%
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("lv", "O2Sat", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        SYSTOLIC
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("lv", "systolic", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        EDP
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("lv", "edp", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between ">
                      <Text style={styles.valueText} className="font-semibold">
                        Remarks
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoStrings("lv", "remarks", text)
                        }
                      />
                    </View>
                  </View>

                  {/* TODO: LA INPUTS STARTS HERE */}
                  <View className={`${selectedText === "LA" ? "" : "hidden"} `}>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        Po2
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("la", "Po2", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        O2 SAT%
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("la", "O2Sat", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        a
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("la", "a", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        V
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("la", "v", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        MEAN
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("la", "mean", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between ">
                      <Text style={styles.valueText} className="font-semibold">
                        Remarks
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoStrings("la", "remarks", text)
                        }
                      />
                    </View>
                  </View>

                  {/* TODO: PV INPUTS STARTS HERE */}
                  <View className={`${selectedText === "PV" ? "" : "hidden"} `}>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        Po2
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("pv", "Po2", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        O2 SAT%
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("pv", "O2Sat", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between ">
                      <Text style={styles.valueText} className="font-semibold">
                        Remarks
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoStrings("pv", "remarks", text)
                        }
                      />
                    </View>
                  </View>

                  {/* TODO: PV WEDGE INPUTS STARTS HERE */}
                  <View
                    className={`${
                      selectedText === "PV WEDGE" ? "" : "hidden"
                    } `}
                  >
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        Po2
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("pvWedge", "Po2", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        O2 SAT%
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("pvWedge", "O2Sat", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        SYSTOLIC
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey(
                            "pvWedge",
                            "systolic",
                            text
                          )
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text
                        style={{ fontSize: w(3) }}
                        className="font-bold text-xs"
                      >
                        DISYSTOLIC
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey(
                            "pvWedge",
                            "disystolic",
                            text
                          )
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        MEAN
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoSubKey("pvWedge", "mean", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between ">
                      <Text style={styles.valueText} className="font-semibold">
                        Remarks
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updateHemodynamicInfoStrings(
                            "pvWedge",
                            "remarks",
                            text
                          )
                        }
                      />
                    </View>
                  </View>
                </View>
              </View>
              {/* TODO:OTHER INFO SECTION START HERE  */}
              <Text style={{ fontSize: w(4.5) }} className="font-semibold mb-2">
                Other Info
              </Text>
              <View className="flex flex-row items-center justify-between mb-2 ">
                <View className="flex flex-row items-center justify-between mb-2 ">
                  <Text
                    style={{ fontSize: w(4) }}
                    className="font-semibold mr-1"
                  >
                    Title
                  </Text>
                  <TextInput
                    style={{ width: w(24), height: h(4.8), fontSize: w(3) }}
                    placeholder="Title"
                    className="border p-2  rounded-lg"
                    value={otherInfo.title}
                    onChangeText={(text) =>
                      setOtherInfo({ ...otherInfo, title: text })
                    }
                  />
                </View>
                <View className="flex flex-row items-center justify-around mb-2">
                  <Text
                    style={{ fontSize: w(4) }}
                    className="font-semibold mr-1"
                  >
                    Value
                  </Text>
                  <TextInput
                    style={{ width: w(24), height: h(4.8), fontSize: w(3) }}
                    placeholder="Value"
                    className="border p-2   rounded-lg mr-2"
                    value={otherInfo.value}
                    onChangeText={(text) =>
                      setOtherInfo({ ...otherInfo, value: text })
                    }
                  />
                  <TouchableOpacity
                    style={{ width: w(18), height: h(4.8) }}
                    className=" flex items-center justify-center border border-slate-400 rounded-lg bg-slate-100 font-semibold"
                    onPress={handleAddInfo}
                  >
                    <Text style={{ fontSize: w(3) }}>Add</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TextInput
                style={{ fontSize: w(3.8), height: h(4.6) }}
                placeholder="Remarks"
                className="border p-1 pr-10  rounded-lg "
                value={otherInfo.remarks}
                onChangeText={(text) =>
                  setOtherInfo({ ...otherInfo, remarks: text })
                }
              />
              <View>
                {otherArray.map((item, index) => (
                  <View key={index} className="border-b border-slate-200 pb-2">
                    <View className="flex flex-row items-center justify-between mb-2 mt-2 ">
                      <Text className="font-semibold">Title: {item.title}</Text>
                      <Text>Value: {item.value}</Text>
                      <TouchableOpacity
                        onPress={() => handleRemoveInfo(index)}
                        className="p-1 bg-red-400 rounded-lg"
                      >
                        <Text className="text-white">Remove</Text>
                      </TouchableOpacity>
                    </View>
                    <Text>Remarks:{item.remarks}</Text>
                  </View>
                ))}
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
              <TouchableOpacity
                style={{ paddingHorizontal: w(3), paddingVertical: h(1.1) }}
                className="bg-blue-500 flex flex-row items-center justify-center rounded-lg"
                onPress={() => navigation.navigate("HemodynamicCalculations")}
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
