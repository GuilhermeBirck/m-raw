<?php

use App\Http\Controllers\EventsController;
use Illuminate\Support\Facades\Route;

// Route::inertia('/', 'Events');
// Route::get('/', [EventsController::class, 'show']);

// Route::get('/', function () {
//     return Inertia('Index');
// });

Route::get('/', function () {
    return inertia('Index');
});