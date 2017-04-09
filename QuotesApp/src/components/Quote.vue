<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="panel-body quote">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    //get array of quotes
    export default {
        props: ['quotes']
    }
</script>

<style>
    .panel-body{
        font-family: 'Arizonia', cursive;
        font-size: 24px;
        
    },
    .quote:hover {
        background-color: #ffe2e2;
    }
</style>