<template>
    <div class="container">
        <app-Quote-Grid :quotes="quotes"></app-Quote-Grid>
    </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue';
    export default {
        data: function() {
            return {
                quotes: ['Quantity is a quality all its own'],
                maxQuotes: 10
            }
        },
        components: {
            appQuoteGrid: QuoteGrid
        }
    }
</script>

<style>
</style>
