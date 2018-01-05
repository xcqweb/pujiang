<template>
    <div>
        <button @click= 'increment'>Increment +1</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
     export default{
        methods:{
            ...mapActions([
                'increment'
                ])
        }
    }
</script>