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
      <Section title="Open Source Contribution" id="openSourceContribution">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
          <p className="mb-4 text-lg font-semibold">My Contributions:</p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Github className="mr-2 text-gray-600" />
              <a
                href="https://github.com/react-component/slider/pull/1041"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                react-component/slider - Pull Request #1041
              </a>
            </li>
            <li className="flex items-center">
              <Github className="mr-2 text-gray-600" />
              <a
                href="https://github.com/shadcn-ui/ui/pull/4519"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                shadcn-ui/ui - Pull Request #4519
              </a>
            </li>
            <li className="flex items-center">
              <Github className="mr-2 text-gray-600" />
              <a
                href="https://github.com/Rain120/athena/pull/4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Rain120/athena - Pull Request #4
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <p className="mb-4 text-lg font-semibold">My Project:</p>
          <div className="flex items-center">
            <Github className="mr-2 text-gray-600" />
            <a
              href="https://github.com/Mirrorgo/vite-react-crx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              vite-react-crx - Scaffolding Tool for Chrome Extensions
            </a>
          </div>
          <p className="mt-2 text-gray-700">
            A scaffolding tool that simplifies the process of developing Chrome
            extensions using React and Vite.
          </p>
        </div>
      </Section>
      <Section title="Projects" id="projects">
        <ProjectList />
      </Section>
    </main>
    // {/*
    // snippet 一些可以公开的代码片段
    //  */}
  );
}
export default Page;
