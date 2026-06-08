import Script from "next/script";

const ga4MeasurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
const gtmContainerId = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID;

export default function Analytics() {
  return (
    <>
      {gtmContainerId ? (
        <>
          <Script id="gtm-dataLayer" strategy="lazyOnload">
            {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'gtm.start': new Date().getTime(),
  event: 'gtm.js'
});`}
          </Script>
          <Script
            src={`https://www.googletagmanager.com/gtm.js?id=${gtmContainerId}`}
            strategy="lazyOnload"
          />
        </>
      ) : null}

      {ga4MeasurementId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`}
            strategy="lazyOnload"
          />
          <Script id="ga4-init" strategy="lazyOnload">
            {`(function(){
  try {
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = window.gtag || gtag;
    gtag('js', new Date());
    gtag('config', '${ga4MeasurementId}', { send_page_view: true });
  } catch (e) {
    // swallow errors to avoid blocking UI in privacy-restricted environments
  }
})();`}
          </Script>
        </>
      ) : null}
    </>
  );
}
