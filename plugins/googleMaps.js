import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBK5QlMuWrxBS_Cn-SY9XzjJXzA8xn0XBE',
    libraries: 'places',
  },
})
