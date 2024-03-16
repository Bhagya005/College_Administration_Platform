import React, { useState } from 'react';

const Faculty = () => {
  const [faculty, setFaculty] = useState([
    { id: 1, name: 'John Doe', department: 'Computer Science', subject: 'Web Development' },
    { id: 2, name: 'Jane Smith', department: 'Electrical Engineering', subject: 'Circuit Analysis' },
  ]);

  const [editingFaculty, setEditingFaculty] = useState(null);
  const [newFaculty, setNewFaculty] = useState({
    id: '',
    name: '',
    department: '',
    subject: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFaculty({ ...newFaculty, [name]: value });
  };

  const addFaculty = () => {
    if (newFaculty.name && newFaculty.department && newFaculty.subject) {
      if (editingFaculty) {
        const updatedFaculty = faculty.map((person) =>
          person.id === editingFaculty.id ? newFaculty : person
        );
        setFaculty(updatedFaculty);
        setEditingFaculty(null);
      } else {
        setFaculty([
          ...faculty,
          {
            id: faculty.length + 1,
            ...newFaculty,
          },
        ]);
      }
      setNewFaculty({
        id: '',
        name: '',
        department: '',
        subject: '',
      });
    } else {
      alert('Please fill in all fields');
    }
  };

  const deleteFaculty = (id) => {
    const updatedFaculty = faculty.filter((person) => person.id !== id);
    setFaculty(updatedFaculty);
  };

  const editFaculty = (person) => {
    setNewFaculty({ ...person });
    setEditingFaculty(person);
  };

  const handleSubmit = () => {
    alert('Submitted successfully');
    // Redirect to the studentdetails page
    history.push('/studentdetails');
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Faculty Details</h1>
      <div className="flex mb-4">
        <input
          type="text"
          name="name"
          value={newFaculty.name}
          onChange={handleInputChange}
          placeholder="Name"
          className="mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
        <input
          type="text"
          name="department"
          value={newFaculty.department}
          onChange={handleInputChange}
          placeholder="Department"
          className="mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
        <input
          type="text"
          name="subject"
          value={newFaculty.subject}
          onChange={handleInputChange}
          placeholder="Subject"
          className="mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
        <button
          onClick={addFaculty}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          {editingFaculty ? 'Update' : 'Add'}
        </button>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-black">ID</th>
            <th className="border border-gray-300 px-4 py-2 text-black">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-black">Department</th>
            <th className="border border-gray-300 px-4 py-2 text-black">Subject</th>
            <th className="border border-gray-300 px-4 py-2 text-black">Actions</th>
          </tr>
        </thead>
        <tbody>
          {faculty.map((person) => (
            <tr key={person.id}>
              <td className="border border-gray-300 px-4 py-2 text-white">{person.id}</td>
              <td className="border border-gray-300 px-4 py-2 text-white">{person.name}</td>
              <td className="border border-gray-300 px-4 py-2 text-white">{person.department}</td>
              <td className="border border-gray-300 px-4 py-2 text-white">{person.subject}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => deleteFaculty(person.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none mr-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => editFaculty(person)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none"
                >
                  Edit
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

export default Faculty;