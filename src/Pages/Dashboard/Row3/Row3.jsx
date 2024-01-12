import { Box, Paper, Typography, useTheme } from "@mui/material";
import Geograohy from "../../Geography/Geography";
import PieDesign from "../../Pie/PieDesign";
import BarDesign from "../../Bar/BarDesign";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", gap: 2, mt: 3, flexWrap: "wrap" }}>
      <Paper sx={{ width: "25rem", flexGrow: 1, borderRadius: "1rem" }}>
        <Typography
          variant="h6"
          color={theme.palette.secondary.main}
          fontWeight={"600"}
          padding={'1rem 1rem 0 1rem'}
        >
          Campaign
        </Typography>
        <PieDesign isDashboard={true} />
        <Typography
          variant="h6"
          color={theme.palette.secondary.main}
          fontWeight={"600"}
          padding={'1rem 1rem 0 1rem'}
          textAlign={'center'}
        >
          $48,352 Revenue <br/>
          Generated
        </Typography>
        <Typography
          color={theme.palette.text.primary}
          fontWeight={"600"}
          padding={'0rem 1rem 1.5rem 1rem'}
          textAlign={'center'}
        >
          Includes extra misc 
          expendaures and costs
        </Typography>
      </Paper>

      <Paper sx={{ width: "25rem", flexGrow: 1, borderRadius: "1rem" }}>
      <Typography
          variant="h6"
          color={theme.palette.secondary.main}
          fontWeight={"600"}
          padding={'1rem 1rem 0 1rem'}
        >
          Sales Quantity
        </Typography>
        <BarDesign isDashboard={true} />
      </Paper>

      <Paper sx={{ width: "25rem", flexGrow: 1, borderRadius: "1rem" }}>
      <Typography
          variant="h6"
          color={theme.palette.secondary.main}
          fontWeight={"600"}
          padding={'1rem 1rem 0 1rem'}
        >
          Geography Based Traffics
        </Typography>
        <Geograohy isDashboard={true} />
      </Paper>
    </Box>
  );
};

export default Row3;
