<?php

namespace App\Http\Controllers;

use App\Models\Maintenance;
use Illuminate\Http\Request;

class MaintenanceController extends Controller
{
    public function index()
    {
        return Maintenance::all();
    }

    public function store(Request $request)
    {
        return Maintenance::create($request->all());
    }

    public function show($id)
    {
        return Maintenance::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $maintenance = Maintenance::findOrFail($id);
        $maintenance->update($request->all());
        return $maintenance;
    }

    public function destroy($id)
    {
        $maintenance = Maintenance::findOrFail($id);
        $maintenance->delete();
        return response()->json(['message' => 'Maintenance record deleted successfully']);
    }
}
