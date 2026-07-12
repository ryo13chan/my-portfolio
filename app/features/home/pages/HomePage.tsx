import Avatar from '~/components/base/Avatar'
import Heading from '~/components/base/Heading'

export default function HomePage() {
  return (
    <div className="fade-in slide-in-from-bottom-4 flex flex-1 animate-in flex-col items-center justify-center gap-10 p-8 duration-700 md:flex-row md:gap-20">
      <div className="flex max-w-xl flex-col gap-12">
        <Heading
          level={1}
          className="text-4xl text-balance tracking-tight md:text-5xl"
        >
          Welcome to{' '}
          <span className="relative inline-block">
            Ryo's Portfolio!
            <span
              aria-hidden="true"
              className="-z-10 -rotate-1 absolute inset-x-0 bottom-1 h-4 bg-foreground/15 md:h-5 dark:bg-foreground/30"
            />
          </span>
        </Heading>
        <div className="flex flex-col gap-3 text-muted-foreground leading-8">
          <p>はじめまして。</p>
          <p>
            Webフロントエンドエンジニアの{' '}
            <span className="font-bold text-2xl text-foreground leading-none">
              Ryo
            </span>{' '}
            です。
          </p>
          <p>当サイトはエンジニアとしてのポートフォリオです。</p>
          <p>是非ご覧下さい！</p>
        </div>
      </div>
      <Avatar
        src="/avatar.jpg"
        alt="Ryo のアバター"
        fallback="R"
        className="size-48 shadow-lg md:size-64"
      />
    </div>
  )
}
