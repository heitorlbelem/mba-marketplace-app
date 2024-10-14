import background from '../../../assets/auth-background.png'
import logo from '../../../assets/logo.svg'

export function AuthAside() {
  return (
    <div>
      <div className="flex items-center gap-5 p-10">
        <img src={logo} alt="" />
        <div>
          <h2 className="font-bold font-title text-xl text-gray-500">
            Marketplace
          </h2>
          <p className="font-base font-normal text-base text-gray-400">
            Painel de Vendedor
          </p>
        </div>
      </div>

      <img src={background} alt="" className="max-w-[755px]" />
    </div>
  )
}
