import { Card, CardContent, Typography } from '@mui/material';

const DataCard = ({title, value}) => {
  return (
    <Card elevation={2} sx={{ borderRadius: 2, height: '90px', width: '100%',  bgcolor: 'primary.light'}}>
      <CardContent>
        <Typography variant="subtitle1" color="white" fontWeight={600} gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" fontWeight={600}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default DataCard