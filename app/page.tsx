import TechStackList from "./components/tech-stack-list";
import Section from "./components/section";
import ExperienceList from "./components/experience-list";
import NavBar from "./components/NavBar";
import { Github, Linkedin } from "lucide-react";

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

      <Section title="Demos" id="demos">
        <p>Content for Projects section.</p>
      </Section>
    </main>
  );
}
export default Page;
