import React from "react";
import Button from "../button/Button";
import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import "./singleTask.scss";

const SingleTask = () => {
  return (
    <div className="_single-task">
      <div className="top_section">
        <h1>عنوان المهمة</h1>
        <p>
          شراء لراء لوازم المتجر الجديراء لوازم المتجر الجديراء لوازم المتجر
        </p>
      </div>

      <div className="btm_section">
        <p>15/03/2023</p>
        <div className="_bottom">
          <div className="btn_container">
            <Button />
          </div>
          <div className="icon_container">
            <span className="eicon">
              <AiTwotoneEdit />
            </span>
            <span className="dicon">
              <AiFillDelete />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
