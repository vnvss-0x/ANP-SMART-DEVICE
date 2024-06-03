<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Device extends Model
{
    use HasFactory;
    protected $primaryKey = 'device_id';

    protected $fillable = [
        'device_name',
        'device_type',
        'serial_number',
        'model_number',
        'purchase_date',
        'warranty_expiry_date',
        'status',
        'location',
        'purchase_cost',
        'employee_id',
    ];

    public function employee()
    {
        return $this->belongsTo(Employee::class, 'employee_id');
    }

    public function maintenance()
    {
        return $this->hasMany(Maintenance::class, 'device_id');
    }
}
