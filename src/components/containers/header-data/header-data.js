import { preAddElement as addElement } from '../../utilities/addElement.js'

export function initializeTitle(title) {
  const titleElement = "<title>" + title + "</title>"

  addElement(titleElement, "head")
}
export function initializeDesc(desc) {
  const descElement = "<meta name=\"description\" content=\"" + desc + "\">"

  addElement(descElement, "head")
}

export function initializeKeywords(keywords) {
  var keywordString = ""
  for (const wordIndex in keywords) {
    if (parseInt(wordIndex) + 1 === keywords.length) {
      keywordString += keywords[wordIndex]
    } else {
      keywordString += keywords[wordIndex] + ", "
    }
  }

  const keywordsElement = "<meta name=\"keywords\" content=\"" + keywordString + "\">"

  addElement(keywordsElement, "head")
}
