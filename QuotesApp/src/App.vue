<template>
    <div class="container">
        <app-New-Quote @quoteAdded="newQuote"></app-New-Quote>
        <app-Quote-Grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-Quote-Grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Click on a quote to delete it.</div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';

    export default {
        data: function() {
            return {
                quotes: [
                    'Quantity is a quality all its own'
                    ],
                maxQuotes: 10
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote
        },
        methods: {
            newQuote(quote) {
                this.quotes.push(quote);
            },
            deleteQuote(index){
                this.quotes.splice(index, 1);
            }
        }
    }    
</script>

<style>
</style>
