import AsyncStorage from "@react-native-async-storage/async-storage";

//sawIntroSlides - var storing whether or not user saw the intro slides

export const setSawIntro = async (value) => {
  try {
    // Store value as a string
    await AsyncStorage.setItem("sawIntroSlides", value ? "true" : "false");
  } catch (e) {
    console.log("Couldn't set sawIntroSlides");
  }
};

export const sawIntro = async () => {
  try {
    const value = await AsyncStorage.getItem("sawIntroSlides");
    return value;
  } catch (e) {
    console.log("Couldn't get sawIntroSlides");
  }
  return null;
};
