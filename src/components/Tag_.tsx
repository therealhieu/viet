// Write Tag react component, href is /tags/${tag}
// Style: background: transparent, margin-right: 0.5rem
// On hover,  textDecoration: underline
export interface Props {
  name: string;
  size?: "sm" | "lg";
}

export default function Tag_({ name, size = "sm" }: Props) {
  const sizeClass = size === "sm" ? "text-sm" : "text-base";
  return (
    <a
      href={`/tags/${name}`}
      className={`mr-2 inline-block px-2 py-1 ${sizeClass} font-medium text-skin-accent decoration-dashed hover:underline`}
    >
      #{name}
    </a>
  );
}
