type ValueOf<T> = T[keyof T];

export const LangConstant = {
  ZH_CN: 'zh_CN',
  ZH_HK: 'zh_HK',
  ZH_TW: 'zh_TW',
  EN_US: 'en_US',
  EN_GB: 'en_GB',
};
export type Language = ValueOf<typeof LangConstant>;