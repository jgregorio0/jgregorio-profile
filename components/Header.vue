<template>
  <header class="header">
    <div class="container clearfix">
      <img
        class="profile-image img-fluid float-left"
        src="~/assets/images/profile.png"
        :alt="$t('profile.name')"
      >
      <div class="profile-content float-left">
        <ul class="locales list-inline">
          <li class="list-inline-item">
            <a href="/es">
              <span class="icon es"></span>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="/en">
              <span class="icon en"/>
            </a>
          </li>
        </ul>
        <h1 class="name">{{ $t('profile.name') }}</h1>
        <h2 class="desc">{{ $t('profile.position') }}</h2>
        <ul class="social list-inline">
          <li class="list-inline-item">
            <a :href="this.$t('profile.twitter')" target="_blank">
              <i class="fab fa-twitter"/>
            </a>
          </li>
          <li class="list-inline-item">
            <a :href="this.$t('profile.linkedin')" target="_blank">
              <i class="fab fa-linkedin"/>
            </a>
          </li>
          <li class="list-inline-item">
            <a :href="this.$t('profile.github')" target="_blank">
              <i class="fab fa-github-alt"/>
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
        <i class="fas fa-paper-plane"/>
        &nbsp;
        {{ $t('components.header.contactme') }}
      </a>
    </div>
    <!--//container-->
  </header>
</template>
<style>
.icon {
  display: block;
  text-indent: -9999px;
  width: 36px;
  height: 36px;
  background-size: 36px 36px;
}
.es {
  background: url('~assets/icons/es.svg');
}
.en {
  background: url('~assets/icons/en.svg');
}
.locales {
  margin-top: 10px;
  margin-bottom: -20px;
}
.name {
  margin-top: 10px;
}
</style>
