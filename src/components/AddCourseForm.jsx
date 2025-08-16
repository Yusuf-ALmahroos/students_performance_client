import { useState } from 'react';
import Papa from 'papaparse';
import { createCourseWithCSV } from '../../services/teacher'
import { Box, TextField, Typography, Button } from '@mui/material';

const AddCourseForm = () => {
  const [file, setFile] = useState(null);
  const [courseTitle, setCourseTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadData = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a CSV file");
    if (!courseTitle) return alert("Please add course title");

    setLoading(true);

    const parsedData = await new Promise((resolve, reject) => {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => resolve(results.data),
        error: (err) => reject(err),
      });
    });

    const students = parsedData
      .filter(row => row.username && row.email) 
      .map(row => ({
        username: row.username,
        email: row.email,
        password: row.password,
        records: {
          mid: parseFloat(row.mid),
          assessment: parseFloat(row.assessment),
          final: parseFloat(row.final),
          attendance: parseInt(row.attendance),
          remarks: row.remarks,
        },
      }));

    try {
      const response = await createCourseWithCSV(courseTitle, students);
      console.log(response.data);
      setCourseTitle("");
      setFile(null); 
    } catch (err) {
      console.error(err);
      alert("Failed to upload CSV");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'flex-start'}
      alignItems={'centers'}
      padding={2}
      boxShadow={5}
      bgcolor={'white'}
      gap={2}
      mt={10}
      mx={'auto'}
      width={'50vw'}
    >
      <Typography variant='h5' gutterBottom>Import Students Via CSV file</Typography>
      <Box>
        <TextField 
          fullWidth
          label="Course Title"
          value={courseTitle}
          onChange={(e) => setCourseTitle(e.target.value)}
          margin="normal"
        />
        <Button
          variant="outlined"
          component="label"
          sx={{ my: 2 }}
        >
          Upload CSV
          <input
            type="file"
            accept=".csv"
            hidden
            onChange={handleFileChange}
          />
        </Button>
        {file && (
          <Typography variant="body2" sx={{ mt: 1 }}>
            Selected File: {file.name}
          </Typography>
        )}
        <Button
          fullWidth
          variant="contained"
          type="submit"
          disabled={loading}
          onClick={(uploadData)}
        >
          {loading ? 'Uploading...' : 'Submit'}
        </Button>
      </Box>
    </Box>
  )
}

export default AddCourseForm