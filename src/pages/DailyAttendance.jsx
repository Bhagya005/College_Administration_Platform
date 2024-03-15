import React, { useState, useEffect } from 'react';

const DailyAttendance = () => {
  // State to hold student's daily attendance data
  const [dailyAttendance, setDailyAttendance] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  // Simulated API call to fetch student's daily attendance data
  useEffect(() => {
    // Replace this with actual API call to fetch student's daily attendance data
    const fetchDailyAttendance = async () => {
      try {
        // Example of fetching data from API using fetch
        const response = await fetch(`/api/dailyattendance?date=${selectedDate}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setDailyAttendance(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDailyAttendance();
  }, [selectedDate]); // Trigger API call when selectedDate changes

  // Handle change in selected date
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-white">Daily Attendance</h1>
      <div className="flex flex-col items-center mb-4">
        <label htmlFor="datePicker" className="text-white mb-2">Select Date:</label>
        <input
          type="date"
          id="datePicker"
          value={selectedDate}
          onChange={handleDateChange}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
      </div>
      <div className="flex flex-col">
        {dailyAttendance.length > 0 ? (
          dailyAttendance.map((student) => (
            <div key={student.id} className="mb-4">
              <h2 className="text-xl font-semibold text-white">{student.name}</h2>
              <p className="text-lg text-white">
                Attendance: {student.present ? 'Present' : 'Absent'}
              </p>
            </div>
          ))
        ) : (
          <p className="text-lg text-white">No attendance data available for the selected date.</p>
        )}
      </div>
    </div>
  );
};

export default DailyAttendance;
