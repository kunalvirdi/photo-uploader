import Form from "./components/Form/Form";
import {Routes,Route} from "react-router-dom";
import Error from './components/404/Error'
import Images from "./components/Images/Images";
import Nav from "./components/Nav";
import './App.css'
function App() {
  return (
    <div className="App">
        <h1 className='heading'>Photo Uploader</h1>
        <Nav/>
        <Routes>
            <Route path='/'/>
            <Route path='/upload' element={<Form/>}/>
            <Route path='/get' element={<Images/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
    </div>
  );
}

export default App;
