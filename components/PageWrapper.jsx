export default function PageWrapper({ children, extraClasses }) {
  return <div className={`h-screen w-screen overflow-hidden ${extraClasses}`}>{children}</div>;
};
