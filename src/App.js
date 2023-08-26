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
import EnrolledCourse from './EnrolledCourse/EnrolledCourse';
import Article from './Articale/Article';
import Quiz from './Quiz/Quiz';
import ArHome from './ArHome/ArHome';
import Profile from './Profile/Profile';
import EditProfile from './components/EditProfile/EditProfile';

function App() {
  return (
    <>
      <Routes>
        {
          // English Routes
        }
        <Route path='/' element={<Home />}/>
        <Route path='/profile' element={<Profile />}>
          <Route index element={<EditProfile />} />
          <Route path='edit-profile' element={<EditProfile />}/>
        </Route>
        <Route path='/about' element={<About />}/>
        <Route path='/courses' element={<Courses />}/>
        <Route path='/courses-details' element={<CourseDetail />}/>
        <Route path='/loader' element={<Loader />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/watch-course' element={<EnrolledCourse />}/>
        <Route path='/article-course' element={<Article />}/>
        <Route path='/quiz' element={<Quiz />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/forget-password' element={<ForgetPassword />}/>
        <Route path='/send-otp' element={<Otp />}/>
        {
          // Arabic Routes
        }
        <Route path='/ar/' element={<ArHome />}/>
      </Routes>
    </>
  );
}

export default App;
