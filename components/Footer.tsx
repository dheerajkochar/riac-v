export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 border-t border-gray-200/10 dark:border-gray-800/50">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
      <div className="relative container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-center">
            <p className="text-sm font-medium text-gray-300 dark:text-gray-400 mb-2">
              Built with ❤️ for innovation
            </p>
            <p className="text-base font-semibold text-white dark:text-gray-200">
              Developed by <span className="text-blue-400 dark:text-blue-300 hover:text-blue-300 dark:hover:text-blue-200 transition-colors duration-200">Dheeraj Kochar</span>
            </p>
          </div>
          <div className="flex items-center space-x-6 text-xs text-gray-400 dark:text-gray-500">
            <span>© 2026 RIAC IdeaConnect</span>
            <span>•</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  )
}