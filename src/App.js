import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import StudentTable from './StudentTable';
import CreateSudent from './CreateSudent';
import EditSudent from './EditStudent';
import ViewSudent from './ViewStudent';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<StudentTable />}></Route>
                <Route
                    path='/student/create'
                    element={<CreateSudent />}
                ></Route>
                <Route
                    path='/student/edit/:studentid'
                    element={<EditSudent />}
                ></Route>
                <Route
                    path='/student/view/:studentid'
                    element={<ViewSudent />}
                ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
