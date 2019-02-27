export const GA_TRACKING_ID = 'UA-117491914-2';
/* eslint-disable */
export const trackPageview = (url) => {
  // eslint-disable-next-line no-undef
  window.gtag('config', GA_TRACKING_ID, {
    page_location: url,
  });
};

export const trackEvent = ({
  action, category, label, value,
}) => {
  // eslint-disable-next-line no-undef
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
