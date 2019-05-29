<template>

  <div class="container">
    <div class="row">

      <div class="col-12">
        <h1>Посты</h1>
        <h3>Тут будут показываться посты</h3>
      </div>
      <section v-if="posts.length" class="panel panel-success w-100">
        <div class="panel-heading">
          Список постов
        </div>
        <table class="table">
          <tr>
            <th>Загаловок</th>
            <th>Описание</th>
            <th></th>
          </tr>

          <tr v-for="(post, index) in this.posts" :key="post.title">
            <td>{{ post.title }}</td>
            <td>{{ post.description }}</td>
            <td>
              <router-link :to="{ name: 'EditPost', params: {id: post._id} }"> edit </router-link>
              <button class="btn btn-danger btn-sm" type="button" @click="removePost(post._id)">delete</button>
            </td>
          </tr>
        </table>
      </section>

      <section class="col-12 panel panel-danger" v-if="!posts.length">
        <p>Тут пока что нет постов, добавить?</p>
        <div>
          <router-link :to="{name: 'NewPost'}">Добавить новый пост</router-link>
        </div>
      </section>


    </div>
  </div>
</template>

<script>
  import PostsService from '@/services/PostsService'

  export default {
    name: 'PostsPage',
    data () {
      return {
        posts: []
      }
    },
    methods: {
      async getPosts() {
        const response = await PostsService.fetchPosts();
        this.posts = response.data.posts;
        posts = this.posts;
      },
      async removePost (value) {
        await PostsService.deletePost(value);
        this.getPosts();
      }
    },
    mounted() {
      this.getPosts()
    }
  }
</script>

<style scoped>
#app {

}
</style>
