<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Admin;
use App\Models\Employee;

class AdminsSeeder extends Seeder
{
    public function run()
    {
        // Assuming Admin role_id is 1 (adjust according to your actual role IDs)
        $adminEmployees = Employee::where('role_id', 1)->get();

        foreach ($adminEmployees as $employee) {
            Admin::create(['employee_id' => $employee->employee_id]);
        }
    }
}
