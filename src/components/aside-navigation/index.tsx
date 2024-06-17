import { Logo } from "../ui/icon";
import { Menu } from "../menu";
import { CardBanner } from "../card-banner/inedx";
import { root, titleRoot, title } from "./styles";
import { SelectLanguage } from "../select-language";

type AsideNavigationProps = {
  className?: string;
  isSheet?: boolean;
};

export function AsideNavigation({
  className,
  isSheet = false,
}: AsideNavigationProps) {
  return (
    <aside className={root({ className })}>
      <div>
        <div className={titleRoot()}>
          <Logo />
          <h1 className={title()}>Blue</h1>
        </div>
        <Menu isSheet={isSheet} />
      </div>
      <div>
        <SelectLanguage className="mb-4 lg:hidden" />
        <CardBanner />
      </div>
    </aside>
  );
}
