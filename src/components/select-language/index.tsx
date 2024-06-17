import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type SelectLanguageProps = {
  className?: string;
};

export function SelectLanguage({ className }: SelectLanguageProps) {
  return (
    <div className={className}>
      <Select defaultValue="pt-br">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="pt-br">🇧🇷 PT (BR)</SelectItem>
          <SelectItem value="en">🇺🇸 EN</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
