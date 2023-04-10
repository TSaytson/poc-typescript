import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';

export function schemaValidation(schema: ZodSchema) {
    return (req: Request,
        res: Response,
        next: NextFunction) => {
        
        const result = schema.safeParse(
            req.body
        );
        if (!result.success) {

            // const { errors: [error] } = result.error;

            // return res.send(`${error.path} ${error.message}`)
            
            const errors = result.error.errors.
                map((error) =>
                    `${error.path} ${error.message}`);

            return res.status(422).
                send(errors);
        }
        next();
    }
}