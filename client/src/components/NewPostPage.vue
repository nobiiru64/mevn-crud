<template>
  <div class="container">
    <div class="row">
      <div class="col-12 ">
        <h1>Новый пост</h1>
      </div>
      <form class="w-100">
        <div class="form-group">
          <label for="title"></label>
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Загаловок"
            v-model.trim="post.title">
        </div>
        <label for="description"></label>
        <div class="form-group">
          <textarea
            type="text"
            class="form-control"
            id="description"
            rows="5"
            placeholder="Описание"
            v-model.trim="post.description">
          </textarea>
        </div>
        <div class="form-group">
          <button type="button" class="btn button btn-block btn-success"  @click="addPost()" id="addPost">Добавить</button>
        </div>
      </form>
      <section>
        <button type="button"  @click="goBack()" class="btn btn-succes btn-block">Вернуться назад</button>
      </section>
    </div>
  </div>
</template>

<script>
  import PostsService from '@/services/PostsService'
  export default {
    name: 'NewPostPage',
    data() {
      return {
        post: {
          title: '',
          description: ''
        }
      }
    },
    methods: {
      async addPost() {
        if (this.post.title !== '' && this.post.description !== '') {
          await PostsService.addNewPost({
            title: this.post.title,
            description: this.post.description
          });
          this.$router.push({name: 'Posts'})
        } else {
          alert('Пустые поля!')
        }
      },
      goBack() {
       this.$router.push({name: 'Posts'})
      }
    }
  }
</script>

<style>

</style>
