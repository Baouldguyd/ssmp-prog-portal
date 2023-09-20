
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


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
import Disapproved from './Pages/Disapproved';
import Upload from './Pages/Upload';
import { Navigate } from 'react-router-dom';
import Profile from './Pages/Profile/Profile';
import SignUp from './Pages/SignUp/SignUp';
import Forgot from './Pages/Signin/ForgotPass'
import Reset from './Pages/Signin/ResetPassword'
import Tasks from './Pages/Tasks/Tasks';
import LogOut from './Pages/LogOut'
import Create from './Pages/Tasks/CreateView';
import TaskQuestions from './Pages/Tasks/TaskQuestions';
import ProtectedRoute from './ProtectedRoutes';



function App() {



  return (

      
        <Routes>
          <Route path='/' element={<Signin/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/forgotpass' element={<Forgot/>} />
          <Route path='/logOut' element={<LogOut/>} />
          <Route path='/resetpassword' element={<Reset/>} />
          <Route path='/dashboard' element={
          <ProtectedRoute><Dashboard/></ProtectedRoute>
          } />
          <Route path='/tasks' element={
          <ProtectedRoute><Tasks/></ProtectedRoute>
          } />
          <Route path='/details/:id' element={
          <ProtectedRoute><TaskQuestions/></ProtectedRoute>
          } />
          <Route path='/instructors' element={
           <ProtectedRoute><Instructors/></ProtectedRoute>} />
          <Route path='/settings' element={
          <ProtectedRoute><Setings/></ProtectedRoute>} />
          <Route path='/students' element={
          <ProtectedRoute><Students/></ProtectedRoute> } />
          <Route path='/upload' element={
          <ProtectedRoute><Upload/></ProtectedRoute>} />
          <Route path='/profile' element={
          <ProtectedRoute><Profile/></ProtectedRoute>} />
          <Route path='/schedules' element={
          <ProtectedRoute><Schedules/></ProtectedRoute>} />
          <Route path='/admin' element={
          <ProtectedRoute><Admin/></ProtectedRoute>} />
          <Route path='/pending' element={
          <ProtectedRoute><PendingApplicants/></ProtectedRoute>} />

      </Routes>
      

    
  );
}

export default App;