const DATA: { name: string }[] = [{ name: "Andre" }, { name: "John" }];

type processFunction = (content: string) => void;

function callback(arg: string): void {
  console.log("from callback", arg);
}

interface IProcess {
  data: object[];
  callback: processFunction;
}

function test01(props: IProcess): void {
  console.log("props", props);
  props.data?.forEach((val: any, index) => {
    console.log(val.name);
    // const aaa = val.name;
    const aaa = val["name"];
    callback("Hello world " + index);
  });
}

//console.log(test01);

test01({ data: DATA, callback: callback });
