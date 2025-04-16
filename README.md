# dashtomer-fe-test-3
This test is developed by M. Arya Yudha Saputra by using Vue 3 in Vite.


## Reason why is using Virtual DOM

I can work more efficient and faster to decide what's on Prop and what data should I pass. I also can manage data update inside the component and other than that I can reduce unnecessary re-rendering.

## Run Project

### Project Setup

```sh
npm install
```

### Project Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Create & Run Demo / Example
- Create a HTML file in `dist` folder
- Create an element with an ID `my-component` for example
- Include js file `js/greeter.js` inside `script` tag
- Add this line to initialize the component
```sh
    Greeter.init('#my-component', { message: 'Hello from the host app!' });
```
- You can change / add any options (props) inside the `<body>` as follow : 
```sh
  Greeter.init('#my-component', { message: 'Hello from the host again!', textColor: 'red', bgColor: 'green', style:'rounded' });
```
- Finally, open the HTML file you created in the browser

#### Component Options
| Prop Name    | Type | Default |
| -------- | ------- | ------- |
| message  | String    | 'Hello there!' |
| bgcolor | String     | '#f5f5f5' |
| textcolor| String   | '#000000' |
| size | String ('sm' / 'md' / 'lg' / 'xl') | 'md' |
| style | String ('default' / 'rounded' / 'oval') | 'default' |