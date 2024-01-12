import { DownloadOutlined } from "@mui/icons-material"
import Row1 from "./Row1/Row1"
import Row2 from "./Row2/Row2"
import Row3 from "./Row3/Row3"
import { Box, Button } from "@mui/material"
import Header from "../../Component/Header"

const Dashboard = () => {
  return (
    <div>
   <Header title={'DashBoard'} subtitle={'Welcom to your Dashboard'}/>
    <Box sx={{textAlign: 'right'}}>
    <Button sx={{padding:'.6rem', textTransform: 'capitalize'}} variant="contained" color="primary" >
    <DownloadOutlined/>
      download Reports
    </Button>
    </Box>
    <Row1/>
    <Row2/>
    <Row3/>
    </div>
  )
}

export default Dashboard