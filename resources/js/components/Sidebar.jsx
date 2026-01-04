const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-lg">
      <div className="p-5 text-xl font-bold border-b">
        Mini CRUD
      </div>
      <nav className="p-4 space-y-2">
        <div className="p-2 rounded bg-blue-50 text-blue-700 font-medium">
          Products
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
