import Sidebar from "@/components/common/Sidebar";
import Navbar from "@/components/common/Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-amber-100">
      {/* Navbar */}
      <header className="h-auto bg-gray-800 text-white flex items-center">
        <Navbar />
      </header>

      {/* Main area: Sidebar + Content */}
      <div className="flex flex-1 overflow-hidden max-h-[calc(100vh_-_calc(var(--spacing)_*_16))]">
        {/* Sidebar (left) */}
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 p-4 overflow-auto">{children}Admin</main>
      </div>
    </div>
  );
}
