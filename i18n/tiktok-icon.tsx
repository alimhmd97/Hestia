const TikTokIcon: React.FC<{ className?: string; size?: number }> = ({
  className = "",
  size = 24,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none" // Ensure the icon is not filled
      stroke="currentColor" // Use currentColor for stroke to allow styling via CSS
      strokeWidth="2" // Adjust stroke width as needed
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* TikTok logo path */}
      <path d="M19.5 7.5c0-1.38-1.12-2.5-2.5-2.5H7.5c-1.38 0-2.5 1.12-2.5 2.5v12c0 1.38 1.12 2.5 2.5 2.5h12c1.38 0 2.5-1.12 2.5-2.5V7.5z" />
      <path d="M16.5 15.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5zM12 15.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      <path d="M7.5 15.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
    </svg>
  );
};

export default TikTokIcon;
