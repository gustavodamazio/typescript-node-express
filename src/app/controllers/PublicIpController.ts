import HttpsResponse from '@models/HttpsResponse';
import { HttpStatusCode } from '@models/HttpStatusCodes';
import IpView from '@views/IpView';
import { Request, Response } from 'express';

/**
 * Controller ip actions.
 *
 * @export
 * @class PublicIpController
 */
export default class PublicIpController {
    /**
     * Show user request public ip.
     *
     * @param {Request} request
     * @param {Response} response
     * @return {*}  {Response<HttpsResponse>}
     * @memberof PublicIpController
     */
    show(request: Request, response: Response): Response<HttpsResponse> {
        const ip = IpView.render(request);
        return response.status(HttpStatusCode.Ok).send(
            new HttpsResponse<{ ip: string }>({
                details: { ip },
                message: `Your public ip is ${ip}`,
                type: 'success',
            }).fromJson()
        );
    }
}
