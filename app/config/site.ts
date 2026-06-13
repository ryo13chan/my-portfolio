// サイト全体で使う共通設定。サイト名はここだけ変えれば全ページに反映される。
export const SITE_NAME = "Ryo's Portfolio"

// ページタイトルを「{ページ名} | {サイト名}」形式に組み立てる。
export function pageTitle(title: string) {
  return `${title} | ${SITE_NAME}`
}
