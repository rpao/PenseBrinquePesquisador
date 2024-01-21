import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Card, CardBody } from "react-bootstrap";
import { BarChartProps } from "./chart.types";
import { getOptions } from "./chartUtils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export function BarChart(props: BarChartProps) {
  const options = getOptions(
    props.title,
    props.borderWidth,
    props.responsive,
    props.legendPosition,
  );

  // Throws error if dataset and lables match in number.
  props.data.datasets.forEach((dataset, index) => {
    if (dataset.data.length !== props.data.labels.length) {
      throw new Error(
        `Inconsistency found in the "${props.chartId}" chart - Index ${index}.`,
      );
    }
  });

  return (
    <Card id={`bar-chart-card-${props.chartId}`} className="chart-card">
      <CardBody id={`bar-chart-card-body-${props.chartId}`}>
        <Bar options={options} data={props.data} />
      </CardBody>
    </Card>
  );
}
