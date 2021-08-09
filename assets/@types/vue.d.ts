import Vue from 'vue'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

// add types for typescript of nuxt plugins here.
declare module 'vue/types/vue' {
  interface Vue {
    $axios: NuxtAxiosInstance
  }
}
