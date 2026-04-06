import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

export default function Insights() {
  const transactions = useSelector((state) => state.finance.transactions);

  // 📈 Line Chart Data (Cumulative Balance)
  let balance = 0;
  const lineData = transactions.map((t) => {
    balance += t.type === "income" ? t.amount : -t.amount;
    return { date: t.date, balance };
  });

  // 🥧 Pie Chart Data (Expenses by Category)
  const expenses = transactions.filter((t) => t.type === "expense");

  const categoryMap = {};
  expenses.forEach((t) => {
    categoryMap[t.category] =
      (categoryMap[t.category] || 0) + t.amount;
  });

  const pieData = Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));

  const COLORS = ["#2563eb", "#16a34a", "#dc2626", "#f59e0b", "#7c3aed"];

  return (
    <div className="chart-grid">

      {/* Line Chart */}
      <div className="chart-box">
        <h3>Balance Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="chart-box">
        <h3>Expense Breakdown</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              outerRadius={100}
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}