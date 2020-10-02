<template>
  <div>
    <h2>TODO LIST</h2>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><NuxtLink to="/todo">All</NuxtLink></li>
      <li class="breadcrumb-item"><NuxtLink to="/todo/active">Active</NuxtLink></li>
      <li class="breadcrumb-item active"><NuxtLink to="/todo/clear">Clear</NuxtLink></li>
    </ol>
    <ItemInput />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import ItemInput from '@/components/item-input.vue'

@Component({
    components: {
        ItemInput
    }
})
export default class Header extends Vue {
    
}
</script>