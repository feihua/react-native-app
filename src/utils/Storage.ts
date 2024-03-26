import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * 保存
 * @param key
 * @param value
 */
export const saveStorage = async (key: string, value: string) => {
    try {
        return await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.error(e);
    }
};

/**
 * 获取
 * @param key
 */
export const getStorage = async (key: string) => {
    try {
        return await AsyncStorage.getItem(key);
    } catch (e) {
        console.error(e);
        return null;
    }
};

/**
 * 删除
 * @param key
 */
export const removeStorage = async (key: string) => {
    try {
        return await AsyncStorage.removeItem(key);
    } catch (e) {
        console.error(e);
    }
};

/**
 * 清空
 */
export const clearStorage = async () => {
    try {
        await AsyncStorage.clear();
    } catch (e) {
        console.error(e);
    }
};
