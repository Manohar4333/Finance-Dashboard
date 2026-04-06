import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";
import Insights from "./components/Insights";
import { useSelector, useDispatch } from "react-redux";
import { setRole } from "./store/store";
import "./styles.css"; // ✅ use this instead of index.css

export default function App() {
  const role = useSelector((state) => state.finance.role);
  const dispatch = useDispatch();

  return (
    <div className="container">

      {/* Header */}
      <div className="header">
        <h1 className="title">Finance Dashboard</h1>

        <select
          value={role}
          onChange={(e) => dispatch(setRole(e.target.value))}
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      {/* Sections */}
      <Dashboard />
      <Transactions />
      <Insights />

    </div>
  );
}