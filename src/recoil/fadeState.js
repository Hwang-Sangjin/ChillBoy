import { atom } from "recoil";

const fadeState = atom({
  key: "fadeState", // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});

export default fadeState;
