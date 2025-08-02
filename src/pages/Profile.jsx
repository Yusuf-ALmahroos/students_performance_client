import PageContainer from "../components/PageContainer"
import {
  Card,
  Box,
  Grid,
  Typography,
  Button
} from '@mui/material'

const Profile = () => {
  return (
    <PageContainer sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Grid container width={'60%'} gap={3}>
        <Grid size={12}>
          <Typography
            variant="h5" 
            alignSelf={'center'}
            sx={{fontWeight: 600}}
          >Student Name / Teacher name role dependent</Typography>
        </Grid>
        <Grid size={12} >
          <Box 
            boxShadow={15} 
            bgcolor={'white'} 
            borderRadius={2}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={3}
            padding={5}
          >
            <Box>
              <Typography>Name</Typography>
              <Typography>Role</Typography>
              <Typography>Courses / enrolled courses</Typography>
            </Box>
            <Box display={'flex'} gap={2}>
              <Button variant='contained' color='warning' >Update Password</Button>
              <Button variant='contained' color='warning' >Update Profile Settings</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </PageContainer>
  )
}

export default Profile