import AuthForm from './auth-form'
import Image from 'next/image';
import engineer from './assets/software_engineer.png'

export default function Home() {
  return (
    <div className="card">
    <div className="row">
      <div className="col-6">
        <h1 className="header">Supabase Auth + Storage</h1>
        <p className="">
          Experience our Auth and Storage through a simple profile management example. Create a user
          profile and upload an avatar image. Fast, simple, secure.
        </p>
      </div>
      <div className="col-6 auth-widget">
        <AuthForm />
      </div>
    </div>
      <div></div>
      <Image src={engineer} alt="software engineer" width={771} height={449} className="engineer"/>
    </div>
  )
}