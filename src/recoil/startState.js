import { atom } from "recoil";

const startState = atom({
  key: "starState", // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});

export default startState;
