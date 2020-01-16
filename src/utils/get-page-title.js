import defaultSettings from '@/settings'

const title = defaultSettings.title || '凉瓜拌面'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
