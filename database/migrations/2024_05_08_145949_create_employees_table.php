<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id('employee_id');
            $table->unsignedBigInteger('role_id'); // Ensure the primary key is employee_id
            $table->string('username');
            $table->string('email')->unique();
            $table->string('password_hash');
            $table->foreign('role_id')->references('role_id')->on('roles')->noActionOnDelete(); // Foreign key references roles.role_id
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('employees');
    }
}
