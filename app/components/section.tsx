// 定义Section组件的props类型
interface SectionProps {
  title: string;
  id: string; // 新增 id 属性
  children: React.ReactNode;
}

// 封装Section组件
const Section: React.FC<SectionProps> = ({ title, id, children }) => (
  <div id={id} className="min-h-screen p-6 scroll-mt-[30px]">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </div>
);

export default Section;