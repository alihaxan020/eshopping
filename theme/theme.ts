import { Dimensions, Platform } from "react-native";

export const isIos = Platform.OS == 'ios';
const { width, height } = Dimensions.get('window');
const scale = (size: number) => (width / 375) * size;

export const theme = {
    background: '#F02A4B',
    secondary: '#eab308',
    text: '#F02A4B',
    white: '#fff'

};

export const SIZES = {
    width,
    height,
    heading: scale(24),
    subheading: scale(18),
    bodyText: scale(14),

}