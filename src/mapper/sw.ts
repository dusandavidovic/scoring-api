import { Entry } from "../interface";

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
  DateCreated: "Created",
  DateUpdated: "Updated",
};

// const prepareFields = (fields: any[]): IFlds[] => {
//   let newArr: IFlds[] = [];
//   fields.forEach((value) => {
//     if (value["ID"].substr(0, 5) === "Field")
//       newArr.push({
//         title: value["Title"],
//         id: value["ID"],
//       });
//   });
//   return newArr;
//};

const getFleet = (entry: Entry): Entry => {
  if (entry.FleetText?.substring(0, 10) === "Non-Flying") {
    if (entry.Rating && entry.Rating < 174) {
      entry.Fleet = "NFS1";
      entry.Division = 3;
    } else {
      entry.Fleet = "NFS2";
      entry.Division = 2;
    }
  } else {
    if (entry.FleetText?.substring(0, 6) === "Flying") {
      if (entry.Rating && entry.Rating < 130) {
        entry.Fleet = "FS1";
        entry.Division = 1;
      } else {
        entry.Fleet = "FS2";
        entry.Division = 3;
      }
    } else {
      entry.Fleet = "SHARK";
      entry.Division = 2;
    }
  }
  return entry;
};

export default {
  Map,
  //prepareFields,
  getFleet,
};
