<template>
  <section class="container">
    <h1>Demo examples of vue-chartjs</h1>
    <div class="columns">
      <div class="column">
        <h3>Line Chart</h3>
        <line-chart></line-chart>
      </div>
    
    </div>
    
  </section>
</template>

<script>
  import LineChart from '@/components/LineChart'

 

  export default {
    name: 'VueChartJS',
    components: {
      LineChart,
    
    }
  }
</script>