import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Loader from './Loader/Loader';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import ForgetPassword from './ForgetPassword/ForgetPassword';
import Otp from './Otp/Otp';
import About from './About/About';
import Courses from './Courses/Courses';
import CourseDetail from './CourseDetail/CourseDetail';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/courses' element={<Courses />}/>
        <Route path='/courses-details' element={<CourseDetail />}/>
        <Route path='/loader' element={<Loader />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/forget-password' element={<ForgetPassword />}/>
        <Route path='/send-otp' element={<Otp />}/>
      </Routes>
    </>
  );
}

export default App;
