<template>
  <section class="container">
    <h1>Demo examples of vue-chartjs</h1>
    <div class="columns">
      <div class="column">
        <h3>Line Chart</h3>
        <bubble-chart></bubble-chart>
      </div>
    </div>
    <div class="columns">
      
    
    </div>
  </section>
</template>

<script>
  import BubbleChart from '@/components/BubbleChart'

 

  export default {
    name: 'VueChartJS',
    components: {
      BubbleChart,
    
    }
  }
</script>