import React from 'react'
import Styles from './login.styles.scss'
import Spinner from '@/presentation/components/spinner/spinner'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <header className={Styles.header}>
        <img src="data:image/png;base64,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" />
        <h1>4Dev - Enquetes para Programadores</h1>
      </header>
      <form className={Styles.form}>
        <h2>Login</h2>
        <div className={Styles.inputWrap}>
          <input type="email" name="email" placeholder="Digite seu e-mail" />
          <span className={Styles.status}>🔴</span>
        </div>
        <div className={Styles.inputWrap}>
          <input type="password" name="password" placeholder="Digite sua senha" />
          <span className={Styles.status}>🔴</span>
        </div>
        <button className={Styles.submit} type="submit">Entrar</button>
        <span className={Styles.link}>Criar conta</span>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}>Erro</span>
        </div>
      </form>
      <footer className={Styles.footer} />
    </div>
  )
}

export default Login