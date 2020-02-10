import { initializePages, initializePageChange } from './page-content.js'

export function generatePageContent(pages, landingPageIndex) {
  const pageIds = initializePages(pages, landingPageIndex)
  initializePageChange(pageIds)
}
