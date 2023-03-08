import Process from "./Process";

type Film = {
  id: string;
  brand: string;
  model: string;
  speed: number;
  format?: "135" | "120";
  isColor: boolean;
  isNegative: boolean;
  processes: Process[];
};

export default Film;
