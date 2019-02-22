<template>
  <section class="latest section">
    <div class="section-inner">
      <h2 class="heading">{{ $t('components.latestProjects.heading') }}</h2>
      <div class="content">
        <!-- MAIN PROJECT -->
        <div class="item featured text-center">
          <h3 class="title">
            <a
              :href="$t('components.latestProjects.mainProject.url')"
              target="_blank"
            >{{ $t('components.latestProjects.mainProject.title') }}</a>
          </h3>
          <div class="featured-image has-ribbon">
            <a :href="$t('components.latestProjects.mainProject.url')" target="_blank">
              <img
                class="img-fluid project-image"
                :src="$t('components.latestProjects.mainProject.image')"
                :alt="$t('components.latestProjects.mainProject.title')"
              >
            </a>
          </div>
          <div
            v-for="(paragraph, index) in $t('components.latestProjects.mainProject.paragraphs')"
            :key="index"
          >
            <p class="summary" v-html="paragraph"></p>
          </div>
        </div>
        <!--//item-->
        <hr class="divider">
        <!-- PROJECTS -->
        <div
          v-for="project in $t('components.latestProjects.projects')"
          :key="project.id"
          class="item row"
        >
          <a class="col-md-4 col-12" :href="project.url" target="_blank">
            <img class="img-fluid project-image" :src="project.image" :alt="project.title">
          </a>
          <div class="desc col-md-8 col-12">
            <h3 class="title">
              <a :href="project.url" target="_blank">{{ project.title }}</a>
            </h3>
            <p
              v-for="(paragraph, index) in project.paragraphs"
              :key="index"
              class="mb-2"
              v-html="paragraph"
            ></p>
            <p>
              <a class="more-link" :href="project.url" target="_blank">
                <i class="fas fa-external-link-alt"/>
                {{ $t('components.latestProjects.more') }}
              </a>
            </p>
          </div>
          <!--//desc-->
        </div>
        <!--//item-->
      </div>
      <!--//content-->
    </div>
    <!--//section-inner-->
  </section>
</template>
