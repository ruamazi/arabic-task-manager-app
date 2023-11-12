"use client";
import { useState } from "react";
import "./addtask.scss";
import { IoMdAdd } from "react-icons/io";
import axios from "axios";
import toast from "react-hot-toast";

type InputType = {
  title: string;
  desc: string;
  date: string;
  complete: boolean;
  important: boolean;
};

const AddTask = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputV, setInputV] = useState<InputType>({
    title: "",
    desc: "",
    date: "",
    complete: false,
    important: false,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const resp = await axios.post("/api/tasks", inputV);
      if (resp.data.Error) {
        return toast.error(resp.data.Error);
      }
      toast.success("تم انشاء المهمة بنجاح");
      console.log(resp.data);
    } catch (error) {
      console.log(error);
      toast.error("Somthing went wrong!");
    }
  };

  if (modalOpen) {
    return (
      <form className="arFo flex flex-col _add-task" onSubmit={handleSubmit}>
        <input
          className="title-input"
          type="text"
          placeholder={`${inputV.title === "" ? "title" : "zbu"}`}
          value={inputV.title}
          onChange={(e) =>
            setInputV((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <textarea
          className="desc-input"
          placeholder="قم بكتابة المحتوى هنا..."
          value={inputV.desc}
          onChange={(e) =>
            setInputV((prev) => ({ ...prev, desc: e.target.value }))
          }
        />
        <input
          className="date-input"
          type="date"
          value={inputV.date}
          onChange={(e) =>
            setInputV((prev) => ({ ...prev, date: e.target.value }))
          }
        />
        <div className="checkbox-wrapper">
          <input
            hidden
            type="checkbox"
            id="complete"
            onChange={() =>
              setInputV((prev) => ({ ...prev, complete: !inputV.complete }))
            }
          />
          <label
            className={`${inputV.complete ? "active-box" : "not-active-box"} `}
            htmlFor="complete"
          >
            تم انجازها
          </label>
          <input
            hidden
            type="checkbox"
            id="important"
            onChange={() =>
              setInputV((prev) => ({ ...prev, important: !inputV.important }))
            }
          />
          <label
            className={`${inputV.important ? "active-box" : "not-active-box"} `}
            htmlFor="important"
          >
            أولوية
          </label>
          <button>حفظ</button>

          <button type="button" onClick={() => setModalOpen(false)}>
            اغلق
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="_add-task" onClick={() => setModalOpen(true)}>
      <p>أضف مهمة جديدة</p>
      <IoMdAdd />
    </div>
  );
};

export default AddTask;
