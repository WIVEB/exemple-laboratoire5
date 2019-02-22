<template>
    <div>
        <input v-model="message"/>
        <md-button class="md-raised md-primary green" @click="$emit('updateMessage', message)">Changer le message</md-button>
    </div>
</template>

<script>

    export default {
        name: 'MessageInput',
        data () {
            return {
                message:""
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .green{
        background-color: green;
    }
</style>
