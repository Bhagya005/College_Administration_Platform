import { Button } from '@material-tailwind/react';

function StudentInfoPage() {
  const studentInfo = {
    studentName: 'John Doe',
    semester: '3',
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
      <h1 className="text-3xl font-semibold mb-4">STUDENT DETAILS</h1>
      <div className="mb-4">
        <p><strong>Name:</strong> {studentInfo.studentName}</p>
        <p><strong>Semester:</strong> {studentInfo.semester}</p>
        <p><strong>Department:</strong> {studentInfo.department}</p>
      </div>
      <div>
        <Button
          color="grey"
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
          color="grey"
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

export default StudentInfoPage;
