import { Dimensions, Platform } from "react-native";

export const isIos = Platform.OS == 'ios';
const { width, height } = Dimensions.get('window')
export const theme = {
    background: '#F02A4B',
    secondary: '#eab308',
    text: '#F02A4B',

};

export const SIZES = {
    width,
    height
}