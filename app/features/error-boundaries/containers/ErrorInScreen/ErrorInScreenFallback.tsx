import React from 'react';
import { RefreshControl, ScrollView, TouchableOpacity } from 'react-native';

import { Box, Text, useThemeColors } from '@theme';
import { IErrorInScreenProps } from '../types';

/**
 * -----------------------------------------------------------------------------
 * The actual screen rendered when an error has been caught within the child
 * components.
 *
 * - TODO: Add support for rendering a custom view, to override this default.
 */
function ErrorInScreenFallbackView({
  errorMessage,
  errorTitle,
  handleOnRetry,
  isRefreshing,
  errorSubtitle,
}: IErrorInScreenProps) {
  const { mainBackground, primaryBackground } = useThemeColors();
  const colors = [mainBackground, primaryBackground];

  return (
    <Box>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            tintColor={mainBackground}
            colors={colors}
            onRefresh={handleOnRetry}
            progressBackgroundColor={mainBackground}
            refreshing={isRefreshing || false}
          />
        }>
        <Box alignItems="center">
          <Text variant="title" textAlign="center" marginTop="xxl">
            {errorTitle}
          </Text>

          {errorSubtitle ? (
            <Text marginTop="l" fontSize={16} marginVertical="xs">
              {errorSubtitle}
            </Text>
          ) : null}

          {errorMessage ? (
            <Box width="80%">
              <Text color="error" fontSize={14}>
                {errorMessage}
              </Text>
            </Box>
          ) : null}

          <TouchableOpacity onPress={handleOnRetry}>
            <Box
              borderColor="mainBackground"
              borderWidth={1}
              marginBottom="s"
              borderRadius="xs"
              paddingHorizontal="l"
              paddingVertical="s"
              marginTop="m">
              <Text variant="actionLabel" color="typography" fontSize={14}>
                Retry
              </Text>
            </Box>
          </TouchableOpacity>
        </Box>
      </ScrollView>
    </Box>
  );
}

export type TErrorInScreenFallbackView = typeof ErrorInScreenFallbackView;

export default ErrorInScreenFallbackView;
