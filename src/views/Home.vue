<template>
    <div class="home">
        <h1>{{ msg }}</h1>

        <h1>Pokemons</h1>
        <pokemon v-for="pokemon in pokemons" :key="pokemon.name" :name="pokemon.name" :url="pokemon.url"/>
    </div>
</template>

<script>
    import PokemonsApi from '../services/Pokemons.js'
    import Pokemon from'../components/Pokemon.vue'

    export default {
        name: 'Home',
        components: {
            Pokemon
        },
        props: {
            msg: String
        },
        data () {
            return {
                pokemons: null,

            }
        },
        created () {
            // fetch the data when the view is created and the data is
            // already being observed
            this.fetchData()
        },
        methods: {
            fetchData () {
                PokemonsApi.getPokemons().then(response => this.pokemons = response);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
