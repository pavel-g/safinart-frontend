import React from 'react';
import { AuthStore } from '../stores/auth';
import { ItemsStore } from '../stores/items';

export const storesContext = React.createContext({
	itemsStore: new ItemsStore(),
	authStore: new AuthStore()
});