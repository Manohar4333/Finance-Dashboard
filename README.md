# Finance Dashboard UI

A modern, responsive finance dashboard built with React, Redux, Tailwind CSS, and Recharts. Visualize your income, expenses, and spending breakdown with interactive charts.

## Features

- 📊 Interactive line and pie charts for trends and breakdowns (Recharts)
- 🏦 Track income, expenses, and balance
- 🗂️ Category-wise spending analysis
- ⚡ Fast, responsive UI (Tailwind CSS)
- 🗃️ State management with Redux
- 🔄 Live updates as you add transactions

## Screenshots

![Dashboard Screenshot](public/dashboard-screenshot.png)

## Getting Started

### Prerequisites

- Node.js (v16 or newer recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd Finance-Dashboard
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
Finance-Dashboard/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Dashboard.jsx
│   │   ├── Insights.jsx
│   │   └── Transactions.jsx
│   ├── store/
│   │   └── Store.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.css
│   └── ...
├── package.json
├── vite.config.js
└── ...
```

## Customization

- Update `src/styles.css` or use Tailwind utility classes for custom styles.
- Add new charts or features in `src/components/`.

## Dependencies

- [React](https://react.dev/)
- [Redux](https://redux.js.org/)
- [Recharts](https://recharts.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## License

This project is open source and available under the [MIT License](LICENSE).
