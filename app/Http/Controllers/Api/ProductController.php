<?php
// app/Http/Controllers/Api/ProductController.php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::query();

        // 🔍 Filter by name
        if ($request->filled('search')) {
            $query->where('name', 'like', '%' . $request->search . '%');
        }

        // 📄 Pagination
        return $query
            ->latest()
            ->paginate($request->get('per_page', 5));
    }


    public function store(Request $request)
    {
        $data = $request->validate([
            'name'   => 'required|string|max:255',
            'amount' => 'required|numeric|min:0',
            'qty'    => 'required|integer|min:0',
        ]);

        return Product::create($data);
    }

    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);

        $product->update($request->validate([
            'name'   => 'required|string|max:255',
            'amount' => 'required|numeric|min:0',
            'qty'    => 'required|integer|min:0',
        ]));

        return $product;
    }

    public function destroy($id)
    {
        Product::findOrFail($id)->delete();
        return response()->noContent();
    }

}
