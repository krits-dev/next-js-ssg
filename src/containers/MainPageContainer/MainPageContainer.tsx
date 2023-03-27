import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FIXES_PAGE } from '@/constants/routes.constants'

function MainPageContainer() {
  const router = useRouter()

  useEffect(() => {
    router.push(FIXES_PAGE)
  }, [router])

  return <div>Redirecting to Fixes Page...</div>
}

export default MainPageContainer
