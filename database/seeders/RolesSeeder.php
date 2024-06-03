<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert([
            [
                'role_name' => 'admin',
                'role_description' => 'Administrator with full access',
            ],
            [
                'role_name' => 'technician',
                'role_description' => 'Technician with access to technical features',
            ],
            [
                'role_name' => 'personnel',
                'role_description' => 'Personnel with limited access',
            ],
        ]);
    }
}
