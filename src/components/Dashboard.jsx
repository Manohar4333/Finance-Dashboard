import { useSelector } from "react-redux";
import '../styles.css'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function Dashboard() {
  const transactions = useSelector((state) => state.finance.transactions);

  const income = transactions.filter(t => t.type === "income").reduce((a,b)=>a+b.amount,0);
  const expense = transactions.filter(t => t.type === "expense").reduce((a,b)=>a+b.amount,0);
  const balance = income - expense;

  const lineData = transactions.map(t => ({
    date: t.date,
    amount: t.type === "income" ? t.amount : -t.amount
  }));

  const categoryTotals = {};
  transactions.forEach(t => {
    if(t.type === "expense"){
      categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
    }
  });

  const pieData = Object.entries(categoryTotals).map(([name,value]) => ({name,value}));

  return (
    <div className="container">
      <div className="card-grid">
        <Card title="Balance" value={balance} />
        <Card title="Income" value={income} />
        <Card title="Expenses" value={expense} />
      </div>

      <div className="chart-grid">
        <div className="chart-box">
          <h2 className="title" style={{fontSize:18, marginBottom:12}}>Balance Trend</h2>
          <ResponsiveContainer width="100%" aspect={2}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="amount" stroke="#2563eb" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h2 className="title" style={{fontSize:18, marginBottom:12}}>Spending Breakdown</h2>
          <ResponsiveContainer width="100%" aspect={2}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100} fill="#2563eb">
                {pieData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

const COLORS = ["#2563eb", "#22d3ee", "#f59e42", "#f43f5e", "#10b981", "#a78bfa", "#fbbf24"];

function Card({ title, value }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>₹{value}</p>
    </div>
  );
}
