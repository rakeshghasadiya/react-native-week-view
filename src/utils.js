import moment from 'moment';

export const getFormattedDate = (date, format) => {
  return moment(date).format(format);
};
export const getFormattedDateName = (date, format) => {
  return moment(date).format('ddd');
};

export const setLocale = (locale) => {
  moment.locale(locale);
};

export const addLocale = (locale, obj) => {
  moment.locale(locale, obj);
};

export const getCurrentMonth = (date) => {
  return moment(date).format('MMMM Y');
};

export const getFormatedDate = (date) => {
  return moment(date).format('YYYY-MM-DD');
};
