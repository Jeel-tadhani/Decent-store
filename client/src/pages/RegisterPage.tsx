import axios from 'axios';
import React, { useState } from 'react';

const RegisterPage = () => {
    const [data, setData] = useState({
        user_name: '',
        email: '',
        password: ''
    })

    const handleRegister = async () => {
        console.log(data);
        try {

            const response = await axios.post('http://localhost:3005/api/v1/user/register', data);
            console.log('Response:', response.data);

        } catch (error) {
            // Handle error here
            console.error('Error:', error);
        } finally {
            // setLoading(false);
        }
    }

    return (
        <div className='flex flex-col w-2/6 gap-4'>
            <input type="text" placeholder='username' className='border-amber-100' onChange={(e) => {
                setData(prevState => ({
                    ...prevState,
                    user_name: e.target.value
                }))
            }} />
            <input type="text" placeholder='email' onChange={(e) => {
                setData(prevState => ({
                    ...prevState,
                    email: e.target.value
                }))
            }} />
            <input type="text" placeholder='password' onChange={(e) => {
                setData(prevState => ({
                    ...prevState,
                    password: e.target.value
                }))
            }} />
            <button onClick={handleRegister} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>register</button>
        </div>
    );
};

export default RegisterPage;
