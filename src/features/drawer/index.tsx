import { useEffect } from "react";
import { Accordion, Button, Drawer, Stack, Text, Textarea, TextInput } from "@mantine/core";

import {isStringNode, logger, splitCamelCase} from "@/lib";
import { useStore } from "@/store";


export default function SectionDrawer() {
	const opened = useStore(state => state.drawer.opened);
	const close = useStore(state => state.drawer.close);
	const element = useStore(state => state.drawer.element);

	useEffect(() => {
		const elementId = element?.props?.id;

		if (!elementId) return;

		const targetElement = document.getElementById(elementId);

		logger.info('ELEMENT', targetElement);

		if (targetElement) {
			targetElement.classList.add('border');
			targetElement.classList.add('border-indigo-500');
		}

		// Очистка эффекта, чтобы удалить класс при изменении или размонтировании компонента
		return () => {
			if (targetElement) {
				targetElement.classList.remove('border');
				targetElement.classList.remove('border-indigo-500');
			}
		};
	}, [element]);

	const renderStylesSection = () => {
		const styles = element?.props?.style;

		if (!styles) return null;

		return (
			<Accordion.Item value={'styles'}>
				<Accordion.Control>
					<Text fw={500}>Styles</Text>
				</Accordion.Control>
				<Accordion.Panel>
					<Stack>
						{Object.entries(styles).map(([key, style]) => (
							<TextInput
								key={key}
								label={splitCamelCase(key)}
								placeholder={key}
								value={style}
							/>
						))}
					</Stack>
				</Accordion.Panel>
			</Accordion.Item>
		);
	};

	const renderTextContentSection = () => {
		if (!Array.isArray(element?.children)) return null;

		const textContent = element?.children[0];

		if (!isStringNode(textContent)) return null;

		return (
			<Accordion.Item value={'text-content'}>
				<Accordion.Control>
					<Text fw={500}>Section Content</Text>
				</Accordion.Control>
				<Accordion.Panel>
					<Stack>
						<Textarea
							label={'Text Content'}
							placeholder={'Text content'}
							value={textContent}
						/>
					</Stack>
				</Accordion.Panel>
			</Accordion.Item>
		);
	};

	return (
		<Drawer
			opened={opened}
			onClose={close}
			shadow={'md'}
			title="Section"
			overlayProps={{ backgroundOpacity: 0 }}
			classNames={{ content: 'max-w-[300px]', body: 'min-h-[calc(100%-60px)] flex flex-col' }}
		>
			<Accordion chevronPosition="right" variant={'separated'}>
				{renderStylesSection()}
				{renderTextContentSection()}
			</Accordion>
			<Button onClick={close} className={'w-full mt-auto'}>
				Save Changes
			</Button>
		</Drawer>
	);
}