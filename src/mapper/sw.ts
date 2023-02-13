import { IFlds } from "../interface";
// type TMap = {
//   Field328: string;
//   Field213: string;
//   Field216: string;
//   Field999: string;
//   Field440: string;
//   Field9999: string;
//   Field2: string;
//   Field3: string;
//   Field220: string;
//   Field221: string;
// };
//const Map: TMap = {
const Map: { [key: string]: any } = {
  Field9998: "Fleet",
  Field213: "Boat",
  Field216: "Class",
  Field999: "HelmName",
  Field440: "SailNo",
  Field9999: "Rating",
  Field2: "FirstName",
  Field3: "LastName",
  Field220: "RatingFS",
  Field221: "RatingNFS",
  Field328: "FleetText",
};

const prepareFields = (fields: any[]): IFlds[] => {
  let newArr: IFlds[] = [];
  fields.forEach((value) => {
    if (value["ID"].substr(0, 5) === "Field")
      newArr.push({
        title: value["Title"],
        id: value["ID"],
      });
  });
  return newArr;
};

export default {
  Map,
  prepareFields,
};
