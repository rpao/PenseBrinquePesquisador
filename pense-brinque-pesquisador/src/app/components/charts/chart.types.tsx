export type ChartDataset = {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
};

export type ChartData = {
  labels: string[];
  datasets: ChartDataset[];
}

export type ChartLegendPosition = "bottom" | "center" | "top" | "right" | "left";

export type BarChartProps = {
  chartId: string;
  data: ChartData;
  title?: string;
  borderWidth?: number,
  responsive?: boolean,
  legendPosition?: ChartLegendPosition
}