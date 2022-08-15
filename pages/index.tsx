import type { NextPage } from 'next'
import type { FC } from 'react'

import useAxios from 'axios-hooks'
import AppHead from '~/components/AppHead'
import Page from '~/components/layout/Page'
import AppBox from '~/ui/AppBox'
import Heading from '~/ui/typography/Heading'
import Text from '~/ui/typography/Text'

const CoinGuekoData: FC = () => {
  const [{ data, loading, error }, refetch] = useAxios({
    baseURL: 'https://api.coingecko.com/api/v3/ping',
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <div>
      <button
        onClick={() => {
          refetch()
        }}
      >
        Refetcg
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

const Index: NextPage = () => (
  <Page>
    <AppHead title="Homepage" />
    <Heading as="h1">Index Page</Heading>
    <AppBox mt={2}>
      <Text>Hello from index page</Text>
      <CoinGuekoData />
    </AppBox>
  </Page>
)

export default Index
