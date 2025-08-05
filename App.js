import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white shadow rounded-xl">Total Products: 42</div>
        <div className="p-4 bg-white shadow rounded-xl text-red-600">Low Stock Alerts: 3</div>
      </div>
    </div>
  );
}

function Products() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Products</h1>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-xl">Add Product</button>
      <table className="min-w-full bg-white shadow rounded-xl">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Stock</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Sample Product</td>
            <td className="px-4 py-2">10</td>
            <td className="px-4 py-2">$100</td>
            <td className="px-4 py-2 space-x-2">
              <button className="text-blue-600">Edit</button>
              <button className="text-red-600">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Suppliers() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Suppliers</h1>
      <button className="px-4 py-2 bg-green-600 text-white rounded-xl">Add Supplier</button>
      <ul className="bg-white shadow rounded-xl p-4 space-y-2">
        <li className="flex justify-between">
          <span>ABC Corp</span>
          <span>Associated Products: 3</span>
        </li>
      </ul>
    </div>
  );
}

function Transactions() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Transactions</h1>
      <button className="px-4 py-2 bg-purple-600 text-white rounded-xl">Record Transaction</button>
      <ul className="bg-white shadow rounded-xl p-4 space-y-2">
        <li className="flex justify-between">
          <span>Sold: Sample Product</span>
          <span>Qty: 2 | $200</span>
        </li>
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow p-4 flex gap-6">
          <Link to="/" className="text-blue-600 font-semibold">Dashboard</Link>
          <Link to="/products" className="text-blue-600 font-semibold">Products</Link>
          <Link to="/suppliers" className="text-blue-600 font-semibold">Suppliers</Link>
          <Link to="/transactions" className="text-blue-600 font-semibold">Transactions</Link>
        </nav>

        <main className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
