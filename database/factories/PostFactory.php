<?php

namespace Database\Factories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Storage;


class PostFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Post::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $contents = file_get_contents('https://source.unsplash.com/1600x900/?nature,forrest?'.rand(0,999));
        $randomNumber = time();
        $path = 'public/images/file_'.$randomNumber.'.jpg';
        Storage::put($path, $contents);

        return [
            'title' => 'Post title',
            'date' => '2021-08-04',
            'author' => 'Auteur',
            'content' => 'test',
            'premium' => false,
            'user_id' => \App\Models\User::all()->random()->id,
            'image' => $path,
        ];
    }
}
