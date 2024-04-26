export default {
  content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"], // Definir las fuentes de contenido
  plugins: [require("daisyui")],

  // Resto de la configuración de daisyUI
  daisyui: {
    themes: false,
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
}
