# 📊 Finance Flow — Personal Finance Dashboard

**Finance Flow** is a web application designed for personal financial management, focusing on tracking income and expenses, organizing transactions by categories, and monitoring real-time account balances.

The primary objective of this project is to consolidate advanced **React** concepts (such as complex state manipulation, client-side CRUD operations, and `localStorage` persistence) while establishing a solid data structure for future integration with a **Spring Boot** backend.

---

## 🎯 Learning Objectives

- **Complex State Management:** Manipulating arrays and objects for transactions, filtering, and grouping without direct state mutation.
- **Full Client-side CRUD:** Adding, listing, editing, and deleting financial entries.
- **Derived State:** Dynamically calculating summary totals (income, expenses, and net balance) based on the primary transaction list.
- **Local Persistence:** Syncing state with the browser's `localStorage` to preserve data across page refreshes.
- **Controlled Forms & Validation:** Handling sanitized user inputs for entry types, amounts, dates, and categories.

---

## 🚀 Key Features

### 📈 Dashboard & Metrics
- **Summary Cards:** Quick overview displaying **Total Balance**, **Total Income**, and **Total Expenses**.
- **Dynamic Indicators:** Visual highlights using color coding (green for positive balance, red for negative balance).

### 📝 Transaction Management (CRUD)
- **New Transaction:** Modal or embedded form to create entries with fields:
  - Description (*e.g., Grocery, Salary*)
  - Amount (*$ / R$*)
  - Type (*Income* or *Expense*)
  - Category (*Food, Housing, Entertainment, Transport, Utilities, Others*)
  - Transaction Date
- **Edit & Delete:** Update existing amounts/categories or remove entries completely.

### 🔍 Search & Filters
- **Text Search:** Filter transactions dynamically by description.
- **Type Filter:** Toggle between *All*, *Income Only*, or *Expenses Only*.
- **Category Filter:** Isolate spending by specific categories.

---

## 🛠️ Tech Stack

- **Frontend:** React (powered by Vite)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React or React Icons
- **Routing (Optional):** React Router DOM (for multi-page expansion)
- **Persistence:** Web Storage API (`localStorage`)

---

## 🗺️ Step-by-Step Implementation Guide

Follow these sequential steps to build the application systematically:

### Phase 1: Project Setup & Layout
[x]1. Initialize the project using Vite with React (`npm create vite@latest`).
[x]2. Configure **Tailwind CSS** and install an icon library (e.g., `lucide-react`).
[x]3. Build the base layout shell (`Navbar`, main container, and `Footer`).
[x]4. Build the first component (**Transactions** to show a list) and implement React-Router-Dom navigation (`React-Router-Dom`).

---

### Phase 2: Dashboard and navigation
[x]1. Create **Dashboard** page and include it on navigation (`Dashboard.jsx / Recharts / React-Router-Dom`).

---

### Phase 2: localStorage and keep data
[x]1. Save the transactions using **localStorage** (`localStorage`).
[x]2. Load the transactions from **localStorage** (`localStorage`).
