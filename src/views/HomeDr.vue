<template>
  <div class="home-dr flex">
    <div class="wp-left flex">
      <DataDr />
    </div>
    <div class="wp-right flex">
      <div class="lista-personas content">
        <label for="person-choice">Personas</label>
        <input list="person" id="person-choice" name="person" autocomplete="off" placeholder="Marco Antonio"/>

        <datalist id="person">
            <option value="Marco Alejandro Zuñiga">Marco Alejandro Zuñiga</option>
            <option @click="navigation" value="Marco Antonio Galicia">Marco Antonio Galicia</option>
            <option value="Marco Alberto Ramirez">Marco Alberto Ramirez</option>
            <option value="Marco Álvarez Jiménez">Marco Álvarez Jiménez</option>
            <option value="Mario Eduardo Pérez Rivera">Mario Eduardo Pérez Rivera</option>
        </datalist>
      </div>
    </div>
  </div>
</template>

<script>
import DataDr from '../components/DataDr.vue'
import router from '@/router/index.js'

export default {
  components: {
    DataDr
  },
  methods: {
    navigation () {
      router.push('/paciente')
    }
  }
}
</script>
