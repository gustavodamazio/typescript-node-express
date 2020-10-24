import { Request } from 'express';

export default {
    render(request: Request): string {
        return request.ip || (request.headers['x-forwarded-for'] as string) || 'undefined';
    },
};
