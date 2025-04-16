const Greeter = {
    init(selector, options = {}) {
      const target = document.querySelector(selector);
      if (!target) {
        console.error('Greeter: Element not found:', selector);
        return;
      }

      const app = Vue.createApp({
        data() {
          return {
            output:'',
            message: options.message || 'Hello from Vue Greeter!',
            bgColor: options.bgColor || '#ffffff',
            textColor: options.textColor || '#000000',
            label: options.label || 'Click me!',
            size: 'xl' // sm, md, lg, xl
          };
        },
        computed: {
            getSize() {
                return this.size == 'md'? 'padding:15px 30px;' : this.size == 'sm'? 'padding: 5px 10px' : this.size == 'lg'? 'padding: 20px 50px;':'padding: 30px 80px;'
            },
        },
        methods: {
            clickNow() {
                this.output = this.message;
            },
        },
        template: `
          <button class="greet-btn" style="border: none; font-family: sans-serif; cursor: pointer"
            :style="'background:'+bgColor+'; '+ getSize " @click="clickNow">
            <span :style="'color: '+ textColor +';'">{{ label }}</span>
          </button>
          <p>{{ output }}</p>
        `
      });

      app.mount(target);
    }
  };

  // Make it globally available
  window.Greeter = Greeter;