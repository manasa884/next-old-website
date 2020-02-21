import Link from 'next/link'

const Navbar = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Link href="/">
        <a>Manasa Tipparam</a>
      </Link>
      <div style={{ flexGrow: 1 }}/>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </div>
  )
}

export default Navbar