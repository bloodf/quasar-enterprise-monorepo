import {
  VueConstructor,
} from 'vue';
import * as All from 'quasar';
import {
  AddressbarColor,
  AppFullscreen,
  AppVisibility,
  BottomSheet,
  ClosePopup,
  Cookies,
  Dark,
  Dialog,
  GoBack,
  Intersection,
  Loading,
  LocalStorage,
  Meta,
  Morph,
  Mutation,
  Notify,
  Platform,
  Ripple,
  Scroll,
  ScrollFire,
  TouchHold,
  TouchPan,
  TouchRepeat,
  TouchSwipe,
} from 'quasar';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import langPtBr from 'quasar/lang/pt-br';
import mdiV5 from 'quasar/icon-set/mdi-v5';

export const QuasarComponents = (() => {
  function isComponent(value: any): value is VueConstructor {
    return value && value.component && value.component.name != null;
  }

  Notify.create = () => jest.fn();

  return Object.keys(All).reduce<{ [index: string]: VueConstructor }>((object, key) => {
    const val = (All as any)[key];
    if (isComponent(val)) {
      // eslint-disable-next-line no-param-reassign
      object[key] = val;
    }
    return object;
  },
  {});
})();

export const QuasarDirectives = {
  ClosePopup,
  GoBack,
  Intersection,
  Morph,
  Mutation,
  Ripple,
  Scroll,
  ScrollFire,
  TouchHold,
  TouchPan,
  TouchRepeat,
  TouchSwipe,
};

export const QuasarPlugins = {
  AddressbarColor,
  AppFullscreen,
  AppVisibility,
  BottomSheet,
  Cookies,
  Dark,
  Meta,
  Dialog,
  Loading,
  LocalStorage,
  Platform,
};

export default {
  lang: langPtBr,
  iconSet: mdiV5,
  components: QuasarComponents,
  directives: QuasarDirectives,
  plugins: QuasarPlugins,
};
