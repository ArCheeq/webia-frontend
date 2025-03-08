import { Icon } from '@iconify/react';

import { cn } from '@/lib';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string | React.ReactNode;
    loading?: boolean;
    disabled?: boolean;
    classNames?: {
        button?: string;
        text?: string;
        loader?: string;
    };
};

export function Button({ classNames, label, loading, disabled, ...props }: ButtonProps) {
    return (
        <button
            type="button"
            {...props}
            disabled={loading || disabled}
            className={cn(
                `flex items-center h-9 justify-center px-6 py-2 bg-zinc-800 hover:bg-zinc-900 active:bg-zinc-900/80 rounded-md transition-colors`,
                classNames?.button,
            )}
        >
            {loading && <Icon icon="fluent:spinner-ios-16-filled" className={cn('text-zinc-100 animate-spin', classNames?.loader)} />}
            {!loading && <span className={cn('font-medium text-zinc-100 text-sm truncate', classNames?.text)}>{label}</span>}
        </button>
    );
}
