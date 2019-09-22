import Typography from 'typography'
import t1 from 'typography-theme-wordpress-2016'


t1.bodyFontFamily = ["PT Sans", "Arial", "sans-serif"]
t1.baseLineHeight = "1.45"
t1.headerFontFamily = ["PT Sans", "Arial", "sans-serif"]
t1.headerWeight = "600"
t1.headerLineHeight = "1.15"


t1.overrideThemeStyles = () => {

  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
  }
}

// delete t1.googleFonts

const typography = new Typography(t1)

//

console.dir(typography.options);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
