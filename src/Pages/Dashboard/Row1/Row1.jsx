import { Stack } from "@mui/material";
import CardRow1 from "./CardRow1";
import { Email, PersonAdd, PointOfSale, Traffic } from "@mui/icons-material";
import { data1 } from "../../DataChart";

const Row1 = () => {
  return (
    <Stack
      direction="row"
      gap={1}
      my="1rem"
      flexWrap="wrap"
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      <CardRow1
        icon={<Email />}
        title={"12,361"}
        subtitle={"Emails sent"}
        increase={"+14%"}
        data1={data1}
        scheme={"nivo"} />
      <CardRow1
        icon={<PointOfSale />}
        title={"431,225"}
        subtitle={"Sales obtained"}
        increase={"+21%"}
        data1={data1}
        scheme={"category10"}
      />
      <CardRow1
        icon={<PersonAdd />}
        title={"32,441"}
        subtitle={"New clients"}
        increase={"+5%"}
        data1={data1}
        scheme={"accent"}  />
      <CardRow1
        icon={<Traffic />}
        title={"1,325,134"}
        subtitle={"Traffic recieved"}
        increase={"+43%"}
        data1={data1}
        scheme={"dark2"}/>
    </Stack>
  );
};

export default Row1;
