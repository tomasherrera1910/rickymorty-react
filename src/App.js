import { CharacterDescription } from "./components/characterDescription";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { NotFound } from "./components/notFound";
//import { CharactersList } from "./components/charactersList";
import {LandingPage} from "./components/landingPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/character/:id' element={<CharacterDescription/>}/>
    <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
