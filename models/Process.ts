import { ChemicalStep, Step } from "./Step";

type Process = {
  id: string;
  filmId: string;
  description: string;
  targetSpeed: number;
  steps: (Step | ChemicalStep)[];
};

export default Process;
