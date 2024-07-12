<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

class EventsController extends Controller
{
    public function show()
    {
        return Inertia::render('Index');
    }
}