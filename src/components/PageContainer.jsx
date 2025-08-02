import { Box } from "@mui/material"

const PageContainer = ({sx, children}) => {
  return (
    <Box
      display={'flex'}
      marginLeft={'80px'}
      marginTop={'60px'}
      sx={sx}
    >
      {children}
    </Box>
  )
}

export default PageContainer