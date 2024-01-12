import { Box } from "@mui/material"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { columns, rows } from "./data"
import Header from "../../Component/Header"

const Contacts = () => {
  return (
    <Box sx={{ height: 600, width: "95%", mx: 'auto' }}>
     <Header title={"Contacts"} subtitle={"Some of your Contacts"} />
        <DataGrid
        slots={{
          toolbar: GridToolbar,
        }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
  )
}

export default Contacts