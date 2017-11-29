<template>
  <div id="app">
      <TabPages >
          <router-view/>
      </TabPages>

  </div>
</template>

<script>
import TabPages from './components/index';

export default {
  name: 'app',
  components: {
      TabPages
  }
}
</script>

<style>

</style>
