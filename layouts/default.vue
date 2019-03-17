<template>
  <div id="layout-container">
    <!-- ******HEADER****** -->
    <Header />
    <!--//header-->
    <!-- TODO components -->
    <nuxt />

    <!--//masonry-->
    <!-- ******FOOTER****** -->
    <Footer />
    <!--//footer-->
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  name: 'LayoutDefault',
  head() {
    return {
      title: this.$t('default.title'),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.$t('default.description')
        }
      ]
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>
