import { NativeModules, Platform } from 'react-native';
const LINKING_ERROR = `The package 'rn-dynamic-app-icon' doesn't seem to be linked. Make sure: \n\n` + Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo managed workflow\n';
const DynamicAppIcon = NativeModules.DynamicAppIcon ? NativeModules.DynamicAppIcon : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }

});
const {
  ON_ACTIVITY_PAUSED,
  ON_ACTIVITY_STOPPED,
  ON_ACTIVITY_DESTROYED
} = DynamicAppIcon.getConstants();
const WhenToKillOldClasses = {
  ON_ACTIVITY_PAUSED,
  ON_ACTIVITY_STOPPED,
  ON_ACTIVITY_DESTROYED
};
export { WhenToKillOldClasses };
export async function changeIcon(iconName, extraParams) {
  try {
    let changeIconNative;

    if (Platform.OS === 'android') {
      const {
        customPackageName = '',
        whenToKillOldClasses = ''
      } = extraParams || {
        customPackageName: '',
        whenToKillOldClasses: ''
      };
      changeIconNative = await DynamicAppIcon.changeIcon(iconName, {
        customPackageName,
        whenToKillOldClasses
      });
    } else {
      changeIconNative = await DynamicAppIcon.changeIcon(iconName);
    }

    return changeIconNative;
  } catch (error) {
    throw error;
  }
}
//# sourceMappingURL=index.js.map