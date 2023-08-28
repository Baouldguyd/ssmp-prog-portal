import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/index.css';
import Layout from './Components/Layout';
import Admin from './Pages/Admin';
import Dashboard from './Pages/Dashboard';
import Instructors from './Pages/Instructors';
import PendingApplicants from './Pages/PendingApplicants';
import Schedules from './Pages/Schedules';
import Setings from './Pages/Setings';
import Signin from './Pages/Signin/Sigin';
import Students from './Pages/Students';
import Upload from './Pages/Upload';
import { Navigate } from 'react-router-dom';
import Profile from './Pages/Profile/Profile';
import SignUp from './Pages/SignUp/SignUp';
import Forgot from './Pages/Signin/ForgotPass'
import Reset from './Pages/Signin/ResetPassword'
import Tasks from './Pages/Tasks/Tasks';
import LogOut from './Pages/LogOut'

const ProtectedRoutes = ({children}) =>{
  if(sessionStorage.getItem("role")){
    return children
  }else{
    return <Navigate to={"/"} replace={true}/>
  }
}

function App() {
  return (

      
        <Routes>
          <Route path='/' element={<Signin/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/forgotpass' element={<Forgot/>} />
          <Route path='/logOut' element={<LogOut/>} />
          <Route path='/resetpassword' element={<Reset/>} />
          <Route path='/dashboard' element={
          <ProtectedRoutes><Dashboard/></ProtectedRoutes>
          } />
          <Route path='/tasks' element={
          <ProtectedRoutes><Tasks/></ProtectedRoutes>
          } />
          <Route path='/instructors' element={
           <ProtectedRoutes><Instructors/></ProtectedRoutes>} />
          <Route path='/settings' element={
          <ProtectedRoutes><Setings/></ProtectedRoutes>} />
          <Route path='/students' element={
          <ProtectedRoutes><Students/></ProtectedRoutes> } />
          <Route path='/upload' element={
          <ProtectedRoutes><Upload/></ProtectedRoutes>} />
          <Route path='/profile' element={
          <ProtectedRoutes><Profile/></ProtectedRoutes>} />
          <Route path='/schedules' element={
          <ProtectedRoutes><Schedules/></ProtectedRoutes>} />
          <Route path='/admin' element={
          <ProtectedRoutes><Admin/></ProtectedRoutes>} />
          <Route path='/pending' element={
          <ProtectedRoutes><PendingApplicants/></ProtectedRoutes>} />

        </Routes>
        
    

    
  );
}

export default App;