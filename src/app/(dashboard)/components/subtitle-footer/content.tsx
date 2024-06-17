import { content } from "./styles";

type SubtitleFooterContentProps = {
  children: React.ReactNode;
};

export function SubtitleFooterContent(props: SubtitleFooterContentProps) {
  return <div {...props} className={content()} />;
}
