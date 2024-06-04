import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Hompage from "../Routing/Hompage";
import HomePage from "./Routing/UseNavigationExamples/Usenavigation/HomePage";

import Aboutuspage from "./Routing/UseNavigationExamples/Usenavigation/Aboutuspage";
import ContactPage from "./Routing/UseNavigationExamples/Usenavigation/ContactPage";
import PagenotFound from "./Routing/UseNavigationExamples/Usenavigation/PagenotFound";
import Homepage01 from "./Routing/UseNavigationExamples/Usenavigation/Usenavigationnextandprevious/Homepage01";
import Contactuspage01 from "./Routing/UseNavigationExamples/Usenavigation/Usenavigationnextandprevious/Contactuspage01";
import AboutUspage from "./Routing/UseNavigationExamples/Usenavigation/Usenavigationnextandprevious/AboutUspage";
import Aboutpage from "./Routing/UseNavigationExamples/Aboutpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage01 />}></Route>
          <Route path="/Contact" element={<Contactuspage01 />}></Route>
          <Route path="/aboutus" element={<AboutUspage />}></Route>
          {/* <Route path="*" element={<PagenotFound />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
