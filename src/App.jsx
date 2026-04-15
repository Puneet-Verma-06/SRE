import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import HomePage from './mvc/views/pages/HomePage'
import SectorsPage from './mvc/views/pages/SectorsPage'
import ServicesPage from './mvc/views/pages/ServicesPage'
import PaperFinishingPage from './mvc/views/pages/PaperFinishingPage'
import PackagingPage from './mvc/views/pages/PackagingPage'
import MedicalAndPharmaPage from './mvc/views/pages/MedicalAndPharmaPage'
import TexttilePage from './mvc/views/pages/TexttilePage'
import HolographicPage from './mvc/views/pages/HolographicPage'
import {
  getHolographicViewModel,
  getHomePageViewModel,
  getMedicalAndPharmaViewModel,
  getPackagingViewModel,
  getPaperFinishingViewModel,
  getSectorsPageViewModel,
  getServicesPageViewModel,
  getTexttileViewModel,
} from './mvc/controllers/homeController'
import './App.css'

function resolvePageFromLocation() {
  const hash = window.location.hash.toLowerCase()
  const pathname = window.location.pathname.toLowerCase()

  if (
    hash.startsWith('#/sectors/paper-finishing') ||
    pathname.endsWith('/sectors/paper-finishing')
  ) {
    return 'paper-finishing'
  }

  if (hash.startsWith('#/sectors/packaging') || pathname.endsWith('/sectors/packaging')) {
    return 'packaging'
  }

  if (
    hash.startsWith('#/sectors/medical-and-pharma') ||
    pathname.endsWith('/sectors/medical-and-pharma')
  ) {
    return 'medical-and-pharma'
  }

  if (hash.startsWith('#/sectors/texttile') || pathname.endsWith('/sectors/texttile')) {
    return 'texttile'
  }

  if (hash.startsWith('#/sectors/holographic') || pathname.endsWith('/sectors/holographic')) {
    return 'holographic'
  }

  if (hash.startsWith('#/sectors') || pathname.endsWith('/sectors')) {
    return 'sectors'
  }

  if (hash.startsWith('#/services') || pathname.endsWith('/services')) {
    return 'services'
  }

  return 'home'
}

function App() {
  const [activePage, setActivePage] = useState(resolvePageFromLocation)

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 90,
      easing: 'ease-out-cubic',
    })
  }, [])

  useEffect(() => {
    const syncPage = () => {
      setActivePage(resolvePageFromLocation())
    }

    window.addEventListener('hashchange', syncPage)
    window.addEventListener('popstate', syncPage)

    return () => {
      window.removeEventListener('hashchange', syncPage)
      window.removeEventListener('popstate', syncPage)
    }
  }, [])

  useEffect(() => {
    AOS.refreshHard()
  }, [activePage])

  if (activePage === 'sectors') {
    const viewModel = getSectorsPageViewModel()
    return <SectorsPage viewModel={viewModel} />
  }

  if (activePage === 'services') {
    const viewModel = getServicesPageViewModel()
    return <ServicesPage viewModel={viewModel} />
  }

  if (activePage === 'paper-finishing') {
    const viewModel = getPaperFinishingViewModel()
    return <PaperFinishingPage viewModel={viewModel} />
  }

  if (activePage === 'packaging') {
    const viewModel = getPackagingViewModel()
    return <PackagingPage viewModel={viewModel} />
  }

  if (activePage === 'medical-and-pharma') {
    const viewModel = getMedicalAndPharmaViewModel()
    return <MedicalAndPharmaPage viewModel={viewModel} />
  }

  if (activePage === 'texttile') {
    const viewModel = getTexttileViewModel()
    return <TexttilePage viewModel={viewModel} />
  }

  if (activePage === 'holographic') {
    const viewModel = getHolographicViewModel()
    return <HolographicPage viewModel={viewModel} />
  }

  const viewModel = getHomePageViewModel()

  return <HomePage viewModel={viewModel} />
}

export default App
