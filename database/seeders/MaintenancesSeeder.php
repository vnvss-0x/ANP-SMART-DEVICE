<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Maintenance;
use App\Models\Device;
use Faker\Factory as Faker;

class MaintenancesSeeder extends Seeder
{ 
    public function run()
    {
        $faker = Faker::create();
        
        Device::all()->each(function ($device) use ($faker) {
            // Randomly decide if this device should have maintenance records
            if ($faker->boolean(60)) { // 60% chance of having maintenance records
                // Create a random number of maintenance records (between 1 and 5)
                $maintenanceCount = $faker->numberBetween(1, 4);
                Maintenance::factory()->count($maintenanceCount)->create([
                    'device_id' => $device->device_id,
                    'employee_id' => $device->employee_id, // Ensure the same employee owns the device and the maintenance record
                ]);
            }
        });
    }
}
