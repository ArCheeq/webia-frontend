import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { endpoints } from '@/constants/endpoints';
import { LoginDto, LoginSchema } from '@/features/login/schemas/login.schema';
import { getStore } from '@/store';

export default function useLoginForm() {
    const form = useForm<LoginDto>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            auth_key: '',
        },
    });

    const onSubmit = form.handleSubmit(async (data) => {
        const auth = getStore().auth;

        try {
            auth.setAuthKey(data.auth_key);

            const response = await endpoints.GetSettings().request();
            if (response) auth.setAuthorized(true);
        } catch {
            auth.setAuthKey('');
            form.setError('auth_key', { message: 'Invalid credentials' });
        }
    });

    return {
        form,
        onSubmit,
    };
}
