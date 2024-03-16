

function MarksDetailsPage() {
  // Mock data for student marks
  const studentMarks = { 
    name: 'John Doe', 
    department: 'Computer Science',
    marks: [
      { subject: 'Algorithm Analysis and Design', series1: 85, series2: 78 },
      { subject: 'Compiler Design', series1: 92, series2: 88 },
      { subject: 'Computer Graphics', series1: 78, series2: 80 },
    ]
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-4"> Marks Details</h1>
      <p><strong>Department:</strong> {studentMarks.department}</p>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Series 1</h3>
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marks</th>
            </tr>
          </thead>
          <tbody className="">
            {studentMarks.marks.map((mark, markIndex) => (
              <tr key={markIndex}>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-200">{mark.subject}</td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-200">{mark.series1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Series 2</h3>
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marks</th>
            </tr>
          </thead>
          <tbody className="">
            {studentMarks.marks.map((mark, markIndex) => (
              <tr key={markIndex}>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-200">{mark.subject}</td>
                <td className="px-6 py-4 whitespace-nowrap border border-gray-200">{mark.series2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MarksDetailsPage;
