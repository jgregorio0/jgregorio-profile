<template>
  <div class="container sections-wrapper">
    <div class="row">
      <div class="primary col-lg-8 col-12">
        <AdditionalInfo addClass="d-lg-none"/>
        <!--//aside aditional info-->
        <About/>
        <!--//section about-->
        <Skills addClass="d-lg-none"/>
        <!--//section skills-->
        <WorkingExperience/>
        <!--//section working experience-->
        <LatestProjects/>
        <!--//section latest projects-->
        <PersonalProjects/>
        <!--//section personal projects-->
        <Education addClass="d-lg-none"/>
        <!--//section education-->
        <Languages addClass="d-lg-none"/>
        <!--//section langages-->
        <Conferences addClass="d-lg-none"/>
        <!--//section conferences-->
      </div>
      <!--//primary-->
      <div class="secondary d-none d-lg-block col-lg-4">
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
