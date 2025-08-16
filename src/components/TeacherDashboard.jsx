import {
  Box,
  Typography,
  Autocomplete,
  Divider,
  Grid,
  CircularProgress,
  TextField
} from '@mui/material'

import BarChartCard from './BarChartCard'
import DataCard from './DataCard'
import { useEffect, useState } from 'react'
import DashboardTable from './DashboardTable'
import BarChartCardMultiple from './BarChartCardMultiple'

const TeacherDashboard = ({data, isLoading}) => {
  const [course, setCourse] = useState(null);
  const [student, setStudent] = useState(null);

  const handleCourseSelect = (value) => {
    setCourse(value)
    setStudent(null)
    if(found){
      const datasetArray = [
      {
        data: [found.avgMid, found.avgAssessment, found.avgFinal]
      }]
      setChartDetails(datasetArray)
    }   
  }

  const cardsValues = [
    {title: 'Total Students', value: `${data.overallData.totalStudents}`},
    {title: 'Avg Mid', value: `${data.overallData.avgMid} / 20`},
    {title: 'Avg Assessments', value: `${data.overallData.avgAssessment} / 30` },
    {title: 'Avg Final', value: `${data.overallData.avgFinal} / 50`},
    {title: 'Avg Attendence', value: `${data.overallData.avgAttendance} %`},
  ]

  const remarksChart = {
    xaxis: Object.keys(data.overallData.remarksDist),
    dataset: Object.values(data.overallData.remarksDist)
  }
  return (
   <>
    <Box 
      flex={1} 
      display={'flex'} 
      flexDirection={'column'} 
      gap={2} 
      width={'20vw'}
      height={'60vh'}
      position={'sticky'}
      top={120}
      overflow={'auto'}
      boxShadow={5}
      borderRadius={5}
      padding={2}
      bgcolor={'white'}
    >
      <Typography>Courses List</Typography>
      <Autocomplete 
        disablePortal
        options={data.coursesData}
        getOptionLabel={option => option.title}
        getOptionKey={option => option.title}
        value={course}
        renderInput={(params) => <TextField 
          color="secondary"
          {...params} label="Courses" />}
        onChange={(_, value) => {handleCourseSelect(value)}}
      />
      <Divider/>
      <Typography>Students List</Typography>
      {(!course) ? 
        (<Typography variant='body2'>Please Select A course</Typography>) :
        (
          <Autocomplete 
            disablePortal
            options={course.students}
            getOptionLabel={option => option.username}
            getOptionKey={option => option.email}
            value={student}
            renderInput={(params) => <TextField 
              color="secondary"
              {...params} label="Students" />}
            onChange={(_, value) => {setStudent(value)}}
          />
        )
      }

    </Box>
    {isLoading ? <Box mt={'200px'} width={'calc(100% - 20vw)'} display={'flex'} justifyContent={'center'}> <CircularProgress size={200}/> </Box> : 
      <Grid container width={'calc(100% - 20vw)'} gap={5} flex={4}>
        <Grid size={12} boxShadow={5} bgcolor={"white"} borderRadius={5}>
          <Box
            display={'flex'}
            gap={2}
            alignItems={'center'}
            justifyContent={'space-evenly'}
            padding={5}
          >
            {cardsValues.map(item => (
              <DataCard key={item.title} title={item.title} value={item.value}/>
            ))}
          </Box>
        </Grid>
          
        <Grid size={{xs: 12, sm: 12, md: 12, lg: 12}}>
          <BarChartCard 
            sx={{width:'100%'}}
            title={'Remarks Distribution'}
            xaxisOptions={remarksChart.xaxis}
            dataSets={[
              { data: remarksChart.dataset },
            ]}
            colors={['red', 'blue', 'yellow']}
          />
        </Grid>
          
        {
          (!course ? 
            <Grid size={12}>
              <Box 
                display={'flex'} 
                justifyContent={'center'}
                bgcolor={'white'}
                boxShadow={5}
                padding={2}
                borderRadius={5}
              >
                <Typography fontWeight={550} variant="h5">Select A Course to Show Detailes</Typography>
              </Box>
            </Grid> 
            :  
            <>
              <Grid size={12}>
                  <BarChartCard 
                    sx={{width:'100%'}}
                    title={`${course.title} Avg grades`}
                    xaxisOptions={["Mid", "Assessments" , "Final"]}
                    dataSets={[{data: [course.avgMid, course.avgAssessment, course.avgFinal]}]}
                  />
              </Grid>
              {(student) &&
              <Grid size={12}>
                  <BarChartCard 
                    sx={{width:'100%'}}
                    title={`${student.username} grades`}
                    xaxisOptions={["Mid", "Assessments" , "Final"]}
                    dataSets={[{data: [student.records.mid, student.records.assessment, student.records.final]}]}
                  />
              </Grid>}
              <Grid size={12}>
                <DashboardTable students={course.students}/>
              </Grid>
            </>

          )
        }
      </Grid>
    }
   </>
  )
}

export default TeacherDashboard