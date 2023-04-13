import AuthNavbar from "@components/navbar/AuthNavbar";
import Sidebar from "./Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthNavbar />

      <div className="relative flex min-h-screen">
        <Sidebar />
        {children}
      </div>
    </>
  );
}
