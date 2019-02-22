<template>
  <header class="header">
    <div class="container clearfix">
      <img
        class="profile-image img-fluid float-left"
        src="~/assets/images/profile.png"
        :alt="$t('profile.name')"
      >
      <div class="profile-content float-left">
        <h1 class="name">
          {{ $t('profile.name') }}
        </h1>
        <h2 class="desc">
          {{ $t('profile.position') }}
        </h2>
        <ul class="social list-inline">
          <li class="list-inline-item">
            <a :href="this.$t('profile.twitter')" target="_blank">
              <i class="fab fa-twitter" />
            </a>
          </li>
          <li class="list-inline-item">
            <a :href="this.$t('profile.linkedin')" target="_blank">
              <i class="fab fa-linkedin-in" />
            </a>
          </li>
          <li class="list-inline-item">
            <a :href="this.$t('profile.github')" target="_blank">
              <i class="fab fa-github-alt" />
            </a>
          </li>
        </ul>
      </div>
      <!--//profile-->
      <a
        class="btn btn-cta-primary float-right"
        :href="'mailto:' + $t('profile.email')"
        target="_blank"
      >
        <i class="fas fa-paper-plane" />
        &nbsp;
        {{ $t('components.header.contactme') }}
      </a>
    </div>
    <!--//container-->
  </header>
</template>
