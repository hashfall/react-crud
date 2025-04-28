import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditSudent = () => {
    const [studentData, setStudentData] = useState('');
    const [id, setId] = useState(studentData.id);
    const [name, setName] = useState(studentData.name);
    const [place, setPlace] = useState(studentData.place);
    const [phone, setPhone] = useState(studentData.phone);
    const [validation, setValidation] = useState(false);
    const navigate = useNavigate();
    const { studentid } = useParams();

    useEffect(() => {
        fetch('http://localhost:8000/students/' + studentid)
            .then((res) => res.json())
            .then((data) => setStudentData(data))
            .catch((err) => console.log(err.message));
    }, []);

    console.log(studentData);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { studentData };
        fetch('http://localhost:8000/students', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                alert('Student Data Saved');
                navigate('/');
            })
            .catch((err) => console.log(err.message));
    };

    return (
        studentData && (
            <div className='container'>
                <div className='card'>
                    <div className='card-header'>
                        <h2>Edit Student Details</h2>
                    </div>
                    <div className='card-body'>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor='id' className='form-label'>
                                ID:{' '}
                            </label>
                            <input
                                type='text'
                                id='id'
                                name='id'
                                required
                                value={studentData.id}
                                className='form-control'
                                onChange={(e) => setId(e.target.value)}
                                onMouseDown={() => setValidation(true)}
                            ></input>
                            {studentData.id.length === 0 && validation && (
                                <span>
                                    Please enter your id <br />
                                </span>
                            )}

                            <label htmlFor='name' className='form-label'>
                                Name:{' '}
                            </label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                required
                                value={studentData.name}
                                className='form-control'
                                onMouseDown={() => setValidation(true)}
                                onChange={(e) => setName(e.target.value)}
                            ></input>
                            {name.length === 0 && validation && (
                                <span>
                                    Please enter your name <br />
                                </span>
                            )}

                            <label htmlFor='place' className='form-label'>
                                Place:{' '}
                            </label>
                            <input
                                type='text'
                                id='place'
                                name='place'
                                required
                                value={studentData.place}
                                className='form-control'
                                onMouseDown={() => setValidation(true)}
                                onChange={(e) => setPlace(e.target.value)}
                            ></input>
                            {place.length === 0 && validation && (
                                <span>
                                    Please enter your place <br />
                                </span>
                            )}

                            <label htmlFor='phone' className='form-label'>
                                Phone:{' '}
                            </label>
                            <input
                                type='text'
                                id='phone'
                                name='phone'
                                required
                                value={studentData.phone}
                                className='form-control'
                                onMouseDown={() => setValidation(true)}
                                onChange={(e) => setPhone(e.target.value)}
                            ></input>
                            {phone.length === 0 && validation && (
                                <span>
                                    Please enter your phone <br />
                                </span>
                            )}

                            <div className='container'>
                                <button className='btn btn-success'>
                                    Save
                                </button>
                                <Link to='/' className='btn btn-danger'>
                                    Back
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    );
};

export default EditSudent;
