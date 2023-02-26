import { BrowserRouter,Route,Routes } from "react-router-dom";
import MainHeader from "../components/Header/Mainheader";
function Routing (){
    return(
        <BrowserRouter>
        <Routes>
            <Route element = {<MainHeader/>}>
                
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

export default Routing 