import React from "react";
import { Doughnut, Line } from "react-chartjs-2";

export default function PageBaosCaoTongQuat(props) {
  return (
    <Line
      data={{
        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
        datasets: [
          {
            data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
            label: "Mường Thanh Luxury Đà Nẵng ",
            borderColor: "#3e95cd",
            fill: false,
          },
          {
            data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
            label: "Mường Thanh Luxury Sông Hàn",
            borderColor: "#8e5ea2",
            fill: false,
          },
          {
            data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
            label: "Mường Thanh Grand Đà Nẵng",
            borderColor: "#3cba9f",
            fill: false,
          },
          {
            data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
            label: "Mường Thanh Hà Nội Centre",
            borderColor: "#e8c3b9",
            fill: false,
          },
          {
            data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
            label: "Mường Thanh Grand Hà Nội",
            borderColor: "#c45850",
            fill: false,
          },
          {
            data: [9, 3, 2, 2, 7, 28, 90, 270, 378, 1328],
            label: "Best Western Mường Thanh",
            borderColor: "yellow",
            fill: false,
          },
          {
            data: [6, 31, 29, 20, 70, 262, 102, 172, 250, 4000],
            label: "Mường Thanh Sài Gòn Centre",
            borderColor: "green",
            fill: false,
          },
          {
            data: [100, 230, 290, 402, 500, 600, 1182, 2000, 3000, 5000],
            label: "Mường Thanh Luxury Sài Gòn",
            borderColor: "brown",
            fill: false,
          },
        ],
      }}
      options={{
        title: {
          display: true,
          text: "World population per region (in millions)",
        },
        legend: {
          display: true,
          position: "bottom",
        },
      }}
    />
  );
}