import * as React from "react";

function ConsultingIcon(props) {
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
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-1 14v-4h2v4h-2zm0-6V7h2v3h-2z" />
    </svg>
  );
}

export default ConsultingIcon;
