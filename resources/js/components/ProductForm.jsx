import { useEffect, useState } from "react";

const ProductForm = ({ onSubmit, initial, loading, submitLabel }) => {
  const [form, setForm] = useState({
    name: "",
    amount: "",
    qty: "",
  });

  useEffect(() => {
    if (initial) {
      setForm(initial);
    } else {
      setForm({ name: "", amount: "", qty: "" }); // reset ketika initial null
    }
  }, [initial]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="bg-white shadow rounded-lg p-6 space-y-4"
    >
      <h2 className="text-lg font-semibold">
        {initial ? "Edit Product" : "Add Product"}
      </h2>

      <input
        name="name"
        placeholder="Product Name"
        value={form.name}
        onChange={handleChange}
        className="w-full border rounded px-3 py-2"
        required
      />

      <div className="grid grid-cols-2 gap-4">
        <input
          name="amount"
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
          className="border rounded px-3 py-2"
          required
        />
        <input
          name="qty"
          type="number"
          placeholder="Qty"
          value={form.qty}
          onChange={handleChange}
          className="border rounded px-3 py-2"
          required
        />
      </div>

      <button
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50 transition-colors duration-150"
      >
        {loading ? (initial ? "Updating..." : "Saving...") : submitLabel || "Save"}
      </button>
    </form>
  );
};

export default ProductForm;
