import 'styled-components'
import { ThemeType } from 'styles/theme.ts'
/**
 * style-component module extension, extending DefaultTheme with my custom theme type, to reflect my theme in the props
 **/
declare module 'styled-components' {
  interface DefaultTheme extends ThemeType {}
}
