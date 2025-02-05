import { RecoilRoot } from "recoil";
import "./App.css";
import Audio from "./components/Audio";
import FiberContainer from "./components/FiberContainer";
import { Loader } from "./components/Loader/Loader";
import UI from "./components/UI";

function App() {
  return (
    <RecoilRoot>
      <Loader />
      <FiberContainer />
      <Audio />
      <UI />
    </RecoilRoot>
  );
}

export default App;
