import {
  BrazilFlag,
  FranceFlag,
  GermanyFlag,
  ItalyFlag,
  SpainFlag,
  UnitedStatesFlag
} from '@/components/icon/flags';

interface SelectLanguagesType {
  id: number;
  name: string;
  value: string;
  flag: React.ComponentType<React.ComponentPropsWithoutRef<'svg'>>;
}

export const SelectLanguages: SelectLanguagesType[] = [
  {
    id: 1,
    name: 'PT (BR)',
    value: 'PT(BR)',
    flag: BrazilFlag
  },
  {
    id: 2,
    name: 'EN (US)',
    value: 'EN(US)',
    flag: UnitedStatesFlag
  },
  {
    id: 3,
    name: 'ES (ES)',
    value: 'ES(ES)',
    flag: SpainFlag
  },
  {
    id: 4,
    name: 'FR (FR)',
    value: 'FR(FR)',
    flag: FranceFlag
  },
  {
    id: 5,
    name: 'DE (DE)',
    value: 'DE(DE)',
    flag: GermanyFlag
  },
  {
    id: 6,
    name: 'IT (IT)',
    value: 'IT(IT)',
    flag: ItalyFlag
  }
];
