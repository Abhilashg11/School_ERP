import Sidebar from "@/components/common/Sidebar";
import Navbar from "@/components/common/Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="h-auto bg-gray-800 text-white flex items-center">
        <Navbar />
      </header>

      {/* Main area: Sidebar + Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (left) */}
        <aside className="hidden md:block w-64 bg-gray-200 overflow-auto">
          <Sidebar />
        </aside>

        {/* Main content */}
        <main className="flex-1 p-4 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
