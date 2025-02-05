import { RecoilRoot } from "recoil";
import "./App.css";
import Audio from "./components/Audio";
import FiberContainer from "./components/FiberContainer";
import { Loader } from "./components/Loader/Loader";

function App() {
  return (
    <RecoilRoot>
      <Loader />
      <FiberContainer />
      <Audio />
    </RecoilRoot>
  );
}

export default App;
