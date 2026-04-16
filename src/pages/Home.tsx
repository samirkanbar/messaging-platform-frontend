import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-sans">
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('./src/assets/images/sunset1.jpg')`,
        }}
      >
        {/* Blue-tinted overlay to match branding */}
        <div className="absolute inset-0 bg-[#2a5df7]/30 backdrop-blur-[2px] shadow-inner" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center text-center text-white">
        
        <header className="max-w-5xl mb-16 space-y-6">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter drop-shadow-2xl">
            Say Goodbye... <br /> 
            <span style={{ color: '#eb6580' }}>After You Are Gone</span>
          </h1>
          <p className="max-w-4xl mx-auto text-2xl md:text-3xl text-gray-100 font-light leading-relaxed">
            We ensure that your final messages are delivered exactly as you intended, 
            giving you and your loved ones peace of mind.
          </p>
        </header>

        {/* The "Easy as 1, 2, 3" Callout */}
        <div className="mb-12 transition-transform hover:scale-105 duration-300">
          <div className="inline-block bg-white/5 backdrop-blur-lg border border-white/10 px-10 py-4 rounded-2xl shadow-[0_0_30px_rgba(235,101,128,0.2)]">
            <p className="text-[#FFF] text-2xl md:text-3xl font-black italic tracking-widest uppercase">
              It's as easy as 1, 2, 3!
            </p>
          </div>
        </div>

        {/* How It Works Grid */}
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div className="group bg-black/30 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-[#2a5df7]/50 transition-all duration-500">
              <div className="text-5xl font-black mb-4 transition-colors group-hover:text-white" style={{ color: '#eb6580' }}>1</div>
              <h3 className="text-3xl font-bold mb-4">Create Your List</h3>
              <p className="text-gray-300 leading-relaxed text-xl">
                Draft messages and organize your recipients in total privacy. You can update your list at any time.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group bg-black/30 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-[#2a5df7]/50 transition-all duration-500">
              <div className="text-5xl font-black mb-4 transition-colors group-hover:text-white" style={{ color: '#eb6580' }}>2</div>
              <h3 className="text-3xl font-bold mb-4">Designate Access</h3>
              <p className="text-gray-300 leading-relaxed text-xl">
                Appoint a trusted representative who will be granted access to trigger your final message delivery when the time is right.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group bg-black/30 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-[#2a5df7]/50 transition-all duration-500">
              <div className="text-5xl font-black mb-4 transition-colors group-hover:text-white" style={{ color: '#eb6580' }}>3</div>
              <h3 className="text-3xl font-bold mb-4">Peace of mind...</h3>
              <p className="text-gray-300 leading-relaxed text-xl">
                Once verified, your messages are sent via email or text, ensuring your goodbyes are received and cherished.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 flex flex-col items-center gap-4 opacity-50 text-xs tracking-[0.3em] uppercase">
          <div className="w-16 h-[1px] bg-white/50" />
          <p>&copy; {new Date().getFullYear()} SayGoodbyes.com</p>
        </footer>
      </div>
    </div>
  )
}