<template>
  <aside :class="mainClass">
    <div class="section-inner">
      <h2 class="heading">{{ $t('components.languages.heading') }}</h2>
      <div class="content">
        <ul class="list-unstyled">
          <li v-for="lang in $t('components.languages.langs')" :key="lang.id" class="item">
            <span class="title">
              <strong>{{ lang.title }}:</strong>
            </span>
            <span class="level">
              {{ lang.level }}
              <br class="visible-xs">
              <i v-if="lang.stars >= 1" class="fas fa-star"/>
              <i v-if="lang.stars >= 2" class="fas fa-star"/>
              <i v-if="lang.stars >= 3" class="fas fa-star"/>
              <i v-if="lang.stars >= 4" class="fas fa-star"/>
              <i v-if="lang.stars >= 5" class="fas fa-star"/>
            </span>
          </li>
          <!--//item-->
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
        ? 'languages aside section ' + this.addClass
        : 'languages aside section'
    }
  }
}
</script>
