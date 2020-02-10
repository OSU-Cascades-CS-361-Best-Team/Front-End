import { generateNavigation } from './components/containers/navigation/index.js'
import { generatePageContent } from './components/containers/page-content/index.js'
import { generateScripts } from './components/containers/scripts/index.js'
import { generateHeaderData } from './components/containers/header-data/index.js'

export function generateWebsite(websiteContent) {
  const headerData = {
    title: websiteContent.websiteTitle,
    desc: websiteContent.websiteDesc,
    keywords: websiteContent.websiteKeywords
  }
  const landingPageIndex = websiteContent.landingPageIndex
  const navigation = websiteContent.navigation
  const pages = websiteContent.pages

  generateHeaderData(headerData)
  generateNavigation(navigation, landingPageIndex)
  generatePageContent(pages, landingPageIndex)
  generateScripts()
}
