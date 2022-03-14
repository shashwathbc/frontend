import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Link,
  Routes,

} from "react-router-dom";
import LandingPage from './components/LandingPage';
import NavbarComponent from './components/NavbarComponent';


import { Container} from "react-bootstrap";
import Posts from './components/Posts';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import SinglePost from './components/SinglePost';

function App() {
  return (
    <BrowserRouter>
    <NavbarComponent />
     <Container className='app-container'>
    <Routes>
    <Route path="/" element={<LandingPage />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/login" element={<LoginComponent />} />
      <Route path="/register" element={< RegisterComponent />} />
      <Route path="/posts/1" element={<SinglePost />} />
      </Routes>
      </Container>    
    </BrowserRouter>
 
  );
}

export default App;
