import Image from "next/image";

type WithChildren = {
  children?: React.ReactNode;
  className?: string;
};

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Section({
  children,
  className,
  id,
}: WithChildren & { id?: string }) {
  return (
    <section id={id} className={cx("quiet-section", className)}>
      {children}
    </section>
  );
}

export function Shell({
  children,
  className,
  narrow = false,
}: WithChildren & { narrow?: boolean }) {
  return (
    <div
      className={cx(
        "mx-auto w-full px-4 sm:px-6",
        narrow ? "max-w-4xl" : "max-w-6xl",
        className
      )}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  label,
  title,
  children,
  className,
}: WithChildren & { label?: string; title: string }) {
  return (
    <div className={cx("max-w-3xl", className)}>
      {label ? <p className="detail-label mb-3">{label}</p> : null}
      <h2 className="section-title">{title}</h2>
      {children ? <div className="section-copy mt-4">{children}</div> : null}
    </div>
  );
}

export function SoftPanel({
  children,
  className,
  dark = false,
}: WithChildren & { dark?: boolean }) {
  return (
    <div className={cx(dark ? "soft-panel-dark" : "soft-panel", className)}>
      {children}
    </div>
  );
}

export function TrustChip({ children, className }: WithChildren) {
  return <span className={cx("trust-chip", className)}>{children}</span>;
}

export function DecorativeRule({ className }: { className?: string }) {
  return <span aria-hidden="true" className={cx("decorative-rule", className)} />;
}

export function ImageFrame({
  src,
  alt,
  priority = false,
  sizes,
  className,
  imageClassName,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes: string;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div className={cx("image-frame", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className={cx("object-cover", imageClassName)}
        priority={priority}
        sizes={sizes}
        unoptimized
      />
    </div>
  );
}
