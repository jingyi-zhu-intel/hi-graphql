import { Hyperlink } from "@spark-design/react";

export interface HiHyperlinkProps {
  text: string;
  href?: string;
}

export const HiHyperlink = ({
  text,
  href = "https://intel.com",
}: HiHyperlinkProps) => {
  return <Hyperlink href={href}>{text}</Hyperlink>;
};
