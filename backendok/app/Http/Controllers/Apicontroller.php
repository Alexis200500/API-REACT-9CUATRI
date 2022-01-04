<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Areasmodel;
use App\Empleadosmodel;

class Apicontroller extends Controller
{
    public function cargaareas(){
        $consulta = Areasmodel::orderby('nombre','ASC')->get();
        return response()->json($consulta,201);
    }
    
    public function cargaempleados(){
        $consulta = \DB::select(
            "SELECT e.ide, e.nombre,e.apellidos,e.edad,e.sexo,e.salario,e.ida,e.foto, a.nombre AS areatrabajo
            FROM empleados AS e
            INNER JOIN areas AS a ON a.ida = e.ida
            ORDER BY e.nombre ASC  
            ");
        return response()->json($consulta,201);
    }

    public function buscarempleadoporide($ide){
        $consulta = \DB::select(
        "SELECT e.ide, e.nombre,e.apellidos,e.edad,e.sexo,e.salario,e.foto,e.ida, a.nombre AS areatrabajo
        FROM empleados AS e
        INNER JOIN areas AS a ON a.ida = e.ida
        WHERE e.ide = $ide
        ORDER BY e.nombre ASC
        ");
        return response()->json($consulta[0],201);
    }

    public function eliminarempleado($ide)
    {
        $consulta = Empleadosmodel:: find($ide);
        $consulta->delete();

        return response()->json(null,204);
    }

    public function altaempleado(Request $request)
    {
        $consulta = Empleadosmodel::create($request->all());
        return response()->json($consulta,201);
    }

    public function modificaempleados(Request $request)
    {
        $empleados =Empleadosmodel::find($request->ide);
        $empleados->update($request->all());
        return response()->json($empleados,200);
    }
    
}
