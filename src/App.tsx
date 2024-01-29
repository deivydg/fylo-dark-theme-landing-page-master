import "./index.css";
import BodyTop from "./components/BodyTop/BodyTop";
import FirstInfo from "./components/FirstInfo/FirstInfo";
import NavegationMobile from "./components/NavegationMobile/NavegationMobile";
import BodyMidTarget from "./components/BodyMidTarget/BodyMidTarget";
import BodyProductive from "./components/BodyProductive/BodyProductive";
import BodyUsers from "./components/BodyUsers/BodyUsers";
import FooterEmail from "./components/FooterEmail/FooterEmail";
import FooterTarget from "./components/FooterTarget/FooterTarget";

function App() {
  return (
    <>
      <div className="container">
        <NavegationMobile />
        <BodyTop />
        <FirstInfo />
        <BodyMidTarget />
        <BodyProductive />
        <BodyUsers />
        <FooterEmail/>
        <FooterTarget/>
      </div>
    </>
  );
}

export default App;
