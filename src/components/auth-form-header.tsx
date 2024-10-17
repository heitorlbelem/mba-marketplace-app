type AuthFormHeaderProps = {
  pageTitle: string
  pageDescription: string
}

export function AuthFormHeader({
  pageTitle,
  pageDescription,
}: AuthFormHeaderProps) {
  return (
    <header className="mb-12 flex flex-col gap-2">
      <h1 className="font-title text-2xl font-bold text-gray-500">
        {pageTitle}
      </h1>
      <p className="font-base text-sm font-normal text-gray-300">
        {pageDescription}
      </p>
    </header>
  )
}
