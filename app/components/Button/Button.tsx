import { Button } from '~/components/ui/button'

// shadcn の Button を使った汎用ボタン。ラベルは固定、props は今は受け取らない。
// 利用側は default import で `Button` として使える（barrel 経由）。
export default function AppButton() {
  return <Button>ボタン</Button>
}
