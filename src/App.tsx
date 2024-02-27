import { useState } from "react";

import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import React from "react";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    //@ts-ignore
    setProjectState((projectState) => {
      return {
        ...projectState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelProject() {
    setProjectState((projectState) => {
      return {
        ...projectState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    //@ts-ignore
    setProjectState((projectState) => {
      const ProjectId = Math.random();
      const newProject = {
        ...projectData,
        id: ProjectId,
      };
      return {
        ...projectState,
        selectedProjectId: undefined,
        projects: [...projectState.projects, newProject],
      };
    });
  }

  console.log(projectState);
  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectState.projects} />
      {content}
    </main>
  );
}

export default App;
