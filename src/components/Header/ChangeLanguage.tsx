"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronDown } from "lucide-react";
import usaImage from "../assets/usaImage.svg";
import Image from "next/image";

const frameworks = [
  {
    value: "PT (BR)",
    label: "PT (BR)",
    img: usaImage,
  },
  {
    value: "EN (US)",
    label: "EN (US)",
    img: usaImage,
  },
  {
    value: "ES (ES)",
    label: "ES (ES)",
    img: usaImage,
  },
];

export function ChangeLanguage() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="justify-start gap-1 px-0"
        >
          <Image
            src={
              value
                ? frameworks.find((framework) => framework.value === value)?.img
                : frameworks[0]?.img
            }
            width={1}
            height={1}
            alt="Framework Icon"
            className="w-5"
          />
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : frameworks[0]?.label}
          <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-36">
        <Command>
          <CommandList>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
