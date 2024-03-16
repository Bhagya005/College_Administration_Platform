import React, { useState } from 'react';

const Subject = () => {
  const [subjects, setSubjects] = useState([
    { id: 1, subject: 'Mathematics', code: 'MATH101', credits: 3, department: 'Mathematics', semester: 1, faculty: 'Dr. John Doe' },
    { id: 2, subject: 'Computer Science', code: 'CS202', credits: 4, department: 'Computer Science', semester: 2, faculty: 'Prof. Jane Smith' },
  ]);

  const [newSubject, setNewSubject] = useState({
    subject: '',
    code: '',
    credits: '',
    department: '',
    semester: '',
    faculty: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSubject({ ...newSubject, [name]: value });
  };

  const addSubject = () => {
    if (newSubject.subject && newSubject.code && newSubject.credits && newSubject.department && newSubject.semester && newSubject.faculty) {
      setSubjects([
        ...subjects,
        {
          id: subjects.length + 1,
          subject: newSubject.subject,
          code: newSubject.code,
          credits: parseInt(newSubject.credits),
          department: newSubject.department,
          semester: parseInt(newSubject.semester),
          faculty: newSubject.faculty,
        },
      ]);
      setNewSubject({
        subject: '',
        code: '',
        credits: '',
        department: '',
        semester: '',
        faculty: '',
      });
    } else {
      alert('Please fill in all fields');
    }
  };

  const deleteSubject = (id) => {
    const updatedSubjects = subjects.filter((subject) => subject.id !== id);
    setSubjects(updatedSubjects);
  };
  const handleSubmit = () => {
    alert('Submitted successfully');
    // Redirect to the studentdetails page
    history.push('/studentdetails');
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Subject Details</h1>
      <div className="flex justify-center mb-4">
        <div className="flex">
          <input
            type="text"
            name="subject"
            value={newSubject.subject}
            onChange={handleInputChange}
            placeholder="Subject Name"
            className="mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="code"
            value={newSubject.code}
            onChange={handleInputChange}
            placeholder="Subject Code"
            className="mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
          <input
            type="number"
            name="credits"
            value={newSubject.credits}
            onChange={handleInputChange}
            placeholder="Credits"
            className="mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <div className="flex">
          <input
            type="text"
            name="department"
            value={newSubject.department}
            onChange={handleInputChange}
            placeholder="Department"
            className="mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
          <input
            type="number"
            name="semester"
            value={newSubject.semester}
            onChange={handleInputChange}
            placeholder="Semester"
            className="mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="faculty"
            value={newSubject.faculty}
            onChange={handleInputChange}
            placeholder="Faculty"
            className="mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
      </div>
      <button
        onClick={addSubject}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Add
      </button>
      <table className="w-full border-collapse border border-gray-300 mt-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-black">ID</th>
            <th className="border border-gray-300 px-4 py-2 text-black">Subject</th>
            <th className="border border-gray-300 px-4 py-2 text-black">Code</th>
            <th className="border border-gray-300 px-4 py-2 text-black">Credits</th>
            <th className="border border-gray-300 px-4 py-2 text-black">Department</th>
            <th className="border border-gray-300 px-4 py-2 text-black">Semester</th>
            <th className="border border-gray-300 px-4 py-2 text-black">Faculty</th>
            <th className="border border-gray-300 px-4 py-2 text-black">Actions</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => (
            <tr key={subject.id}>
              <td className="border border-gray-300 px-4 py-2 text-white">{subject.id}</td>
              <td className="border border-gray-300 px-4 py-2 text-white">{subject.subject}</td>
              <td className="border border-gray-300 px-4 py-2 text-white">{subject.code}</td>
              <td className="border border-gray-300 px-4 py-2 text-white">{subject.credits}</td>
              <td className="border border-gray-300 px-4 py-2 text-white">{subject.department}</td>
              <td className="border border-gray-300 px-4 py-2 text-white">{subject.semester}</td>
              <td className="border border-gray-300 px-4 py-2 text-white">{subject.faculty}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => deleteSubject(subject.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none mt-4"
      >
        Submit
      </button>
    </div>
  );
};

export default Subject;
