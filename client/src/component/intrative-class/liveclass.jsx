import { useState, useEffect, useRef } from "react";
import livetv from "../../assets/material-symbols--live-tv.svg";
import { FadeOnVisible } from "../FadeOnVisible/FadeOnVisible";

const Liveclass = () => {
  return (
    <>
      <FadeOnVisible>
        <main>
        <div className="flex items-center md:text-xl teacher">
          <div>
            <img src={livetv} className="teacher-img" alt="" />
          </div>
          <div className="text-2xl img-teacher-text text-indigo-950">
            <h2 className="my-5 text-3xl font-bold">
              Interactive Live Classes:
            </h2>
            <p className="text-2xl">
              Join dynamic live classes that foster real-time interaction,
              ensuring a personalized learning experience and addressing your
              doubts instantly.
            </p>
          </div>
        </div>
        </main>
      </FadeOnVisible>
    </>
  );
};

export default Liveclass;
