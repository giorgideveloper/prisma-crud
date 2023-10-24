import React from 'react';
import { PrismaClient } from '@prisma/client';
import Tables from './components/table/Tables';

export default async function Page() {
	const prisma = new PrismaClient();
	const getUser = await prisma.user.findMany();
	console.log(getUser);
	return (
		<>
			<Tables getUser={getUser} />
		</>
	);
}
