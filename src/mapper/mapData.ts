// import { convert2CSV, data } from "../utility/convert";
import { IResult, IProcess, processFunction } from "../interface";
import convert2CSV from "../utility/convert";

const columns = ["First Name", "Last Name"];

const mapProcess1 = (
  data: string,
  procFunc: processFunction
): string | void => {
  console.log("mapProcess1_data", data);
  console.log("mapProcess1_procFunc", procFunc);
};

const mapProcess = (props: IProcess): string | void => {
  const { data, callback } = props;

  const result = mapTest(data);
  const parm: IProcess = {
    data: result,
    callback: callback,
  };
  const csv: string = convert2CSV(parm);
  // 4const aaa = convert2CSV(parm);
  console.log("mapProcess", csv);
  //if (processHandler) processHandler(csv);
};

function mapTest(data: object[]): IResult[] {
  const result: IResult[] = [];
  data.forEach((value: any) => {
    // const { Field2, Field3, Field5: email } = value; // desctructuring
    // console.log(Field2, Field3, email);
    const fname = value["Field2"];
    const lname = value["Field3"];
    //  console.log(JSON.stringify(value));
    result.push({ firstName: fname, lastName: lname });
  });

  return result;
}

export default {
  mapProcess1,
  mapProcess,
  mapTest,
};
