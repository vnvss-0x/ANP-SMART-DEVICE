<?php
namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Device;

class DeviceFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Device::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'device_name' => $this->faker->word,
            'device_type' => $this->faker->randomElement(['Printer', 'PC']),
            'serial_number' => $this->faker->uuid,
            'model_number' => $this->faker->word,
            'purchase_date' => $this->faker->date(),
            'warranty_expiry_date' => $this->faker->date(),
            'status' => $this->faker->word,
            'location' => $this->faker->address,
            'purchase_cost' => $this->faker->randomFloat(2, 100, 5000),
        ];
    }

} 
