import React, { Fragment, useState } from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import TechStackList from "./components/tech-stack-list";
import NavItem from "./components/nav-item";
import Section from "./components/section";
import Image from "next/image";
import { Languages, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./components/mode-toggle";
import ExperienceList from "./components/experience-list";

// 导航项数据
const navItems: { label: string; href: string }[] = [
  { label: "Home", href: "#home" }, // 关键成就的数据，以后多了放放 | 近期动向 | 超级简短介绍
  { label: "About Me", href: "#aboutMe" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Me", href: "#contactMe" },
];

const BrandLogo = () => (
  <Link href="/" passHref>
    <div className="text-xl font-bold cursor-pointer flex items-center mt-1">
      <Image src={"/logo.png"} alt={"logo"} width={30} height={30} />
      <div>Mirrorgo</div>
    </div>
  </Link>
);

function Page() {
  return (
    <main className="min-h-screen">
      {/* 顶栏 */}
      <nav className="sticky top-0 shadow-md z-10 h-10 flex items-center bg-white dark:bg-black bg-opacity-100 dark:bg-opacity-100">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 flex justify-between w-full">
          <div className="flex">
            <BrandLogo />
            <div className="flex justify-around items-center mx-10 w-fit gap-3">
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
          </div>
          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost">
              <Languages />
            </Button>
            {/* <IconSwitcher
              selectedIconIndex={0}
              onClick={() => {}}
              icons={[<Moon size="20" />, <Sun size="20" />]}
            /> */}
            <ModeToggle />
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
        <ExperienceList />
      </Section>

      <Section title="Projects" id="projects">
        <p>Content for Projects section.</p>
      </Section>
      <Section title="Contact Me" id="contactMe">
        <p>Content for Contact Me section.</p>
      </Section>
    </main>
  );
}
export default Page;
