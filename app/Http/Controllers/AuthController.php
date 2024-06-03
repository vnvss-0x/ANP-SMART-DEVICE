<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    // Signup
    public function signup(SignupRequest $request)
    {
        $data = $request->validated();

        $employee = Employee::create([
            'username' => $data['username'],
            'email' => $data['email'],
            'password_hash' => bcrypt($data['password']),
            'role_id' => $data['role_id'],
        ]);
        $token = $employee->createToken('main')->plainTextToken;

        return response([
            'employee' => $employee,
            'token' => $token
        ]);
    }

    // Login
    public function login(LoginRequest $request, $guard)
    {
        $credentials = $request->only(['email', 'password']);

        switch ($guard) {
            case 'admin':
                if (Auth::guard('admin')->attempt($credentials)) {
                    /** @var \App\Models\Employee $employee **/
                    $employee = Auth::guard('admin')->user();
                    $token = $employee->createToken('main')->plainTextToken;

                    return response([
                        'employee' => $employee,
                        'token' => $token
                    ]);
                }
                break;
            case 'technician':
                if (Auth::guard('technician')->attempt($credentials)) {
                    /** @var \App\Models\Employee $employee **/
                    $employee = Auth::guard('technician')->user();
                    $token = $employee->createToken('main')->plainTextToken;

                    return response([
                        'employee' => $employee,
                        'token' => $token
                    ]);
                }
                break;
            case 'personnel':
                if (Auth::guard('personnel')->attempt($credentials)) {
                    /** @var \App\Models\Employee $employee **/
                    $employee = Auth::guard('personnel')->user();
                    $token = $employee->createToken('main')->plainTextToken;

                    return response([
                        'employee' => $employee,
                        'token' => $token
                    ]);
                }
                break;
            default:
                return response()->json(['message' => 'Unauthorized'], 401);
        }

        return response()->json(['message' => 'Unauthorized'], 401);
    }

    // Logout
    public function logout(Request $request)
    {
        /** @var Employee $employee */
        $employee = Auth::guard()->user();
        // Revoke the token that was used to authenticate the current request...
        $employee->currentAccessToken()->delete();

        return response([
            'success' => true
        ]);
    }

    // Get Authenticated User
    public function me(Request $request)
    {
        return $request->user();
    }
}
