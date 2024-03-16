import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

function StudentInfoPage() {
  const navigate = useNavigate(); // Initialize useNavigate

  const studentInfo = {
    studentName: 'John Doe',
    semester: '3',
    department: 'Computer Science',
  };

  const handleAttendanceClick = () => {
    console.log('Attendance button clicked');
    navigate('/dailyattendance'); // Navigate to "/dailyattendance" when clicking Daily Attendance button
  };

  const handleSubjectAttendanceClick = () => {
    console.log('Subject Attendance button clicked');
    navigate('/subjectattendance'); // Navigate to "/subjectattendance" when clicking Subject Attendance button
  };

  const handleMarkClick = () => {
    console.log('Mark button clicked');
    navigate('/mark'); // Navigate to "/mark" when clicking Mark button
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-4">STUDENT DETAILS</h1>
      <div className="mb-4">
        <p><strong>Name:</strong> {studentInfo.studentName}</p>
        <p><strong>Semester:</strong> {studentInfo.semester}</p>
        <p><strong>Department:</strong> {studentInfo.department}</p>
      </div>
      <div>
        <div className="mb-4">
          <Button
            color="yellow"
            buttonType="filled"
            size="regular"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="light"
            onClick={handleAttendanceClick}
          >
            Daily Attendance 
          </Button>
        </div>
        <div className="mb-4">
          <Button
            color="green"
            buttonType="filled"
            size="regular"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="light"
            onClick={handleSubjectAttendanceClick}
          >
            Subject Attendance
          </Button>
        </div>
        <div>
          <Button
            color="blue"
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
    </div>
  );
}

export default StudentInfoPage;
