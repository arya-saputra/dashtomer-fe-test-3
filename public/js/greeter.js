const Greeter = {
    init(selector, options = {}) {
      const target = document.querySelector(selector);
      if (!target) {
        console.error('Greeter: Element not found:', selector);
        return;
      }

      //   load compiled component
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "greeter-btn.js";

      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "greeter-btn.css";
      document.body.appendChild(script);
      document.head.appendChild(link);

      target.innerHTML = `<greet-btn 
        message="${options?.message || 'Hello there!'}"
        bgcolor="${options?.bgColor || '#f5f5f5'}"
        textcolor="${options?.textColor || '#000000'}"
        size="${options?.size || 'md'}"
        style="${options?.style || 'default'}"
        label="${options?.label || 'Click me!'}"></greet-btn>`;
    }
  };

  // Make it globally available
  window.Greeter = Greeter;