import { addElement } from '../../utilities/addElement.js'
import {
  NAVOUTLINE,
  NAVOUTLINECLASS,
  createTab
} from './elements.js'
import { isActiveNavigation as isActive } from '../../utilities/isActive.js'

export function initializeNav() {
  addElement(NAVOUTLINE, "#main")
}

export function initializeNavElements(elements, landingPageIndex) {
  for (const elementNumber in elements) {
    addElement(
      createTab(
        elements[elementNumber],
        elementNumber,
        isActive(elementNumber, landingPageIndex)
      ),
      NAVOUTLINECLASS
    )
  }
}
