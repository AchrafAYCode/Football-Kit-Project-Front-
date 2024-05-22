import SideBar from "@/components/admin/sideBar";
import Menu from "@/components/client/menu";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";

export default async function AdminLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session || (session && session.user.role !== "admin")) {
    return (
      <section className="py-24">
        <div className="container">
          <h1 className="text-2xl font-bold">
            You are not authorized to view this page
          </h1>
        </div>
      </section>
    );
  }
  return (
    <div className="row mt-4">
      <div className="col-md-3"></div>
      <div className="col-md-9">
        <SideBar />
        {children}
      </div>
    </div>
  );
}
