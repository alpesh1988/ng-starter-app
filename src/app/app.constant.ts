/*
*
* Check https://github.com/lipis/flag-icon-css library for flag colors in constant AVAILABLE_LANGUAGES
*
*/
export const APP_CONSTANTS = {
  AVAILABLE_LANGUAGES: [ {
    COUNTRY_CODE: 'en',
    COUNTRY_NAME: 'EN',
    COUNTRY_FLAG_ICON_CLASSNAME: 'flag-icon-gb',
    default: false
  }, {
    COUNTRY_CODE: 'de',
    COUNTRY_NAME: 'DE',
    COUNTRY_FLAG_ICON_CLASSNAME: 'flag-icon-de',
    default: true
  } ],
  REAL_CURRENT_LANGUAGE: 'realCurrentLanguage',
  SHOW_SCROLL_TO_TOP_BUTTON_POSITION: 150,

  PAGES: {
    DASHBOARD: { NAME: 'DASHBOARD', URL: 'dashboard' }
  }
};
