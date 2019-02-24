<template>
  <aside class="skills aside section">
    <div class="section-inner">
      <h2 class="heading">{{ $t('components.skills.heading') }}</h2>
      <div class="content">
        <div class="skillset">
          <!-- BACKEND -->
          <fa :icon="faDatabase" class="skills-icon-holder rounded-circle text-center"/>
          <div v-for="backend in $t('components.skills.backend')" :key="backend.id" class="item">
            <h3 class="level-title">{{ backend.title }}</h3>
            <!-- <div class="level-bar">
              <div class="level-bar-inner" data-level="100%"/>
            </div>-->
            <!--//level-bar-->
            <!--//item-->
          </div>
          <!-- FRONTEND -->
          <fa :icon="faCode" class="skills-icon-holder rounded-circle text-center"/>
          <div v-for="frontend in $t('components.skills.frontend')" :key="frontend.id" class="item">
            <h3 class="level-title">{{ frontend.title }}</h3>
            <!-- <div class="level-bar">
              <div class="level-bar-inner" data-level="100%"/>
            </div>-->
            <!--//level-bar-->
            <!--//item-->
          </div>
          <!-- OTHERS -->
          <fa :icon="faToolbox" class="skills-icon-holder rounded-circle text-center"/>
          <div v-for="others in $t('components.skills.others')" :key="others.id" class="item">
            <h3 class="level-title">{{ others.title }}</h3>
            <!-- <div class="level-bar">
              <div class="level-bar-inner" data-level="100%"/>
            </div>-->
            <!--//level-bar-->
            <!--//item-->
          </div>
        </div>
      </div>
      <!--//content-->
    </div>
    <!--//section-inner-->
  </aside>
</template>
<script>
import {
  faCode,
  faDatabase,
  faToolbox
} from '@fortawesome/free-solid-svg-icons'
export default {
  computed: {
    faCode() {
      return faCode
    },
    faDatabase() {
      return faDatabase
    },
    faToolbox() {
      return faToolbox
    }
  }
}
</script>
<style scoped>
.skills-icon-holder {
  background: #66cb8c;
  width: 80px;
  height: 80px;
  padding: 1rem;
  left: 50%;
  margin-left: -40px;
}
</style>
