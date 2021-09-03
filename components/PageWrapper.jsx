export default function PageWrapper({ children, extraClasses }) {
  return <div className={`h-screen w-screen ${extraClasses}`}>{children}</div>;
};
