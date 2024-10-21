import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/register/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import StartScreen from '../screens/routines/morning-routine/StartScreen';
import FeelScreen from '../screens/routines/morning-routine/FeelScreen';
import SleepScreen from '../screens/routines/morning-routine/SleepScreen';
import FocusScreen from '../screens/routines/morning-routine/FocusScreen';
import StartDoingScreen from '../screens/routines/morning-routine/StartDoingScreen';
import PlansScreen from '../screens/routines/morning-routine/PlansScreen';
import GratefulScreen from '../screens/routines/morning-routine/GratefulScreen';
import MorningRoutineGoalsScreen from "../screens/routines/morning-routine/MorningRoutineGoalsScreen";
import ListScreen from "../screens/routines/morning-routine/ListScreen";
import CompletedScreen from "../screens/routines/morning-routine/CompletedScreen";
import EveningStartScreen from "../screens/routines/evening-routine/EveningStartScreen";
import ProductiveScreen from "../screens/routines/evening-routine/ProductiveScreen";
import DoneListScreen from "../screens/routines/evening-routine/DoneListScreen";
import HabitsScreen from "../screens/routines/evening-routine/HabitsScreen";
import BiggestLesson from "../screens/routines/evening-routine/BiggestLessonScreen";
import SuccessScreen from "../screens/routines/evening-routine/SuccessScreen";
import ChallengeScreenOne from "../screens/challenge/ChallengeScreenOne";
import ChallengeScreenTwo from "../screens/challenge/ChallengeScreenTwo";
import ChallengeScreenThree from "../screens/challenge/ChallengeScreenThree";
import CalendarScreen from "../screens/CalendarScreen";
import CreateProfileStep1 from "../screens/CreateProfileScreen/step1";
import GoalsScreen from "../screens/goals/GoalsScreen";
import AddOrEditGoalScreen from "../screens/goals/AddOrEditGoalScreen";
import RoutinesScreen from "../screens/routines";
import TodoScreen from "../screens/todo/TodoScreen";
import AddOrEditTodoScreen from "../screens/todo/AddOrEditTodoScreen";
import AboutWelcomeScreen from "../screens/about/AboutWelcomeScreen";
import AboutLearnScreen from "../screens/about/AboutLearnScreen";
import TermsConditions from "../screens/termsAndPrivacy/termsConditions";
import PrivacyPolicy from "../screens/termsAndPrivacy/privacyPolicy";
import NotesScreen from "../screens/notes/NotesScreen";
import AddOrEditNoteScreen from "../screens/notes/AddOrEditNoteScreen";
import AnalyticsScreen from "../screens/AnalyticsScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="AboutWelcome" component={AboutWelcomeScreen} />
        <Stack.Screen name="AboutLearn" component={AboutLearnScreen} />
        <Stack.Screen name="Notes" component={NotesScreen} />
        <Stack.Screen name="AddOrEditNote" component={AddOrEditNoteScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="Goals" component={GoalsScreen} />
        <Stack.Screen name="Todo" component={TodoScreen} />
        <Stack.Screen name="AddOrEditTodo" component={AddOrEditTodoScreen} />
        <Stack.Screen name="AddOrEditGoal" component={AddOrEditGoalScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="CreateProfileStep1" component={CreateProfileStep1} />
        <Stack.Screen name="Routines" component={RoutinesScreen} />
        <Stack.Screen name="MorningRoutineStart" component={StartScreen} />
        <Stack.Screen name="MorningRoutineFocus" component={FocusScreen} />
        <Stack.Screen name="MorningRoutineFeel" component={FeelScreen} />
        <Stack.Screen name="MorningRoutineSleep" component={SleepScreen} />
        <Stack.Screen name="MorningRoutineStartDoing" component={StartDoingScreen} />
        <Stack.Screen name="MorningRoutinePlans" component={PlansScreen} />
        <Stack.Screen name="MorningRoutineGrateful" component={GratefulScreen} />
        <Stack.Screen name="MorningRoutineGoals" component={MorningRoutineGoalsScreen} />
        <Stack.Screen name="MorningRoutineList" component={ListScreen} />
        <Stack.Screen name="MorningRoutineCompleted" component={CompletedScreen} />
        <Stack.Screen name="EveningRoutineStart" component={EveningStartScreen} />
        <Stack.Screen name="EveningRoutineProductive" component={ProductiveScreen} />
        <Stack.Screen name="EveningRoutineDone" component={DoneListScreen} />
        <Stack.Screen name="EveningRoutineHabits" component={HabitsScreen} />
        <Stack.Screen name="EveningRoutineBiggestLesson" component={BiggestLesson} />
        <Stack.Screen name="EveningRoutineSuccess" component={SuccessScreen} />
        <Stack.Screen name="ChallengeOne" component={ChallengeScreenOne} />
        <Stack.Screen name="ChallengeTwo" component={ChallengeScreenTwo} />
        <Stack.Screen name="ChallengeThree" component={ChallengeScreenThree} />
        <Stack.Screen name="TermsConditions" component={TermsConditions} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="Analytics" component={AnalyticsScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
