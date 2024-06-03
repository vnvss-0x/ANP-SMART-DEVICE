<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([
            RolesSeeder::class,
            EmployeesSeeder::class,
            DevicesSeeder::class,
            MaintenancesSeeder::class,
            PersonnelsSeeder::class,
            TechniciansSeeder::class,
            AdminsSeeder::class,
        ]);
    }
}
