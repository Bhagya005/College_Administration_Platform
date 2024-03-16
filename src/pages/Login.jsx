import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Input, Button } from '@material-tailwind/react';

function StudentLogin() {
    const navigate = useNavigate(); // Initialize useNavigate
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = () => {
        // Check if the username and password match the credentials
        if (username === 'user1@student' && password === 'helloworld') {
            // Navigate to "/studentdetails" for user1@student
            navigate('/studentdetails');
        } else if (username === 'user2@faculty' && password === 'alicebob') {
            // Navigate to "/facultydetails" for student2@saintgits
            navigate('/facultydetails');
        } else if (username === 'user3@faculty' && password === 'root'){
            // Navigate to "/admin" for any other user
            navigate('/adminpage');
        }
        else{
            alert("Please enter valid credentials");
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-black text-white">
            {/* Right Section with Student Login Form */}
            <div className="w-full lg:w-1/2 p-8">
                <h1 className="text-center text-4xl font-bold mb-2">Welcome</h1>
                <div className="flex flex-col space-y-4">
                    <Input
                        type="text"
                        placeholder="Username"
                        size="lg"
                        outline={true}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        size="lg"
                        outline={true}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        color="blue"
                        buttonType="filled"
                        size="lg"
                        block={true}
                        onClick={handleLogin} // Call handleLogin onClick
                    >
                        Login
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default StudentLogin;
