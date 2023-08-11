import Profile from "../components/profiles/profile";
import"./App.css"

import imgDarkMode from "../img/SUSS.webp";
import imglightMode from "../img/sus.webp";
import { useState } from "react";

const App = () => {
 const [islightMode,setIsLightMode ] = useState (false);


 const imgScr=islightMode ? imglightMode : imgDarkMode;
const imgAlt = islightMode ? "imagem no  modo claro" : "Imagem no Modo Escuro"
return(
<div>

  <Profile
    imgSrc={imgScr} imgAlt={imgAlt}
  >@Vamosdub</Profile>
  </div>
)
}

export default App;