// resources/js/App.jsx
import DashboardLayout from "./layouts/DashboardLayout";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";

const App = () => {
  return (
    <DashboardLayout>
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Products />
        </main>
      </div>
    </DashboardLayout>
  );
};

export default App;
