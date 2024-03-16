import React from 'react';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import videoBackground from '../videos/background-video.mp4'; // Import the video file
import logo from '../images/logo.png'; // Import the logo image

function SelectionPage() {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleAdminLogin = () => {
        navigate('/adminlogin'); // Navigate to "/adminlogin" route
    };

    const handleStudentLogin = () => {
        navigate('/studentlogin'); // Navigate to "/studentlogin" route
    };

    const handleFacultyLogin = () => {
        navigate('/facultylogin'); // Navigate to "/facultylogin" route
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center relative">
            {/* Video Background */}
            <video autoPlay muted loop className="absolute inset-0 z-0 object-cover w-full h-full">
                <source src={videoBackground} type="video/mp4" />
                {/* Add additional source tags for other video formats if needed */}
            </video>

            {/* Logo */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                <img src={logo} alt="Logo" style={{ width: '4.5cm', height: '4.5cm' }} />
            </div>

            {/* Content */}
            <div className="relative z-10 bg-black bg-opacity-75 backdrop-filter backdrop-blur-lg p-8 rounded-md">
                <h1 className="text-white text-4xl font-bold mb-8">Academix360</h1>
                <div className="flex flex-col space-y-4">
                    <Button
                        color="blue"
                        buttonType="filled"
                        size="lg"
                        block={true}
                        onClick={handleAdminLogin} // Call handleAdminLogin onClick
                    >
                        Admin Login
                    </Button>
                    <Button
                        color="green"
                        buttonType="filled"
                        size="lg"
                        block={true}
                        onClick={handleStudentLogin} // Call handleStudentLogin onClick
                    >
                        Student Login
                    </Button>
                    <Button
                        color="indigo"
                        buttonType="filled"
                        size="lg"
                        block={true}
                        onClick={handleFacultyLogin} // Call handleFacultyLogin onClick
                    >
                        Faculty Login
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default SelectionPage;
