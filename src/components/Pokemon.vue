<template>
    <div>
        <img :src="image"  height="42" width="42">
        <h3>{{name}}</h3>
        <md-button class="md-raised md-primary red" @click="$emit('deletePokemon')">Delete</md-button>
    </div>
</template>

<script>
    import PokemonApi from '../services/Pokemons'

    export default {
        name: 'Home',
        props: {
            name: String,
            url: String
        },
        created () {
            // fetch the data when the view is created and the data is
            // already being observed
            this.fetchData()
        },
        methods: {
            fetchData () {
                PokemonApi.getPokemonImageByUrl(this.$props.url).then(response => this.image = response);
            },
        },
        data () {
            return {
                image: null,
            }
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .red{
        background-color: lightcoral;
    }
</style>
