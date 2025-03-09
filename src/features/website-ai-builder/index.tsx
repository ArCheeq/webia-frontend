import React, { ReactNode, useState } from 'react';

import { mockLayout } from "@/features/website-ai-builder/mock";
import { isStringNode, parseProps } from "@/lib";
import { useStore } from "@/store";

const AIWebsiteBuilder = () => {
	const [domTree] = useState(mockLayout);
	const open = useStore(state => state.drawer.open);

	const renderElement = (element: IElementEntity) => {
		const { type, props, children } = element;

		// Convert string-based functions into executable functions
		const parsedProps = parseProps(props);

		const onClick = (e: MouseEvent) => {
			e.preventDefault();
			e.stopPropagation();

			open(element);
		};

		return React.createElement(
			type,
			{...parsedProps, onClick},
			children?.map((child): ReactNode => isStringNode(child) ? child : renderElement(child)));
	};

	return <div className='p-4'>{renderElement(domTree)}</div>;
};

export default AIWebsiteBuilder;
