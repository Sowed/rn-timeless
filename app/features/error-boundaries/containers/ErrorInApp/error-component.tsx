import React, { ErrorInfo } from 'react';
import { ScrollView, View } from 'react-native';

import { Button, Text } from '@theme';

export interface ErrorComponentProps {
  error: Error;
  errorInfo: ErrorInfo;
  onReset(): void;
}

/**
 * -----------------------------------------------------------------------------
 * Adjust this to some other fancy error component renderer
 */
export function ErrorComponent(props: ErrorComponentProps) {
  const { error, errorInfo, onReset } = props;

  return (
    <View>
      <Text tx="errorScreen.title" />
      <Text tx="errorScreen.friendlySubtitle" />
      <View>
        <ScrollView>
          <Text text={`${error}`} />
          <Text selectable text={`${errorInfo.componentStack}`} />
        </ScrollView>
      </View>
      <Button variant="primary" onPress={onReset} tx="errorScreen.reset" />
    </View>
  );
}
