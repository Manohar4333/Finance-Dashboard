import { useSelector } from "react-redux";

export default function Insights() {
  const transactions = useSelector((state) => state.finance.transactions);

  const expenses = transactions.filter(t => t.type === "expense");

  const categoryTotals = {};
  expenses.forEach(t => {
    categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
  });

  const highest = Object.entries(categoryTotals).sort((a,b)=>b[1]-a[1])[0];

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-2">Insights</h2>
      {highest ? (
        <p>Highest spending: {highest[0]} (₹{highest[1]})</p>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
