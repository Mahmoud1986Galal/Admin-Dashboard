import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import LineDesign from "../../Line/LineDesign";
import { DownloadOutlined } from "@mui/icons-material";
import { transaction } from "./DataRow2";

const Row2 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
      <Paper
        sx={{
          minWidth: 300,
          flexGrow: 1,
        }}
      >
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              variant="h4"
              mb={1}
              mt={1}
              ml={1}
            >
              Revenue Generated
            </Typography>
            <Typography
              color={theme.palette.secondary.main}
              variant="h6"
              ml={4}
            >
              $59,342.32
            </Typography>
          </Box>
          <Box mr={2}>
            <IconButton sx={{ color: theme.palette.secondary.main }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>
        <LineDesign isDashboard={true} />
      </Paper>

      <Box sx={{ flexGrow: 1, minWidth: "40%" }}>
        <Paper>
          <Typography
            textTransform={"capitalize"}
            color={theme.palette.secondary.main}
            p={1.2}
            fontWeight={"bold"}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>
        <Box
          sx={{
            overflow: "auto",
            maxHeight: "62vh",
            overscrollBehavior: "contain",
          }}
        >
          {transaction.map((item, index) => {
            return (
              <Paper sx={{ mt: 1 }} key={index}>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  p={2}
                  color={theme.palette.text.secondary}
                >
                  <Box>
                    <Typography>{item.txId}</Typography>
                    <Typography>{item.user}</Typography>
                  </Box>
                  <Box>
                    <Typography>{item.date}</Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        backgroundColor: "green",
                        padding: ".3rem 2rem",
                        borderRadius: ".3rem",
                        cursor: 'pointer'
                      }}
                    >
                      ${item.cost}
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            );
          })}
        </Box>
      </Box>
    </Stack>
  );
};

export default Row2;
