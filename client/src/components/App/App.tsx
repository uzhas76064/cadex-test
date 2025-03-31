import {Route, Routes} from "react-router";
import Main from "../../pages/Main/Main.tsx";
import Login from "../../pages/Login/Login.tsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.tsx";
import LoginSuccess from "../../pages/LoginSuccess/LoginSuccess.tsx";

const isAuthorized = false;

function App() {
  return (
   <Routes>
       <Route index path="/" element={<Main />}/>
       <Route path={"/login"} element={<Login />}/>
       <Route path={"/success-authorized"} element={
           <PrivateRoute isAuthorized={isAuthorized}>
               <LoginSuccess />
           </PrivateRoute>
       }>
       </Route>
   </Routes>
  )
}

export default App
