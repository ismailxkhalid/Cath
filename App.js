import { StatusBar } from "expo-status-bar";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import Calculations from "./src/screens/Hemodynamic/Calculations";
import Result from "./src/screens/Hemodynamic/Result";
import PostCalculations from "./src/screens/PostHyperoxia/PostCalculations";
import PostResult from "./src/screens/PostHyperoxia/PostResult";
import { AppContextProvider } from "./src/context/AppContext.jsx";
import Profile from "./src/screens/GenerateReport/Profile";
import HemodynamicInfo from "./src/screens/GenerateReport/HemodynamicInfo";
import HemodynamicCalculations from "./src/screens/GenerateReport/HemodynamicCalculations";
import PostHyperoxiaInfo from "./src/screens/GenerateReport/PostHyperoxiaInfo";
import PostHyperoxiaCalculations from "./src/screens/GenerateReport/PostHyperoxiaCalculations";
import Results from "./src/screens/GenerateReport/Results.jsx";
import SupportedInfo from "./src/screens/GenerateReport/SupportedInfo";
import DoctorList from "./src/screens/GenerateReport/DoctorList.jsx";

const Stack = createStackNavigator();

export default function App() {
  return (
    <AppContextProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar style="auto" />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            {/* HEMODYNAMIC CALCULATION SCREENS */}
            <Stack.Screen name="Calculations" component={Calculations} />
            <Stack.Screen name="Result" component={Result} />
            {/* POSTHYPEROXIA CALCULATION SCREENS */}
            <Stack.Screen
              name="PostCalculations"
              component={PostCalculations}
            />
            <Stack.Screen name="PostResult" component={PostResult} />
            {/* GENERATE REPORT SCREENS */}
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="HemodynamicInfo" component={HemodynamicInfo} />
            <Stack.Screen
              name="HemodynamicCalculations"
              component={HemodynamicCalculations}
            />
            <Stack.Screen
              name="PostHyperoxiaInfo"
              component={PostHyperoxiaInfo}
            />
            <Stack.Screen
              name="PostHyperoxiaCalculations"
              component={PostHyperoxiaCalculations}
            />
            <Stack.Screen name="Results" component={Results} />
            <Stack.Screen name="SupportedInfo" component={SupportedInfo} />
            <Stack.Screen name="DoctorList" component={DoctorList} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AppContextProvider>
  );
}
