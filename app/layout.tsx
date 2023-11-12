import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Sidebar from "./components/sidebar/Sidebar";
import { ClerkProvider } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";

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
  const { userId } = auth();
  console.log(userId);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <div
            className={`main-container arFo ${
              !userId ? " items-center justify-center" : ""
            } `}
          >
            {userId && <Sidebar />}

            {children}
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
