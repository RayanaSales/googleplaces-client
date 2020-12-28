<template>
  <div class="map-content">
    <GmapMap
      :center="centerTargetMap"
      :zoom="13"
      map-type-id="terrain"
      class="google-map-preview"
      :options="{
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
        disableDefaultUi: false,
      }"
    >
    </GmapMap>
  </div>
</template>

<script>
import { gmapApi } from 'vue2-google-maps'

export default {
  data: () => ({
    currentUserLocation: {
      lat: 0,
      lng: 0,
    },
    centerTargetMap: {
      lat: -3.71839, // fortaleza
      lng: -38.5434, // fortaleza
    },
    infoContent: '',
    infoWindowPos: {
      lat: 0,
      lng: 0,
    },
    infoWinOpen: false,
    currentMidx: null,
    // optional: offset infowindow so it visually sits nicely on top of our marker
    infoOptions: {
      pixelOffset: {
        width: 0,
        height: -35,
      },
    },
  }),
  computed: {
    google: gmapApi,
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.currentUserLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }
        },
        (err) => {
          // eslint-disable-next-line no-console
          console.warn('ERROR(' + err.code + '): ' + err.message)
          // if (err.message === 'User denied Geolocation') {
          // alert('Sem permissão para acessar sua localização')
          // window.alert('Sem permissão para acessar sua localização')
          // }
        }
      )
    }
  },
}
</script>

<style lang="scss">
.map-content {
  width: 100%;
  height: 100%;

  > .google-map-preview {
    width: 100%;
    height: 100%;
  }
}
</style>
