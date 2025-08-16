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
  const [student, setStudent] = useState(null);
  const [course, setCourse] = useState(null);
  const [teacherCourses, setTeacherCourses] = useState([]);
  const [studentCourses, setStudentCourses] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const dashboardTeacherData = useMemo(() => {
    if(user.role !== 'teacher') return null;
    if(!teacherCourses) return null;

    const coursesData = teacherCourses.map(course => calcCourseMetrics(course));
    const overallData = calcOverallMetrics(teacherCourses);

    return { coursesData, overallData };
  }, [teacherCourses])

  useEffect(() => {
    if(!user) return 
    const fetchUserData = async () => {
      if(user.role === 'teacher'){
        const courses = await getTeacherCourses();
        setTeacherCourses(courses?.length !== 0 ? courses : [])
        console.log(courses)
      }
      else if(user.role === 'student') {
        const courses = await getStudentCourses();
        setStudentCourses(courses)
      }
      setIsLoading(false)
    }
    fetchUserData();
    return () => {}
  }, [])


  return (
    <PageContainer sx={{
      display: 'flex',
      gap: 5,
    }}>
      {
        (isLoading ? <CircularProgress size={200}/> : 
          <>
            {(user && user.role === 'teacher') && <TeacherDashboard data={dashboardTeacherData} isLoading={isLoading} />}
            {(user && user.role === 'student') && <StudentDashboard data={dashboardTeacherData} isLoading={isLoading} />}
          </>
      )}
    </PageContainer>
  )
}

export default Dashboard