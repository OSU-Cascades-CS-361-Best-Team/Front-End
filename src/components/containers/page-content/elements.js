import { addElement } from '../../utilities/addElement.js'

function createPage(pagePath, isActive, pageId) {
  $.get(pagePath, function(data) {
    var page =
      "<div id=\"" + pageId + "\" class=\"" + isActive + "\">" +
        data +
      "</div>"

    addElement(page, "#main")
  })
}

export function updatePage(isActive, currentPageID) {
  $("#" + currentPageID).removeClass("none")
  $("#" + currentPageID).addClass(isActive)
}

export function determinePageType(pageObject, isActive, pageId, cardPageId) {
  switch (pageObject.type) {
    case "path":
      createPage(pageObject.path, isActive, pageId)
      break
    default:
      break
  }
}
