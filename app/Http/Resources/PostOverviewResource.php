<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\CommentResource;
use App\Http\Resources\CategoryResource;
use App\Models\Post;

class PostOverviewResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'date' => $this->date,
            'author' => $this->author,
            'image' => $this->image,
            'user_id' => $this->user_id,
            'categories' => CategoryResource::collection($this->categories),
        ];
    }
}
