import { Box } from "@mui/material"

const PageContainer = ({sx, children}) => {
  return (
    <Box
      display={'flex'}
      marginTop={'90px'}
      sx={sx}
    >
      {children}
    </Box>
  )
}

export default PageContainer