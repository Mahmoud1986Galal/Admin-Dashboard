import { Box, useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { data } from "../DataChart";

// eslint-disable-next-line react/prop-types
const BarDesign = ({ isDashboard = false }) => {
  const theme = useTheme();
  return (
    <Box sx={{ height: isDashboard ? "50vh" : "90vh" }}>
      <ResponsiveBar
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
        data={data}
        keys={["Spain", "France", "Germany"]}
        indexBy="year"
        margin={
          isDashboard
            ? { top: 50, right: 40, bottom: 30, left: 50 }
            : { top: 50, right: 130, bottom: 50, left: 60 }
        }
        padding={0.2}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={
          isDashboard
            ? {}
            : {
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Year",
                legendPosition: "middle",
                legendOffset: 32,
                truncateTickAt: 0,
              }
        }
        axisLeft={
          isDashboard
            ? {}
            : {
                tickSize: 5,
                tickPadding: 10,
                tickRotation: 0,
                legend: "Salary",
                legendPosition: "middle",
                legendOffset: -50,
                truncateTickAt: 0,
              }
        }
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={
          isDashboard
            ? []
            : [
                {
                  dataFrom: "keys",
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 120,
                  translateY: 0,
                  itemsSpacing: 2,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemDirection: "left-to-right",
                  itemOpacity: 0.85,
                  symbolSize: 20,
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]
        }
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          e.id + ": " + e.formattedValue + " in Salary: " + e.indexValue
        }
      />
    </Box>
  );
};

export default BarDesign;
