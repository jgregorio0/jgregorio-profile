<template>
  <section class="experience section">
    <div class="section-inner">
      <h2 class="heading">{{ $t('components.workingExperience.heading') }}</h2>
      <div class="content">
        <div
          v-for="experience in $t('components.workingExperience.experiences')"
          :key="experience.id"
          class="item"
        >
          <h3 class="title">
            {{ experience.position }} -
            <span class="place">
              <a :href="experience.url" target="_blank">{{ experience.company }}</a>
            </span>
            <span class="year">({{ experience.year }})</span>
          </h3>
          <p>{{ experience.description }}</p>
        </div>
        <!--//item-->
      </div>
      <!--//content-->
    </div>
    <!--//section-inner-->
  </section>
</template>
