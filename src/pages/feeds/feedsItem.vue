<template>
  <div class="topline">
    <top-line>
      <template #headline>
        <button @click="getUser()">get user</button>
       <div class="icon-logo">
         <icon-comp name="LogoIcon"/>
        </div>
        <div class="icon-home">
         <icon-comp name="HomeIcon"/>
        </div>
        <div class="profile-photo">
         <profile-photo></profile-photo>
        </div>
        <div class="icon-exit">
         <icon-comp name="ExitIcon"/>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="item in $store.state.items.items" :key="item.id">
            <story-user-item
            v-bind="getPostsData(item)"
            >
            </story-user-item>
          </li>
        </ul>
      </template>
    </top-line>
  </div>
  <div class="g-container">
    <div class="post-item">
      <div class="post-item" v-for="item in $store.state.items.items" :key="item.id">
        <post-item v-bind="getPostsData(item)">
          <template #taskcard>
            <div class="taskcard-title">Vue.js</div>
            <p class="taskcard-tasktext">{{item.description}}</p>
            <post-item-btns></post-item-btns>
          </template>
        </post-item>
      </div>
    </div>
  </div>
</template>

<script>
import { TopLine } from '@/components/topline/'
import { IconComp } from '@/icons/'
import { StoryUserItem } from '@/components/storyUser/'
import { ProfilePhoto } from '@/components/profilePhoto/'
import { PostItem } from '@/components/postItem/'
import { PostItemBtns } from '@/components/itemBtns'
export default {
  name: 'MainFeeds',
  components: {
    TopLine,
    IconComp,
    StoryUserItem,
    ProfilePhoto,
    PostItem,
    PostItemBtns
  },
  methods: {
    getPostsData (item) {
      return {
        postId: item.id,
        postAvatar: item.owner.avatar_url,
        postUsername: item.name,
        postDescription: item.description,
        postLogin: item.owner.login
      }
    },
    async getUser () {
      try {
        const response = await fetch('https://api.github.com/user', {
          headder: {
            Authorization: `token ${localStorage.getItem('token')}`
          }
        })
        const data = await response.json()
        const { token } = data
        console.log(token)
      } catch (error) {
        console.log(error)
      }
    }
  },
  created () {
    this.$store.dispatch('items/GET_USER_DATA')
  }
}
</script>
<style scoped lang="scss" src="./feeds.scss"></style>
