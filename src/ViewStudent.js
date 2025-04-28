import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ViewSudent = () => {
    const { studentid } = useParams();
    const [studentData, setStudentData] = useState('');

    useEffect(() => {
        fetch('http://localhost:8000/students/' + studentid)
            .then((res) => res.json())
            .then((data) => setStudentData(data))
            .catch((err) => console.log(err.message));
    }, []);

    return (
        studentData && (
            <div className='container'>
                <div className='card'>
                    <div className='card-header'>
                        <h2>View Student Details</h2>
                    </div>
                    <div className='card-body'>
                        <p>
                            <strong>ID: </strong>
                            {studentData.id}
                        </p>
                        <p>
                            <strong>Name: </strong>
                            {studentData.name}
                        </p>
                        <p>
                            <strong>Place: </strong>
                            {studentData.place}
                        </p>
                        <p>
                            <strong>Phone: </strong>
                            {studentData.phone}
                        </p>
                    </div>
                    <Link to='/' className='btn btn-danger'>
                        Back
                    </Link>
                </div>
            </div>
        )
    );
};

export default ViewSudent;
