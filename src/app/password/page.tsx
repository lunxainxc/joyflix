'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function PasswordPage() {
  const [pwd, setPwd] = useState('')
  const router = useRouter()

  function submit() {
    document.cookie = `site_pwd=${pwd}; path=/`
    router.push('/')
  }

  return (
    <div style={{maxWidth:400,margin:'100px auto',padding:20}}>
      <h3>请输入访问密码</h3>
      <input
        type="password"
        value={pwd}
        onChange={e=>setPwd(e.target.value)}
        style={{width:'100%',padding:8,margin:'10px 0'}}
      />
      <button onClick={submit} style={{padding:'8px 16px'}}>确认</button>
    </div>
  )
}
