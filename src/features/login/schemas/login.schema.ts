import { z } from 'zod';

export const LoginSchema = z.object({
    auth_key: z.string().min(8),
});

export type LoginDto = z.infer<typeof LoginSchema>;
