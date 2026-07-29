import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

// Only keep real destinations. Dead `#` placeholders make the site feel broken.
export const SOCIALS: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/bigbobro",
    linkTitle: `${SITE.title} on GitHub`,
    icon: IconGitHub,
  },
] as const;

// Keep share targets that match likely readers; drop unused overseas chrome.
export const SHARE_LINKS: Social[] = [
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `在 X 分享这篇文章`,
    icon: IconBrandX,
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `通过邮件分享这篇文章`,
    icon: IconMail,
  },
] as const;
