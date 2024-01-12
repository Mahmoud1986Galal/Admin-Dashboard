import { Box } from "@mui/material"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { columns, rows } from "./data"
import Header from "../../Component/Header"

const Invoices = () => {
  return (
    <Box sx={{ height: 600, width: "95%", mx: 'auto' }}>
    <Header title={"Invoices"} subtitle={"Some of your invoices"} />

        <DataGrid
        checkboxSelection
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

export default Invoices