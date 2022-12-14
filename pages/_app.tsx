import { ApolloProvider } from '@apollo/client'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import type { FC } from 'react'
import { StrictMode } from 'react'
import { ThemeProvider } from 'styled-components'

import { useApollo } from '~/apollo/client'
import NProgress from '~/components/NProgress'
import AppNav from '~/components/layout/AppNav'
import GlobalStyle from '~/styles/global'
import { dark } from '~/styles/themes'
import '~/styles/globals.css'

const MyApp: FC<AppProps> = ({ Component, pageProps, router }) => {
  const client = useApollo(pageProps)

  return (
    <StrictMode>
      <ThemeProvider theme={dark}>
        <ApolloProvider client={client}>
          <GlobalStyle />
          <NProgress color={dark.colors.primary} spinner={false} />
          <AppNav />
          <AnimatePresence exitBeforeEnter initial={false}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </ApolloProvider>
      </ThemeProvider>
    </StrictMode>
  )
}

export default MyApp
