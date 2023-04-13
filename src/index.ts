import { getApiService } from "./api/service";
import { currentFormId } from "./config";

const apiInstance = getApiService({ formId: currentFormId, fullLoad: true });
