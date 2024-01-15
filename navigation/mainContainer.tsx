import * as React from "react";
import {View, Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//Screens
import AchievmentsScreen from "./screens/achievmentsScreen";
import DictionaryScreen from "./screens/dictionaryScreen";
import LearningScreen from "./screens/learningScreen";
import ProfileScreen from "./screens/profileSceen";

//Screens names
// const achievmentsName = 'Достижения';
// const dictionaryName = 'Словарь';
// const learningName = 'Обучение';
// const profileName = 'Профиль';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={"Learning"}
                            component={LearningScreen}
                            options={{
                                tabBarLabel: "Обучение",
                            }}/>
                <Tab.Screen name={"Dictionary"}
                            component={DictionaryScreen}
                            options={{
                                tabBarLabel: "Словарь",
                            }}/>
                <Tab.Screen name={"Achievments"}
                            component={AchievmentsScreen}
                            options={{
                                tabBarLabel: "Достижения",
                            }}/>
                <Tab.Screen name={"Profile"}
                            component={ProfileScreen}
                            options={{
                                tabBarLabel: "Профиль",
                            }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default TabNavigator;
