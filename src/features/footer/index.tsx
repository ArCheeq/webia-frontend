import {Container, Group, Image, Text} from '@mantine/core';

import logo from '@/assets/images/logo.svg';
import { links } from "@/features/footer/constants/links";

import classes from './styles.module.css';

export default function Footer() {
	const groups = links.map((group) => {
		const links = group.links.map((link, index) => (
			<Text<'a'>
				key={index}
				className={classes.link}
				component="a"
				href={link.link}
				onClick={(event) => event.preventDefault()}
			>
				{link.label}
			</Text>
		));

		return (
			<div className={classes.wrapper} key={group.title}>
				<Text className={classes.title}>{group.title}</Text>
				{links}
			</div>
		);
	});

	return (
		<footer className={classes.footer}>
			<Container className={classes.inner}>
				<div className={classes.logo}>
					<Group mb={'xs'}>
						<Image w={28} h={28} src={logo} alt={'logo'} />
						<Text className={classes.title}>Webia</Text>
					</Group>
					<Text size="xs" c="dimmed" className={classes.description}>
						Build fully functional accessible web applications faster than ever
					</Text>
				</div>
				<div className={classes.groups}>{groups}</div>
			</Container>
			<Container className={classes.afterFooter}>
				<Text c="dimmed" size="sm">
					© {new Date().getFullYear()} webia.dev. All rights reserved.
				</Text>
			</Container>
		</footer>
	);
}