<?php

namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Employee extends Authenticatable
{
    use HasApiTokens, HasFactory;
    protected $primaryKey = 'employee_id';

    protected $fillable = [
        'username',
        'email',
        'password_hash',
        'role_id',
    ];

    protected $hidden = [
        'password_hash',
    ];

    public function getAuthPassword()
    {
        return $this->password_hash;
    }

    public function role()
    {
        return $this->belongsTo(Role::class, 'role_id');
    }

    public function personnel()
    {
        return $this->hasOne(Personnel::class, 'employee_id');
    }

    public function technician()
    {
        return $this->hasOne(Technician::class, 'employee_id');
    }

    public function admin()
    {
        return $this->hasOne(Admin::class, 'employee_id');
    }

    public function devices()
    {
        return $this->hasMany(Device::class, 'employee_id');
    }

    public function maintenance()
    {
        return $this->hasMany(Maintenance::class, 'employee_id');
    }
}
