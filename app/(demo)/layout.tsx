import AdminPanelLayout from "@/dashboard/components/admin-panel/admin-panel-layout";
// Import your BottomNav component
import BottomNav from "@/bottomsidebar/bottom-nav";
export default function DemoLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminPanelLayout>
     
        {children}
      </AdminPanelLayout>
      <BottomNav/>
       {/* Add BottomNav here */}
    </>
  );
}
