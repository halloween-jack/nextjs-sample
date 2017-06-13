// This is the Link API
import Link from 'next/link'

const Index = () => (
  <div>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <Link href="/about">
      <button>Go to About Page Button</button>
    </Link>
    <Link href="/about">
      <div>Go to About Page Div</div>
    </Link>
    <p>Hello Next.js</p>
  </div>
)

export default Index
