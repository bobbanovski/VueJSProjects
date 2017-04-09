<template>
    <div class="row">
        <app-quote v-for="quote in quotes">
            {{ quote }}
        </app-quote>
    </div>
</template>

<script>
    import Quote from './Quote.vue';
    //get array of quotes
    export default {
        props: ['quotes'],
        components: {
            appQuote: Quote
        }
    }
</script>

<style>

</style>