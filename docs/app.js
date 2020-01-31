/* global Vue, TYPES, POKEMONS */

void new Vue({
  data: {
    types: {}
  },
  computed: {
    results () {
      const selectedTypes = Object.keys(this.types).filter(type =>
        this.types[type]
      )
      if (selectedTypes.length === 0) return []
      return Object.keys(POKEMONS).map(pokemon => {
        const types = POKEMONS[pokemon].types
        const effects = selectedTypes.map(selectedType =>
          types.map(type =>
            TYPES[selectedType][type]
          ).reduce((effectA, effectB) =>
            effectA * effectB
          )
        )
        const effect = Math.max.apply(null, effects)
        return { pokemon, types, effect }
      }).filter(result =>
        result.effect < 1
      )
    }
  },
  created () {
    Object.keys(TYPES).forEach(type => {
      Vue.set(this.types, type, false)
    })
  }
}).$mount('main')
