import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { HeroSlider, VideoBanner, DoubleLinks, NewsSection, DealersCta, DownloadsCta } from '../components/home/index.js'
import { fetchVehicles } from '../features/vehicles/index.js'

export default function HomePage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchVehicles())
  }, [dispatch])

  return (
    <>
      <HeroSlider />
      <VideoBanner />
      <DoubleLinks />
      <NewsSection />
      <DealersCta />
      <DownloadsCta />
    </>
  )
}
