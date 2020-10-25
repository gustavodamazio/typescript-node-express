import { Request } from 'express';

export default {
    render(request: Request): string {
        return (request.headers['x-forwarded-for'] as string) || request.ip || 'undefined';
    },
};
