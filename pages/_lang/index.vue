<template>
  <div class="container sections-wrapper">
    <div class="row">
      <div class="primary col-lg-8 col-12">
        <About/>
        <!--//section about-->
        <LatestProjects/>
        <!--//section latest projects-->
        <PersonalProjects/>
        <!--//section personal projects-->
        <WorkingExperience/>
        <!--//section working experience-->
      </div>
      <!--//primary-->
      <div class="secondary col-lg-4 col-12">
        <AdditionalInfo/>
        <!--//aside aditional info-->
        <Skills/>
        <!--//section skills-->
        <Education/>
        <!--//section education-->
        <Languages/>
        <!--//section langages-->
        <Conferences/>
        <!--//section conferences-->
      </div>
      <!--//secondary-->
    </div>
    <!--//row-->
  </div>
</template>

<script>
import About from '~/components/About.vue'
import AdditionalInfo from '~/components/AdditionalInfo.vue'
import Skills from '~/components/Skills.vue'
import LatestProjects from '~/components/LatestProjects.vue'
import PersonalProjects from '~/components/PersonalProjects.vue'
import WorkingExperience from '~/components/WorkingExperience.vue'
import Education from '~/components/Education.vue'
import Languages from '~/components/Languages.vue'
import Conferences from '~/components/Conferences.vue'

export default {
  name: 'Index',
  components: {
    About,
    AdditionalInfo,
    Skills,
    LatestProjects,
    PersonalProjects,
    WorkingExperience,
    Education,
    Languages,
    Conferences
  }
}
</script>
