import { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import {
  successAlert,
  errorAlert,
  confirmDelete,
} from "../utils/alert";

const Products = () => {
  // data
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(false);

  // pagination
  const [meta, setMeta] = useState({});
  const [page, setPage] = useState(1);

  // search + debounce
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  /**
   * Debounce search input
   * Delay API call until user stops typing (500ms)
   */
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(handler);
  }, [search]);

  /**
   * Load products (pagination + filter)
   */
  const load = async (pageNumber = 1) => {
    try {
      const res = await axios.get("/api/products", {
        params: {
          page: pageNumber,
          search: debouncedSearch,
        },
      });

      setProducts(res.data.data);
      setMeta(res.data);
      setPage(res.data.current_page);
    } catch {
      errorAlert("Failed to load products");
    }
  };

  /**
   * Reload data when search changes (debounced)
   */
  useEffect(() => {
    load(1);
  }, [debouncedSearch]);

  /**
   * Create / Update product
   */
  const save = async (data) => {
    try {
      setLoading(true);

      if (editing) {
        await axios.put(`/api/products/${editing.id}`, data);
        successAlert("Product updated successfully");
        setEditing(null);
      } else {
        await axios.post("/api/products", data);
        successAlert("Product created successfully");
      }

      load(1);
    } catch {
      errorAlert("Failed to save product");
    } finally {
      setLoading(false);
    }
  };

  /**
   * Delete product
   */
  const remove = async (id) => {
    const result = await confirmDelete();
    if (!result.isConfirmed) return;

    try {
      await axios.delete(`/api/products/${id}`);
      successAlert("Product deleted");
      load(1);
    } catch {
      errorAlert("Failed to delete product");
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Form */}
      <ProductForm
        onSubmit={save}
        initial={editing}
        loading={loading}
      />

      {/* Search */}
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search product..."
          className="border rounded px-3 py-2 w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-center">Amount</th>
              <th className="p-3 text-center">Qty</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  className="text-center p-6 text-gray-500"
                >
                  No products available
                </td>
              </tr>
            )}

            {products.map((p) => (
              <tr
                key={p.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-3">{p.name}</td>
                <td className="p-3 text-center">
                  {p.amount}
                </td>
                <td className="p-3 text-center">
                  {p.qty}
                </td>
                <td className="p-3 text-center space-x-3">
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => setEditing(p)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => remove(p.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        {meta.last_page > 1 && (
          <div className="flex justify-between items-center p-4">
            <span className="text-sm text-gray-600">
              Page {meta.current_page} of {meta.last_page}
            </span>

            <div className="space-x-2">
              <button
                disabled={page <= 1}
                onClick={() => load(page - 1)}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Prev
              </button>

              <button
                disabled={page >= meta.last_page}
                onClick={() => load(page + 1)}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
