import React from 'react';
import { 
  Users, 
  ShieldCheck, 
  FileText, 
  Settings, 
  LogOut, 
  PlusCircle,
  Clock
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/registry/default/ui/card";
import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import { Textarea } from "@/components/ui/textarea"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar - Replaces your usual Header/Footer */}
      <aside className="w-64 bg-white border-r hidden md:flex flex-col">
        <div className="p-6">
          <h1 className="text-xl font-bold text-slate-900">SayGoodbyes.com</h1>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <Button variant="ghost" className="w-full justify-start text-blue-600 bg-blue-50">
            <FileText className="mr-2 h-4 w-4" /> Messages
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Users className="mr-2 h-4 w-4" /> Recipients
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <ShieldCheck className="mr-2 h-4 w-4" /> Verifier
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" /> Security
          </Button>
        </nav>
        <div className="p-4 border-t">
          <Button variant="ghost" className="w-full justify-start text-red-500">
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto space-y-8">
          
          <header className="flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Your Legacy Dashboard</h2>
              <p className="text-slate-500">Everything is kept encrypted until your verifier acts.</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline"><Clock className="mr-2 h-4 w-4" /> Proof of Life: 30 Days</Button>
            </div>
          </header>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-500">Recipients Listed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12 People</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-500">Verifier Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-green-600">
                  <ShieldCheck className="mr-2 h-4 w-4" />
                  <span className="text-2xl font-bold italic">Active</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-blue-600 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-blue-100">Plan Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold italic">Secure</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* General Message Editor */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>The General Message</CardTitle>
                  <CardDescription>
                    This message goes to everyone on your list. Use it for your final thoughts or general instructions.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea 
                    placeholder="Write your final thoughts here..." 
                    className="min-h-[300px] text-lg leading-relaxed"
                  />
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-slate-400">Last auto-saved at 10:45 AM</p>
                    <Button>Save Message</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Tools */}
            <div className="space-y-6">
              {/* Verifier Appointment */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Appoint Verifier</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label>Email Address</Label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <Button className="w-full" variant="outline">Update Verifier</Button>
                  <p className="text-xs text-slate-500 text-center italic">
                    They will be notified to confirm their role.
                  </p>
                </CardContent>
              </Card>

              {/* Quick Add Recipient */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600 flex items-center">
                    <PlusCircle className="mr-2 h-4 w-4" /> Individual Messages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-500 mb-4">
                    Want to leave a specific message for just one person?
                  </p>
                  <Button className="w-full">Create Personalized Goodbye</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Simple Label helper if not using shadcn/label
const Label = ({ children }: { children: React.ReactNode }) => (
  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
    {children}
  </label>
);