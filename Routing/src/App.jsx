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
import Page1 from "./Routing/UseNavigationExamples/UseParamsExamples/Page1";
import Page2 from "./Routing/UseNavigationExamples/UseParamsExamples/Page2";
import Router from "./Project/FakeApiFetch/Router";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes> */}
      {/* <Route path="/" element={<Homepage01 />}></Route>
          <Route path="/Contact" element={<Contactuspage01 />}></Route>
          <Route path="/aboutus" element={<AboutUspage />}></Route> */}
      {/* <Route path="*" element={<PagenotFound />}></Route> */}

      {/* { Use Params Example} */}
      {/* <Route path="/" element={<Page1 />}></Route>
          <Route path="/page/:id" element={<Page2 />}></Route>
          <Route path="/page/:id/:name" element={<Page2 />}></Route>
        </Routes>
      </BrowserRouter> */}
      <Router />
    </>
  );
}

export default App;
