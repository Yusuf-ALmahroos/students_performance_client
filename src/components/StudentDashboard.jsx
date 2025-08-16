import DataCard from "./DataCard"
import { Box } from "@mui/material"

const StudentDashboard = ({data}) => {

  const cardsValues = [
    {title: 'Mid', value: `${data.overallData.mid} / 20`},
    {title: 'Assessments', value: `${data.overallData.assessment} / 30` },
    {title: 'Final', value: `${data.overallData.final} / 50`},
    {title: 'Attendence', value: `${data.overallData.attendance} %`},
    {title: 'Remarks', value: `${data.overallData.remarks} %`},
  ]
  return (
    <>
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
    </>
  )
}

export default StudentDashboard