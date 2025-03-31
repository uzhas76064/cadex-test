import {Route, Routes} from "react-router";
import Main from "../../pages/Main/Main.tsx";
import ContactForm from "../../pages/ContactForm/ContactForm.tsx";

function App() {
  return (
   <Routes>
       <Route index path="/" element={<Main />}/>
       <Route path={"/contact-us"} element={<ContactForm />}/>
   </Routes>
  )
}

export default App
