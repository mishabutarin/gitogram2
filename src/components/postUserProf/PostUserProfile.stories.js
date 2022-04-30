import PostUserProfile from './postUserProfile.vue'

export default {
  title: 'PostUserProfile',
  component: PostUserProfile
}

const Template = (args) => ({
  components: { PostUserProfile },
  setup () {
    return { args }
  },
  template: '<post-user-profile v-bind="args" />'
})

export const Primary = Template.bind({})
Primary.args = {
  postAvatar: 'https://picsum.photos/300/300',
  postUsername: 'Joe'
}
