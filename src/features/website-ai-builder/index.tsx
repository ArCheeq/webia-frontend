// import React, { useCallback,useState } from 'react';
//
// const AIWebsiteBuilder = () => {
// 	const [domTree, setDomTree] = useState(mockResponse);
//
// 	const parseFunction = useCallback((fnString) => {
// 		try {
//
// 			return new Function('return ' + fnString)();
// 		} catch (e) {
// 			console.error('Failed to parse function:', fnString);
// 			return undefined;
// 		}
// 	}, []);
//
// 	const renderElement = (element) => {
// 		const { type, props, children } = element;
// 		const parsedProps = { ...props };
//
// 		// Convert string-based functions into executable functions
// 		Object.keys(parsedProps).forEach((key) => {
// 			if (typeof parsedProps[key] === 'string' && parsedProps[key].startsWith('() =>')) {
// 				parsedProps[key] = parseFunction(parsedProps[key]);
// 			}
// 		});
//
// 		return React.createElement(
// 			type,
// 			parsedProps,
// 			children?.map((child) => typeof child === 'string' ? child : renderElement(child)
// 			)
// 		);
// 	};
//
// 	return <div className='p-4'>{renderElement(domTree)}</div>;
// };
//
// export default AIWebsiteBuilder;
