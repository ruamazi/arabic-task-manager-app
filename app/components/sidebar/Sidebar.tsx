"use client";
import "./sidebar.scss";
import React, { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdLabelImportant, MdFileDownloadDone } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import Link from "next/link";
import { useAuth, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const [displayContent, setDisplayContent] = useState("");
  const { signOut } = useClerk();
  const router = useRouter();
  const { isSignedIn } = useAuth();
  console.log(isSignedIn);

  const handleLogout = () => {
    signOut(() => router.push("/sign-in"));
    console.log("clicked");
  };

  return (
    <div>
      {isSignedIn ? (
        <div className="_sidebar">
          <div className="_profile">
            <div className="img-con">
              <img
                className="profile-img"
                src="/profile.jpg"
                alt="profile picture"
              />
            </div>

            <div className="username-text">
              <p className="username">Username</p>
              <p className="extra">Messi</p>
            </div>
          </div>
          <div className="_filter">
            <Link
              href={"/"}
              className={`${displayContent === "home" ? "active-btn" : ""}`}
              onClick={() => setDisplayContent("home")}
            >
              <AiFillHome />
              جميع المهام
            </Link>

            <Link
              href={"/important"}
              className={`${
                displayContent === "important" ? "active-btn" : ""
              }`}
              onClick={() => setDisplayContent("important")}
            >
              <MdLabelImportant />
              المهام الهامة
            </Link>
            <Link
              href={"/done"}
              className={`${displayContent === "done" ? "active-btn" : ""}`}
              onClick={() => setDisplayContent("done")}
            >
              <MdFileDownloadDone />
              مهام تم انجازها
            </Link>
            <Link
              href={"/do-now"}
              className={`${displayContent === "do-now" ? "active-btn" : ""}`}
              onClick={() => setDisplayContent("do-now")}
            >
              <FaTasks />
              قم بها الآن
            </Link>
          </div>
          <div className="_sign-out" onClick={handleLogout}>
            <p>
              <FaSignOutAlt />
            </p>
            <p>تسجيل الخروج</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Sidebar;
