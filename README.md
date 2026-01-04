
---

# Full Stack Developer – Roni Paslan

## 📌 Overview

This project is a **Mini CRUD Application** built as part of a technical test.
The application manages **Products** with the following fields:

* **Name**
* **Amount**
* **Quantity (Qty)**

The app demonstrates clean architecture, proper validation, security awareness, and a user-friendly UI.

---

## 🛠 Tech Stack

### Backend

* **Laravel 12**
* RESTful API
* Eloquent ORM
* Validation & Mass Assignment Protection

### Frontend

* **React.js** (rendered via Laravel + Vite)
* **Tailwind CSS** (UI styling)
* **Axios** (HTTP client)
* **SweetAlert2** (user feedback)

---

## 🔄 Application Flow

1. User opens the application (React rendered inside Laravel Blade).
2. Product list is fetched from Laravel API (`/api/products`).
3. User can:

   * Create a new product
   * Edit an existing product
   * Delete a product (with confirmation)
   * Search products by name
   * Navigate products using pagination
4. All operations update data in real time and provide clear feedback via alerts.

---

## ✨ Features Implemented

### ✅ CRUD Functionality

* Create product
* Read product list
* Update product
* Delete product

### ✅ Pagination (Server-side)

* Uses Laravel `paginate()` to handle large datasets efficiently.
* Prevents loading all records at once.

### ✅ Search with Debounce

* Product search by name.
* Uses **debounce (500ms)** on the frontend to prevent excessive API calls while typing.

### ✅ UI / UX

* Clean layout using Tailwind CSS
* Clear actions (Edit / Delete)
* Confirmation dialog before delete
* Success & error feedback using SweetAlert

---

## 🔐 Validation & Security

### Backend Validation

Implemented in Laravel controller:

```php
$request->validate([
    'name'   => 'required|string|max:255',
    'amount' => 'required|numeric|min:0',
    'qty'    => 'required|integer|min:0',
]);
```

**Why this is important:**

* Prevents invalid or malicious input
* Ensures data consistency
* Protects database integrity

### Mass Assignment Protection

Model uses `$fillable` to explicitly allow safe fields:

```php
protected $fillable = ['name', 'amount', 'qty'];
```

**Reason:**

* Prevents unauthorized fields from being injected into the database.

---

## 📦 API Endpoints

| Method | Endpoint                  | Description                            |
| ------ | ------------------------- | -------------------------------------- |
| GET    | `/api/products`           | Get product list (pagination + search) |
| POST   | `/api/products`           | Create product                         |
| PUT    | `/api/products/{product}` | Update product                         |
| DELETE | `/api/products/{product}` | Delete product                         |

---

## 🧠 Additional Notes

* Pagination and filtering are handled on the **backend** to improve performance.
* Debounced search reduces unnecessary server requests.
* Code is structured for readability and maintainability.
* No unnecessary libraries were added; everything is purposeful.

---

## 🚀 How to Run the Project

### 1️⃣ Backend (Laravel)

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

App will run at:

```
http://localhost:8000
```

---

### 2️⃣ Frontend (Vite + React)

```bash
npm install
npm run dev
```

Vite dev server will run at:

```
http://localhost:5173
```

---


## ✅ Final Notes

This project focuses on:

* Correctness over complexity
* Clean code and clear flow
* Practical UI/UX decisions
* Security and validation awareness

Thank you for reviewing this submission.

---


