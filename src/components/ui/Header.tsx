import { Code } from "lucide-react"

interface HeaderProps {
  prompt: string
}

export default function Header({ prompt }: HeaderProps) {
  return (
    <header className="bg-slate-950 border-b border-gray-800 px-6 py-4">
      <div className="mx-auto pl-[4vh]">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className="text-indigo-400 h-6 w-6" />
            <h1 className="text-xl font-semibold text-gray-100">ThunderBreath</h1>
          </div>
          <div className="text-sm text-gray-400">AI-Powered</div>
        </div>
        <div className="mt-3 flex items-center text-sm text-gray-500">
          <span className="mr-2 text-gray-400">Prompt:</span>
          <p className="bg-gray-800 rounded px-3 py-1 font-mono text-gray-300 truncate max-w-xl">{prompt}</p>
        </div>
      </div>
    </header>
  )
}

