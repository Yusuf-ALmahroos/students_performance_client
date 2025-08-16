import { Box, Typography } from '@mui/material'
import ReactApexChart from 'react-apexcharts'

const BarChartCardMultiple = ({sx, title, dataSets}) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'space-evenly'}
      boxShadow={5}
      bgcolor={'white'}
      borderRadius={10}
      sx={{...sx}}
      padding={1}
      width="100%" 
      height={350}
    >
      <Typography variant='h5' fontWeight={550}>{title}</Typography>
      <ReactApexChart 
        height={300}
        type='bar'
        series={dataSets}
        width={800}
        
        options={{
          chart: {
            type: 'bar',
            height: 300,
            toolbar: {
              show: true,
              tools: {
                zoom: true,
                zoomin: true,
                zoomout: true,
              }
            },
             zoom: {
              enabled: true
              },
            },
          plotOptions: {
            bar: {
              columnWidth: '30%',
              distributed: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          legend: {
            show: true
          },
          xaxis: {
            labels: {
              style: {
                colors: 'black',
                fontSize: '12px'
              }
            }
          }
        }}
      />
    </Box>
  )
}

export default BarChartCardMultiple