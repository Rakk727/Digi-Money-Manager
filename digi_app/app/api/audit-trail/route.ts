import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  try {
    const role = req.headers.get('x-user-role');
    if (role !== 'Tim Keuangan' && role !== 'Direktur / Manajemen') {
      return NextResponse.json({ message: 'Forbidden: Unauthorized to view audit trails' }, { status: 403 });
    }

    const auditLogs = await prisma.auditTrail.findMany({
      include: {
        user: {
          select: {
            nama: true,
            email: true,
            role: true,
          },
        },
      },
      orderBy: { timestamp: 'desc' },
    });

    return NextResponse.json({ auditLogs });
  } catch (error: any) {
    console.error('Fetch audit trail error:', error);
    return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
  }
}
