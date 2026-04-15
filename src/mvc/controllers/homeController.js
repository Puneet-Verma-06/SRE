import siteModel from '../models/siteModel'

export function getHomePageViewModel() {
  return {
    brand: siteModel.brand,
    navigation: siteModel.navigation,
    locale: siteModel.locale,
    hero: siteModel.hero,
    nextHero: siteModel.nextHero,
    thirdHero: siteModel.thirdHero,
    expertise: siteModel.expertise,
    tailorMade: siteModel.tailorMade,
    sectors: siteModel.sectors,
    values: siteModel.values,
    career: siteModel.career,
    contact: siteModel.contact,
    footer: siteModel.footer,
  }
}

export function getSectorsPageViewModel() {
  return {
    brand: siteModel.brand,
    navigation: siteModel.navigation,
    locale: siteModel.locale,
    sectors: siteModel.sectors,
    contact: siteModel.contact,
    footer: siteModel.footer,
  }
}

export function getServicesPageViewModel() {
  return {
    brand: siteModel.brand,
    navigation: siteModel.navigation,
    locale: siteModel.locale,
    services: siteModel.services,
    contact: siteModel.contact,
    footer: siteModel.footer,
  }
}

export function getPaperFinishingViewModel() {
  return {
    brand: siteModel.brand,
    navigation: siteModel.navigation,
    locale: siteModel.locale,
    paperFinishing: siteModel.paperFinishing,
    contact: siteModel.contact,
    footer: siteModel.footer,
  }
}

export function getPackagingViewModel() {
  return {
    brand: siteModel.brand,
    navigation: siteModel.navigation,
    locale: siteModel.locale,
    packaging: siteModel.packaging,
    contact: siteModel.contact,
    footer: siteModel.footer,
  }
}

export function getMedicalAndPharmaViewModel() {
  return {
    brand: siteModel.brand,
    navigation: siteModel.navigation,
    locale: siteModel.locale,
    medicalAndPharma: siteModel.medicalAndPharma,
    contact: siteModel.contact,
    footer: siteModel.footer,
  }
}

export function getTexttileViewModel() {
  return {
    brand: siteModel.brand,
    navigation: siteModel.navigation,
    locale: siteModel.locale,
    texttile: siteModel.texttile,
    contact: siteModel.contact,
    footer: siteModel.footer,
  }
}

export function getHolographicViewModel() {
  return {
    brand: siteModel.brand,
    navigation: siteModel.navigation,
    locale: siteModel.locale,
    holographic: siteModel.holographic,
    contact: siteModel.contact,
    footer: siteModel.footer,
  }
}
