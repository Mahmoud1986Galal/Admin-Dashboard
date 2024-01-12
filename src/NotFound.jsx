import { useTheme } from "@mui/material";

const NotFound = () => {
  const theme = useTheme();
  return (
    <h1
      style={{
        fontSize: "4vw",
        fontStyle: "italic",
        color: theme.palette.text.secondary,
        fontFamily: "vijaya",
        textAlign: "center",
      }}
    >
      this Page is NotFound 404 Error
    </h1>
  );
};

export default NotFound;
