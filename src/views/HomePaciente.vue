<template>
  <div class="home-paciente flex">
    <div class="wp-left flex">
      <DataPaciente />
    </div>
    <div class="wp-right flex">
      <div class="info-paciente content">
        <h2>Paciente</h2>
        <div class="wp-tableInfo">
          <nav>
            <ul>
              <li><a href="">Citas</a></li>
              <li><a href="">Presión Arterial</a></li>
              <li><a href="">Otro</a></li>
            </ul>
          </nav>
          <div class="content-table">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataPaciente from '../components/DataPaciente.vue'

export default {
  components: {
    DataPaciente
  }
}
</script>
