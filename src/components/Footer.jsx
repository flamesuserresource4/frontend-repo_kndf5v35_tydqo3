export default function Footer() {
  return (
    <footer className="py-10 border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} Playful3D. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#privacy" className="hover:text-zinc-900 dark:hover:text-white">Privacy</a>
          <a href="#terms" className="hover:text-zinc-900 dark:hover:text-white">Terms</a>
          <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
