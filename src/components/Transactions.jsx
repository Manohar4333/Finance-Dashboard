import { useSelector, useDispatch } from "react-redux";
import { setSearch, addTransaction } from "../store/store";
import { useState } from "react";

export default function Transactions() {
  const { transactions, search, role } = useSelector((state) => state.finance);
  const dispatch = useDispatch();

  const [form, setForm] = useState({ amount: "", category: "", type: "expense" });

  const filtered = transactions.filter(t =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

   const handleAdd = () => {
    dispatch(addTransaction({
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      ...form,
      amount: Number(form.amount)
    }));
    setForm({ amount: "", category: "", type: "expense" });
  };

   return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-lg font-bold mb-2">Transactions</h2>

      <input
        placeholder="Search category..."
        className="border p-2 mb-2 w-full"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />

       {role === "admin" && (
        <div className="flex gap-2 mb-4">
          <input
            placeholder="Amount"
            className="border p-2"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
          />

          <input
            placeholder="Category"
            className="border p-2"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />
          <select
            className="border p-2"
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button onClick={handleAdd} className="bg-blue-500 text-white px-3 rounded">
            Add
          </button>
        </div>
      )}

 <table className="w-full text-left">
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((t) => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>{t.category}</td>
              <td>₹{t.amount}</td>
              <td>{t.type}</td>
            </tr>
             ))}
        </tbody>
      </table>
    </div>
  );
}