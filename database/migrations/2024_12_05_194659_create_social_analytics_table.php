<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('social_analytics', function (Blueprint $table) {
            $table->id();
            $table->date('date');
            $table->integer('views_1_day')->default(0);
            $table->integer('views_weekly')->default(0);
            $table->integer('views_monthly')->default(0);
            $table->integer('views_yearly')->default(0);
            $table->integer('views_all_time')->default(0);
            $table->integer('comments_1_day')->default(0);
            $table->integer('comments_weekly')->default(0);
            $table->integer('comments_monthly')->default(0);
            $table->integer('comments_yearly')->default(0);
            $table->integer('comments_all_time')->default(0);
            $table->integer('likes_1_day')->default(0);
            $table->integer('likes_weekly')->default(0);
            $table->integer('likes_monthly')->default(0);
            $table->integer('likes_yearly')->default(0);
            $table->integer('likes_all_time')->default(0);
            $table->integer('shares_1_day')->default(0);
            $table->integer('shares_weekly')->default(0);
            $table->integer('shares_monthly')->default(0);
            $table->integer('shares_yearly')->default(0);
            $table->integer('shares_all_time')->default(0);
            $table->integer('followers_1_day')->default(0);
            $table->integer('followers_weekly')->default(0);
            $table->integer('followers_monthly')->default(0);
            $table->integer('followers_yearly')->default(0);
            $table->integer('followers_all_time')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('social_analytics');
    }
};
