type AuthHeaderProps = {
  title: string
  description: string
}

export function AppHeader({ title, description }: AuthHeaderProps) {
  return (
    <header className="flex flex-col gap-1">
      <h1 className="font-title text-2xl font-bold leading-tight text-gray-500">
        {title}
      </h1>
      <p className="font-base text-sm text-gray-300">{description}</p>
    </header>
  )
}
