import { HttpStatusCode } from './HttpStatusCodes';

/**
 * Model default server response.
 *
 * @export
 * @class HttpsResponse
 * @template T
 */
export default class HttpsResponse<T = { [key: string]: any }> {
    public details: T;
    public message: string;
    public status_code?: HttpStatusCode;
    public status_message?: string;
    public type: 'success' | 'error';

    /**
     * Creates an instance of HttpsResponse.
     * @param {Omit<HttpsResponse<T>, 'fromJson'>} {
     *         details,
     *         message,
     *         status_code,
     *         status_message,
     *         type,
     *     }
     * @memberof HttpsResponse
     */
    constructor({
        details,
        message,
        status_code,
        status_message,
        type,
    }: Omit<HttpsResponse<T>, 'fromJson'>) {
        this.details = details;
        this.message = message;
        this.status_code = status_code;
        this.status_message = status_message;
        this.type = type;
    }

    /**
     * Convert response from Json.
     *
     * @return {*}  {Pick<this, Exclude<keyof this, 'fromJson'>>}
     * @memberof HttpsResponse
     */
    public fromJson(): Pick<this, Exclude<keyof this, 'fromJson'>> {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { fromJson, ...rest } = this;
        return rest;
    }
}
