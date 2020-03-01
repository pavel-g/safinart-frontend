import React from 'react';
import { observer } from "mobx-react";
import { useStores } from "../hooks/use-stores";
import { Link } from 'react-router-dom';

export const LoginLabel = observer(() => {
	const {authStore} = useStores();
	
	if (authStore.isAuth) {
		return (
			<>
				<span>{authStore.name}</span>
				<span> (<button onClick={() => authStore.logout()}>Выйти</button>)</span>
			</>
		);
	}
	
	return (
		<>
			<Link to="/login">Войти</Link>
		</>
	);
});