/**
 * This font family approach has been greatly inspired by the `ignite` boilerplate.
 */

/**
 *
 * - 100    Extra Light or Ultra Light
 * - 200    Light or Thin
 * - 300    Book or Demi
 * - 400    Regular or Normal
 * - 500    Medium
 * - 600    Semibold, Demibold
 * - 700    Bold
 * - 800    Black, Extra Bold or Heavy
 * - 900    Extra Black, Fat, Poster or Ultra Black
 * 
 * Note: Italic versions are not being used for now...
 */
export enum FontType {
  black = 'Barlow-Black',
  // blackItalic = 'Barlow-BlackItalic',
  semiBold = 'Barlow-SemiBold',
  // semiBoldItalic = 'Barlow-SemiBoldItalic',
  bold = 'Barlow-Bold',
  // boldItalic = 'Barlow-BoldItalic',
  medium = 'Barlow-Medium',
  light = 'Barlow-Light',
  // lightItalic = 'Barlow-LightItalic',
  regular = 'Barlow-Regular',
  // regularItalic = 'Barlow-Italic',
  thin = 'Barlow-Thin',
  thinItalic = 'Barlow-ThinItalic',
}

type FontFamilyType = {
  /**
   * The primary font.  Used in most places, such as the body text.
   */
  primary: FontType.regular;
  /**
   * A very thick/bolder version of the primary font
   */
  primaryBlack: FontType.black;
  /**
   * A bold version of the primary font
   */
  primaryBold: FontType;
  /**
   * A semi bold version of the primary font
   */
  primarySemiBold: FontType;
  /**
   * A medium version of the primary font
   */
  primaryMedium: FontType;
  /**
   * A light/thin version of the primary font.
   * Used in places like fancy titles, or small descriptive/info text.
   */
  primaryLight: FontType;

  // TODO: Add more font variants here if another type face is present
  // secondary: FontType;
  // secondaryThin: FontType;
  // info: FontType;
};

/**
 * You can find a list of available fonts on both iOS and Android here:
 * https://github.com/react-native-training/react-native-fonts
 *
 * If you're interested in adding a custom font to your project,
 * check out the readme file in ./assets/fonts/ then come back here
 * and enter your new font name. Remember the Android font name
 * is probably different than iOS.
 * More on that here:
 * https://github.com/lendup/react-native-cross-platform-text
 *
 * The various styles of fonts are defined in the <Text /> component.
 *
 * ---
 *
 * `TODO:` Add platform specific overrides here.
 * - `primary: Platform.select({ ios: 'Avenir Next', android: 'Robot' }),`
 * - `info: Platform.select({ ios: 'Courier', android: 'monospace' }),`
 * 
 * Note: At the moment, we only have one font family type..(`primary`).
 */
const fontFamily: FontFamilyType = {
  primary: FontType.regular,
  primaryMedium: FontType.medium,
  primaryBlack: FontType.black,
  primaryBold: FontType.bold,
  primarySemiBold: FontType.semiBold,
  primaryLight: FontType.light,
};

export default fontFamily;
