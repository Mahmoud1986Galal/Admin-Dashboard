import { Box, useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { data3 } from "../DataChart";
import { geography } from "./world_countries";
import Header from "../../Component/Header";

// eslint-disable-next-line react/prop-types
const Geograohy = ({ isDashboard = false }) => {
  const theme = useTheme();
  return (
    <div>
      {isDashboard ? null : (
        <Header
          title={"Geography Map"}
          subtitle={"See your Country in geography Map"}
        />
      )}
      <Box
        sx={{
          borderRadius: "1rem",
          height: isDashboard ? "50vh" : "90vh",
          border: isDashboard
            ? "none"
            : `2px solid ${theme.palette.text.primary}`,
        }}
      >
        <ResponsiveChoropleth
          projectionScale={isDashboard ? 100 : 160}
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
          data={data3}
          features={geography.features}
          margin={
            isDashboard
              ? { top: 10, right: 0, bottom: 10, left: 0 }
              : { top: 0, right: 0, bottom: 0, left: 0 }
          }
          colors="spectral"
          domain={[0, 1000000]}
          unknownColor="#666666"
          label="properties.name"
          valueFormat=".2s"
          projectionType="naturalEarth1"
          projectionTranslation={[0.5, 0.5]}
          projectionRotation={[0, 0, 0]}
          enableGraticule={false}
          graticuleLineColor="#dddddd"
          borderWidth={0.8}
          borderColor="#152538"
          legends={
            isDashboard
              ? []
              : [
                  {
                    anchor: "bottom-left",
                    direction: "column",
                    justify: true,
                    translateX: 20,
                    translateY: -100,
                    itemsSpacing: 0,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: "left-to-right",
                    itemTextColor: theme.palette.text.primary,
                    itemOpacity: 0.85,
                    symbolSize: 18,
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemTextColor: theme.palette.text.secondary,
                          itemOpacity: 1,
                        },
                      },
                    ],
                  },
                ]
          }
        />
      </Box>
    </div>
  );
};

export default Geograohy;
