"use client";
import { useUser } from "@clerk/nextjs";
import Tasks from "./components/tasks/Tasks";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const { user } = useUser();
  console.log(user);
  return (
    <main className="_hero">
      <Toaster />
      <h1 className="_title">جميع المهام</h1>
      <div className="_task-container">
        <Tasks />
      </div>
    </main>
  );
}
