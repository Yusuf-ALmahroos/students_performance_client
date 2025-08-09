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
import DataCard from "../components/DataCard"
import { useState } from "react"
import BarChartCard from "../components/BarChartCard"


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
                  
                <Grid size={{xs: 12, sm: 12, md: 12, lg: 12}}>
                  <BarChartCard 
                    sx={{width:'100%'}}
                    title={'All Courses Avg Grades'}
                    xaxisOptions={coursesList.map((course) => course.title)}
                    dataSets={[
                      { data: [90, 86, 93] },
                    ]}
                    colors={['red', 'blue', 'yellow']}
                  />
                </Grid>
                  
                <Grid size={{xs: 6, sm: 6, md: 4, lg: 4}}>
                  <Box>
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