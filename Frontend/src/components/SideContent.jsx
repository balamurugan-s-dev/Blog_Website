import React from 'react'

const SideContent = () => {
    return (
        <div className="hidden md:flex lg:flex-1 justify-end items-center">
            <div className="w-50 h-40 max-w-sm lg:max-w-md rounded-xl border border-gray-200 bg-gray-50 shadow-sm overflow-hidden">

                {/* Fake window header */}
                <div className="flex items-center gap-2 px-4 py-2 border-b bg-white">
                    <span className="w-3 h-3 rounded-full bg-red-400"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                    <span className="w-3 h-3 rounded-full bg-green-400"></span>
                </div>

                {/* Code content */}
                <pre className="px-4 py-4 text-sm font-bold text-gray-800 leading-relaxed">
                    <code>
                        <span className="text-blue-600">const</span>{" "}
                        <span className="text-emerald-600">write</span>{" "}
                        = () =&gt; {"{"}{"\n"}
                        {"  "}
                        <span className="text-blue-600">return</span>{" "}
                        &lt;<span className="text-purple-600">Story</span> /&gt;
                        {";\n"}
                        {"}"}
                        <span className="animate-blink ml-1">|</span>
                    </code>
                </pre>
            </div>
        </div>
    )
}

export default SideContent