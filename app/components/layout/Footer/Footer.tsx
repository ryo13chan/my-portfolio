import Button from '~/components/base/Button'
import { GITHUB_URL, X_URL } from '~/config/site'
import { GithubIcon, XIcon } from './icons'

const socialLinks = [
  { label: 'GitHub', href: GITHUB_URL, Icon: GithubIcon },
  { label: 'X', href: X_URL, Icon: XIcon },
]

/** 全ページ共通のフッター（上段に SNS リンク、下段にコピーライト）。 */
export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 px-6 py-6">
      <div className="flex items-center gap-1">
        {socialLinks.map(({ label, href, Icon }) => (
          <Button key={label} variant="ghost" size="icon" asChild>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon />
            </a>
          </Button>
        ))}
      </div>
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} Ryo
      </p>
    </footer>
  )
}
