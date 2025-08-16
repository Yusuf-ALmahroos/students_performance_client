import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const DashboardTable = ({students}) => {

   const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'Student', width: 150 },
    { field: 'mid', headerName: 'Mid', width: 100 },
    { field: 'assessment', headerName: 'Assessment', width: 120 },
    { field: 'final', headerName: 'Final', width: 100 },
    { field: 'attendance', headerName: 'Attendance', width: 120 },
    { field: 'remarks', headerName: 'Remarks', width: 200 },
  ];

  const rows = students.map((student, index) => ({
    id: index + 1,
    username: student.username,
    mid: student.records?.mid ?? 0,
    assessment: student.records?.assessment ?? 0,
    final: student.records?.final ?? 0,
    attendance: student.records?.attendance ?? 0,
    remarks: student.records?.remarks ?? '',
  }));

  return (
    <Box sx={
      { 
        height: 500, 
        width: '100%', 
        bgcolor: 'white', 
        boxShadow: 5, 
        borderRadius: 5
      }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5, 10, 20]}
        disableSelectionOnClick
        sx={{
          bgcolor: 'white',
          border: 'none',
          '.MuiDataGrid-columnHeaders': {
            backgroundColor: '#1976d2',
            color: 'black',
            fontSize: 16,
          },
          '.MuiDataGrid-cell': {
            fontSize: 14,
          },
          '.MuiDataGrid-row:nth-of-type(odd)': {
            backgroundColor: '#f5f5f5',
          },
          '.MuiDataGrid-footerContainer': {
            backgroundColor: '#eee',
          },
        }}
      />
    </Box>
  );
}

export default DashboardTable