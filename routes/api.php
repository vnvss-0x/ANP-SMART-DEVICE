<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\DeviceController;
use App\Http\Controllers\MaintenanceController;

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
});

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login/{guard}', [AuthController::class, 'login']);

// Roles endpoints
Route::get('/roles', [RoleController::class, 'index']);
Route::post('/roles', [RoleController::class, 'store']);
Route::get('/roles/{id}', [RoleController::class, 'show']);
Route::put('/roles/{id}', [RoleController::class, 'update']);
Route::delete('/roles/{id}', [RoleController::class, 'destroy']);

// Employees endpoints
Route::get('/employees', [EmployeeController::class, 'index']);
Route::post('/employees', [AuthController::class, 'signup']);
Route::get('/employees/{id}', [EmployeeController::class, 'show']);
Route::put('/employees/{id}', [EmployeeController::class, 'update']);
Route::delete('/employees/{id}', [EmployeeController::class, 'destroy']);

// Devices endpoints
Route::get('/devices', [DeviceController::class, 'index']);
Route::post('/devices', [DeviceController::class, 'store']);
Route::get('/devices/{id}', [DeviceController::class, 'show']);
Route::put('/devices/{id}', [DeviceController::class, 'update']);
Route::delete('/devices/{id}', [DeviceController::class, 'destroy']);

// Maintenance endpoints
Route::get('/maintenance', [MaintenanceController::class, 'index']);
Route::post('/maintenance', [MaintenanceController::class, 'store']);
Route::get('/maintenance/{id}', [MaintenanceController::class, 'show']);
Route::put('/maintenance/{id}', [MaintenanceController::class, 'update']);
Route::delete('/maintenance/{id}', [MaintenanceController::class, 'destroy']);
