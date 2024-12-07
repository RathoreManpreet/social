<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Analytic extends Model
{
    protected $table = 'social_analytics';

    protected $fillable = [
        'date',
        'views_1_day',
        'views_weekly',
        'views_monthly',
        'views_yearly',
        'views_all_time',
        'likes_1_day',
        'likes_weekly',
        'likes_monthly',
        'likes_yearly',
        'likes_all_time',
        'comments_1_day',
        'comments_weekly',
        'comments_monthly',
        'comments_yearly',
        'comments_all_time',
        'shares_1_day',
        'shares_weekly',
        'shares_monthly',
        'shares_yearly',
        'shares_all_time',
        'followers_1_day',
        'followers_weekly',
        'followers_monthly',
        'followers_yearly',
        'followers_all_time',
    ];

    protected $casts = [
        'date' => 'date',
    ];
}
