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
            console.log(result.error.errors);
            const errors = result.error.errors.
                map((error) => error.message);
            console.log(errors);
        }

        // if (error) {

        //     const errors = error.details.map(
        //         (detail) => detail.message
        //     );

        //     console.log(error);

        //     return res.status(422).
        //         send(error);
        // }
        next();
    }
}