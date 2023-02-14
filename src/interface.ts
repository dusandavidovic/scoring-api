export type Entry = {
  Division?: number;
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
  Created?: string;
  Updated?: string;
};

export type processOptions = {
  formId: string;
  fullLoad?: boolean;
  timeStamp?: string;
  lastVersion?: string;
  noVersion?: boolean;
};

export type processFunctionProps = {
  content: string;
  options?: processOptions;
};
export type processFunction = (props: processFunctionProps) => void;

export interface IProcess {
  data: any[];
  callback: processFunction;
  options?: processOptions;
}
