<template>
  <div id="app">
    <div id="nav">
      <ul>
          <button class="ui inverted orange button">
        <li><router-link to="/">Homepage </router-link></li>

          </button>
            <button class="ui inverted primary button">

          <li><router-link to="/chartjs"> Line Chart </router-link></li>


            </button>

            <button class="ui inverted primary button">

          <li><router-link to="/bubble"> Bubble Chart </router-link></li>


            </button>


      </ul>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0000;
}




</style>