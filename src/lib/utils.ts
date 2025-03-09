import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function parseFunction(fnString: string) {
	try {
		return new Function('return ' + fnString)();
	} catch (e: any) {
		console.error('Failed to parse function:', fnString, e.message);
		return undefined;
	}
}

export function isFunctionProp(prop: any) {
	return typeof prop === 'string' && prop.startsWith('() =>');
}

export function parseProps(props: StringifiedHtmlProps | undefined) {
	if (!props) return {};

	const parsedProps = { ...props };

	// Convert string-based functions into executable functions
	for (const key in parsedProps) {
		const prop = parsedProps[key as keyof typeof parsedProps];
		if (isFunctionProp(prop)) {
			parsedProps[key as keyof typeof parsedProps] = parseFunction(prop);
		}
	}

	return parsedProps;
}

export function isStringNode(child: string | IElementEntity) {
	return typeof child === 'string';
}

export function splitCamelCase (str: string) {
	return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

