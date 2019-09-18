import Link from 'next/link';

const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/motivation">
        <a style={linkStyle}>Motivation</a>
      </Link>
      <Link href="/rules">
        <a style={linkStyle}>Rules</a>
      </Link>
      <Link href="/hints">
        <a style={linkStyle}>Hints</a>
      </Link>
      <Link href="/organization">
        <a style={linkStyle}>Organization</a>
      </Link>
      <Link href="/resources">
        <a style={linkStyle}>Resources</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
    </div>
  )
}