import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCo2lUfFhUQBqvE6OZoml49f4uVMIY6zCc',
    libraries: 'places',
  },
})
