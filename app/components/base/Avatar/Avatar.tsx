import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'

type AppAvatarProps = {
  /** 画像の URL */
  src: string
  /** 画像の代替テキスト */
  alt: string
  /** 画像を読み込めないときに表示する文字 */
  fallback: string
  /** サイズなどの上書き用クラス */
  className?: string
}

/** shadcn の Avatar ベースの汎用アバター。 */
export default function AppAvatar({
  src,
  alt,
  fallback,
  className,
}: AppAvatarProps) {
  return (
    <Avatar className={className}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  )
}
