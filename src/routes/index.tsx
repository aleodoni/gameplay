import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';

export function Routes(): JSX.Element {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
}
