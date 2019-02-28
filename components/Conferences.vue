<template>
  <aside :class="mainClass">
    <div class="section-inner">
      <h2 class="heading">{{ $t('components.conferences.heading') }}</h2>
      <div class="content">
        <ul class="list-unstyled">
          <li v-for="conference in $t('components.conferences.conferences')" :key="conference.id">
            <i class="far fa-calendar-alt"/>
            <a :href="conference.url" target="_blank">{{ conference.title }}</a>
            ({{ conference.location }})
          </li>
        </ul>
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
        ? 'list conferences aside section ' + this.addClass
        : 'list conferences aside section'
    }
  }
}
</script>
