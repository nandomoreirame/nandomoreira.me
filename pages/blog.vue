<template>
  <div class="Blog">
    <div class="Blog__last-posts">
      <c-meta-tags :title="title" :description="description" bodyClass="page-blog hasHero" :url="url"/>
      <!-- <div v-for="(post, k) in lastPosts" :key="k">
        {{ post }}
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Blog',
  data: () => ({
    // lastPosts: {},
    url: `${process.env.baseUrl}/blog`,
    title: `Blog - ${process.env.baseTitle}`,
    description: ``
  }),
  async asyncData ({ store, $axios }) {
    // if (!store.state.lastPosts.length) {
    // const posts = await $axios.$get(process.env.apiUrl)
    // const posts = await $axios.$get('https://blog.nandomoreira.me/api.json')
    store.commit('SET_POSTS', { foo: 'bar' })
    // }
  },
  computed: {
    ...mapState({
      lastPosts: state => state.lastPosts
    })
    // parseRelaxedJSON: str => eval('(_ => (' + str + '))()') // eslint-disable-line
  },
  components: {
    CMetaTags: () => import('~/components/Meta')
  }
}
</script>

<style lang="stylus" scoped>
// .Blog
</style>
