import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CreateSudent = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [place, setPlace] = useState('');
    const [phone, setPhone] = useState('');
    const [validation, setValidation] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const studentData = { id, name, place, phone };
        fetch('http://localhost:8000/students', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(studentData),
        })
            .then((res) => {
                navigate('/');
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <div className='container'>
            <div className='card'>
                <div className='card-header'>
                    <h2>Create New Student Record</h2>
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
                            value={id}
                            className='form-control'
                            onChange={(e) => setId(e.target.value)}
                            onMouseDown={() => setValidation(true)}
                        ></input>
                        {id.length === 0 && validation && (
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
                            value={name}
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
                            value={place}
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
                            value={phone}
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
                            <button className='btn btn-success'>Save</button>
                            <Link to='/' className='btn btn-danger'>
                                Back
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateSudent;
