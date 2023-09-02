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
import MyCourses from './components/MyCourses/MyCourses';
import AllCourses from './components/AllCourses/AllCourses';
import InProgressCourses from './components/InProgressCourses/InProgressCourses';
import CompletedCourses from './components/CompletedCourses/CompletedCourses';
import DeleteAccount from './components/DeleteAccount/DeleteAccount';
import AccountSecurity from './components/AccountSecurity/AccountSecurity';
import Achievements from './components/Achievements/Achievements';
import ArAbout from './ArabicComponents/ArAbout/ArAbout';
import ArLogin from './ArabicComponents/ArLogin/ArLogin';

function App() {
  return (
    <>
      <Routes>
        {
          // English Routes
        }
        <Route path='/en/' element={<Home />}/>
        <Route path='/en/profile' element={<Profile />}>
          <Route index element={<EditProfile />} />
          <Route path='edit-profile' element={<EditProfile />}/>
          <Route path='achievements' element={<Achievements />}/>
          <Route path='delete-account' element={<DeleteAccount />}/>
          <Route path='account-security' element={<AccountSecurity />}/>
          <Route path='my-courses' element={<MyCourses />}>
            <Route index element={<AllCourses />} />
            <Route path='all-courses' element={<AllCourses />}/>
            <Route path='inprogress-courses' element={<InProgressCourses />}/>
            <Route path='completed-courses' element={<CompletedCourses />}/>
          </Route>
        </Route>
        <Route path='/en/about' element={<About />}/>
        <Route path='/en/courses' element={<Courses />}/>
        <Route path='/en/courses-details' element={<CourseDetail />}/>
        <Route path='/loader' element={<Loader />}/>
        <Route path='/en/login' element={<Login />}/>
        <Route path='/en/watch-course' element={<EnrolledCourse />}/>
        <Route path='/en/article-course' element={<Article />}/>
        <Route path='/en/quiz' element={<Quiz />}/>
        <Route path='/en/signup' element={<Signup />}/>
        <Route path='/en/forget-password' element={<ForgetPassword />}/>
        <Route path='/en/send-otp' element={<Otp />}/>
        {
          // Arabic Routes
        }
        <Route path='/' element={<ArHome />}/>
        <Route path='/about' element={<ArAbout />}/>
        <Route path='/login' element={<ArLogin />}/>
      </Routes>
    </>
  );
}

export default App;
