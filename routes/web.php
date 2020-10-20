<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () { return view('pages.home'); })->name('home');
Route::get('/privacy', function () { return view('pages.privacy'); })->name('privacy');
Route::get('/terms', function () { return view('pages.terms'); })->name('terms');

Route::get('/cleaning', function () { return view('pages.cleaning'); })->name('cleaning');
Route::get('/hoovers', function () { return view('pages.hoovers'); })->name('hoovers');
Route::get('/chemistry', function () { return view('pages.chemistry'); })->name('chemistry');
