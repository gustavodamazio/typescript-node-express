import HttpsResponse from '@models/HttpsResponse';
import { HttpStatusCode } from '@models/HttpStatusCodes';
import { ErrorRequestHandler } from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
    console.error(error);
    return response.status(HttpStatusCode.InternalServerError).json(
        new HttpsResponse({
            details: {},
            message: 'Aborted',
            type: 'error',
        }).fromJson()
    );
};

export default errorHandler;
