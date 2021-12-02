import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Characters } from "../../Styles/StylePages/Admin/Chart";
const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <>
      <Characters>
        <div className="chart">
          <h3 className="chartTitle">{title}</h3>
          <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#5550bd" />
              <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
              <Tooltip />
              {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Characters>
    </>
  );
};

export default Chart;
