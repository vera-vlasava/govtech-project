/**
 * To learn more about Link Resolving check out the Prismic documentation
 * https://prismic.io/docs/vuejs/beyond-the-api/link-resolving
 */

export default function (doc) {
  var lang = 'de';
  if (doc.lang == 'en-us') {
    lang = 'en';
  }

  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'homepage') {
    return `/${lang}`
  }

  if (doc.type === 'page') {
    return `/${lang}/${doc.uid}`
  }

  if (doc.type === 'usecases') {
    return `/${lang}/usecases/${doc.uid}`
  }

  if (doc.type === 'top_menu') {
    return `/${lang}`
  }

  return '/not-found'
}