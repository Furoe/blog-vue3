import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  interface State {
    count: Number
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}