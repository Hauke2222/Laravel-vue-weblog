<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    public function comments()
    {
        return $this->hasMany('App\Models\Comment');
    }

    public function categories()
    {
        return $this->belongsToMany('App\Models\Category');
    }

    protected $table = 'posts';
    protected $fillable = [
        'title',
        'date',
        'author',
        'content',
        'premium',
        'image',
        'user_id',
    ];
}
