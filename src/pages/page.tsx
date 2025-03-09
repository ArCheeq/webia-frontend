import { Container, Paper } from "@mantine/core";

import AIWebsiteBuilder from "@/features/website-ai-builder";


export default function HomePage() {
	return (
		<main>
			<Container size={'md'}>
				<Paper withBorder style={{ borderWidth: 1 }} >
					<AIWebsiteBuilder />
				</Paper>
			</Container>
		</main>
	);
}