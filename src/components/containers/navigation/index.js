import { initializeNav, initializeNavElements } from './navigation.js'

export function generateNavigation(elements, landingPageIndex) {
  initializeNav()
  initializeNavElements(elements, landingPageIndex)
}
