var maVue = new Vue({
  el: '#app',
  data: {
    message: 'hello you guys',
    path_to_image: '../../../../photosToAnalyse/images/fromageArdoise.jpg',
    success: true,
    tags: ['Petit', 'Transparent', 'Face']
  },

  methods: {
    addPerson: function() {
      this.tags.push('tag de plus')
    }
  },

  computed: {},

  watch: {}
})
