<template>
  <section class="edit">
    <div class="container">
      <h1>Редактировать пост</h1>
      <form @submit.prevent="editPost()">
        <div>
          <label for="title"></label>
          <input type="text" name="title"  class="form-control" placeholder="Загаловок" id="title" v-model.trim="post.title">
        </div>
        <div class="form-group">
          <label for="description"></label>
          <input type="text" name="description"  class="form-control" id="description" placeholder="Описание" v-model.trim="post.description">
        </div>
        <div class="form-group">
          <button type="submit" name="editPost">Редактировать пост</button>
        </div>

        <div>
          <router-link :to="{name: 'Posts'}">Перейти в посты</router-link>
        </div>
      </form>
    </div>

  </section>
</template>
<script>
  import PostsService from '@/services/PostsService'
  export default {
    name: 'EditPostPage',
    data () {
      return {
        post: {
          title: '',
          description: ''
        }
      }
    },
    methods: {
      async getPost() {

        const response = await PostsService.getPost({ id: this.$route.params.id })
        this.post.title = response.data.title
        this.post.description = response.data.description
      },
      async editPost () {
        if (this.post.title !== '' && this.post.description !== '') {
          await PostsService.updatePost({
            id: this.$route.params.id,
            title: this.post.title,
            description: this.post.description
          })
          this.$router.push({ name: 'Posts' })
        }
      },
    },

    mounted () {
      this.getPost()

    }
  }
</script>
