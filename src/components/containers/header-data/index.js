import {
  initializeTitle,
  initializeDesc,
  initializeKeywords
} from './header-data.js'

export function generateHeaderData(headerData) {
  const title = headerData.title
  const desc = headerData.desc
  const keywords = headerData.keywords

  initializeKeywords(keywords)
  initializeDesc(desc)
  initializeTitle(title)
}
