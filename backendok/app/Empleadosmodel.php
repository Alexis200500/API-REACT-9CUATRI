<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Empleadosmodel extends Model
{
    protected $table='empleados';
    protected $primaryKey='ide';
    protected $fillable=['ide','nombre','apellidos','edad','sexo','salario','ida','foto'];
}
