import React from 'react';
import { Button } from '@material-tailwind/react';

function AdminPage() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white">
            <h1 className="text-4xl font-bold mb-8">ADMIN</h1>
            <div className="flex flex-col space-y-4">
                <Button
                    color="blue"
                    buttonType="filled"
                    size="lg"
                    block={true}
                >
                    Modify Student
                </Button>
                <Button
                    color="green"
                    buttonType="filled"
                    size="lg"
                    block={true}
                >
                    Modify Faculty
                </Button>
                <Button
                    color="indigo"
                    buttonType="filled"
                    size="lg"
                    block={true}
                >
                    Modify Subject
                </Button>
            </div>
        </div>
    );
}

export default AdminPage;