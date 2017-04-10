<template>
    <div class="container">
        <app-Header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-Header>
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
    import Header from './components/Header.vue';

    export default {
        data: function() {
            return {
                quotes: [
                    'Quantity is a quality all its own'
                    ],
                maxQuotes: 12
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote,
            appHeader: Header
        },
        methods: {
            newQuote(quote) {
                if (this.quotes.length >= this.maxQuotes) {
                    return alert('maximum number of quotes reached, please delete one');
                }
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
