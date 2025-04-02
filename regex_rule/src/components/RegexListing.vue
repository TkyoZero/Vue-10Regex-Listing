<template>
    <div class="m-5 p-5">
        <h3 class="text-3xl font-bold text-green-500">{{ title }}</h3>
        <div class="grid grid-cols-2 gap-2">
            <div>
                <p class="text-2xl font-bold text-green-500">{{ character }}</p>
                <p class="text-lg">{{ description }}</p>
            </div>
            <div>
                <h3 class="text-xl font-semibold text-green-500">Example</h3>
                <p class="text-lg"><em>{{ example }}</em></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegexListing',
    props: {
        id: Number,
        title: String,
        character: String,
        description: String,
        example: String
    }
}
</script>
