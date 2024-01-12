import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { useTheme, Box, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from "../../Component/Header";

const Team = () => {
  const theme = useTheme();

  //  the field is required
  const columns = [
    {
      field: "id",
      headerName: " ID",
      width: 30,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      align: "center",
      headerAlign: "center",
      flex: 0.8,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: 0.8,
              width: "10rem",
              textAlign: "center",
              borderRadius: ".5rem",
              display: "flex",
              justifyContent: "space-evenly",
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.success.main
                  : "gray",
            }}
          >
            {access === "Admin" ? (
              <AdminPanelSettingsOutlined sx={{color: 'whitesmoke'}} fontSize="small" />
            ) : access === "Manager" ? (
              <SecurityOutlined sx={{color: 'whitesmoke'}} fontSize="small" />
            ) : (
              <LockOpenOutlined sx={{color: 'whitesmoke'}} fontSize="small" />
            )}
            <Typography sx={{ fontSize: "1rem", color: 'whitesmoke' }}>{access}</Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <div>
    <Header title={'Team'} subtitle={'See your team'}/>
<Box sx={{ height: 600, width: "95%", mx: 'auto' }}>
        <DataGrid
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </div>     
  );
};

export default Team;
