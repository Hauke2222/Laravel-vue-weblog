<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    public function blog()
    {
        return $this->belongsToMany('App\Models\Post', 'categories_post', 'post_id', 'category_id');
    }

    protected $table = 'categories';
    protected $fillable = [
        'name',
        'post_id',
    ];
}
