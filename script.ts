import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createUser() {
	const user = await prisma.user.create({
		data: {
			first_name: 'Alice',
			last_name: 'GG',
			role: 'guest',
			status: 1,
		},
	});
	console.log(user);
}

createUser();
// export async function deleteUsers(userId) {
// 	console.log(userId);
// 	await prisma.user.delete({
// 		where: {
// 			id: 2,
// 		},
// 	});
// }

export default async function main() {
	const users = await prisma.user.findMany();
	console.log(users);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async e => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
