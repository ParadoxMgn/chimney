// import svgSprite from "gulp-svg-sprite";
import svgstore  from "gulp-svgstore";

export const svgSprive = () => {
  return app.gulp.src(`${app.path.src.svgicons}`, {})
  .pipe(
    app.plugins.plumber(
      app.plugins.notify.onError({
        title: "SVG",
        message: "Error: <%= error.message %>"
      })
    )
  )
  .pipe(svgstore())
  // .pipe(svgSprite({
  //   mode: {
  //     stack: {
  //       sprite: `../icons/icons.svg`,
  //       // Создается страница с перечнем иконок
  //       example: true
  //     }
  //   }
  // }))
  .pipe(app.gulp.dest(`${app.path.build.images}`))
}