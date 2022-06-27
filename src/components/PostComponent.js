import React from "react";
import Like from "./LikeComponent";
import SampleImage from "../images/avatars/image-amyrobson.png";

export default function Post() {
  return (
    <div className="postContainer">
      <Like />
      <div className="postContent">
        <div className="avatarDetails">
          <ul>
            <li className="topbarSpace">
              <img src={SampleImage} alt="avatar" width="25px" />
            </li>
            <li className="topbarSpace">amyrobson</li>
            <li className=" postDate">1 month ago</li>

            <li className="replyButtonContainer">
              <button id="replyButton">
                <svg
                  width="14"
                  height="13"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svg"
                >
                  <path
                    d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                    fill="#5357B6"
                  />
                </svg>
                Reply
              </button>
            </li>
          </ul>
        </div>
        <div className="posted">
          <p>
            We definitely recommend keeping antivirus software activated on your
            computer. However, misconfigured antivirus protections can sometimes
            interfere with your internet connection, so try turning off your
            antivirus software or firewall to see if the internet comes back.
          </p>
        </div>
      </div>
    </div>
  );
}
