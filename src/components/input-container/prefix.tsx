type PrefixProps = {
  prefix: 'R$' | '$'
}

export function Prefix({ prefix }: PrefixProps) {
  return <span className="font-base text-base font-normal">{prefix}</span>
}
