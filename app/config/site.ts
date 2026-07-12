// サイト全体で使う共通設定。サイト名はここだけ変えれば全ページに反映される。
export const SITE_NAME = "Ryo's Portfolio"

/** GitHub プロフィールの URL */
export const GITHUB_URL = 'https://github.com/ryo13chan'

/** X（Twitter）プロフィールの URL */
export const X_URL = 'https://x.com/ryo_chan_13'

// ページタイトルを「{ページ名} | {サイト名}」形式に組み立てる。
export function pageTitle(title: string) {
  return `${title} | ${SITE_NAME}`
}
