export const Footer = () => {
  return (
    <footer className="h-14 w-full flex items-center justify-center bg-gradient-black">
      <span className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400">
        <strong className="font-medium hover:text-light-purple transition-colors">{`Pedrinvits © ${new Date().getFullYear()}`}</strong>
      </span>
    </footer>
  )
}