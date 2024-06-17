import { root } from "./styles";

type SubtitleFooterProps = {
  children: React.ReactNode;
  separate?: boolean;
};

export function SubtitleFooter({
  separate = false,
  ...props
}: SubtitleFooterProps) {
  return <div {...props} className={root({ separate })} />;
}
