import * as React from "react";
const SvgInventory = ({ active = false, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={18}
    fill="none"
    className={active ? "text-blue-500" : "text-gray-400"}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={1.833}
      d="M18.246 10H15.56c-.48 0-.72 0-.923.108-.202.11-.335.31-.602.709l-.744 1.116c-.266.4-.4.6-.603.709s-.442.108-.923.108H8.227c-.48 0-.72 0-.923-.108-.202-.11-.336-.31-.602-.709l-.745-1.116c-.266-.4-.4-.6-.602-.709C5.152 10 4.912 10 4.432 10H1.746"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.833}
      d="M5.413 5.414 2.015 8.812a.92.92 0 0 0-.269.648v5.12a1.833 1.833 0 0 0 1.833 1.834h12.834a1.833 1.833 0 0 0 1.833-1.833V9.46a.92.92 0 0 0-.268-.649l-3.399-3.398"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.833}
      d="M14.577 10.917V4.649c0-.224 0-.336-.026-.441a1 1 0 0 0-.11-.266c-.056-.092-.136-.172-.293-.33L12.714 2.18c-.158-.159-.238-.239-.33-.295a1 1 0 0 0-.266-.11c-.104-.026-.216-.026-.44-.026H7.61c-.77 0-1.155 0-1.45.15-.258.131-.469.342-.6.6-.15.294-.15.68-.15 1.45v6.967"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.833}
      d="M10.91 1.75v2.2c0 .513 0 .77.1.966a.9.9 0 0 0 .4.4c.197.1.454.1.967.1h2.2"
    />
  </svg>
);
export default SvgInventory;
