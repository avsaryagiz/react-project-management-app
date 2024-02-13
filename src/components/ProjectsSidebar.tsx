import React from "react";
import Button from "./Button";

export default function ProjectsSidebar({ onStartAddProject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
      <Button onClick={onStartAddProject}>
        <span className="text-yellow-400">+</span> Add Project
      </Button>
      <ul>
        <li>
          <a href="#">Project 1</a>
        </li>
        <li>
          <a href="#">Project 2</a>
        </li>
        <li>
          <a href="#">Project 3</a>
        </li>
      </ul>
    </aside>
  );
}
