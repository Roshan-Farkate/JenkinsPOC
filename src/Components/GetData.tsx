import React, { useState, useEffect } from 'react';

interface Student {
  id: number;
  name: string;
  city: string;
  company: string;
  // Add other properties as per your data structure
}

function GetData(): JSX.Element {
  const [studentData, setStudentData] = useState<Student[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8090/StudentDetails-0.0.1-SNAPSHOT/getStudent'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Student[] = await response.json();
        setStudentData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Employee Data</h1>
      <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Id</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>City</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Company</th>
            {/* Add other table headers for additional properties */}
          </tr>
        </thead>
        <tbody>
          {studentData.map((student) => (
            <tr key={student.id}>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{student.id}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{student.name}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{student.city}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{student.company}</td>
              {/* Add other table data cells for additional properties */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetData;
