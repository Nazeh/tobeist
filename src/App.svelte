<script>
    import Main from './components/Main.svelte';

    console.log(process.env.MAMA);
</script>

<style>
    #app{
        min-height: 100%;
        display: flex;
        justify-content: center;
        background-color: #fafafa;
    }
</style>

<div id="app">
    <Main>listen</Main>
</div>