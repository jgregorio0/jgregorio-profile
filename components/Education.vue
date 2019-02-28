<template>
  <aside :class="mainClass">
    <div class="section-inner">
      <h2 class="heading">{{ $t('components.education.heading')}}</h2>
      <div class="content">
        <div v-for="study in $t('components.education.studies')" :key="study.id" class="item">
          <h3 class="title">
            <i class="fas fa-graduation-cap"/> {{ study.title }}
          </h3>
          <h4 class="university">
            {{ study.center }}
            <span class="year">({{ study.date }})</span>
            <span>{{ study.location }}</span>
          </h4>
          <p>{{ study.description }}</p>
        </div>
        <!--//item-->
      </div>
      <!--//content-->
    </div>
    <!--//section-inner-->
  </aside>
</template>
<script>
export default {
  props: {
    addClass: {
      type: String,
      default: '',
      required: false
    }
  },
  computed: {
    mainClass() {
      return this.addClass
        ? 'education aside section ' + this.addClass
        : 'education aside section'
    }
  }
}
</script>
