import React from 'react';
import { Input, Button } from '@material-tailwind/react';

function AdminLogin() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-black text-white">
            {/* Left Section with Cool UI Interface */}
            
            {/* <div className="hidden lg:block bg-gray-200 w-1/2 h-full p-8 grid grid-cols-4 gap-4">
                <div className="bg-white h-10 rounded-md"></div>
                <div className="bg-white h-10 rounded-md"></div>
                <div className="bg-white h-10 rounded-md"></div>
                <div className="bg-white h-10 rounded-md"></div>
                <div className="bg-white h-10 rounded-md"></div>
                <div className="bg-white h-10 rounded-md"></div>
                <div className="bg-white h-10 rounded-md"></div>
                <div className="bg-white h-10 rounded-md"></div>
            </div> */}
            
            {/* Right Section with Admin Login Form */}
            <div className="w-full lg:w-1/2 p-8">
                <h1 className="text-center text-4xl font-bold mb-2">Admin Login</h1>
                <div className="flex flex-col space-y-4">
                    <Input
                        type="text"
                        placeholder="Username"
                        size="lg"
                        outline={true}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        size="lg"
                        outline={true}
                    />
                    <Button
                        color="blue"
                        buttonType="filled"
                        size="lg"
                        block={true}
                    >
                        Login
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;
