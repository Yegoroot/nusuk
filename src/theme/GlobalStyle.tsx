/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
import { Theme, GlobalStyles } from '@mui/material'




const GlobalStylesBase = () => {
  return (
    <GlobalStyles
      styles={(theme: Theme) => {
        const isDark = theme.palette.mode !== 'light'

        return ({

          hr: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
            backgroundColor: theme.palette.text.secondary,
            border: 0,
            height: 1
          },

          a: {
            textDecoration: 'none'
          }
 


        })
      }}
    />
  )
}

export default GlobalStylesBase
