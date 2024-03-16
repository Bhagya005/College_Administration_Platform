import React, { useState } from "react";
import { Button, Input, Select } from "@material-tailwind/react";

function FacultyMark() {
  const [classValue, setClassValue] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [marksData, setMarksData] = useState([]);

  const handleClassChange = (e) => {
    setClassValue(e.target.value);
  };

  
  const handleAddMark = () => {
    // Logic to add mark
    console.log("Mark added for Class:", classValue, "Subject:", selectedSubject);
    
    // Add dummy student names to marksData
    const dummyStudents = ["Alice", "Bob", "Charlie", "David", "Eve"];
    const newMarksData = dummyStudents.map((student) => ({
      studentName: student,
      series1: "",
      series2: "",
    }));
    setMarksData(newMarksData);
  };

  const handleSeries1Change = (index, value) => {
    const updatedMarksData = [...marksData];
    updatedMarksData[index].series1 = value;
    setMarksData(updatedMarksData);
  };

  const handleSeries2Change = (index, value) => {
    const updatedMarksData = [...marksData];
    updatedMarksData[index].series2 = value;
    setMarksData(updatedMarksData);
  };
  const handleSubmit = () => {
    alert('Submitted successfully');
    // Redirect to the studentdetails page
    history.push('/studentdetails');
  };
  
  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen">
  <h1 className="text-2xl font-bold mb-4 text-white">Enter Class</h1>
  <div className="flex flex-col w-80 mb-6">
    <span className="text-2xl font-bold mb-4 text-white my-5">Choose Department</span>
    <select
      value={classValue}
      onChange={(e) => setClassValue(e.target.value)}
      color="lightBlue"
      size="regular"
      outline={false}
      className="bg-black text-white h-10 mb-5 border border-white rounded w-80"
    >
      <option value="">Select...</option>
      <option value="Computer Science">Computer Science</option>
      <option value="Electrical Engineering">Electrical Engineering</option>
      <option value="Mechanical Engineering">Mechanical Engineering</option>
      <option value="Civil Engineering">Civil Engineering</option>
      <option value="Chemical Engineering">Chemical Engineering</option>
    </select>
    <span className="text-2xl font-bold mb-4 text-white my-5">Choose Subject</span>
    <select
      value={selectedSubject}
      onChange={(e) => setSelectedSubject(e.target.value)}
      className="bg-black text-white h-10 mb-5 border border-white rounded w-80"
    >
      <option value="">Select...</option>
      <option value="Algorithm Analysis and Design">Algorithm Analysis and Design</option>
      <option value="Compiler Design">Compiler Design</option>
      <option value="Computer Graphics">Computer Graphics</option>
    </select>

    <Button
      onClick={handleAddMark}
      color="lightBlue"
      buttonType="filled"
      size="lg"
      rounded={false}
      block={false}
      iconOnly={false}
      ripple="light"
      className="py-4 my-5"
    >
      Add Mark
    </Button>

    {marksData.length > 0 && (
      <div className="flex items-center justify-center w-full">
        <table className="mx-auto border border-gray-300" style={{ width: "1000px" }}> {/* Adjust width as needed */}
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 font-bold text-xl text-white">Student Name</th>
              <th className="border border-gray-300 px-4 py-2 font-bold text-xl text-white">Series 1</th>
              <th className="border border-gray-300 px-4 py-2 font-bold text-xl text-white">Series 2</th>
            </tr>
          </thead>
          <tbody>
            {marksData.map((mark, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2 text-white">{mark.studentName}</td>
                <td className="border border-gray-300 px-4 py-2 text-white">
                  <Input
                    type="number"
                    value={mark.series1}
                    onChange={(e) => handleSeries1Change(index, e.target.value)}
                    color="lightBlue"
                    size="regular"
                    outline={false}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2 text-white">
                  <Input
                    type="number"
                    value={mark.series2}
                    onChange={(e) => handleSeries2Change(index, e.target.value)}
                    color="lightBlue"
                    size="regular"
                    outline={false}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
  <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none mt-4"
      >
        Submit
      </button>
</div>

  );
}

export default FacultyMark;