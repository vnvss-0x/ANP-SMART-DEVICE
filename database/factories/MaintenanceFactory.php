<?php

namespace Database\Factories;

use App\Models\Maintenance;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class MaintenanceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Maintenance::class;

    public function definition()
    {
        return [
            'maintenance_date' => $this->faker->dateTimeBetween('-1 month', 'now'),
            'maintenance_type' => $this->faker->randomElement(['Preventive', 'Corrective']),
            'maintenance_details' => $this->faker->sentence,
            'maintenance_cost' => $this->faker->randomFloat(2, 10, 200),
            'maintenance_status' => $this->faker->randomElement(['Pending', 'In Progress', 'Completed']),
        ];
    }
}
