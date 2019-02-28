<template>
  <aside :class="mainClass">
    <div class="section-inner">
      <h2 class="heading">{{ $t('components.skills.heading') }}</h2>
      <div class="content">
        <div class="skillset text-center">
          <!-- BACKEND -->
          <div>
            <fa :icon="faDatabase" class="skills-icon-holder rounded-circle text-center"/>
            <h3 class="text-center">{{ $t('components.skills.backend.heading') }}</h3>
          </div>

          <div
            v-for="backend in $t('components.skills.backend.skills')"
            :key="backend.id"
            class="item"
          >
            <h3 class="level-title">{{ backend.title }}</h3>
            <!-- <div class="level-bar">
              <div class="level-bar-inner" data-level="100%"/>
            </div>-->
            <!--//level-bar-->
            <!--//item-->
          </div>
          <!-- FRONTEND -->
          <fa :icon="faCode" class="skills-icon-holder rounded-circle text-center"/>
          <h3 class="text-center">{{ $t('components.skills.frontend.heading') }}</h3>
          <div
            v-for="frontend in $t('components.skills.frontend.skills')"
            :key="frontend.id"
            class="item"
          >
            <h3 class="level-title">{{ frontend.title }}</h3>
            <!-- <div class="level-bar">
              <div class="level-bar-inner" data-level="100%"/>
            </div>-->
            <!--//level-bar-->
            <!--//item-->
          </div>
          <!-- OTHERS -->
          <fa :icon="faToolbox" class="skills-icon-holder rounded-circle text-center"/>
          <h3 class="text-center">{{ $t('components.skills.others.heading') }}</h3>

          <div
            v-for="others in $t('components.skills.others.skills')"
            :key="others.id"
            class="item"
          >
            <h3 class="level-title">{{ others.title }}</h3>
            <!-- <div class="level-bar">
              <div class="level-bar-inner" data-level="100%"/>
            </div>-->
            <!--//level-bar-->
            <!--//item-->
          </div>
          <!-- SOFT SKILLS -->
          <fa :icon="faBrain" class="skills-icon-holder rounded-circle text-center"/>
          <h3 class="text-center">{{ $t('components.skills.softskills.heading') }}</h3>

          <div
            v-for="softskill in $t('components.skills.softskills.skills')"
            :key="softskill.id"
            class="item"
          >
            <h3 class="level-title">{{ softskill.title }}</h3>
            <p class="level-title">{{ softskill.description }}</p>
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
  faToolbox,
  faBrain
} from '@fortawesome/free-solid-svg-icons'
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
        ? 'skills aside section ' + this.addClass
        : 'skills aside section'
    },
    faCode() {
      return faCode
    },
    faDatabase() {
      return faDatabase
    },
    faToolbox() {
      return faToolbox
    },
    faBrain() {
      return faBrain
    }
  }
}
</script>
<style scoped>
.skills-icon-holder {
  background: #66cb8c;
  width: 60px;
  height: 60px;
  padding: 1rem;
  /* left: 50%; */
  /* margin-left: -30px; */
}
</style>
