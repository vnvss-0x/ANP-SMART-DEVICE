<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Employee;
use App\Models\Role;

class EmployeesSeeder extends Seeder
{
    public function run()
    {
        $roles = Role::all();

        foreach ($roles as $role) {
            $count = 1;
            switch ($role->role_name) {
                case "personnel": // Correct role name
                    $count = 30;
                    break;
                case "technician":
                case "admin":
                    $count = 1; // Adjusted for more data during testing
                    break;
            }

            Employee::factory()->count($count)->create([
                'role_id' => $role->role_id,
            ]);
        }
    }
}
