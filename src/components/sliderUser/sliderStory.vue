<template>
  <div class="popup-container">
    <div class="c-topline">
      <div class="g-container">
        <div class="popup-topline">
          <div class="icon-logo">
            <icon-comp name="LogoIcon"/>
          </div>
          <router-link to="/">
            <div class="icon-close">
              <icon-comp name="CloseIcon"/>
            </div>
          </router-link>
        </div>
      </div>
    </div>
     <div class="stories-container">
      <ul class="stories" ref="slider">
        <li class="stories-item" v-for="(item, index) in $store.state.items.items" :key="item.id" ref="item">
          <slider-item active
          v-bind="getPostsData(item)"
          :sliderIndex="index"
          :isActive="index === activeSliderIndex"
          :btnsShown="activeBtns"
          @nextSlide="handleSlide(activeSliderIndex + 1)"
          @prevSlide="handleSlide(activeSliderIndex - 1)"
          @moveOnClick="changeSlide($event)"
          ></slider-item>
        </li>
      </ul>
     </div>
  </div>
</template>

<script>
import { IconComp } from '@/icons'
import SliderItem from '@/components/slider/sliderItem.vue'
export default {
  name: 'SliderUserStory',
  components: {
    IconComp,
    SliderItem
  },
  data () {
    return {
      activeSliderIndex: 0,
      sliderIndex: 0,
      sliderPosition: 0
    }
  },
  computed: {
    activeBtns () {
      if (this.sliderIndex === 0) return ['next']
      if (this.sliderIndex === this.items.length - 1) return ['prev']
      return ['next', 'prev']
    }
  },
  mounted () {
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
    handleSlide (dir) {
      this.$emit('handleSlide', dir)
    }
  },
  created () {
    this.$store.dispatch('items/GET_USER_DATA')
  }
}
</script>

<style lang="scss" scoped src="@/components/sliderUser/sliderStory.scss"></style>
