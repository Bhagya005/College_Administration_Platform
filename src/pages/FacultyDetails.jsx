
import { Button } from '@material-tailwind/react';

function FacultyInfoPage() {
  const facultyInfo = {
    facultyName: 'Jane Sebastian',
    department: 'Computer Science',
  };

  const handleAttendanceClick = () => {
    console.log('Attendance button clicked');
    // Add logic for handling attendance button click here
  };

  const handleMarkClick = () => {
    console.log('Mark button clicked');
    // Add logic for handling mark button click here
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
