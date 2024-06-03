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
        Schema::create('devices', function (Blueprint $table) {
            $table->id('device_id');
            $table->unsignedBigInteger('employee_id');
            $table->string('device_name');
            $table->string('device_type');
            $table->string('serial_number');
            $table->string('model_number');
            $table->date('purchase_date');
            $table->date('warranty_expiry_date');
            $table->string('status');
            $table->string('location');
            $table->float('purchase_cost');
            $table->timestamps();

            // Define foreign key constraint for employee_id
            $table->foreign('employee_id')->references('employee_id')->on('employees')->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('devices');
    }
};
