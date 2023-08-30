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

function App() {
  return (

      <Router>
        <Routes>
          <Route path='/' element={<Signin/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/instructors' element={<Instructors/>} />
          <Route path='/settings' element={<Setings/>} />
          <Route path='/students' element={<Students/> } />
          <Route path='/upload' element={<Upload/>} />
          <Route path='/profile' element={<Admin/>} />
          <Route path='/schedules' element={<Schedules/>} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='/pending' element={<PendingApplicants/>} />

        </Routes>
        
      </Router>

    
  );
}

export default App;