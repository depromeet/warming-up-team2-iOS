import AsyncStorage from '@react-native-community/async-storage';

export const USER_TOKEN = 'USER_TOKEN';
export const SKIP_REGIST_CODE = 'SKIP_REGIST_CODE';

export const setItem = (key: string, item: string) => {
  AsyncStorage.setItem(key, item);
};

export const getItem = async (key: string) => {
  const item = await AsyncStorage.getItem(key);
  return item;
};
