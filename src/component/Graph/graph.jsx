/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from "../../config/axios";
import { useEffect, useState } from "react";
import baseUrl from "../../baseUrl";
import { LineChart } from "@mui/x-charts";
import Loading from "../Loader/loading";
// import styled from "@emotion/styled";

const mapDataToLineChart = (data) => {
  const xAxisData = [];
  const seriesData = [];
  const earning = [];

  data?.forEach(({ count, month, totalHostBalance }) => {
    xAxisData.push(month);
    seriesData.push(count);
    earning.push(totalHostBalance);
  });

  return {
    xAxis: [{ data: xAxisData }],
    series: [
      { data: seriesData },
      { data: earning, name: "Total Host Balance" },
    ],
  };
};

const Graph = () => {
  const [graph, setGraph] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchgraph();
  }, []);

  const fetchgraph = () => {
    axios
      .get(baseUrl + "leader/leaderMonthHost" ,
     )

      .then((res) => {
        setGraph(res.data.result);
        console.log();
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const chartData = mapDataToLineChart(graph);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <LineChart
        className="line_chart_"
        xAxis={chartData.xAxis}
        series={chartData.series}
        width={680}
        height={300}/>
      {isloading && <Loading />}
    </div>
  );
};

export default Graph;
