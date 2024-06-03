<?php

namespace App\Http\Controllers;

use App\Models\Device;
use Illuminate\Http\Request;

class DeviceController extends Controller
{
    public function index()
{
    // Eager loading the employee relationship
    $devices = Device::with('employee')->get();
    return $devices;
}


    public function store(Request $request)
    {
        return Device::create($request->all());
    }

    public function show($id)
    {
        return Device::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $device = Device::findOrFail($id);
        $device->update($request->all());
        return $device;
    }

    public function destroy($id)
    {
        $device = Device::findOrFail($id);
        $device->delete();
        return response()->json(['message' => 'Device deleted successfully']);
    }
}
