import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'

type AppAvatarProps = {
  src: string
  alt: string
  fallback: string
  className?: string
}

// shadcn の Avatar を使った汎用アバター（複数箇所で別々の値を表示できる）。
// 値は使う側が渡す。className はサイズ等の上書き用。
// 利用側は default import で `Avatar` として使える（barrel 経由）。
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
