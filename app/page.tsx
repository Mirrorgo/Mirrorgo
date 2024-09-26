import TechStackList from "./components/tech-stack-list";
import Section from "./components/section";
import ExperienceList from "./components/experience-list";
import NavBar from "./components/NavBar";
import { Github, Linkedin } from "lucide-react";
import ProjectList from "./components/project-list";

function Page() {
  return (
    <main className="min-h-screen">
      {/* 顶栏 */}
      <NavBar />
      {/* 内容部分 */}
      {/* <Section title="Home" id="home">
        <p>Content for Home section.</p>
      </Section> */}
      <Section title="About Me" id="aboutMe">
        <div>
          <p>
            Full-stack engineer with a strong focus on front-end development,
            dedicated to optimizing user experience and performance.
          </p>
          <div>
            <TechStackList />
          </div>
        </div>
      </Section>
      <Section title="Experience" id="experience">
        <ExperienceList />
      </Section>

      <Section title="Projects" id="projects">
        <ProjectList />
      </Section>
      {/* <Section title="Open Source Contribution" id="openSourceContribution">
        <p>Content for Open Source Contribution section.</p>
      </Section> */}
    </main>
    // {/*
    // snippet 一些可以公开的代码片段
    //  */}
  );
}
export default Page;
