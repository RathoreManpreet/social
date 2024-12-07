<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SocialAnalyticsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/analytics', [SocialAnalyticsController::class, 'fetchSocialAnalytics']);
Route::get('/table', function () {
    return Inertia::render('SocialAnalytics');
});

Route::get('/social-analytics', [SocialAnalyticsController::class, 'index'])->name('social-analytics.index');
Route::get('/analytics/data', [SocialAnalyticsController::class, 'show'])->name('social-analytics.show');
Route::post('/analytics/store', [SocialAnalyticsController::class, 'store'])->name('social-analytics.store');
route::get('/tabledata',function(){
    return Inertia::render('Analytics/SocialData');
});
Route::get('/analytics/performance', [SocialAnalyticsController::class, 'getPerformanceData'])->name('analytics.performance');
require __DIR__.'/auth.php';
