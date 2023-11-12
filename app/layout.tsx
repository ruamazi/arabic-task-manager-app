import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Sidebar from "./components/sidebar/Sidebar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Manager APP",
  description: "Create and Save and Manage your tasks easily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={inter.className}>
          <div className={`main-container arFo  `}>
            <Sidebar />
            {children}
          </div>
        </body>
      </ClerkProvider>
    </html>
  );
}
