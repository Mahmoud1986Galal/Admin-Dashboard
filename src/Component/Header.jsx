import { Box, Typography, useTheme } from "@mui/material";

// eslint-disable-next-line react/prop-types
const Header = ({title, subtitle}) => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        sx={{
          fontSize: "4vw",
          fontStyle: "italic",
          color: theme.palette.secondary.main,
          fontFamily: "vijaya",
        }}
      >
      {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "1.5vw",
          fontStyle: "italic",
          color: theme.palette.text.primary,
          fontFamily: "vijaya",
        }}
      >
      {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
