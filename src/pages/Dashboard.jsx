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
import { useEffect, useMemo, useState } from "react"
import BarChartCard from "../components/BarChartCard"
import { getTeacherCourses } from "../../services/teacher"
import { getStudentCourses } from "../../services/student"
import { calcCourseMetrics, calcOverallMetrics} from '../utils/dashbaord'
import TeacherDashboard from "../components/TeacherDashboard"
import StudentDashboard from "../components/StudentDashboard"

const Dashboard = ({user}) => {
  const [teacherCourses, setTeacherCourses] = useState([]);
  const [studentCourses, setStudentCourses] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if(!user) return 
    const fetchUserData = async () => {
      if(user.role === 'teacher'){
        getTeacherCourses()
        .then((courses) => {
          setTeacherCourses(courses?.length !== 0 ? courses : [])
          setIsLoading(false)
        })
        .catch((err) => setIsLoading(true))
      }
      else if(user.role === 'student') {
        getStudentCourses()
        .then((courses) => {
          setStudentCourses(courses)
          setIsLoading(false)
        })
      }
    }
    fetchUserData();
    return () => {}
  }, [])

  const dashboardTeacherData = useMemo(() => {
    if(isLoading) return null;
    if(!teacherCourses) return null;
   
    const coursesData = teacherCourses.map(course => calcCourseMetrics(course));
    const overallData = calcOverallMetrics(teacherCourses);

    return { coursesData, overallData };
  }, [teacherCourses])
  
  return (
    <PageContainer sx={{
      display: 'flex',
      gap: 5,
    }}>
      {
        (isLoading ? <CircularProgress size={200}/> : 
          <>
            {(user && user.role === 'teacher') && <TeacherDashboard data={dashboardTeacherData} isLoading={isLoading} />}
            {(user && user.role === 'student') && <StudentDashboard data={studentCourses} isLoading={isLoading} />}
          </>
      )}
    </PageContainer>
  )
}

export default Dashboard