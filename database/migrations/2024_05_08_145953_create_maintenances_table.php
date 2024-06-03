<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('maintenances', function (Blueprint $table) {
            $table->id('maintenance_id');
            $table->unsignedBigInteger('device_id');
            $table->unsignedBigInteger('employee_id');
            $table->foreign('device_id')->references('device_id')->on('devices')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreign('employee_id')->references('employee_id')->on('employees')->cascadeOnDelete()->cascadeOnUpdate();
            $table->dateTime('maintenance_date');
            $table->string('maintenance_type');
            $table->string('maintenance_details');
            $table->float('maintenance_cost');
            $table->string('maintenance_status');
            $table->timestamps();
        });
    }
    

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('maintenances');
    }
};
