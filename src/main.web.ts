import { defineCustomElement } from 'vue'
import GreetBtn from '@/components/GreetBtn.vue';

const GreetComp = defineCustomElement(GreetBtn)

customElements.define('greet-btn', GreetComp)