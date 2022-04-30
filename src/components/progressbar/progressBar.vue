<template>
  <div :class="['progress-bar', { active: active }]" >
    <div ref="indicator" class="indicator"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: false
    }
  },
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish () {
      this.$emit('onFinish')
    }
  },
  mounted () {
    setTimeout(() => {
      this.active = this.isActive
    }, 0)
    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
  }
}
</script>

<style scoped lang="scss" src="./progressbar.scss"></style>
