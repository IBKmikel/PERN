import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Navbar from './components/Navbar';
import { Container } from '@mui/material';

function App() {

  return (
    <BrowserRouter>
        <Navbar/>
          <Container>
              <Routes>
                <Route path="/" element={<TaskList />} />
                <Route path="/tasks/new" element={<TaskForm />} />
              </Routes>
          </Container>
    </BrowserRouter>
  )
}

export default App
