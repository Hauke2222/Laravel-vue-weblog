<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->timestamps();
            $table->bigIncrements('id');
            $table->string('title');
            $table->date('date');
            $table->string('author');
            $table->longText('content');
            $table->boolean('premium')->default(false);
            $table->bigInteger('user_id')->unsigned()->default('1');
            $table->foreign('user_id')->references('id')->on('users');
            $table->string('image')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
