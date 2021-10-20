<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthorPostController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;

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

Route::resource('users', UserController::class);

Route::resource('posts', PostController::class);

Route::resource('comments', CommentController::class)->middleware('auth:sanctum');

Route::resource('categories', CategoryController::class);

Route::resource('authorposts', AuthorPostController::class)->middleware('auth:sanctum');

Route::resource('posts', PostController::class)->only([
    'create', 'store', 'update', 'destroy'
])->middleware('auth:sanctum');
