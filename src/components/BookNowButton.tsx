import Link from "next/link";

interface BookNowButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function BookNowButton({ className, children = "Book Now" }: BookNowButtonProps) {
  return ( //TODO: Add the correct link
    <a 
      href=""
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
