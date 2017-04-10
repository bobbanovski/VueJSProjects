<template>
    <div class="row">
        <app-quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">
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
        },
        methods: {
            deleteQuote(index) {
                this.$emit('quoteDeleted', index);
            }
        }
    }
</script>

<style>

</style>