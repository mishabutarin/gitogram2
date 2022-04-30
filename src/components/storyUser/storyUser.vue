<template>
  <button @click="showModal" class="stories-avatar-btn">
    <div class="avatar">
      <img :src="postAvatar" class="img" alt="User avatar" />
    </div>
    <div class="username">{{ postLogin }}</div>
  </button>
</template>
<script>
export default {
  name: 'StoryUserItem',
  template: 'StoryUserItem',
  components: {
  },
  props: {
    postAvatar: {
      type: String,
      requaired: true
    },
    postLogin: {
      type: String,
      requaired: true
    }
  },
  methods: {
    showModal () {
      this.$router.push('/slider')
    }
  }
}
</script>

<style scoped lang="scss" src="./storyUserItem.scss"></style>
