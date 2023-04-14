import AuthNavbar from "@components/navbar/AuthNavbar";
import Sidebar from "@components/Sidebar";

export const metadata = {
  title: "CoinSynch Dashboard",
  description: "The best place to manage your crypto!",
};

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
