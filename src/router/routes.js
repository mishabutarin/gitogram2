import feedsItem from '@/pages/feeds/feedsItem.vue'
import SliderUserStory from '@/components/sliderUser/sliderStory.vue'
import { AuthUser } from '@/components/auth'

export default [
  { path: '/', component: feedsItem },
  { path: '/slider', component: SliderUserStory },
  { path: '/auth', component: AuthUser }
]
