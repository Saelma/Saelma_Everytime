import React, { useState } from "react";
import "../css/WriteForm.css";
import writeImage from "../img/write.png";
import Hashtag from "../img/샾.png";
import ClipFile from "../img/File.png";

function WriteForm() {
  return (
    <div className="writeForm">
      <form class="write">
        <div>
          <input className="writeTitle " placeholder="글 제목"></input>
        </div>

        <hr color="#E3E3E3"></hr>

        <div className="textplace">
          <textarea className="writeText" placeholder="에브리타임"></textarea>
        </div>

        <hr color="#E3E3E3" style={{ margin: "0" }}></hr>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <button type="button" className="submitForm">
              <img
                src={Hashtag}
                style={{
                  width: "25px",
                  cursor: "pointer",
                  paddingBottom: "5px",
                  paddingLeft: "5px",
                }}
              />
            </button>

            <button type="button" className="submitForm">
              <img
                src={ClipFile}
                style={{
                  width: "35px",
                  cursor: "pointer",
                  paddingTop: "4px",
                  paddingBottom: "2px",
                  paddingLeft: "5px",
                }}
              />
            </button>
          </div>
          
          <button
            type="submit"
            className="submitForm"
            style={{ display: "inline-block" }}
          >
            <img
              src={writeImage}
              style={{
                width: "40px",
                cursor: "pointer",
              }}
            />
          </button>
        </div>
      </form>
    </div>
  );
}

export default WriteForm;
