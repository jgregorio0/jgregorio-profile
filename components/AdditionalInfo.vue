<template>
  <aside :class="mainClass">
    <div class="section-inner">
      <h2 class="heading sr-only">{{ $t('components.additionalInfo.heading') }}</h2>
      <div class="content">
        <ul class="list-unstyled">
          <li>
            <fa :icon="faMapMarkerAlt"/>
            <span class="sr-only">{{ $t('components.additionalInfo.label.location') }}</span>
            {{ $t('profile.location') }}
          </li>
          <li>
            <fa :icon="faEnvelope"/>
            <span class="sr-only">{{ $t('components.additionalInfo.label.email') }}</span>
            <a :href="'mailto:' + this.$t('profile.email')">{{ $t('profile.email') }}</a>
          </li>
          <li>
            <fa :icon="faPhone"/>
            <span class="sr-only">{{ $t('components.additionalInfo.label.phone') }}</span>
            {{ $t('profile.phone') }}
          </li>
        </ul>
      </div>
      <!--//content-->
    </div>
    <!--//section-inner-->
  </aside>
</template>
<script>
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt
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
        ? 'info aside section ' + this.addClass
        : 'info aside section'
    },
    faPhone() {
      return faPhone
    },
    faEnvelope() {
      return faEnvelope
    },
    faMapMarkerAlt() {
      return faMapMarkerAlt
    }
  }
}
</script>
