"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, X } from "lucide-react"

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed"
    platform: string
  }>
  prompt(): Promise<void>
}

export function PWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showInstallBanner, setShowInstallBanner] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      console.log("beforeinstallprompt event fired")
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setShowInstallBanner(true)
    }

    const handleAppInstalled = () => {
      console.log("PWA was installed")
      setIsInstalled(true)
      setShowInstallBanner(false)
      setDeferredPrompt(null)
    }

    // Handle custom event from install buttons
    const handleInstallPrompt = async () => {
      console.log("Custom install prompt triggered")
      if (deferredPrompt) {
        try {
          deferredPrompt.prompt()
          const { outcome } = await deferredPrompt.userChoice
          console.log(`User response to the install prompt: ${outcome}`)
          if (outcome === "accepted") {
            setDeferredPrompt(null)
            setShowInstallBanner(false)
          }
        } catch (error) {
          console.error("Error showing install prompt:", error)
        }
      } else {
        console.log("No deferred prompt available")
        // Fallback: show instructions for manual installation
        alert(
          "To install this app:\n\n• On Chrome: Click the menu (⋮) → 'Install SalesCoach'\n• On Safari: Click Share → 'Add to Home Screen'\n• On Edge: Click the menu (⋯) → 'Apps' → 'Install this site as an app'",
        )
      }
    }

    // Check if app is already installed
    if (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true)
    }

    // Check if running as PWA
    if (window.navigator && "standalone" in window.navigator && (window.navigator as any).standalone) {
      setIsInstalled(true)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    window.addEventListener("appinstalled", handleAppInstalled)
    window.addEventListener("pwa-install-prompt", handleInstallPrompt)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
      window.removeEventListener("appinstalled", handleAppInstalled)
      window.removeEventListener("pwa-install-prompt", handleInstallPrompt)
    }
  }, [deferredPrompt])

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      console.log("No deferred prompt available in banner")
      // Fallback: show instructions for manual installation
      alert(
        "To install this app:\n\n• On Chrome: Click the menu (⋮) → 'Install SalesCoach'\n• On Safari: Click Share → 'Add to Home Screen'\n• On Edge: Click the menu (⋯) → 'Apps' → 'Install this site as an app'",
      )
      return
    }

    try {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      console.log(`User response to the install prompt: ${outcome}`)

      if (outcome === "accepted") {
        setDeferredPrompt(null)
        setShowInstallBanner(false)
      }
    } catch (error) {
      console.error("Error showing install prompt:", error)
    }
  }

  const handleDismiss = () => {
    setShowInstallBanner(false)
  }

  if (isInstalled || !showInstallBanner) {
    return null
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-sm">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">Install SalesCoach</h3>
            <p className="text-sm text-gray-600 mb-3">Add to your home screen for quick access and offline use.</p>
            <div className="flex gap-2">
              <Button onClick={handleInstallClick} size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                <Download className="w-4 h-4 mr-2" />
                Install
              </Button>
              <Button onClick={handleDismiss} variant="outline" size="sm">
                Later
              </Button>
            </div>
          </div>
          <Button onClick={handleDismiss} variant="ghost" size="sm" className="ml-2 p-1 h-auto">
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
