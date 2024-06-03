<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Maintenance extends Model
{
    use HasFactory;
    protected $primaryKey = 'maintenance_id';

    protected $fillable = [
        'device_id',
        'maintenance_date',
        'maintenance_type',
        'maintenance_details',
        'maintenance_cost',
        'maintenance_status',
        'employee_id',
    ];

    public function device()
    {
        return $this->belongsTo(Device::class, 'device_id');
    }

    public function employee()
    {
        return $this->belongsTo(Employee::class, 'employee_id');
    }
}
