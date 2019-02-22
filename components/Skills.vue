<template>
  <aside class="skills aside section">
    <div class="section-inner">
      <h2 class="heading">{{ $t('components.skills.heading') }}</h2>
      <div class="content">
        <div class="skillset">
          <!-- Java -->
          <div class="item">
            <h3 class="level-title">
              Java &amp; Groovy
              <span
                class="level-label"
                data-toggle="tooltip"
                data-placement="left"
                data-animation="true"
              >
                <i class="fas fa-info-circle"/>Expert
              </span>
            </h3>
            <div class="level-bar">
              <div class="level-bar-inner" data-level="100%"/>
            </div>
            <!--//level-bar-->
          </div>
          <!--//item-->
          <div class="item">
            <h3 class="level-title">
              Javascript &amp; jQuery
              <span
                class="level-label"
                data-toggle="tooltip"
                data-placement="left"
                data-animation="true"
                title="You can use the tooltip to explain more about your skill level..."
              >
                <i class="fas fa-info-circle"/>Expert
              </span>
            </h3>
            <div class="level-bar">
              <div class="level-bar-inner" data-level="96%"/>
            </div>
            <!--//level-bar-->
          </div>
          <!--//item-->
          <div class="item">
            <h3 class="level-title">
              HTML5, CSS3, SASS &amp; LESS
              <span
                class="level-label"
                data-toggle="tooltip"
                data-placement="left"
                data-animation="true"
                title="You can use the tooltip to explain more about your skill level..."
              >
                <i class="fas fa-info-circle"/>Expert
              </span>
            </h3>
            <div class="level-bar">
              <div class="level-bar-inner" data-level="96%"/>
            </div>
            <!--//level-bar-->
          </div>
          <!--//item-->
          <div class="item">
            <h3 class="level-title">
              Ruby on Rails
              <span
                class="level-label"
                data-toggle="tooltip"
                data-placement="left"
                data-animation="true"
                title="You can use the tooltip to explain more about your skill level..."
              >
                <i class="fas fa-info-circle"/>Pro
              </span>
            </h3>
            <div class="level-bar">
              <div class="level-bar-inner" data-level="85%"/>
            </div>
            <!--//level-bar-->
          </div>
          <!--//item-->
          <p>
            <a class="more-link" href="#">
              <i class="fas fa-external-link-alt"/>More on Coderwall
            </a>
          </p>
        </div>
      </div>
      <!--//content-->
    </div>
    <!--//section-inner-->
  </aside>
</template>
