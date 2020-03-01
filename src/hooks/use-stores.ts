import React from 'react';
import { storesContext } from '../contexts/stores';

export const useStores = () => {
	return React.useContext(storesContext);
};