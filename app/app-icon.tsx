interface AppIconProps {
  className?: string
}

export function AppIcon({ className = "h-8 w-8" }: AppIconProps) {
  return (
    <div className={`${className} bg-white border-2 border-blue-600 rounded-lg flex items-center justify-center p-1`}>
      <img src="/logo.png" alt="SalesCoach" className="w-full h-full object-contain" />
    </div>
  )
}
