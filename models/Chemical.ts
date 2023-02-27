export enum ChemicalType {
  Developer,
  StopBath,
  Fixier,
}

type Chemical = {
  id: string;
  brand: string;
  model: string;
  chemicalType: ChemicalType;
};

export default Chemical;
