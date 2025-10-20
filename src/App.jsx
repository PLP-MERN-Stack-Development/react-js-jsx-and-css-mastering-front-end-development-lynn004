import React from "react";
import Layout from "./components/Layout";
import Card from "./components/Card";
import Button from "./components/Button";
import TaskManager from "./components/TaskManager";
import ApiData from "./components/Apidata";

function App() {
  return (
    <Layout>
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          React + Tailwind Task Manager
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Manage your daily tasks efficiently and explore API data
        </p>
      </div>

      {/* Task Manager Section */}
      <div className="max-w-2xl mx-auto mb-8">
        <Card>
          <TaskManager />
        </Card>
      </div>

      {/* API Data Section */}
      <div className="max-w-5xl mx-auto mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 text-center">
          Posts from API
        </h2>
        <ApiData />
      </div>

      {/* Example Buttons (Optional) */}
      <div className="flex justify-center gap-3 mt-8">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
      </div>
    </Layout>
  );
}

export default App;
