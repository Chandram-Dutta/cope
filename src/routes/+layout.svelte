<script>
    import AppBar from "$lib/components/AppBar.svelte";
    import Credit from "$lib/components/Credit.svelte";
    import "../app.css";
</script>

<div class="relative flex h-screen flex-col">
    <AppBar />

    <div class="flex-grow px-8 pb-24 pt-24">
        <slot />
    </div>

    <Credit />
</div>
