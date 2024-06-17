import { title } from "./styles";

type SubtitleFooterTitleProps = {
  children: React.ReactNode;
};

export function SubtitleFooterTitle(props: SubtitleFooterTitleProps) {
  return <h3 {...props} className={title()} />;
}
