import { amount } from "./styles";

type SubtitleFooterAmountProps = {
  children: React.ReactNode;
};

export function SubtitleFooterAmount(props: SubtitleFooterAmountProps) {
  return <h3 {...props} className={amount()} />;
}
