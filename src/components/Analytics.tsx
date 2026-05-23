import Script from "next/script";

const ga4MeasurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
const gtmContainerId = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID;

export default function Analytics() {
  return (
    <>
      {gtmContainerId ? (
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'gtm.start': new Date().getTime(),
              event: 'gtm.js'
            });
            var firstScript = document.getElementsByTagName('script')[0];
            var gtmScript = document.createElement('script');
            gtmScript.async = true;
            gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=${gtmContainerId}';
            firstScript.parentNode.insertBefore(gtmScript, firstScript);
          `}
        </Script>
      ) : null}

      {ga4MeasurementId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${ga4MeasurementId}', {
                send_page_view: true
              });
            `}
          </Script>
        </>
      ) : null}
    </>
  );
}
