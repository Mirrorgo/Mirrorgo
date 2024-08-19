import React, { Fragment } from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import TechStackList from "./components/tech-stack-list";
import NavItem from "./components/nav-item";
import Section from "./components/section";

// 导航项数据
const navItems: { label: string; href: string }[] = [
  { label: "Home", href: "#home" }, // 关键成就的数据，以后多了放放 | 近期动向
  { label: "About Me", href: "#aboutMe" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Me", href: "#contactMe" },
];

function Page() {
  return (
    <main className="min-h-screen">
      {/* 顶栏 */}
      <nav className="sticky top-0 bg-white shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[1fr_4fr_50px] items-center py-4">
            <Link href="/" passHref>
              <div className="text-xl font-bold cursor-pointer">Mirrorgo</div>
            </Link>
            <div className="flex justify-around items-center">
              {navItems.map((item, index) => (
                <Fragment key={item.href}>
                  {index > 0 && (
                    <Separator orientation="vertical" className="h-6" />
                  )}
                  <NavItem label={item.label} href={item.href} />
                </Fragment>
              ))}
              {/* 更多的链接 */}
              <Separator orientation="vertical" className="h-6" />
              <NavItem
                label={"Blog"}
                href={"https://www.yuque.com/mirrorgo/qvhwgq"}
              />
            </div>
            <div className="text-right">theme</div>
            {/* <div className="text-right">language</div> */}
          </div>
        </div>
      </nav>

      {/* 内容部分 */}
      <Section title="Home" id="home">
        <p>Content for Home section.</p>
      </Section>
      <Section title="About Me" id="aboutMe">
        <div>
          <p>
            Full-stack engineer with a strong focus on front-end development,
            dedicated to optimizing user experience and performance.
          </p>
          <p className="font-bold">Proficient in:</p>
          <p>
            <TechStackList />
          </p>
        </div>
      </Section>
      <Section title="Experience" id="experience">
        <p>Content for Experience section.</p>
      </Section>
      <Section title="Projects" id="projects">
        <p>Content for Projects section.</p>
      </Section>
      <Section title="Contact Me" id="contactMe">
        <p>Content for Contact Me section.</p>
      </Section>
      <div id="test">wow</div>
    </main>
  );
}
export default Page;
