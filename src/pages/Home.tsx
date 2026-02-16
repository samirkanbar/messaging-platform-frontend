import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('./src/assets/images/sunset1.jpg')`,
        }}
      >
        {/* Blue-tinted overlay to match your new branding */}
        <div className="absolute inset-0 bg-[#2a5df7]/30 backdrop-blur-[2px] shadow-inner" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center text-center text-white">
        
        <header className="max-w-4xl mb-16 space-y-6">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter drop-shadow-2xl">
            Say Goodbye... <br /> 
            <span style={{ color: '#eb6580' }}>After You Are Gone</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-100 font-light leading-relaxed">
            A secure, private space to leave your final words. 
            Ensure your loved ones hear from you one last time, exactly when they need it.
          </p>
        </header>

        {/* How It Works */}
        <div className="w-full max-w-6xl mt-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="group bg-black/20 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-[#2a5df7]/50 transition-all">
              <div className="text-4xl font-black mb-4 transition-colors group-hover:text-white" style={{ color: '#eb6580' }}>01</div>
              <h3 className="text-2xl font-bold mb-4">Create Your List</h3>
              <p className="text-gray-300 leading-relaxed">
                Draft messages and organize your recipients in total privacy. You can update your thoughts at any time.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group bg-black/20 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-[#2a5df7]/50 transition-all">
              <div className="text-4xl font-black mb-4 transition-colors group-hover:text-white" style={{ color: '#eb6580' }}>02</div>
              <h3 className="text-2xl font-bold mb-4">Designate Access</h3>
              <p className="text-gray-300 leading-relaxed">
                Appoint a trusted dependent who will be granted access to trigger your final delivery when the time is right.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group bg-black/20 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-[#2a5df7]/50 transition-all">
              <div className="text-4xl font-black mb-4 transition-colors group-hover:text-white" style={{ color: '#eb6580' }}>03</div>
              <h3 className="text-2xl font-bold mb-4">Final Delivery</h3>
              <p className="text-gray-300 leading-relaxed">
                Once verified, your messages are sent via email or text, ensuring your goodbyes are received and cherished.
              </p>
            </div>
          </div>
        </div>

        <footer className="mt-24 flex flex-col items-center gap-4 opacity-40 text-xs tracking-widest uppercase">
          <div className="w-12 h-[1px] bg-white" />
          &copy; {new Date().getFullYear()} SayGoodbyes.com
        </footer>
      </div>
    </div>
  )
}