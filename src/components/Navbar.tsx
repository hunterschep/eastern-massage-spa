// Navbar optimization
<Image
  src={site.images.logo}
  loading="eager"
  priority
/>;

// Lazy loading for images in components
loading={priority ? "eager" : "lazy"};