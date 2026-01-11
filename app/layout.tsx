export const metadata = {
  title: 'Paradigm 0G Forge',
  description: 'Quantum-Resistant Research Interface',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#000' }}>{children}</body>
    </html>
  )
}
