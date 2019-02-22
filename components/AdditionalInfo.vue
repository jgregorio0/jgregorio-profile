<template>
  <aside class="info aside section">
    <div class="section-inner">
      <h2 class="heading sr-only">
        {{ $t('components.additionalInfo.heading') }}
      </h2>
      <div class="content">
        <ul class="list-unstyled">
          <li>
            <i class="fas fa-map-marker-alt" />
            <span class="sr-only">
              {{ $t('components.additionalInfo.label.location') }}
            </span>
            {{ $t('profile.location') }}
          </li>
          <li>
            <i class="fas fa-envelope" />
            <span class="sr-only">
              {{ $t('components.additionalInfo.label.email') }}
            </span>
            <a :href="'mailto:' + this.$t('profile.email')">
              {{ $t('profile.email') }}
            </a>
          </li>
          <li>
            <i class="fas fa-link" />
            <span class="sr-only">
              {{ $t('components.additionalInfo.label.phone') }}
            </span>
            {{ $t('profile.phone') }}
          </li>
        </ul>
      </div>
      <!--//content-->
    </div>
    <!--//section-inner-->
  </aside>
</template>
