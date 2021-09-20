<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Models\Post;
use App\Models\Category;
use App\Http\Requests\StorePost;
use App\Http\Resources\PostResource;
use App\Http\Resources\CategoryResource;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json([
            'posts' => PostResource::collection(Post::all()),
        ]);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePost $request)
    {
        $validated = $request->validated();

        $validated['user_id'] = Auth::user()->id;
        if ($validated['image'] = $request->has('image')) {
            $validated['image'] = $request->file('image')->store('public/images/');
            $validated['image'] = '../storage/images/' . substr($validated['image'], 15);
        }
        $post = Post::create($validated);
        $post->categories()->sync($request->categories);
        return $post;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        return response()->json([
            'post' => new PostResource($post),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        return response()->json([
            'post' => new PostResource($post),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StorePost $request, Post $post)
    {
        $validated = $request->validated();
        $validated['user_id'] = Auth::user()->id;
        if ($validated['image'] = $request->has('image')) {
            $validated['image'] = $request->file('image')->store('public/images/');
            $validated['image'] = '../storage/images/' . substr($validated['image'], 15);
        }
        $post->update($validated);
        $post->categories()->sync($request->categories);
        return $post;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        $post->delete();
        return $post;
    }
}
