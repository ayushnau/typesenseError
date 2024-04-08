/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosObjectTypesense } from "./typesenseConfig";

export default function getSearchResults(payload: any) {
  console.log(payload);
  return new Promise((resolve, reject) => {
    let uri: any = `multi_search?x-typesense-api-key=2UzT50kPVsafbwi4FTCCNcJM3BoCrg62`;

    axiosObjectTypesense
      .post(uri, payload[0])
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((errors: any) => {
        reject(errors);
      });
  });
}
