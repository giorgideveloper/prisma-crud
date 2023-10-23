import React from 'react';
import allUsers from '../api/users';

export default function Page() {
	const users = allUsers();
	console.log(users);
	return <div>users</div>;
}
