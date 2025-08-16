import DataCard from "./DataCard"
import { Box } from "@mui/material"

const StudentDashboard = ({ data }) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      width={'80vw'}
      bgcolor={'white'}
      borderRadius={5}
      boxShadow={5}
      justifyContent={'flex-start'}
      alignItems={'center'} 
      padding={2}
      gap={2}
      mx={'auto'}
    >
      {data.map((item, index) => {
        const cardsValues = [
          { title: 'Mid', value: `${item.record.mid} / 20` },
          { title: 'Assessments', value: `${item.record.assessment} / 30` },
          { title: 'Final', value: `${item.record.final} / 50` },
          { title: 'Attendance', value: `${item.record.attendance} %` },
          { title: 'Remarks', value: item.record.remarks },
        ];

        return (
          <Box
            key={index}
            display="flex"
            gap={2}
            alignItems="center"
            justifyContent="space-evenly"
            padding={5}
            width={'100%'}
          >
            {cardsValues.map(card => (
              <DataCard key={card.title} title={card.title} value={card.value} />
            ))}
          </Box>
        );
      })}
    </Box>
  )
}

export default StudentDashboard;
