import {Route, Routes} from "react-router";
import Main from "../../pages/Main/Main.tsx";
import ContactForm from "../../pages/ContactForm/ContactForm.tsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.tsx";
import ContactSuccess from "../../pages/ContactSuccess/ContactSuccess.tsx";

const isAuthorized = false;

function App() {
  return (
   <Routes>
       <Route index path="/" element={<Main />}/>
       <Route path={"/login"} element={<ContactForm />}/>
       <Route path={"/success-authorized"} element={
           <PrivateRoute isAuthorized={isAuthorized}>
               <ContactSuccess />
           </PrivateRoute>
       }>
       </Route>
   </Routes>
  )
}

export default App
