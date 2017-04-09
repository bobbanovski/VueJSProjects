<template>
    <div class="container">
        <app-New-Quote></app-New-Quote>
        <app-Quote-Grid :quotes="quotes"></app-Quote-Grid>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';

    export default {
        data: function() {
            return {
                quotes: ['Quantity is a quality all its own'],
                maxQuotes: 10
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote
        }
    }    
</script>

<style>
</style>
