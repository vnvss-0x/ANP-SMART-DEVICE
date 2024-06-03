<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Personnel;
use App\Models\Employee;

class PersonnelsSeeder extends Seeder
{
    public function run()
    {
        // Assuming Personnel role_id is 3 (adjust according to your actual role IDs)
        $personnelEmployees = Employee::where('role_id', 3)->get();

        foreach ($personnelEmployees as $employee) {
            Personnel::create([
                'employee_id' => $employee->employee_id,
            ]);
        }
    }
}
