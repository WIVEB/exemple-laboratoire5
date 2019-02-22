<template>
    <div class="home">
        <h1>{{ message }}</h1>
        <message-input v-on:updateMessage="updateMessage"/>
        <h1>Pokemons</h1>
        <pokemon v-for="(pokemon, index) in pokemons" :key="pokemon.name" :name="pokemon.name" :url="pokemon.url" v-on:deletePokemon="deleteThisPokemon(index)" />
    </div>
</template>

<script>
    import PokemonsApi from '../services/Pokemons.js'
    import Pokemon from'../components/Pokemon.vue'
    import MessageInput from '../components/MessageInput.vue'

    export default {
        name: 'Home',
        components: {
            Pokemon,
            MessageInput
        },
        props: {
            msg: String
        },
        data () {
            return {
                pokemons: null,
                message: this.$props.msg

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
            },
            deleteThisPokemon(index){
                this.pokemons.splice(index, 1);
            },
            updateMessage(msg){
                this.message = msg;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
