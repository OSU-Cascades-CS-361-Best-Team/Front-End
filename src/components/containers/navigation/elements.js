// Strings
export const NAVOUTLINE =
  "<div class=\"mdc-tab-bar fixed_bottom mdc-theme--background\" role=\"tablist\" data-mdc-auto-init=\"MDCTabBar\">" +
    "<div class=\"mdc-tab-scroller\">" +
      "<div class=\"mdc-tab-scroller__scroll-area\">" +
        "<div class=\"mdc-tab-scroller__scroll-content\"></div>" +
      "</div>" +
    "</div>" +
  "</div>"
export const NAVOUTLINECLASS = ".mdc-tab-scroller__scroll-content"
export const NAVTABACTIVECLASS = "mdc-tab--active"
export const NAVTABELEMENTACTIVECLASS = "mdc-tab-indicator--active"
const NAVRIPPLE = "<span class=\"mdc-tab__ripple\"></span>"

// Functions
export function createTabActive(activeClass = ""){
  return (
    "\
      <span class=\"mdc-tab-indicator" + activeClass + "\">\
        <span class=\"mdc-tab-indicator__content mdc-tab-indicator__content--underline\"></span>\
      </span>\
    "
  )
}
export function createIcon(iconName) {
  return ("<span class=\"mdc-tab__icon material-icons\" aria-hidden=\"true\">" +
    iconName +
  "</span>")
}
export function createTab(elementContent, elementNumber, activeArray, icon = "") {
  const name = elementContent
  const tabID = name + elementNumber
  const activeClass = activeArray[0]
  const activeSpan = createTabActive(activeArray[1])

  const tab = "<button class=\"mdc-tab" + activeClass + "\" role=\"tab\" aria-selected=\"true\" tabindex=\"" +
    elementNumber + "\">" +
      "<span class=\"mdc-tab__content\">" +
        icon +
        "<span class=\"mdc-tab__text-label\">" +
          name +
        "</span>" +
      "</span>" +
      activeSpan +
      NAVRIPPLE +
    "</button>"

  return tab
}
