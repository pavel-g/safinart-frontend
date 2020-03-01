import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { useStores } from '../hooks/use-stores';

export const LoginForm = observer(() => {
	
	const {authStore} = useStores();
	
	const [name, setName] = useState(null);
	const [password, setPassword] = useState(null);
	
	return (
		<div>
			<input
				type="text"
				placeholder="Имя"
				onChange={event => setName(event.target.value)}
				value={name}
			>
			</input>
			<input
				type="password"
				placeholder="Пароль"
				onChange={event => setPassword(event.target.value)}
				value={password}
			>
			</input>
			<button onClick={() => authStore.login(name, password)}>Войти</button>
		</div>
	);
	
});
