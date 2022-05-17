import { TextStyle } from 'react-native';

import { isTablet } from '../constants';
import fontFamily, { FontType } from '../fontFamily';

import { ColorVariantsType } from './colorVariants';

/**
 * The types have been defined here manually as it's hard to infer them while
 * still maintaining the restrictions on other variants like color, which can
 * easily be achieved with if this `textVariants` was defined directly at the 
 * `createTheme()`.
 */

type TextKeyType = 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'titleTopNav'
  | 'titleMd'
  | 'body'
  | 'label'
  | 'actionLabel'
  | 'captions1'
  | 'captions2'
  | 'link'
  | 'itemTitle'
  | 'eyebrow'
  | 'title'
  | 'header'
  | 'subheader'
  | 'cardHeader'
  | 'cardSubHeader'
  | 'tabLabels'
  ;

interface ITextVariantItem extends Omit<TextStyle, 'color'> {
  fontFamily: FontType;
  color: ColorVariantsType;
}

/**
 * -----------------------------------------------------------------------------
 * Defines the text variants to be passed to the variant prop of the `Text`
 * component.
 * Add variants here, sparing, and instead try to extend the already existing.
 * 
 * - Note: Always order the variant prop above another other styling prop.
 * - See also `@theme/text`
 */
export const textVariants: Record<TextKeyType, ITextVariantItem> = {
  h1: {
    fontFamily: fontFamily.primaryBold,
    fontWeight: '700',
    fontSize: 36,
    lineHeight: 38,
    letterSpacing: 0,
    marginBottom: 'xs',
    color: 'typography',
  },
  h2: {
    fontFamily: fontFamily.primaryBold,
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: 0,
    color: 'typography',
  },
  h3: {
    fontFamily: fontFamily.primaryBold,
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 32,
    letterSpacing: 0,
    color: 'typography',
  },
  h4: {
    fontFamily: fontFamily.primarySemiBold,
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 28,
    letterSpacing: 0,
    color: 'typography',
  },
  h5: {
    color: 'typographySecondary',
    fontSize: isTablet ? 16 : 14,
    lineHeight: isTablet ? 24 : 20,
    letterSpacing: 0.5,
    textAlign: 'right',
    textTransform: 'uppercase',
    fontFamily: fontFamily.primarySemiBold,
    fontWeight: '600',
  },
  h6: {
    fontFamily: fontFamily.primarySemiBold,
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: 'typography',
  },
  titleTopNav: {
    fontFamily: fontFamily.primarySemiBold,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: 'typography',
  },
  titleMd: {
    fontFamily: fontFamily.primaryMedium,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: 'typography',
  },
  body: {
    fontFamily: fontFamily.primary,
    fontWeight: '400',
    // fontSize: 16,
    // lineHeight: 24,
    fontSize: isTablet ? 18 : 16,
    lineHeight: isTablet ? 28 : 24,
    letterSpacing: 0.5,
    color: 'typography',
  },
  label: {
    fontFamily: fontFamily.primaryMedium,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: 'typography',
  },
  actionLabel: {
    fontFamily: fontFamily.primaryMedium,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: 'typography',
  },
  captions1: {
    fontFamily: fontFamily.primary,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.6,
    color: 'typography',
  },
  captions2: {
    fontFamily: fontFamily.primaryMedium,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.3,
    color: 'typography',
  },
  link: {
    fontFamily: fontFamily.primaryMedium,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1.5,
    color: 'typographyLinks',
  },
  itemTitle: {
    fontFamily: fontFamily.primaryMedium,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 3,
    color: 'typography',
    textTransform: 'uppercase',
  },
  eyebrow: {
    color: 'typographyTertiary',
    fontFamily: fontFamily.primaryBold,
    fontSize: isTablet ? 15 : 13,
    fontWeight: '700',
    lineHeight: isTablet ? 20 : 16,
    letterSpacing: 2.2,
    textTransform: 'uppercase',
  },
  title: {
    color: 'typography',
    fontFamily: fontFamily.primaryLight,
    fontWeight: 'normal',
    fontSize: isTablet ? 32 : 28,
    lineHeight: isTablet ? 48 : 32,
  },
  header: {
    fontFamily: fontFamily.primary,
    fontWeight: 'normal',
    fontSize: isTablet ? 40 : 34,
    lineHeight: isTablet ? 48 : 34,
    paddingVertical: 'm',
    color: 'mainForeground',
    borderWidth: 3,
  },
  subheader: {
    fontFamily: fontFamily.primaryBold,
    fontWeight: '600',
    fontSize: isTablet ? 32 : 28,
    lineHeight: isTablet ? 40 : 36,
    color: 'mainForeground',
  },
  cardHeader: {
    fontFamily: fontFamily.primaryBold,
    fontWeight: 'bold',
    fontSize: isTablet ? 22 : 18,
    lineHeight: isTablet ? 26 : 22,
    color: 'typographySecondary',
  },
  cardSubHeader: {
    fontFamily: fontFamily.primary,
    fontWeight: '400',
    fontSize: isTablet ? 14 : 12,
    lineHeight: isTablet ? 20 : 16,
    color: 'typographyTertiary',
  },
  tabLabels: {
    color: 'typographyTertiary',
    fontFamily: fontFamily.primaryBold,
    fontSize: isTablet ? 14 : 10,
    fontWeight: '700',
    lineHeight: isTablet ? 18 : 16,
    textTransform: 'uppercase',
  },
} as const;

export type TextVariantsType = keyof typeof textVariants;
