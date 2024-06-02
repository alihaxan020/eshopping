
import * as SecureStore from 'expo-secure-store';
async function getValueFor(key: string) {
    return await SecureStore.getItemAsync(key);
}
async function setValueFor(key: string, value: string) {
    return await SecureStore.setItemAsync(key, value);
}
async function logoutValue(key: string, value: '') {
    return await SecureStore.setItemAsync(key, value);
}
const SECURE_TOKEN = "SECURE_TOKEN"
export {
    getValueFor,
    setValueFor,
    logoutValue,
    SECURE_TOKEN
}