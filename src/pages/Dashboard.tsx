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
  AlertTriangle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  // 1. State to track which section is visible
  const [activeTab, setActiveTab] = useState('messages');

  // Sidebar navigation helper
  const NavItem = ({ id, icon: Icon, label }: { id: string, icon: any, label: string }) => (
    <Button 
      variant="ghost" 
      onClick={() => setActiveTab(id)}
      className={`w-full justify-start ${activeTab === id ? 'text-blue-600 bg-blue-50' : 'text-slate-600'}`}
    >
      <Icon className="mr-2 h-4 w-4" /> {label}
    </Button>
  );

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:flex flex-col fixed h-full">
        <div className="p-6">
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            SayGoodbyes<span className="text-blue-600">.com</span>
          </h1>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <NavItem id="messages" icon={FileText} label="Messages" />
          <NavItem id="recipients" icon={Users} label="Recipients" />
          <NavItem id="verifier" icon={ShieldCheck} label="Verifier" />
          <NavItem id="security" icon={Settings} label="Security" />
        </nav>
        <div className="p-4 border-t">
          <Button variant="ghost" className="w-full justify-start text-red-500 hover:bg-red-50 hover:text-red-600">
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          
          {/* TAB: MESSAGES (Dashboard) */}
          {activeTab === 'messages' && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <header className="flex justify-between items-end">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">Your Legacy Dashboard</h2>
                  <p className="text-slate-500">Everything is kept encrypted until your verifier acts.</p>
                </div>
                <Button variant="outline"><Clock className="mr-2 h-4 w-4" /> Proof of Life: 30 Days</Button>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card><CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-slate-500">Recipients</CardTitle></CardHeader>
                  <CardContent><div className="text-2xl font-bold">12 People</div></CardContent>
                </Card>
                <Card><CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-slate-500">Verifier Status</CardTitle></CardHeader>
                  <CardContent><div className="flex items-center text-green-600"><ShieldCheck className="mr-2 h-4 w-4" /><span className="text-2xl font-bold italic">Active</span></div></CardContent>
                </Card>
                <Card className="bg-blue-600 text-white"><CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-blue-100">Status</CardTitle></CardHeader>
                  <CardContent><div className="text-2xl font-bold italic">Secure</div></CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>The General Message</CardTitle>
                      <CardDescription>Sent to everyone on your list upon verification.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Textarea placeholder="Write your final thoughts here..." className="min-h-[300px] text-lg" />
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-400">Last auto-saved at 10:45 AM</span>
                        <Button>Save Message</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-6">
                  <Card>
                    <CardHeader><CardTitle className="text-lg text-blue-600 flex items-center"><PlusCircle className="mr-2 h-4 w-4" /> Individual Messages</CardTitle></CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-500 mb-4">Leave a specific message for just one person.</p>
                      <Button className="w-full" onClick={() => setActiveTab('recipients')}>View Recipients</Button>
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
                  <h2 className="text-2xl font-bold">Recipients</h2>
                  <p className="text-slate-500">People who will receive your messages.</p>
                </div>
                <Button><PlusCircle className="mr-2 h-4 w-4" /> Add Recipient</Button>
              </div>
              <div className="grid gap-4">
                {[{ name: "Sarah Jenkins", email: "sarah.j@example.com", type: "Personal + General" },
                  { name: "Michael Thorne", email: "m.thorne@work.com", type: "General Only" }
                ].map((person, i) => (
                  <Card key={i}>
                    <CardContent className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600">{person.name[0]}</div>
                        <div><p className="font-semibold">{person.name}</p><p className="text-sm text-slate-500">{person.email}</p></div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant="secondary">{person.type}</Badge>
                        <Button variant="ghost" size="icon" className="text-slate-400 hover:text-red-500"><Trash2 className="h-4 w-4" /></Button>
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
                <h2 className="text-2xl font-bold">The Verifier</h2>
                <p className="text-slate-500">The person trusted to trigger message release.</p>
              </div>
              <Card className="border-blue-100 bg-blue-50/30">
                <CardHeader>
                  <div className="flex items-center gap-2 text-blue-700">
                    <ShieldCheck className="h-5 w-5" /><CardTitle>Current Verifier</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2"><Label>Full Name</Label><Input defaultValue="Robert Miller" /></div>
                    <div className="space-y-2"><Label>Email Address</Label><Input defaultValue="r.miller@trust.com" /></div>
                    <Button className="bg-blue-600">Update Verifier</Button>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-100 text-xs text-slate-600 space-y-2">
                    <h4 className="font-semibold text-sm mb-2 flex items-center text-slate-900"><AlertTriangle className="h-4 w-4 mr-2 text-amber-500" /> Protocol</h4>
                    <p>• Verifier must upload a death notice.</p>
                    <p>• 48-hour "Wait Period" before release.</p>
                    <p>• You can cancel via SMS alert during the wait period.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* TAB: SECURITY */}
          {activeTab === 'security' && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <div>
                <h2 className="text-2xl font-bold">Security & Privacy</h2>
                <p className="text-slate-500">Manage your data protection settings.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader><CardTitle className="text-lg flex items-center"><Clock className="mr-2 h-4 w-4" /> Proof of Life</CardTitle></CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1 bg-blue-50 text-blue-700 border-blue-200">30 Days</Button>
                      <Button variant="outline" className="flex-1">90 Days</Button>
                    </div>
                    <p className="text-xs text-slate-500 italic">How often you must log in to keep the account active.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle className="text-lg flex items-center"><Lock className="mr-2 h-4 w-4" /> Access</CardTitle></CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="outline" className="w-full justify-start"><Smartphone className="mr-2 h-4 w-4" /> Enable 2FA</Button>
                    <Button variant="outline" className="w-full justify-start"><Key className="mr-2 h-4 w-4" /> Change Encryption Key</Button>
                  </CardContent>
                </Card>
              </div>
              <Card className="border-red-100 bg-red-50/20">
                <CardContent className="p-4 flex items-center justify-between">
                  <div><p className="font-semibold text-red-900">Immediate Data Shredding</p><p className="text-sm text-red-700">Delete everything permanently.</p></div>
                  <Button variant="destructive">Shred All Data</Button>
                </CardContent>
              </Card>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}

// Label Helper
const Label = ({ children }: { children: React.ReactNode }) => (
  <label className="text-sm font-medium leading-none mb-2 block">{children}</label>
);