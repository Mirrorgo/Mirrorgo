import Link from "next/link";

const NavItem: React.FC<{ label: string; href: string }> = ({
  label,
  href,
}) => {
  // 判断 href 是否是外部链接
  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto") ||
    href.startsWith("tel");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer" // 推荐与 target="_blank" 一起使用，以提高安全性
        className="cursor-pointer hover:text-blue-600 transition-colors duration-200"
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} passHref>
      <div className="cursor-pointer hover:text-blue-600 transition-colors duration-200">
        {label}
      </div>
    </Link>
  );
};

export default NavItem;
