import BreadCrumb from '../components/BreadCrumb/BreadCrumb';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="main-container">
      <div className="full-size-container">
        <BreadCrumb />
        {children}
      </div>
    </div>
  );
}
