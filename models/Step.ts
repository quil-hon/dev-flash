export type Step = {
  id: string;
  processId: string;
  timerId: string;
  description: string;
};

export type ChemicalStep = {
  id: string;
  processId: string;
  chemicalDilutionId: string;
  timerId: string;
  description: string;
  temperature?: number;
};
