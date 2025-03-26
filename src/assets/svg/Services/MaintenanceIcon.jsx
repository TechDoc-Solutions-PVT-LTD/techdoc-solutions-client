import * as React from "react";

function MaintenanceIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 1v2" />
      <path d="M12 21v2" />
      <path d="m4.22 4.22 1.42 1.42" />
      <path d="m18.36 18.36 1.42 1.42" />
      <path d="M1 12h2" />
      <path d="M21 12h2" />
      <path d="m4.22 19.78 1.42-1.42" />
      <path d="m18.36 5.64 1.42-1.42" />
      <path d="M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" />
      <path d="M9 16l-1.5 3" />
      <path d="M15 16l1.5 3" />
      <path d="M8 12l-4-4" />
      <path d="M16 12l4-4" />
    </svg>
  );
}

export default MaintenanceIcon;
