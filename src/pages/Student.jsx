import React, { useState } from 'react';

const Student = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', branch: 'Computer Science', semester: 4 },
    { id: 2, name: 'Jane Smith', branch: 'Electrical Engineering', semester: 3 },
  ]);

  const [action, setAction] = useState('add'); // Default action is to add a student
  const [editingStudentId, setEditingStudentId] = useState(null);
  const [newStudent, setNewStudent] = useState({
    id: '',
    name: '',
    branch: '',
    semester: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const addStudent = () => {
    if (newStudent.id && newStudent.name && newStudent.branch && newStudent.semester) {
      setStudents([
        ...students,
        {
          id: parseInt(newStudent.id),
          name: newStudent.name,
          branch: newStudent.branch,
          semester: parseInt(newStudent.semester),
        },
      ]);
      setNewStudent({
        id: '',
        name: '',
        branch: '',
        semester: '',
      });
    } else {
      alert('Please fill in all fields');
    }
  };

  const deleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  const editStudent = (id) => {
    const studentToEdit = students.find((student) => student.id === id);
    setNewStudent({ ...studentToEdit });
    setAction('edit');
    setEditingStudentId(id);
  };

  const updateStudent = () => {
    if (newStudent.id && newStudent.name && newStudent.branch && newStudent.semester) {
      const updatedStudents = students.map((student) =>
        student.id === editingStudentId ? { ...newStudent } : student
      );
      setStudents(updatedStudents);
      setNewStudent({
        id: '',
        name: '',
        branch: '',
        semester: '',
      });
      setAction('add');
      setEditingStudentId(null);
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Student Details</h1>
      <div className="flex mb-4">
        <input
          type="number"
          name="id"
          value={newStudent.id}
          onChange={handleInputChange}
          placeholder="ID"
          className="mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
        <input
          type="text"
          name="name"
          value={newStudent.name}
          onChange={handleInputChange}
          placeholder="Name"
          className="mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
        <input
          type="text"
          name="branch"
          value={newStudent.branch}
          onChange={handleInputChange}
          placeholder="Branch"
          className="mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
        <input
          type="number"
          name="semester"
          value={newStudent.semester}
          onChange={handleInputChange}
          placeholder="Semester"
          className="mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
        {action === 'add' ? (
          <button
            onClick={addStudent}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Add Student
          </button>
        ) : (
          <button
            onClick={updateStudent}
            className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none"
          >
            Update Student
          </button>
        )}
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-black">ID</th>
            <th className="border border-gray-300 px-4 py-2 text-black">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-black">Branch</th>
            <th className="border border-gray-300 px-4 py-2 text-black">Semester</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="border border-gray-300 px-4 py-2 text-white">{student.id}</td>
              <td className="border border-gray-300 px-4 py-2 text-white">{student.name}</td>
              <td className="border border-gray-300 px-4 py-2 text-white">{student.branch}</td>
              <td className="border border-gray-300 px-4 py-2 text-white">{student.semester}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => deleteStudent(student.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none mr-2"
                >
                  Remove
                </button>
                <button
                  onClick={() => editStudent(student.id)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none"
                >
                  Modify
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Student;