<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Areasmodel extends Model
{
    protected $table='areas';
    protected $primaryKey='ida';
    protected $fillable=['ida','nombre'];
}
