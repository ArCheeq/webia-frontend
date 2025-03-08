import { Controller } from "react-hook-form";
import { TextInput } from "@mantine/core";

import { Button } from "@/components/Button";
import useLoginForm from "@/features/login/hooks/useLoginForm";

export default function LoginForm() {
	const { form, onSubmit } = useLoginForm();

	return (
		<form onSubmit={onSubmit} className="max-w-[420px] w-[420px] flex flex-col shadow-md shadow-zinc-200 rounded-lg bg-white overflow-hidden">
            <div className="flex flex-col px-6 pt-6">
                <h1 className="text-xl font-medium text-zinc-900">Sign In into admin panel</h1>
                <span className="text-sm font-normal text-zinc-400">Enter your credentials to continue</span>
            </div>

            <div className="flex flex-col p-6 gap-6">
                <Controller
                    control={form.control}
                    name="auth_key"
                    render={({ field, fieldState }) => (
                        <TextInput
                            type="password"
                            label="Password"
                            placeholder="Enter your password"
                            value={field.value}
                            onBlur={field.onBlur}
                            onChange={field.onChange}
                            error={fieldState.error?.message}
                        />
                    )}
                />
            </div>

            <div className="flex flex-col px-6 pb-6 pt-6 gap-6">
                <Button type="submit" label="Sign In" />
            </div>
        </form>
	);
}