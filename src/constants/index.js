import { Dimensions, StatusBar } from "react-native";

export const bottombarHeight =
	Dimensions.get("screen").height == Dimensions.get("window").height
		? Dimensions.get("screen").height -
		  Dimensions.get("window").height +
		  StatusBar.currentHeight
		: StatusBar.currentHeight;

export const Colors = {
	//UI Neutrals
	ui_black: "#000000",
	ui_white: "#FFFFFF",
	ui_white_2: "#FDFCFC",
	ui_purple: "#5F3079",
	ui_light_purple: "#7F498C",
	ui_dark_purple: "#5D2D77",
	ui_darker_purple: "#221D5C",
	ui_green: "#97DE84",
	ui_dark_green: "#1FB767",
	ui_gray: "#D9D9D9",
	ui_gray_2: "#C7C4C9",
	ui_gray_bg: "#E1DEE0",
	ui_light_gray: "#E5E5E5",
	ui_light_gray_2: "#E8E6E7",
	ui_dark_gray: "#909090",
	ui_dark_yellow: "#9E7D3B",
	ui_light_blue: "#92B3C2",
	ui_lightGray: "#E5E5E5",
	ui_pink: "#B5179E",
	ui_light_green: "#63D5DE",
	ui_error: "#A22116",

	// background
	ui_main_bg: "#282560",
};
export const Fonts = {
	antipasto: "antipasto",
	exan: "Exan",
	montserrat: "Montserrat",
};

export const Images = {};

export const Icons = {};

export const Window = {
	height: Dimensions.get("screen").height,
	width: Dimensions.get("screen").width,
};

export const timezonesData = [
	{ label: "UTC-12:00", value: "UTC-12:00" },
	{ label: "UTC-11:00", value: "UTC-11:00" },
	{ label: "UTC-10:00", value: "UTC-10:00" },
	{ label: "UTC-09:00", value: "UTC-09:00" },
	{ label: "UTC-08:00", value: "UTC-08:00" },
	{ label: "UTC-07:00", value: "UTC-07:00" },
	{ label: "UTC-06:00", value: "UTC-06:00" },
	{ label: "UTC-05:00", value: "UTC-05:00" },
	{ label: "UTC-04:00", value: "UTC-04:00" },
	{ label: "UTC-03:00", value: "UTC-03:00" },
	{ label: "UTC-02:00", value: "UTC-02:00" },
	{ label: "UTC-01:00", value: "UTC-01:00" },
	{ label: "UTC±00:00", value: "UTC±00:00" },
	{ label: "UTC+01:00", value: "UTC+01:00" },
	{ label: "UTC+02:00", value: "UTC+02:00" },
	{ label: "UTC+03:00", value: "UTC+03:00" },
	{ label: "UTC+04:00", value: "UTC+04:00" },
	{ label: "UTC+05:00", value: "UTC+05:00" },
	{ label: "UTC+06:00", value: "UTC+06:00" },
	{ label: "UTC+07:00", value: "UTC+07:00" },
	{ label: "UTC+08:00", value: "UTC+08:00" },
	{ label: "UTC+09:00", value: "UTC+09:00" },
	{ label: "UTC+10:00", value: "UTC+10:00" },
	{ label: "UTC+11:00", value: "UTC+11:00" },
	{ label: "UTC+12:00", value: "UTC+12:00" },
];

export const languagesData = [
	{ label: "armenian", value: "am" },
	{ label: "english", value: "en" },
];

export const rolesData = [
	{ label: "student", value: "student" },
	{ label: "worker/employee", value: "worker" },
	{ label: "unemployed", value: "unemployed" },
	{ label: "self-employed/entrepreneur", value: "self-employed" },
	{ label: "retired", value: "retired" },
	{ label: "homemaker", value: "homemaker" },
	{ label: "freelancer/contracto", value: "freelancer" },
	{ label: "volunteer", value: "volunteer" },
];

export const feelings = [
	{
		id: 1,
		iconName: "happy",
		title: "happy",
	},
	{
		id: 2,
		iconName: "happy",
		title: "sad",
	},
	{
		id: 3,
		iconName: "happy",
		title: "angry",
	},
	{
		id: 4,
		iconName: "neutral",
		title: "neutral",
	},
	{
		id: 5,
		iconName: "happy",
		title: "blessed",
	},
	{
		id: 6,
		iconName: "happy",
		title: "depressed",
	},
	{
		id: 7,
		iconName: "happy",
		title: "silly",
	},
	{
		id: 8,
		iconName: "happy",
		title: "anxious",
	},
	{
		id: 9,
		iconName: "happy",
		title: "motivated",
	},
];

export const focuses = [
	{
		id: 1,
		iconName: "career",
		title: "career \nand business",
	},
	{
		id: 2,
		iconName: "love",
		title: "family \nand loved ones",
	},
	{
		id: 3,
		iconName: "health",
		title: "career \n and business",
	},
	{
		id: 4,
		iconName: "self-care",
		title: "career \n and business",
	},
	{
		id: 5,
		iconName: "soul",
		title: "min and soul",
	},
	{
		id: 6,
		iconName: "learning",
		title: "learning",
	},
	{
		id: 7,
		iconName: "alone",
		title: "time alone",
	},
	{
		id: 8,
		iconName: "fitness",
		title: "fitness",
	},
	{
		id: 9,
		iconName: "creativity",
		title: "creativity",
	},
	{
		id: 10,
		iconName: "habit-improve",
		title: "habit improvement",
	},
	{
		id: 11,
		iconName: "body",
		title: "body",
	},
	{
		id: 12,
		iconName: "challenge",
		title: "overcoming challenges",
	},
	{
		id: 13,
		iconName: "finance",
		title: "finance",
	},
	{
		id: 14,
		iconName: "growth",
		title: "growth",
	},
	{
		id: 15,
		iconName: "values",
		title: "values",
	},
	{
		id: 16,
		iconName: "priority",
		title: "top priority",
	},
];

export const weekItems = {
	sunday: "Sun",
	monday: "Mon",
	tuesday: "Tue",
	wednesday: "Wed",
	thursday: "Thu",
	friday: "Fri",
	saturday: "Sat",
};

export const periods = {
	week: "Week",
	month: "Month",
};

export const desireItems = {
	know: "desire to know",
	love: "desire to love",
	forever: "desire to live forever",
};

export const purposeItems = {
	body: "body",
	mind: "mind",
	soul: "soul",
};

export const publicRoutes = [
	"Login",
	"Register",
	"TermsConditions",
	"PrivacyPolicy",
];
