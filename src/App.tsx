import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/index.scss"
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import { Link } from "react-router-dom";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";
const App = () => {
  const {theme , toggleTheme} = useTheme()
   return (
   <div className={classNames("app" , {} , [theme])}>     
   <button onClick={toggleTheme}>TOGGLE</button> 
      <Link to={"/about"}>AboutPage</Link>
      <Link to={"/"}>MainPage</Link>

         <Suspense fallback={<div>Loading...</div>}>
            <Routes>
             <Route path={"/about"} element={<AboutPageAsync/>}/>
             <Route path={"/"} element={<MainPageAsync/>}/>
            </Routes>
         </Suspense>
   </div>
   );
};

export default App;