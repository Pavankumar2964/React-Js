
import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [transactions, setTransactions] = useState(() => {
    return JSON.parse(localStorage.getItem("transactions")) || [];
  });

  const [formData, setFormData] = useState({
    desc: "",
    amount: "",
    date: "",
    category: "Income",
  });

  const [editIndex, setEditIndex] = useState(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { desc, amount, date, category } = formData;

    if (!desc || amount <= 0 || !date) {
      alert("Enter valid details");
      return;
    }

    const data = { desc, amount: Number(amount), date, category };

    if (editIndex !== null) {
      const updated = [...transactions];
      updated[editIndex] = data;
      setTransactions(updated);
      setEditIndex(null);
    } else {
      setTransactions([...transactions, data]);
    }

    setFormData({ desc: "", amount: "", date: "", category: "Income" });
  };

  const handleEdit = (index) => {
    setFormData(transactions[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = transactions.filter((_, i) => i !== index);
    setTransactions(updated);
  };

  const filteredTransactions = transactions.filter(
    (t) => filter === "All" || t.category === filter
  );

  const income = transactions
    .filter((t) => t.category === "Income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter((t) => t.category !== "Income")
    .reduce((a, b) => a + b.amount, 0);

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <div className="summary">
        <div>
          <h3>Income</h3>
          <p id="income">₹{income}</p>
        </div>
        <div>
          <h3>Expense</h3>
          <p id="expense">₹{expense}</p>
        </div>
        <div>
          <h3>Balance</h3>
          <p id="balance">₹{income - expense}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          name="desc"
          placeholder="Description"
          value={formData.desc}
          onChange={handleChange}
        />
        <input
          name="amount"
          type="number"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
        />
        <input
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
        />
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="Income">Income</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>
      </form>

      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Income">Income</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Other">Other</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((t, index) => (
            <tr key={index}>
              <td>{t.desc}</td>
              <td className={t.category === "Income" ? "income" : "expense"}>
                ₹{t.amount}
              </td>
              <td>{t.date}</td>
              <td>{t.category}</td>
              <td>
                <span className="action-btn edit-btn" onClick={() => handleEdit(index)}>
                  Edit
                </span>
                <span className="action-btn delete-btn" onClick={() => handleDelete(index)}>
                  Delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

