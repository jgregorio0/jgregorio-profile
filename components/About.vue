<template>
  <section class="about section">
    <div class="section-inner">
      <h2 class="heading">
        {{ $t('components.about.heading') }}
      </h2>
      <div class="content" v-html="this.$t('components.about.content')" />
      <!--//content-->
    </div>
    <!--//section-inner-->
  </section>
</template>
