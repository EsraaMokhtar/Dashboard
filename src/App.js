
import './App.css';
import Navbar from './components/FixedNavbar/FixedNavbar';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import CreateContest from './pages/Contests/CreateContest/CreateContest';
import EditContest from './pages/Contests/EditContest/EditContest';
import Contest from './pages/Contests/Contest/Contest';
import Project from './pages/Projects/Project/Project';
import CreateProject from './pages/Projects/CreateProject/CreateProject';
import EditProject from './pages/Projects/EditProject/EditProject';

function App() {

  return (
    <>
    {/* Routing */}
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/createContest" element={<CreateContest/>} />
          <Route exact path="/editContest" element={<EditContest/>} />
          <Route exact path="/contest" element={<Contest/>} />
          <Route exact path="/createProject" element={<CreateProject/>} />
          <Route exact path="/editProject" element={<EditProject/>} />
          <Route exact path="/project" element={<Project/>} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
