import AsyncStorage from '@react-native-community/async-storage';

export async function storeItem(key, item) {
  try {
    //we want to wait for the Promise returned by AsyncStorage.setItem()
    //to be resolved to the actual value before returning the value
    var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
    return jsonOfItem;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getItem(key) {
  try {
    const retrievedItem = await AsyncStorage.getItem(key);
    const item = JSON.parse(retrievedItem);
    return item;
  } catch (error) {
    console.log(error.message);
  }
  return;
}

export async function removeItem(key) {
  try {
    const jsonOfItem = await AsyncStorage.removeItem(key);

    return jsonOfItem;
  } catch (error) {
    console.log(error.message);
  }
  return;
}

export async function getMultipleItem(key) {
  try {
    const retrievedItem = await AsyncStorage.getItem(key);
    const item = JSON.parse(retrievedItem);
    return item;
  } catch (error) {
    console.log(error.message);
  }
  return;
}

export async function setMultipleItem(key) {
  try {
    const retrievedItem = await AsyncStorage.getItem(key);
    const item = JSON.parse(retrievedItem);
    return item;
  } catch (error) {
    console.log(error.message);
  }
  return;
}

export async function clearDB() {
  try {
    const retrievedItem = await AsyncStorage.clear();

    return retrievedItem;
  } catch (error) {
    console.log(error.message);
  }
  return;
}
