<template>
  <div class="topline">
    <topline>
      <template #headline>
        <div class="icon">
        <iconComp name="home" />
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="story in stories" :key="story.id"></li>
        </ul>
        <storyuserItem
        avatar="https://picsum.photos/300/300"
        username="Jhoe Dree"
        />
      </template>
    </topline>
  </div>
</template>

<script>
import { topline } from '@/components/topline'
import { iconComp } from '@/icons'
import storyuserItem from '@/components/storyuserItem/storyuserItem.vue'
import stories from './data.json'
export default {
  name: 'main-feeds',
  components: {
    topline,
    iconComp,
    storyuserItem
  },
  data () {
    return {
      stories
    }
  }
}
</script>
<style lang="scss" scoped src='@/pages/mainfeeds/feedsItem.scss'>
</style>
