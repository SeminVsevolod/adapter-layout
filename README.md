# adapter-layout

![layout](https://user-images.githubusercontent.com/35951053/89719289-786ba680-d9cf-11ea-84e4-e13089ab4d01.gif)

1) Сверстать лейаут по примеру из картинки. Не нужно заморачиваться с пикселхантингом и пытаться воспроизвести макет. Достаточно сделать основные колонки и отобразить основные элементы из макета


To get started:

1. Clone the repository:

    ```bash
    git clone https://github.com/tailwindcss/playground.git tailwindcss-playground

    cd tailwindcss-playground
    ```

2. Install the dependencies:

    ```bash
    # Using npm
    npm install

    # Using Yarn
    yarn
    ```

3. Start the development server:

    ```bash
    # Using npm
    npm run serve

    # Using Yarn
    yarn run serve
    ```

    Now you should be able to see the project running at localhost:8080.

4. Open `public/index.html` in your editor and start experimenting!

## Building for production

Even though this isn't necessarily a starter kit for a proper project, we've included an example of setting up both [Purgecss](https://www.purgecss.com/) and [cssnano](https://cssnano.co/) to optimize your CSS for production.

To build an optimized version of your CSS, simply run:

```bash
# Using npm
npm run production

# Using Yarn
yarn run production
```

After that's done, check out `./public/build/tailwind.css` to see the optimized output.
