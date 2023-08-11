import Profile from "../components/profiles/profile";
import "./App.css";
import Switch from "../components/switch/switch";
import Links from "../components/links/links";
import Social from "../components/socialLinks/socialLinks";
import Footer from "../components/footer/footer";

import imgDarkMode from "../img/SUSS.webp";
import imglightMode from "../img/sus.webp";
import { useState } from "react";

const App = () => {
  const [islightMode, setIsLightMode] = useState(true);
  const toggleMode = () => {
    setIsLightMode((prevMode) => !prevMode);
  };
  const imgScr = islightMode ? imglightMode : imgDarkMode;
  const imgAlt = islightMode
    ? "imagem no  modo claro"
    : "Imagem no Modo Escuro";
  return (
    <div id="App" className={islightMode ? "light" : ""}>
      <div id="container">
        <Profile imgSrc={imgScr} imgAlt={imgAlt}>
          @Vamosdub
        </Profile>
        <Switch mode={toggleMode} infoButton={islightMode} />
        <div id="links">
          <ul>
            <Links link={"https://github.com/PietroDub"}>Git hub</Links>
            <Links
              link={"https://www.youtube.com/channel/UCRapgt19yeSs82V_Sb-AljA"}
            >
              Youtube
            </Links>
            <Links link={""}>Instagram</Links>
            <Links link={""}>Projetos</Links>
          </ul>
        </div>
        <div id="socialLinks">
          <Social href={"#"} icon={"logo-github"} />
          <Social href={"#"} icon={"logo-youtube"} />
          <Social href={"#"} icon={"logo-instagram"} />
          <Social href={"#"} icon={"logo-tiktok"} />
        </div>
        <Footer link={"#"}>@Vamosdub</Footer>
      </div>
    </div>
  );
};

export default App;
