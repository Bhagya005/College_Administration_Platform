import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

function FacultyInfoPage() {
    const facultyInfo = {
        facultyName: 'Jane Sebastian',
        department: 'Computer Science',
    };

    const navigate = useNavigate(); // Initialize useNavigate

    const handleAttendanceClick = () => {
        navigate('/Attendance'); // Navigate to './attendance' when Attendance button is clicked
    };

    const handleMarkClick = () => {
        navigate('/Marks'); // Navigate to './Marks' when Mark button is clicked
    };

    

    return (
        <div className="p-8">
            <h1 className="text-3xl font-semibold mb-4">FACULTY DETAILS</h1>
            <div className="mb-4">
                <p><strong>Name:</strong> {facultyInfo.facultyName}</p>
                <p><strong>Department:</strong> {facultyInfo.department}</p>
            </div>
            <div>
                <Button
                    color="green" // Change color to green for Attendance button
                    buttonType="filled"
                    size="regular"
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    ripple="light"
                    onClick={handleAttendanceClick}
                >
                    Attendance
                </Button>
                <Button
                    color="blue" // Change color to blue for Mark button
                    buttonType="filled"
                    size="regular"
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    ripple="light"
                    onClick={handleMarkClick}
                    className="ml-2"
                >
                    Mark
                </Button>
            </div>
        </div>
    );
}

export default FacultyInfoPage;
