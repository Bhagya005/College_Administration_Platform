import React from 'react';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

function AdminPage() {
    const navigate = useNavigate(); // Initialize useNavigate

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white">
            <h1 className="text-4xl font-bold mb-8">ADMIN</h1>
            <div className="flex flex-col space-y-4">
                <Button
                    color="blue"
                    buttonType="filled"
                    size="lg"
                    block={true}
                    onClick={() => navigate('/student')}
                >
                    Modify Student
                </Button>
                <Button
                    color="green"
                    buttonType="filled"
                    size="lg"
                    block={true}
                    onClick={() => navigate('/faculty')}
                >
                    Modify Faculty
                </Button>
                <Button
                    color="indigo"
                    buttonType="filled"
                    size="lg"
                    block={true}
                    onClick={() => navigate('/subject')}
                >
                    Modify Subject
                </Button>
            </div>
        </div>
    );
}

export default AdminPage;
