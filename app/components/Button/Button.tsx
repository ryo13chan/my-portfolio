import type { ComponentProps } from 'react'
import { Button } from '~/components/ui/button'

/** 汎用ボタン（shadcn の Button ベース）。 */
export default function AppButton(props: ComponentProps<typeof Button>) {
  return <Button {...props} />
}
