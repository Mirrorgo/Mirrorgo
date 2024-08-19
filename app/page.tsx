"use client";
import React, { useRef, RefObject, useCallback, Fragment } from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

// 定义部分类型
type SectionRef = RefObject<HTMLDivElement>;
type SectionName = "home" | "aboutMe" | "experience" | "projects" | "contactMe";

// 定义Section组件的props类型
interface SectionProps {
  title: string;
  refProp: SectionRef;
  children: React.ReactNode;
}

// 封装Section组件
const Section: React.FC<SectionProps> = ({ title, refProp, children }) => (
  <div ref={refProp} className="min-h-screen p-6">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </div>
);

// 封装NavItem组件
const NavItem: React.FC<{ label: string; onClick: () => void }> = ({
  label,
  onClick,
}) => (
  <div
    onClick={onClick}
    className="cursor-pointer hover:text-blue-600 transition-colors duration-200"
  >
    {label}
  </div>
);

function Page() {
  // 使用对象存储所有ref，方便管理
  const sectionRefs: Record<SectionName, SectionRef> = {
    home: useRef(null),
    aboutMe: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    contactMe: useRef(null),
  };

  // 使用useCallback优化scrollToSection函数
  const scrollToSection = useCallback((ref: SectionRef) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // 导航项数据
  const navItems: { label: string; section: SectionName }[] = [
    { label: "Home", section: "home" },
    { label: "About Me", section: "aboutMe" },
    { label: "Experience", section: "experience" },
    { label: "Projects", section: "projects" },
    { label: "Contact Me", section: "contactMe" },
  ];

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
                <Fragment key={item.section}>
                  {index > 0 && (
                    <Separator orientation="vertical" className="h-6" />
                  )}
                  <NavItem
                    label={item.label}
                    onClick={() => scrollToSection(sectionRefs[item.section])}
                  />
                </Fragment>
              ))}
            </div>
            <div className="text-right">theme</div>
          </div>
        </div>
      </nav>

      {/* 内容部分 */}
      <Section title="Home" refProp={sectionRefs.home}>
        <p>Content for Home section.</p>
      </Section>
      <Section title="About Me" refProp={sectionRefs.aboutMe}>
        <p>Content for About Me section.</p>
      </Section>
      <Section title="Experience" refProp={sectionRefs.experience}>
        <p>Content for Experience section.</p>
      </Section>
      <Section title="Projects" refProp={sectionRefs.projects}>
        <p>Content for Projects section.</p>
      </Section>
      <Section title="Contact Me" refProp={sectionRefs.contactMe}>
        <p>Content for Contact Me section.</p>
      </Section>
    </main>
  );
}
export default Page;
