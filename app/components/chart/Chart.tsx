"use client";

import type { ChartOptions } from "chart.js";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

import type { ExchangeRate } from "@utils/getCoinVariation";

Chart.register(...registerables);

interface LineProps {
  options?: ChartOptions<"line">;
  variation: ExchangeRate[];
}

/* @ts-expect-error Async Server Component */
const Graph: React.FC<LineProps> = async ({ variation, options }) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const lastWeek = new Date(today);
  lastWeek.setHours(0, 0, 0, 0);
  lastWeek.setDate(lastWeek.getDate() - 7);

  const labels = variation.map((v) => v.rate_open);

  return (
    <Line
      options={{ responsive: true }}
      data={{
        labels,

        datasets: [
          {
            cubicInterpolationMode: "monotone",
            label: "Unfilled",
            fill: true,
            backgroundColor: "orange",
            borderColor: "orange",
            data: labels.map((v) => v),
          },
        ],
      }}
    />
  );
};

export default Graph;
