import { NAVTABACTIVECLASS, NAVTABELEMENTACTIVECLASS } from '../containers/navigation/elements.js'

export function isActiveNavigation(elementNumber, activeNumber) {
  const activeReturn = {
    case: [" " + NAVTABACTIVECLASS, " " + NAVTABELEMENTACTIVECLASS],
    default: ["", ""]
  }
  return isActive(elementNumber, activeNumber, activeReturn)
}

export function isActivePage(elementNumber, activeNumber) {
  const activeReturn = {
    case: "",
    default: "none"
  }
  return isActive(elementNumber, activeNumber, activeReturn)
}

function isActive(elementNumber, activeNumber, returnValue) {
  switch (parseInt(elementNumber)) {
    case activeNumber:
      return returnValue.case
    default:
      return returnValue.default
  }
}
