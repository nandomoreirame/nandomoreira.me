<template>
  <c-hero>
    <c-meta-tags bodyClass="page-home hasHero" :title="title" :description="description" :url="url"/>
    <c-avatar/>
    <h2 class="Home__title">
      <span>Olá! Eu sou um</span> <strong>{ desenvolvedor web }.</strong>
      <small>
        <a href="http://agencia.nossacausa.com/" target="_blank">Ajudo ONGs</a> e
        pequenas empresas a criar sites personalizados de alta qualidade.
        No meu tempo livre eu <a href="https://blog.nandomoreira.me" target="_blank">escrevo</a>
        e contribuo com projetos <a href="https://github.com/nandomoreirame" target="_blank">open source</a>.
      </small>
    </h2>
    <div class="Home__buttons">
      <nuxt-link to="/portfolio" class="Home__button button button--secondary">Portfolio</nuxt-link>
      <nuxt-link to="/contact" class="Home__button button button--primary">Contate-me!</nuxt-link>
    </div>
    <div class="Home__social">
      <c-social-icons iconSize="18"/>
    </div>
  </c-hero>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: `Olá! Eu sou um { desenvolvedor web }! ${process.env.baseTitle}`,
      description: `${process.env.baseDescription}`,
      url: `${process.env.baseUrl}`
    }
  },
  components: {
    CHero: () => import('~/components/Hero'),
    CAvatar: () => import('~/components/Avatar'),
    CSocialIcons: () => import('~/components/SocialIcons'),
    CMetaTags: () => import('~/components/Meta')
  }
}
</script>

<style lang="stylus" scoped>
.Home
  &__title
    font-weight 800
    font-size 1.375rem /* 22/16 */
    line-height 1.1
    +above($tablet)
      font-size 2.375rem /* 38/16 */
    +above($desktop)
      font-size 2.875rem /* 46/16 */
    a
      text-decoration underline
    strong
      display block
      font-weight 800
    span, small
      font-weight 400
    small
      font-size .875rem /* 14/16 */
      display block
      line-height 1.5
      margin-top 1.875rem /* 30/16 */
      +above($tablet)
        font-size 1rem /* 16/16 */
      +above($desktop)
        font-size 1.125rem /* 18/16 */
      a
        font-weight 700
  &__buttons
    text-align center
    padding 0 0 .9375rem /* 15/16 */
    .button
      display block
      margin .3125rem /* 5/16 */
      +above($mobile)
        display inline-block
</style>
