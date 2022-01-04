<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::get('/cargaareas','Apicontroller@cargaareas');
Route::get('/cargaempleados','Apicontroller@cargaempleados');
Route::get('/buscarempleadoporide/{ide}','Apicontroller@buscarempleadoporide');
Route::delete('/eliminarempleado/{ide}','Apicontroller@eliminarempleado');
Route::post('/altaempleado','Apicontroller@altaempleado');
Route::put('/modificaempleados','Apicontroller@modificaempleados');