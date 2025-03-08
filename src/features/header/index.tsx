import { useState } from 'react';
import { Burger, Container, Group, Image, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import logo from '@/assets/images/logo.svg';
import { links } from "@/features/header/constants/links";

import classes from './styles.module.css';

export default function Header() {
	const [opened, { toggle }] = useDisclosure(false);
	const [active, setActive] = useState(links[0].link);

	const items = links.map((link) => (
		<a
			key={link.label}
			href={link.link}
			className={classes.link}
			data-active={active === link.link || undefined}
			onClick={(event) => {
				event.preventDefault();
				setActive(link.link);
			}}
		>
			{link.label}
		</a>
	));

	return (
		<header className={classes.header}>
			<Container size="md" className={classes.inner}>
				<Group>
					<Image w={28} h={28} src={logo} alt={'logo'} />
					<Text className={classes.title}>Webia</Text>
				</Group>
				<Group gap={5} visibleFrom="xs">
					{items}
				</Group>

				<Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm"/>
			</Container>
		</header>
	);
}