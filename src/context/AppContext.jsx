import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  // #Hemodynamic Calculations >>>> Hemodynamic Calculations Screen Data and variables Screen(1)
  const [hemodynamicData, setHemodynamicData] = useState({
    HB: undefined,
    AOO2Sat: undefined,
    MVO2Sat: undefined,
    PVO2Sat: undefined,
    PAO2Sat: undefined,
    AOMeanP: undefined,
    RAMeanP: undefined,
    PAMeanP: undefined,
    LAMeanP: undefined,
  });

  // #PostHyperoxia Calculations >>>> PostHyperoxia Calculations Screen Data and variables Screen(1)
  const [postHyperoxiaData, setPostHyperoxiaData] = useState({
    HB: undefined,
    AOO2Sat: undefined,
    AOPO2: undefined,
    MVO2Sat: undefined,
    MVPO2: undefined,
    PVO2Sat: undefined,
    PVPO2: undefined,
    PAO2Sat: undefined,
    PAPO2: undefined,
    AOMeanP: undefined,
    RAMeanP: undefined,
    PAMeanP: undefined,
    LAMeanP: undefined,
  });

  // #Generate Report >>>> Profile Screen Data and variables Screen(1)
  const [doctorList, setDoctorList] = useState([]);
  const [profileData, setProfileData] = useState({
    date: "",
    patientName: "",
    patientAge: undefined,
    agePattern: "Years",
    gender: "Male",
    height: undefined,
    mr: undefined,
    cath: undefined,
    vessels: undefined,
    catheters: undefined,
    weight: undefined,
  });

  // #Generate Report >>>> Hemodynamic Info Screen Data and variables Screen(2)

  const [hemodynamicInfoData, setHemodynamicInfoData] = useState({
    hemoglobin: undefined,
    mv: {
      Po2: undefined,
      O2Sat: undefined,
      a: undefined,
      v: undefined,
      remarks: "",
    },
    ra: {
      Po2: undefined,
      O2Sat: undefined,
      a: undefined,
      v: undefined,
      mean: undefined,
      remarks: "",
    },
    rv: {
      Po2: undefined,
      O2SAT: undefined,
      systolic: undefined,
      edp: undefined,
      remarks: "",
    },
    pa: {
      Po2: undefined,
      O2SAT: undefined,
      systolic: undefined,
      disystolic: undefined,
      mean: undefined,
      remarks: "",
    },
    dao: {
      Po2: undefined,
      O2SAT: undefined,
      systolic: undefined,
      disystolic: undefined,
      mean: undefined,
      remarks: "",
    },
    aao: {
      Po2: undefined,
      O2Sat: undefined,
      systolic: undefined,
      disystolic: undefined,
      mean: undefined,
      remarks: "",
    },
    lv: {
      Po2: undefined,
      O2Sat: undefined,
      systolic: undefined,
      edp: undefined,
      remarks: "",
    },
    la: {
      Po2: undefined,
      O2Sat: undefined,
      a: undefined,
      v: undefined,
      mean: undefined,
      remarks: "",
    },
    pv: {
      Po2: undefined,
      O2Sat: undefined,
      remarks: "",
    },
    pvWedge: {
      Po2: undefined,
      O2Sat: undefined,
      systolic: undefined,
      disystolic: undefined,
      mean: undefined,
      remarks: "",
    },
    otherInfo: [],
  });
  const resetHemodynamicInfoData = () => {
    setHemodynamicInfoData({
      hemoglobin: undefined,
      mv: {
        Po2: undefined,
        O2Sat: undefined,
        a: undefined,
        v: undefined,
        remarks: "",
      },
      ra: {
        Po2: undefined,
        O2Sat: undefined,
        a: undefined,
        v: undefined,
        mean: undefined,
        remarks: "",
      },
      rv: {
        Po2: undefined,
        O2SAT: undefined,
        systolic: undefined,
        edp: undefined,
        remarks: "",
      },
      pa: {
        Po2: undefined,
        O2SAT: undefined,
        systolic: undefined,
        disystolic: undefined,
        mean: undefined,
        remarks: "",
      },
      dao: {
        Po2: undefined,
        O2SAT: undefined,
        systolic: undefined,
        disystolic: undefined,
        mean: undefined,
        remarks: "",
      },
      aao: {
        Po2: undefined,
        O2Sat: undefined,
        systolic: undefined,
        disystolic: undefined,
        mean: undefined,
        remarks: "",
      },
      lv: {
        Po2: undefined,
        O2Sat: undefined,
        systolic: undefined,
        edp: undefined,
        remarks: "",
      },
      la: {
        Po2: undefined,
        O2Sat: undefined,
        a: undefined,
        v: undefined,
        mean: undefined,
        remarks: "",
      },
      pv: {
        Po2: undefined,
        O2Sat: undefined,
        remarks: "",
      },
      pvWedge: {
        Po2: undefined,
        O2Sat: undefined,
        systolic: undefined,
        disystolic: undefined,
        mean: undefined,
        remarks: "",
      },
      otherInfo: [],
    });
  };

  // #Generate Report >>>> Hemodynamic Info Screen Data and variables Screen(4)
  const [postHyperoxiaInfoData, setPostHyperoxiaInfoData] = useState({
    mv: {
      Po2: undefined,
      O2Sat: undefined,
      a: undefined,
      v: undefined,
      bpm: undefined,
      remarks: "",
    },
    ra: {
      Po2: undefined,
      O2Sat: undefined,
      a: undefined,
      v: undefined,
      mean: undefined,
      bpm: undefined,
      remarks: "",
    },
    rv: {
      Po2: undefined,
      O2Sat: undefined,
      systolic: undefined,
      edp: undefined,
      bpm: undefined,
      remarks: "",
    },
    pa: {
      Po2: undefined,
      O2Sat: undefined,
      systolic: undefined,
      disystolic: undefined,
      mean: undefined,
      bpm: undefined,
      remarks: "",
    },
    dao: {
      Po2: undefined,
      O2Sat: undefined,
      systolic: undefined,
      disystolic: undefined,
      mean: undefined,
      bpm: undefined,
      remarks: "",
    },
    aao: {
      Po2: undefined,
      O2Sat: undefined,
      systolic: undefined,
      disystolic: undefined,
      mean: undefined,
      bpm: undefined,
      remarks: "",
    },
    lv: {
      Po2: undefined,
      O2Sat: undefined,
      systolic: undefined,
      edp: undefined,
      bpm: undefined,
      remarks: "",
    },
    la: {
      Po2: undefined,
      O2Sat: undefined,
      a: undefined,
      v: undefined,
      mean: undefined,
      bpm: undefined,
      remarks: "",
    },
    pv: {
      Po2: undefined,
      O2Sat: undefined,
      bpm: undefined,
      remarks: "",
    },
    pvWedge: {
      Po2: undefined,
      O2Sat: undefined,
      systolic: undefined,
      disystolic: undefined,
      mean: undefined,
      bpm: undefined,
      remarks: "",
    },
    otherInfo: [],
  });

  // #Generate Report >>>> Results Screen Data and variables Screen(6)
  const [resultsData, setResultsData] = useState({
    diagnosis: "",
    indications: "",
    route: "",
    catheters: "",
    anigiogram: "",
    procedure: "",
    other: [],
  });

  // #Generate Report >>>> Supported Info Screen Data and variables Screen(7)
  const [supportInfoData, setSupportInfoData] = useState({
    svc: { ml: "", position: "" },
    rv: { ml: "", position: "" },
    mpa: { ml: "", position: "" },
    lpa: { ml: "", position: "" },
    rpa: { ml: "", position: "" },
    lv: { ml: "", position: "" },
    aorticRoot: { ml: "", position: "" },
    aorticArch: { ml: "", position: "" },
    aao: { ml: "", position: "" },
    dao: { ml: "", position: "" },
    collaterls: { ml: "", position: "" },
    other: [],
  });

  // You can add any additional state variables and setter functions here

  const [doctors, setDoctors] = useState([]);
  const [addDoctor, setAddDoctor] = useState(""); // Varable to State for the input field
  const addToProfile = () => {
    if (addDoctor.trim() === "") {
      // Don't add empty doctor names
      return;
    }
    // Check if the doctor is already in the list
    if (!doctors.includes(addDoctor)) {
      // If the doctor doesn't exist, add them to the list
      setDoctors((prevDoctors) => [...prevDoctors, addDoctor]);
    }
    setAddDoctor(""); // Clear the input field after adding
  };

  const removeDoctor = (index) => {
    const updatedDoctors = [...doctors];
    updatedDoctors.splice(index, 1);
    setDoctors(updatedDoctors);

    return;
  };

  const saveAndAdd = (addDoctor) => {
    if (addDoctor.trim() === "") {
      // Don't add empty doctor names
      return;
    }
    addToProfile();
    if (!doctorList.includes(addDoctor)) {
      // Check if the doctor is not already in the list
      setDoctorList([...doctorList, addDoctor]);
    }
  };

  //Doctor List Screen Methods

  // Load doctorList from AsyncStorage on component mount
  useEffect(() => {
    const loadDoctorList = async () => {
      try {
        const storedDoctorList = await AsyncStorage.getItem("doctorList");
        if (storedDoctorList !== null) {
          setDoctorList(JSON.parse(storedDoctorList));
        }
      } catch (error) {
        console.error("Error loading doctor list from AsyncStorage:", error);
      }
    };
    loadDoctorList();
  }, []);

  // Save doctorList to AsyncStorage whenever it changes
  useEffect(() => {
    const saveDoctorList = async () => {
      try {
        await AsyncStorage.setItem("doctorList", JSON.stringify(doctorList));
      } catch (error) {
        console.error("Error saving doctor list to AsyncStorage:", error);
      }
    };
    saveDoctorList();
  }, [doctorList]);

  const selectDoctorFromList = (index) => {
    const selectedDoctor = doctorList[index];
    // Check if the doctor is already in the list
    if (
      !doctors.some(
        (existingDoctor) =>
          JSON.stringify(existingDoctor) === JSON.stringify(selectedDoctor)
      )
    ) {
      // If the doctor doesn't exist, add them to the list
      setDoctors([...doctors, selectedDoctor]);
    }
  };

  const removeDoctorFromList = (doctorIndex) => {
    const doctorToRemove = doctorList[doctorIndex];

    // Check if the doctor to remove exists in the allDoctors array
    const isInAllDoctors = doctors.some((doctor) => doctor === doctorToRemove);
    if (isInAllDoctors) {
      // Remove the doctor from allDoctors
      const updatedAllDoctors = doctors.filter(
        (doctor) => doctor !== doctorToRemove
      );
      setDoctors(updatedAllDoctors);
    }
    const updatedList = doctorList.filter((_, index) => index !== doctorIndex);
    setDoctorList(updatedList);
  };

  return (
    <AppContext.Provider
      value={{
        hemodynamicData,
        setHemodynamicData,
        postHyperoxiaData,
        setPostHyperoxiaData,
        profileData,
        setProfileData,
        hemodynamicInfoData,
        setHemodynamicInfoData,
        resetHemodynamicInfoData,
        postHyperoxiaInfoData,
        setPostHyperoxiaInfoData,
        resultsData,
        setResultsData,
        supportInfoData,
        setSupportInfoData,
        doctors,
        setDoctors,
        addDoctor,
        setAddDoctor,
        addToProfile,
        removeDoctor,
        saveAndAdd,
        doctorList,
        setDoctorList,
        selectDoctorFromList,
        removeDoctorFromList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
