export interface IResult {
  firstName: string;
  lastName: string;
}

export interface IEntries {
  Fleet: string;
  Boat: string;
  Class: string;
  HelmName: string;
  Rating: number;
  FirstName: string;
  LastName: string;
  RatingFS: number;
  RatingNFS: number;
}
export type Entry = {
  Fleet?: string;
  Boat?: string;
  Class?: string;
  HelmName?: string;
  Rating?: number;
  FirstName?: string;
  LastName?: string;
  RatingFS?: number;
  RatingNFS?: number;
  FleetText?: string;
};

export interface IFlds {
  title: string;
  id: number;
}

export type processOptions = {
  fullLoad?: boolean;
  deltaLoad?: boolean;
};

export type processFunctionProps = {
  content: string;
};
export type processFunction = (content: string) => void;

export interface IProcess {
  data: any[];
  callback: processFunction;
  options?: processOptions;
}
