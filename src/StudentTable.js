import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const StudentTable = () => {
    const [students, setStudents] = useState('');
    const navigate = useNavigate();

    const displayDetails = (id) => {
        navigate('/student/view/' + id);
    };

    const editDetails = (id) => {
        navigate('/student/edit/' + id);
    };

    const deleteStudent = (studentid, name) => {
        if (
            window.confirm('Are you sure you want to delete Student: ' + name)
        ) {
            fetch('http://localhost:8000/students/' + studentid, {
                method: 'DELETE',
            })
                .then((res) => {
                    window.location.reload();
                })
                .catch((err) => console.log(err.message));
        }
    };

    useEffect(() => {
        fetch('http://localhost:8000/students')
            .then((res) => res.json())
            .then((data) => setStudents(data))
            .catch((err) =>
                console.error('Error fetching data from API: ', err.message)
            );
    }, []);

    return (
        <div className='container-sm'>
            <div className='card'>
                <div className='card-header'>
                    <h2>Student Records</h2>
                </div>
                <div className='card-body'>
                    <Link to='/student/create' className='btn btn-primary'>
                        Add New Student
                    </Link>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Place</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students &&
                                students.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.place}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    displayDetails(item.id)
                                                }
                                                className='btn btn-info'
                                            >
                                                View
                                            </button>
                                            <button
                                                onClick={() =>
                                                    editDetails(item.id)
                                                }
                                                className='btn btn-warning'
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() =>
                                                    deleteStudent(
                                                        item.id,
                                                        item.name
                                                    )
                                                }
                                                className='btn btn-danger'
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StudentTable;
