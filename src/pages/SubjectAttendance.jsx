import React, { useState, useEffect } from 'react';

const SubjectAttendance = () => {
  // State to hold student's attendance data for each subject
  const [subjectAttendance, setSubjectAttendance] = useState([]);

  // Simulated API call to fetch student's attendance data
  useEffect(() => {
    // Replace this with actual API call to fetch student attendance data
    const fetchSubjectAttendance = async () => {
      // Simulated data for demonstration
      const simulatedData = [
        { subject: 'Discrete Mathematics', attendance: 80 },
        { subject: 'Data Analytics', attendance: 75 },
        { subject: 'Physics', attendance: 90 },
      ];
      setSubjectAttendance(simulatedData);
    };

    fetchSubjectAttendance();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-white">Subject Attendance</h1>
      <div className="flex flex-col">
        {subjectAttendance.map((subjectData) => (
          <div key={subjectData.subject} className="mb-4">
            <h2 className="text-xl font-semibold mb-2 text-white">{subjectData.subject}</h2>
            <p className="text-lg text-white">
              Average Attendance: {subjectData.attendance}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectAttendance;