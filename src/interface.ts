export interface IResult {
  firstName: string;
  lastName: string;
}

export type processFunctionProps = {
  content: string;
};
export type processFunction = (content: string) => void;

export interface IProcess {
  data: IResult[] | object[];
  callback: processFunction;
}
