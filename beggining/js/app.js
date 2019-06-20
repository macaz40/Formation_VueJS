var maVue = new Vue({
  el: '#app',
  data: {
    message: 'hello you guys',
    nom_image: "fromageArdoise.jpg",
    path_to_image: '../../../../photosToAnalyse/images/fromageArdoise.jpg',
    success: true,
    tags: ['TailleOK', 'NonDétouré', 'Face'],
    nom_produit: 'Fromage',
    description: 'Fromage lait de vache à la coupe, AOP'
  },

  methods: {
    addPerson: function() {
      this.tags.push('tag de plus')
    }
  },

  computed: {},

  watch: {}
})
