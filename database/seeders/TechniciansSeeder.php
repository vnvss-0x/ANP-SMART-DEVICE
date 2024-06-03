<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Technician;
use App\Models\Employee;

class TechniciansSeeder extends Seeder
{
    public function run()
    {
        // Assuming Technician role_id is 2 (adjust according to your actual role IDs)
        $technicianEmployees = Employee::where('role_id', 2)->get();

        foreach ($technicianEmployees as $employee) {
            Technician::create(['employee_id' => $employee->employee_id]);
        }
    }
}
