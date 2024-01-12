import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

// eslint-disable-next-line react/prop-types
const CardRow1 = ({ icon, title, subtitle, increase, data1, scheme }) => {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        flexGrow: 1,
        minWidth: "300px",
        display: "flex",
        justifyContent: "space-between",
        padding: ".4rem",
      }}
    >
      <Stack gap={1}>
        {icon}
        <Typography>{title}</Typography>
        <Typography>{subtitle}</Typography>
      </Stack>
      <Stack alignItems={"center"}>
        <Box sx={{ height: "80px", width: "80px" }}>
          <ResponsivePie
            theme={{
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
              axis: {
                domain: {
                  line: {
                    stroke: theme.palette.divider,
                    strokeWidth: 1,
                  },
                },
                legend: {
                  text: {
                    fontSize: 12,
                    fill: theme.palette.text.primary,
                    outlineWidth: 0,
                    outlineColor: "transparent",
                  },
                },
                ticks: {
                  line: {
                    stroke: theme.palette.divider,
                    strokeWidth: 1,
                  },
                  text: {
                    fontSize: 11,
                    fill: theme.palette.text.primary,
                    outlineWidth: 0,
                    outlineColor: "transparent",
                  },
                },
              },
              grid: {
                line: {
                  stroke: theme.palette.divider,
                  strokeWidth: 2,
                },
              },
              legends: {
                title: {
                  text: {
                    fontSize: 11,
                    fill: theme.palette.text.primary,
                    outlineWidth: 0,
                    outlineColor: "transparent",
                  },
                },
                text: {
                  fontSize: 11,
                  fill: theme.palette.text.primary,
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
                ticks: {
                  line: {},
                  text: {
                    fontSize: 10,
                    fill: theme.palette.text.primary,
                    outlineWidth: 0,
                    outlineColor: "transparent",
                  },
                },
              },
              annotations: {
                text: {
                  fontSize: 13,
                  fill: theme.palette.text.primary,
                  outlineWidth: 2,
                  outlineColor: theme.palette.text.primary,
                  outlineOpacity: 0.5,
                },
                link: {
                  stroke: theme.palette.divider,
                  strokeWidth: 1,
                  outlineWidth: 2,
                  outlineColor: "red",
                  outlineOpacity: 1,
                },
                outline: {
                  stroke: theme.palette.divider,
                  strokeWidth: 2,
                  outlineWidth: 2,
                  outlineColor: theme.palette.divider,
                  outlineOpacity: 1,
                },
                symbol: {
                  fill: theme.palette.text.primary,
                  outlineWidth: 2,
                  outlineColor: theme.palette.text.primary,
                  outlineOpacity: 1,
                },
              },
              tooltip: {
                container: {
                  background: theme.palette.background.default,
                  color: theme.palette.text.primary,
                  fontSize: 12,
                },
                basic: {},
                chip: {},
                table: {},
                tableCell: {},
                tableCellValue: {},
              },
            }}
            data={data1}
            margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
            innerRadius={0.7}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={4}
            colors={{ scheme: scheme }}
            borderWidth={4}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            arcLinkLabelsSkipAngle={10}
            enableArcLabels={false}
            enableArcLinkLabels={false}
            arcLinkLabelsTextColor={theme.palette.text.primary}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
              from: "color",
              modifiers: [["darker", 2]],
            }}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: theme.palette.text.primary,
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: theme.palette.text.primary,
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            legends={[
              {
                anchor: "bottom",
                direction: "row",
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: theme.palette.text.primary,
                itemDirection: "left-to-right",
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: theme.palette.text.primary,
                    },
                  },
                ],
              },
            ]}
          />
        </Box>
        <Typography>{increase}</Typography>
      </Stack>
    </Paper>
  );
};

export default CardRow1;
