import React from 'react';
import allUsers from '../api/users';
import main from '../../../script';
import { PrismaClient } from '@prisma/client';
import Tables from '../components/table/Tables';

export default async function Page() {
	const prisma = new PrismaClient();
	const getUser = await prisma.user.findMany();
	console.log(getUser);
	return (
		<>
			<Tables />
		</>
	);
}
