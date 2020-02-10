import { addElement } from '../../utilities/addElement.js'
import { isActivePage as isActive } from '../../utilities/isActive.js'
import { determinePageType, updatePage } from './elements.js'

export function initializePages(pages, landingPageIndex) {
  var pageIds = []

  for (const pageNumber in pages) {
    const pageObject = pages[pageNumber]
    const pageId = "page-mdc-tab-" + (parseInt(pageNumber) + 1)
    pageIds.push(pageId)

    determinePageType(pageObject, isActive(pageNumber, landingPageIndex), pageId)
  }

  return pageIds
}

export function initializePageChange(pageIds) {
  const nav = mdc.tabBar.MDCTabBar.attachTo(document.querySelector('.mdc-tab-bar'))

  nav.listen('MDCTab:interacted', function (event) {
    const pageId = event.detail.tabId
    const pageIndex = parseInt(pageId.split("-")[2])

    for (const idNumber in pageIds) {
      updatePage(isActive(parseInt(idNumber) + 1, pageIndex), pageIds[idNumber])
    }
  })
}
