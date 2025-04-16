<template>
    <div class="greet-container">
        <p class="greet-output">{{ output }}</p>
        <button
            :style="`
                border: none;
                cursor: pointer;
                background:${bgcolor}; 
                color:${textcolor}; 
                ${getSize};
                ${getStyle}`"
            @click="clickNow">{{ label }}</button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        message:{
            type:String,
            default:'Hello greeter!'
        },
        bgcolor:{
            type:String,
            default:'#f5f5f5'
        },
        textcolor:{
            type:String,
            default:'#000000'
        },
        label:{
            type:String,
            default:'Click me!'
        },
        size:{
            type:String,
            default:'md'
        },
        style: {
            type: String,
            default: 'default' // & oval or rounded
        }
    },
    data() {
        return {
            output:'',
        };
    },
    computed: {
        getSize() {
            return this.size == 'md'? 'padding:15px 30px;' : this.size == 'sm'? 'padding: 5px 10px;' : this.size == 'lg'? 'padding: 20px 50px; font-size: 20px;':'padding: 30px 80px; font-size: 20px;'
        },
        getStyle() {
            return this.style == 'rounded'? 'border-radius: 10px;': this.style == 'oval'? 'border-radius: 50%':'';
        }
    },
    methods: {
        clickNow() {
            this.output = this.message;
        },
    },
})
</script>
<style>
button.greet-btn {
    border: none;
    font-size: 20px;
    cursor: pointer;
}

.greet-output {
    font-size: 16px;
    margin-bottom:12px;
    text-align: center;
}

/* SIZE STYLE */
.xl {
    padding: 30px 60px;
}

.lg {
    padding: 20px 40px;
}

.md {
    padding: 10px 20px;
}

.sm {
    padding: 5px 10px;
    font-size: 15px;
}
</style>