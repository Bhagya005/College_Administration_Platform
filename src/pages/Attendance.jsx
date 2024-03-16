import React, { useState } from 'react';

const Attendance = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', present: false },
    { id: 2, name: 'Jane Smith', present: false },
    { id: 3, name: 'Alice Johnson', present: false },
    { id: 4, name: 'Bob Brown', present: false },
  ]);

  const [selectedClass, setSelectedClass] = useState(null); // Initially null
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedSubject, setSelectedSubject] = useState('Compiler Design');

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  const toggleAttendance = (id) => {
    const updatedStudents = students.map((student) =>
      student.id === id ? { ...student, present: !student.present } : student
    );
    setStudents(updatedStudents);
  };
  const handleSubmit = () => {
    alert('Submitted successfully');
    // Redirect to the studentdetails page
    history.push('/studentdetails');
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Attendance List</h1>
      <div className="flex mb-4">
        <label htmlFor="class" className="mr-2">
          Class:
        </label>
        <select
          id="class"
          value={selectedClass}
          onChange={handleClassChange}
          className="mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none bg-black"
        >
          <option value="">Select a Class</option>
          <option value="Class A">Class CSA</option>
          <option value="Class B">Class CSB</option>
          <option value="Class C">Class ECE</option>
        </select>
        
        <label htmlFor="date" className="mr-2">
          Date:
        </label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none bg-black"
        />
        <label htmlFor="subject" className="mr-2">
          Subject:
        </label>
        <select
          id="subject"
          value={selectedSubject}
          onChange={handleSubjectChange}
          className="mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none bg-black"
        >
          <option value="Algorithm Analysis and Design">Algorithm Analysis and Design</option>
          <option value="Compiler Design">Compiler Design</option>
          <option value="Computer Graphics">Computer Graphics</option>
        </select>
      </div>
      
      {selectedClass && (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-black">ID</th>
              <th className="border border-gray-300 px-4 py-2 text-black">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-black">Attendance</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="border border-gray-300 px-4 py-2 text-white">{student.id}</td>
                <td className="border border-gray-300 px-4 py-2 text-white">{student.name}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => toggleAttendance(student.id)}
                    className={`px-3 py-1 ${
                      student.present ? 'bg-green-500' : 'bg-red-500'
                    } text-white rounded-md hover:bg-gray-600 focus:outline-none`}
                  >
                    {student.present ? 'Present' : 'Absent'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none mt-4"
      >
        Submit
      </button>
    </div>
  );
};

export default Attendance;