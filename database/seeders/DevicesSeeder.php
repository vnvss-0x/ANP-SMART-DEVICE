<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Device;
use App\Models\Employee;

class DevicesSeeder extends Seeder
{
    public function run()
    {
        // Create some devices for random employees
        Employee::all()->each(function ($employee) {
            Device::factory()->count(2)->create(['employee_id' => $employee->employee_id]);
        });
    }
}
