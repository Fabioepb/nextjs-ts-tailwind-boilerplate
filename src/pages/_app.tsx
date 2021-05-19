import 'tailwindcss/tailwind.css'

interface AppProps {
  Component: React.FC
  pageProps: unknown
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
