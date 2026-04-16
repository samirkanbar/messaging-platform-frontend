import React, { useState } from 'react';
import { 
  Users, 
  ShieldCheck, 
  FileText, 
  Settings, 
  LogOut, 
  PlusCircle,
  Clock,
  Trash2,
  Lock,
  Key,
  Smartphone,
  AlertTriangle,
  ChevronRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('messages');

  // Sidebar navigation helper - Updated with theme colors
  const NavItem = ({ id, icon: Icon, label }: { id: string, icon: any, label: string }) => (
    <Button 
      variant="ghost" 
      onClick={() => setActiveTab(id)}
      className={`w-full justify-start font-bold transition-all ${
        activeTab === id 
        ? 'text-[#2a5df7] bg-white shadow-sm' 
        : 'text-gray-700 hover:bg-[#fadce1]'
      }`}
    >
      <Icon className="mr-2 h-4 w-4" /> {label}
    </Button>
  );

  return (
    /* Background matching your #fdeef1 pink */
    <div className="flex min-h-screen bg-[#fdeef1] font-sans text-gray-900">
      
      {/* Sidebar - Updated with darker pink border */}
      <aside className="w-64 bg-[#fdeef1] border-r border-[#fadce1] hidden md:flex flex-col fixed h-full">
        <div className="p-8">
          <h1 className="text-xl font-black tracking-tight text-gray-900">
            SayGoodbyes<span className="text-[#2a5df7]">.com</span>
          </h1>
        </div>
        <nav className="flex-1 px-4 space-y-3">
          <NavItem id="messages" icon={FileText} label="Messages" />
          <NavItem id="recipients" icon={Users} label="Recipients" />
          <NavItem id="verifier" icon={ShieldCheck} label="Verifier" />
          <NavItem id="security" icon={Settings} label="Security" />
        </nav>
        <div className="p-4 border-t border-[#fadce1]">
          <Button variant="ghost" className="w-full justify-start text-red-600 hover:bg-red-50 font-bold">
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          
          {/* TAB: MESSAGES */}
          {activeTab === 'messages' && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <header className="flex justify-between items-end mb-4">
                <div>
                  <h2 className="text-4xl font-black tracking-tight" style={{ color: '#2a5df7' }}>Your Legacy</h2>
                  <p className="text-gray-700 font-medium">Everything is kept encrypted until your verifier acts.</p>
                </div>
                <Badge className="bg-[#eb6580] text-white p-2 px-4 hover:bg-[#d55570]">
                  <Clock className="mr-2 h-4 w-4" /> Proof of Life: 30 Days
                </Badge>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white border-[#fadce1] shadow-sm">
                    <CardHeader className="pb-2"><CardTitle className="text-xs uppercase tracking-widest text-[#eb6580] font-bold">Recipients</CardTitle></CardHeader>
                  <CardContent><div className="text-3xl font-black text-gray-900">12 People</div></CardContent>
                </Card>
                <Card className="bg-white border-[#fadce1] shadow-sm">
                    <CardHeader className="pb-2"><CardTitle className="text-xs uppercase tracking-widest text-[#eb6580] font-bold">Verifier Status</CardTitle></CardHeader>
                  <CardContent><div className="flex items-center text-green-600"><ShieldCheck className="mr-2 h-4 w-4" /><span className="text-3xl font-black italic">Active</span></div></CardContent>
                </Card>
                <Card className="bg-[#2a5df7] text-white border-none shadow-lg">
                    <CardHeader className="pb-2"><CardTitle className="text-xs uppercase tracking-widest text-blue-100 font-bold">Account Security</CardTitle></CardHeader>
                  <CardContent><div className="text-3xl font-black italic">Encrypted</div></CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <Card className="border-[#fadce1]">
                    <CardHeader>
                      <CardTitle className="text-2xl font-black">The General Message</CardTitle>
                      <CardDescription className="text-gray-600 font-medium italic">Sent to everyone on your list upon verification.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Textarea placeholder="Write your final thoughts here..." className="min-h-[300px] text-lg bg-gray-50 border-[#fadce1]" />
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400 italic">Last auto-saved at 10:45 AM</span>
                        <Button className="bg-[#2a5df7] hover:bg-blue-700 px-8 font-bold">Save Message</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-6">
                  <Card className="border-[#fadce1] bg-white/50">
                    <CardHeader><CardTitle className="text-lg text-[#eb6580] font-black flex items-center"><PlusCircle className="mr-2 h-4 w-4" /> Individual Messages</CardTitle></CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-700 font-medium mb-4">Leave a specific, private message for just one person.</p>
                      <Button variant="outline" className="w-full border-[#fadce1] text-[#2a5df7] font-bold hover:bg-[#fadce1]" onClick={() => setActiveTab('recipients')}>View Recipients</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {/* TAB: RECIPIENTS */}
          {activeTab === 'recipients' && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-black" style={{ color: '#eb6580' }}>Recipients</h2>
                  <p className="text-gray-700 font-medium">People who will receive your final messages.</p>
                </div>
                <Button className="bg-[#2a5df7] hover:bg-blue-700 font-bold"><PlusCircle className="mr-2 h-4 w-4" /> Add Recipient</Button>
              </div>
              <div className="grid gap-4">
                {[{ name: "Sarah Jenkins", email: "sarah.j@example.com", type: "Personal + General" },
                  { name: "Michael Thorne", email: "m.thorne@work.com", type: "General Only" }
                ].map((person, i) => (
                  <Card key={i} className="border-[#fadce1]">
                    <CardContent className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-[#fadce1] flex items-center justify-center font-black text-[#eb6580]">{person.name[0]}</div>
                        <div><p className="font-black text-gray-900">{person.name}</p><p className="text-sm text-gray-600 font-medium">{person.email}</p></div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant="outline" className="border-[#eb6580] text-[#eb6580] font-bold bg-white">{person.type}</Badge>
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-500"><Trash2 className="h-4 w-4" /></Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* TAB: VERIFIER */}
          {activeTab === 'verifier' && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <div>
                <h2 className="text-3xl font-black" style={{ color: '#2a5df7' }}>The Verifier</h2>
                <p className="text-gray-700 font-medium">The person trusted to trigger message release.</p>
              </div>
              <Card className="border-[#fadce1] bg-white">
                <CardHeader>
                  <div className="flex items-center gap-2 text-[#eb6580]">
                    <ShieldCheck className="h-6 w-6" /><CardTitle className="text-xl font-black">Current Verifier</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="space-y-2"><Label>Full Name</Label><Input defaultValue="Robert Miller" className="border-[#fadce1]" /></div>
                    <div className="space-y-2"><Label>Email Address</Label><Input defaultValue="r.miller@trust.com" className="border-[#fadce1]" /></div>
                    <Button className="bg-[#2a5df7] hover:bg-blue-700 w-full font-bold">Update Verifier</Button>
                  </div>
                  <div className="bg-[#fdeef1] p-6 rounded-2xl border border-[#fadce1] text-sm text-gray-800 space-y-3 font-medium">
                    <h4 className="font-black text-lg mb-2 flex items-center text-gray-900"><AlertTriangle className="h-5 w-5 mr-2 text-[#eb6580]" /> Protocol</h4>
                    <p className="flex items-start gap-2 text-md"> <ChevronRight className="h-4 w-4 mt-1 text-[#2a5df7]"/> Verifier must upload a death notice.</p>
                    <p className="flex items-start gap-2 text-md"> <ChevronRight className="h-4 w-4 mt-1 text-[#2a5df7]"/> 48-hour "Wait Period" before release.</p>
                    <p className="flex items-start gap-2 text-md"> <ChevronRight className="h-4 w-4 mt-1 text-[#2a5df7]"/> You can cancel via SMS alert during the wait period.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* TAB: SECURITY */}
          {activeTab === 'security' && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <div>
                <h2 className="text-3xl font-black text-gray-900">Security & Privacy</h2>
                <p className="text-gray-700 font-medium">Manage your end-of-life data protection settings.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-[#fadce1]">
                  <CardHeader><CardTitle className="text-lg font-black flex items-center text-[#2a5df7]"><Clock className="mr-2 h-4 w-4" /> Proof of Life</CardTitle></CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1 bg-[#fdeef1] text-[#2a5df7] border-[#2a5df7] font-bold">30 Days</Button>
                      <Button variant="outline" className="flex-1 border-[#fadce1] font-bold">90 Days</Button>
                    </div>
                    <p className="text-xs text-gray-500 italic font-medium">How often you must log in to keep the account active.</p>
                  </CardContent>
                </Card>
                <Card className="border-[#fadce1]">
                  <CardHeader><CardTitle className="text-lg font-black flex items-center text-[#2a5df7]"><Lock className="mr-2 h-4 w-4" /> Access</CardTitle></CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="outline" className="w-full justify-start border-[#fadce1] font-bold"><Smartphone className="mr-2 h-4 w-4 text-[#eb6580]" /> Enable 2FA</Button>
                    <Button variant="outline" className="w-full justify-start border-[#fadce1] font-bold"><Key className="mr-2 h-4 w-4 text-[#eb6580]" /> Change Encryption Key</Button>
                  </CardContent>
                </Card>
              </div>
              <Card className="border-[#fadce1] bg-white">
                <CardContent className="p-6 flex items-center justify-between">
                  <div><p className="font-black text-red-600 text-lg">Immediate Data Shredding</p><p className="text-sm text-gray-600 font-medium">Delete all messages and recipient data permanently.</p></div>
                  <Button variant="destructive" className="font-bold px-8">Shred All Data</Button>
                </CardContent>
              </Card>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}

const Label = ({ children }: { children: React.ReactNode }) => (
  <label className="text-sm font-black uppercase tracking-wider text-gray-600 mb-2 block">{children}</label>
);