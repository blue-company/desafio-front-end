export interface GetAllDashboardResponse {
  salesToday: SalesToday;
  platformData: Platforms[];
  totalIncome: TotalIncome[];
  lives: Lives[];
  reality: Reality[];
  topProducts: TopProduct[];
  serviceLevel: ServiceLevel[];
}

export interface SalesToday {
  salesAmount: SalesTodaySubFields;
  totalNumberContracts: SalesTodaySubFields;
  deployed: SalesTodaySubFields;
  newContracts: SalesTodaySubFields;
}

export interface SalesTodaySubFields {
  amount: number;
  percentMoreYesterday: number;
}

export interface Platforms {
  name: string;
  'TD Consultoria': number;
  'RIKO Plataforma': number;
  'Blue Serviços': number;
}

export interface TotalIncome {
  name: string;
  Aguardando: number;
  Implantadas: number;
}

export interface Lives {
  lastMonth: number;
  thisMonth: number;
}

export interface Reality {
  name: string;
  contratosFinalizados: number;
  Aguardando: number;
}

export interface TopProduct {
  id: number;
  productName: string;
  leverage: number;
  percent: number;
}

export interface ServiceLevel {
  expectation: number;
  reality: number;
}
