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
import AppContext from "../../context/AppContext";

const PostHyperoxiaInfo = ({ navigation }) => {
  const { postHyperoxiaInfoData, setPostHyperoxiaInfoData } =
    useContext(AppContext);
  const [selectedText, setSelectedText] = useState(null);

  const handleTextPress = (text) => {
    setSelectedText(text);
  };

  const updatePostHyperoxiaInfoSubKey = (mainKey, subKey, value) => {
    setPostHyperoxiaInfoData((prevData) => ({
      ...prevData,
      [mainKey]: {
        ...prevData[mainKey],
        [subKey]: value === "" ? undefined : Number(value), // Check if input is empty
      },
    }));
  };
  const updatePostHyperoxiaInfoStrings = (mainKey, subKey, value) => {
    setPostHyperoxiaInfoData((prevData) => ({
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
    setPostHyperoxiaInfoData((prevData) => ({
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
    setPostHyperoxiaInfoData((prevData) => ({
      ...prevData,
      otherInfo: prevData.otherInfo.filter(
        (_, index) => index !== indexToRemove
      ),
    }));
  };

  const otherArray = postHyperoxiaInfoData.otherInfo || [];
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
                height: h(12),
                zIndex: 10,
                backgroundColor: "white",
              }}
              className=" flex flex-row items-start justify-between py-2 "
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
                <AntDesign name="infocirlce" size={w(5.5)} color="black" />
                <View className="flex items-start justify-center">
                  <Text
                    style={{ fontSize: w(4.7) }}
                    className="font-semibold ml-1 "
                  >
                    Post Hyperoxia
                  </Text>
                  <Text
                    style={{ fontSize: w(4.7) }}
                    className="font-semibold ml-1 "
                  >
                    Hemodynamic Info
                  </Text>
                </View>
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
                          updatePostHyperoxiaInfoSubKey("mv", "Po2", text)
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
                          updatePostHyperoxiaInfoSubKey("mv", "O2Sat", text)
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
                          updatePostHyperoxiaInfoSubKey("mv", "a", text)
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
                          updatePostHyperoxiaInfoSubKey("mv", "v", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        BPM
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updatePostHyperoxiaInfoSubKey("mv", "bpm", text)
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
                          updatePostHyperoxiaInfoStrings("mv", "remarks", text)
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
                          updatePostHyperoxiaInfoSubKey("ra", "Po2", text)
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
                          updatePostHyperoxiaInfoSubKey("ra", "O2Sat", text)
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
                          updatePostHyperoxiaInfoSubKey("ra", "a", text)
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
                          updatePostHyperoxiaInfoSubKey("ra", "v", text)
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
                          updatePostHyperoxiaInfoSubKey("ra", "mean", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        BPM
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updatePostHyperoxiaInfoSubKey("ra", "bpm", text)
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
                          updatePostHyperoxiaInfoStrings("ra", "remarks", text)
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
                          updatePostHyperoxiaInfoSubKey("rv", "Po2", text)
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
                          updatePostHyperoxiaInfoSubKey("rv", "O2Sat", text)
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
                          updatePostHyperoxiaInfoSubKey("rv", "systolic", text)
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
                          updatePostHyperoxiaInfoSubKey("rv", "edp", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        BPM
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updatePostHyperoxiaInfoSubKey("rv", "bpm", text)
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
                          updatePostHyperoxiaInfoStrings("rv", "remarks", text)
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
                          updatePostHyperoxiaInfoSubKey("pa", "Po2", text)
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
                          updatePostHyperoxiaInfoSubKey("pa", "O2Sat", text)
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
                          updatePostHyperoxiaInfoSubKey("pa", "systolic", text)
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
                          updatePostHyperoxiaInfoSubKey(
                            "pa",
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
                          updatePostHyperoxiaInfoSubKey("pa", "mean", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        BPM
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updatePostHyperoxiaInfoSubKey("pa", "bpm", text)
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
                          updatePostHyperoxiaInfoStrings("pa", "remarks", text)
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
                          updatePostHyperoxiaInfoSubKey("dao", "Po2", text)
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
                          updatePostHyperoxiaInfoSubKey("dao", "O2Sat", text)
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
                          updatePostHyperoxiaInfoSubKey("dao", "systolic", text)
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
                          updatePostHyperoxiaInfoSubKey(
                            "dao",
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
                          updatePostHyperoxiaInfoSubKey("dao", "mean", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        BPM
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updatePostHyperoxiaInfoSubKey("dao", "bpm", text)
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
                          updatePostHyperoxiaInfoStrings("dao", "remarks", text)
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
                          updatePostHyperoxiaInfoSubKey("aao", "Po2", text)
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
                          updatePostHyperoxiaInfoSubKey("aao", "O2Sat", text)
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
                          updatePostHyperoxiaInfoSubKey("aao", "systolic", text)
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
                          updatePostHyperoxiaInfoSubKey(
                            "aao",
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
                          updatePostHyperoxiaInfoSubKey("aao", "mean", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        BPM
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updatePostHyperoxiaInfoSubKey("aao", "bpm", text)
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
                          updatePostHyperoxiaInfoStrings("aao", "remarks", text)
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
                          updatePostHyperoxiaInfoSubKey("lv", "Po2", text)
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
                          updatePostHyperoxiaInfoSubKey("lv", "O2Sat", text)
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
                          updatePostHyperoxiaInfoSubKey("lv", "systolic", text)
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
                          updatePostHyperoxiaInfoSubKey("lv", "edp", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        BPM
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updatePostHyperoxiaInfoSubKey("lv", "bpm", text)
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
                          updatePostHyperoxiaInfoStrings("lv", "remarks", text)
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
                          updatePostHyperoxiaInfoSubKey("la", "Po2", text)
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
                          updatePostHyperoxiaInfoSubKey("la", "O2Sat", text)
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
                          updatePostHyperoxiaInfoSubKey("la", "a", text)
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
                          updatePostHyperoxiaInfoSubKey("la", "v", text)
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
                          updatePostHyperoxiaInfoSubKey("la", "mean", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        BPM
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updatePostHyperoxiaInfoSubKey("la", "bpm", text)
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
                          updatePostHyperoxiaInfoStrings("la", "remarks", text)
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
                          updatePostHyperoxiaInfoSubKey("pv", "Po2", text)
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
                          updatePostHyperoxiaInfoSubKey("pv", "O2Sat", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        BPM
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updatePostHyperoxiaInfoSubKey("pv", "bpm", text)
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
                          updatePostHyperoxiaInfoStrings("pv", "remarks", text)
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
                          updatePostHyperoxiaInfoSubKey("pvWedge", "Po2", text)
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
                          updatePostHyperoxiaInfoSubKey(
                            "pvWedge",
                            "O2Sat",
                            text
                          )
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
                          updatePostHyperoxiaInfoSubKey(
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
                          updatePostHyperoxiaInfoSubKey(
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
                          updatePostHyperoxiaInfoSubKey("pvWedge", "mean", text)
                        }
                      />
                    </View>
                    <View className="flex flex-row items-center justify-between mb-2">
                      <Text style={styles.valueText} className="font-semibold">
                        BPM
                      </Text>
                      <TextInput
                        style={styles.valueInput}
                        className="border rounded-lg py-1 pl-1"
                        onChangeText={(text) =>
                          updatePostHyperoxiaInfoSubKey("pvWedge", "bpm", text)
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
                          updatePostHyperoxiaInfoStrings(
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
                height: h(6),
                zIndex: 10,
                backgroundColor: "white",
              }}
              className=" flex flex-row items-start justify-between  "
            >
              <TouchableOpacity
                style={{ paddingHorizontal: w(3), paddingVertical: h(1) }}
                onPress={() => navigation.navigate("HemodynamicCalculations")}
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
                onPress={() => navigation.navigate("PostHyperoxiaCalculations")}
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

export default PostHyperoxiaInfo;
