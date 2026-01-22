"use client";

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function UnauthorizedPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <Shield className="h-6 w-6 text-red-600" />
          </div>
          <CardTitle>Access Denied</CardTitle>
          <CardDescription>
            You don't have permission to access this resource.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-gray-600">
            This page requires administrator or reviewer privileges. Please contact your administrator if you believe this is an error.
          </p>
          <div className="flex gap-2">
            <Button onClick={() => router.push('/')} variant="outline" className="flex-1">
              Go Home
            </Button>
            <Button onClick={() => router.push('/llops')} className="flex-1">
              Control Center
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
