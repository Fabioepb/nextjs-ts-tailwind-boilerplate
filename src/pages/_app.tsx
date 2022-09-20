import 'tailwindcss/tailwind.css'
import { AppProps } from 'next/app'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
