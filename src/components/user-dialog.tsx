import { useMutation } from '@tanstack/react-query'
import { LogOutIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { signOut } from '../api/sign-out'

export function UserDialog() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const { mutateAsync: signOutFn } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      navigate('/sign-in', { replace: true })
    },
  })

  async function handleSignOut() {
    await signOutFn()
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false)
      }
    }

    if (isUserMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isUserMenuOpen])

  return (
    <div className="relative h-12 w-12 rounded-lg">
      <button onClick={() => setIsUserMenuOpen((state) => !state)}>
        <img
          src="https://github.com/heitorlbelem.png"
          alt=""
          className="h-full w-full rounded-lg"
        />
      </button>

      {isUserMenuOpen && (
        <div
          className="absolute mt-2 w-40 translate-x-[-70%] rounded-xl bg-white p-4 shadow-lg"
          ref={userMenuRef}
        >
          <div className="mb-4 flex items-center justify-start gap-4 border-b-[1px] pb-4">
            <img
              src="https://github.com/heitorlbelem.png"
              alt=""
              className="h-10 w-10 rounded-lg"
            />
            <p className="max-w-10 font-base text-xs text-gray-300">
              Heitor Belém
            </p>
          </div>
          <button
            onClick={handleSignOut}
            className="flex w-full items-center justify-between font-base text-sm font-medium text-rose-500 hover:text-rose-600"
          >
            Sair
            <LogOutIcon size={18} />
          </button>
        </div>
      )}
    </div>
  )
}
