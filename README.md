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
[]3. Build the base layout shell (`Navbar`, main container, and `Footer`).

### Phase 2: State Definition & Mock Data
[]1. Define the initial data schema for transactions in a `mockData.js` file or state initializer.
[]2. Set up the primary `transactions` state array in `App.jsx` or a main page component.
[]3. Build the utility functions for currency formatting (`formatCurrency`) and date formatting (`formatDate`).

### Phase 3: Core UI Components
[]1. **Summary Cards:** Create components to dynamically compute and display Total Balance, Total Income, and Total Expenses from the `transactions` array.
[]2. **Transaction List & Items:** Map through the state array to render transaction rows/cards with visual indicators for Income vs. Expense.
[]3. **Empty State:** Add a friendly fallback UI when there are no transactions to display.

### Phase 4: CRUD Operations
[]1. **Create:** Build the `TransactionForm` component with controlled inputs and validation (ensure correct types for numbers and dates). Append new entries to the state with unique IDs.
[]2. **Delete:** Add a deletion handler (`handleDeleteTransaction`) that filters out the targeted item by `id`.
[]3. **Update:** Implement an edit mode/modal to modify existing transaction details in the state.

### Phase 5: Search & Filtering
[]1. Create state hooks for `searchTerm`, `selectedType`, and `selectedCategory`.
[]2. Implement derived state logic to compute the `filteredTransactions` array without mutating the original state.
[]3. Wire the filter bar inputs to update the filter states in real time.

### Phase 6: Persistence & Refinement
[]1. Implement a custom hook or `useEffect` listener to load and save transactions to `localStorage`.
[]2. Add polish: smooth transitions, hover effects, empty search results states, and responsive design checks.

---