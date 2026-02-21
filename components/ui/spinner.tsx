function Spinner({ style, ...props }: React.ComponentProps<"svg">) {
  return (
    <>
      <style>{`@keyframes pulsekit-spin { to { transform: rotate(360deg) } }`}</style>
      <svg
        role="status"
        aria-label="Loading"
        width="16"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        style={{ animation: "pulsekit-spin 1s linear infinite", ...style }}
        {...props}
      >
        <circle opacity={0.25} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path opacity={0.75} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
      </svg>
    </>
  );
}

export { Spinner }
