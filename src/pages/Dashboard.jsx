import { 
  Grid, 
  Box, 
  Button, 
  Typography, 
  Divider, 
  Autocomplete, 
  TextField,
  CircularProgress
} from "@mui/material"
import PageContainer from "../components/PageContainer"
import { BarChart, PieChart } from "@mui/x-charts"
import DataCard from "../components/DataCard"
import { useState } from "react"


const cardsValues = [
  {title: 'Total Students', value: 35},
  {title: 'Avg Course Grades', value: 78.6},
  {title: 'Avg Attendence', value: 92.4},
  {title: 'Pass Rate', value: 88.5},
]

const coursesList = [
  {title: 'Math 101', id: 1},
  {title: 'Physics 101', id: 2},
  {title: 'Software Engineering', id: 3}
]

const students = [
  {label: 'Yusuf', id: 1},
  {label: 'Ahmed', id: 2},
  {label: 'Hassan', id: 3},
]
const Dashboard = () => {
  const [student, setStudent] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState({role: 'teacher'})
  const handleAutoCompleteChange = (_, value) => {
    setStudent(value)
  }

  return (
    <PageContainer sx={{
      display: 'flex',
      gap: 5,
    }}>
      {
        (user.role !== 'teacher' ? <CircularProgress size={200}/> : 
          <>
            <Box 
              flex={1} 
              display={'flex'} 
              flexDirection={'column'} 
              gap={2} 
              width={'20vw'}
            >
              <Typography>Courses List</Typography>
              {coursesList.map((course) => (
                <Button 
                  variant="contained" 
                  color="warning" 
                  key={course.id}

                >
                  {course.title}
                </Button>
              ))}
              <Divider/>
              <Typography>Students List</Typography>
              <Autocomplete 
                disablePortal
                options={students}
                value={student}
                renderInput={(params) => <TextField 
                  color="secondary"
                  {...params} label="Students" />}
                onChange={handleAutoCompleteChange}
              />
            </Box>
            {isLoading ? <Box width={'calc(100% - 20vw)'} display={'flex'} justifyContent={'center'}> <CircularProgress size={200}/> </Box> : 
              <Grid container width={'calc(100% - 20vw)'} gap={5} flex={4}>
                <Grid size={12} boxShadow={15} bgcolor={"white"} borderRadius={5}>
                  <Box
                    display={'flex'}
                    gap={2}
                    alignItems={'center'}
                    justifyContent={'space-evenly'}
                    padding={5}
                  >
                    {cardsValues.map((item, idx) => (
                      <DataCard key={idx} title={item.title} value={item.value}/>
                    ))}
                  </Box>
                </Grid>
                  
                <Grid size={{xs: 12, sm: 12, md: 6, lg: 6}}>
                  <Box width={'100%'} >
                    <BarChart
                      xAxis={[{ data: ['Midterm', 'Assessments', 'Final'] }]}
                      series={[{ data: [4, 5, 5] }]}
                      height={300} 
                    />
                  </Box>
                  
                </Grid>
                  
                <Grid size={{xs: 6, sm: 6, md: 4, lg: 4}}>
                  <Box>
                    <PieChart
                      series={[
                        {
                          data: [
                            { id: 0, value: 10, label: 'series A' },
                            { id: 1, value: 15, label: 'series B' },
                            { id: 2, value: 20, label: 'series C' },
                          ],
                        },
                      ]}
                      width={200}
                      height={200}
                    />
                  </Box>
                </Grid>
              </Grid>
            }
          </>
      )}
    </PageContainer>
  )
}

export default Dashboard