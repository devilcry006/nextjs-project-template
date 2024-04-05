import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix} from './navigation';

export default createMiddleware({
  // A list of all locales that are supported
  locales,
 
  // Used when no locale matches
  defaultLocale: 'th',
  localeDetection: false,
  localePrefix
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: [ '/((?!api|_next|_vercel|.*\\..*).*)']
};