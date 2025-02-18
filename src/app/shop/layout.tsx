import { Suspense } from "react";
import Footer from "@/components/Footer";

export default async function LayoutShop({ children }: { children: any }) {
  return (
    <div>
      <main className="min-h-screen max-w-6xl mx-auto p-8">{children}</main>
      <div className="h-24" />
      <Footer />
    </div>
  );
}
