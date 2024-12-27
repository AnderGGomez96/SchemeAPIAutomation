import { APIRequestContext } from "@playwright/test";
import { URL_YAPPY_MOBILE } from "../../config";

export async function getAccountsClientMobile(apiRequest: Promise<APIRequestContext>, clientId: any, clientIp: any) {
    return await (await apiRequest).fetch(`${URL_YAPPY_MOBILE}/yappy/api/account/account-by-client/${clientId}/${clientIp}`)
}