<?php

namespace App\Http\Controllers;

use App\Models\Analytic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class SocialAnalyticsController extends Controller
{
    public function index()
    {
        return Inertia::render('SocialAnalytics');
    }

    public function fetchSocialAnalytics()
    {
        // Define your API endpoint and API key
        $url = 'https://api.ayrshare.com/api/analytics/social';
        $apiKey = 'CAF58D31-C11C48F7-A72A4F1A-F0A592CB';

        try {
            // Make the POST request with increased timeout
            $response = Http::timeout(120) // Set timeout to 60 seconds
                ->withHeaders([
                    'Authorization' => 'Bearer ' . $apiKey,
                    'Content-Type' => 'application/json',
                ])
                ->post($url, [
                    'platforms' => [
                        'facebook', 
                        'instagram', 
                        'twitter', 
                        'linkedin', 
                        'pinterest', 
                        'youtube', 
                        'tiktok'
                    ],  
                    'quarter' =>  4 ,
                ]);

            // Check the response status
            if ($response->successful()) {
                return $response->json();
            }

            return response()->json([
                'error' => 'API request failed',
                'message' => $response->body(),
            ], $response->status());

        } catch (\Illuminate\Http\Client\ConnectionException $e) {
            return response()->json([
                'error' => 'Connection error',
                'message' => $e->getMessage()
            ], 504);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Server error',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'views_1_day' => 'required|integer',
            'views_weekly' => 'required|integer',
            'views_monthly' => 'required|integer',
            'views_yearly' => 'required|integer',
            'views_all_time' => 'required|integer',
            'likes_1_day' => 'required|integer',
            'likes_weekly' => 'required|integer',
            'likes_monthly' => 'required|integer',
            'likes_yearly' => 'required|integer',
            'likes_all_time' => 'required|integer',
            'comments_1_day' => 'required|integer',
            'comments_weekly' => 'required|integer',
            'comments_monthly' => 'required|integer',
            'comments_yearly' => 'required|integer',
            'comments_all_time' => 'required|integer',
            'shares_1_day' => 'required|integer',
            'shares_weekly' => 'required|integer',
            'shares_monthly' => 'required|integer',
            'shares_yearly' => 'required|integer',
            'shares_all_time' => 'required|integer',
            'followers_1_day' => 'required|integer',
            'followers_weekly' => 'required|integer',
            'followers_monthly' => 'required|integer',
            'followers_yearly' => 'required|integer',
            'followers_all_time' => 'required|integer',
        ]);

        try {
            $analytics = new Analytic();
            $analytics->date = now()->toDateString();
            $analytics->fill($validatedData);
            $analytics->save();

            return response()->json([
                'message' => 'Analytics data stored successfully',
                'data' => $analytics
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to store analytics data',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function show()
    {
        try {
            $analytics = Analytic::orderBy('date', 'desc')->get()->toArray();

            return $analytics;
        } catch (\Exception $e) {
            return [
                'error' => 'Failed to retrieve analytics data',
                'message' => $e->getMessage()
            ];
        }
    }

    public function getPerformanceData(Request $request)
    {
        $period = $request->input('period', 'daily');

        $query = Analytic::query();

        switch ($period) {
            case 'daily':
                $data = $query->selectRaw('SUM(views_1_day) as views, SUM(comments_1_day) as comments, SUM(followers_1_day) as followers')->first();
                break;
            case 'weekly':
                $data = $query->selectRaw('SUM(views_weekly) as views, SUM(comments_weekly) as comments, SUM(followers_weekly) as followers')->first();
                break;
            case 'monthly':
                $data = $query->selectRaw('SUM(views_monthly) as views, SUM(comments_monthly) as comments, SUM(followers_monthly) as followers')->first();
                break;
            case 'yearly':
                $data = $query->selectRaw('SUM(views_yearly) as views, SUM(comments_yearly) as comments, SUM(followers_yearly) as followers')->first();
                break;
            case 'allTime':
                $data = $query->selectRaw('SUM(views_all_time) as views, SUM(comments_all_time) as comments, SUM(followers_all_time) as followers')->first();
                break;
        }

        return response()->json($data);
    }
}
