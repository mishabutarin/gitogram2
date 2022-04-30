import { createStore } from 'vuex'
import items from '@/store/modules/item'
import readme from '@/store/modules/readme'

export default createStore({
  modules: {
    items,
    readme
  }
})
