<template>
  <div :class="{ active: isActive }" class="slider-item">
    <div class="slide-head">
      <progress-bar :isActive='isActive'></progress-bar>
      <div class="slide-container">
        <post-user-profile :postAvatar="postAvatar"
            :postLogin="postLogin"></post-user-profile>
      </div>
    </div>
    <div class="slide-body">
      <div class="slide-container">
        <div class="slider-content">
          <div class="loader" v-if="loading">
            loading...
          </div>
          <div class="slider-info" v-else>
            <div class="slider-body-img">
              <img src="https://picsum.photos/300/300" alt="Картинка" />
            </div>
            <div class="slider-text" v-if="data.content?.length" v-html="data.content"></div>
            <div class="placeholder" v-else >placeholder</div>
          </div>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <div class="slide-container">
        <btn-main>Follow</btn-main>
      </div>
    </div>
    <template v-if="isActive">
        <button v-if="btnsShown.includes('next')" class="btn btn-next" @click="$emit('nextSlide')">
          <div class="icon-arrow">
            <iconComp name="ArrowIcon"/>
            </div>
        </button>
        <button v-if="btnsShown.includes('prev')" class="btn btn-prev" @click="$emit('prevSlide')">
          <div class="icon-arrow">
            <iconComp name="ArrowIcon"/>
          </div>
      </button>
    </template>
  </div>
</template>
<script>
import BtnMain from '@/components/button/btnMain.vue'
import PostUserProfile from '@/components/postUserProf/PostUserProfile.vue'
import ProgressBar from '@/components/progressbar/progressBar.vue'
import { IconComp } from '@/icons/'
export default {
  name: 'SliderItem',
  components: {
    ProgressBar,
    PostUserProfile,
    BtnMain,
    IconComp
  },
  emits: ['prevSlide', 'nextSlide'],
  props: {
    active: Boolean,
    loading: Boolean,
    data: {
      type: Object,
      requared: true,
      default: () => ({})
    },
    postAvatar: {
      type: String,
      requaired: true
    },
    postLogin: {
      type: String,
      requaired: true
    },
    isActive: {
      type: Boolean,
      default: false
    },
    sliderIndex: {
      type: Number,
      required: true,
      default: 1
    },
    btnsShown: {
      type: Array,
      default: () => ['next', 'prev']
    }
  }
}
</script>
<style lang="scss" scoped src="@/components/slider/slider.scss"></style>
