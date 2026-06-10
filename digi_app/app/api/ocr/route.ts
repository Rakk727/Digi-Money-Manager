import { NextResponse, NextRequest } from 'next/server';

// POST: Simulate AI OCR photo extraction (FR07)
export async function POST(req: NextRequest) {
  try {
    // We can parse the form data if the client sent an image
    let fileName = 'unknown.png';
    let fileSize = 0;

    try {
      const formData = await req.formData();
      const file = formData.get('file') as File | null;
      if (file) {
        fileName = file.name;
        fileSize = file.size;
      }
    } catch (e) {
      // If not sent as form-data, ignore
    }

    // Simulate 1 second processing delay to make it realistic
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Return mock OCR extracted data
    return NextResponse.json({
      success: true,
      message: 'AI OCR successfully extracted receipt data',
      data: {
        merchant: 'Gramedia Merdeka',
        tanggal: '2026-05-18',
        nominal: 450000,
        kategoriBukti: 'Struk Pembelian',
        keterangan: 'Pembelian kertas A4, log book, dan papan klip untuk kebutuhan administrasi site.',
        fraudFlag: false,
        ocrMetadata: {
          processedFileName: fileName,
          fileSizeBytes: fileSize,
          confidenceScore: 0.98,
        }
      }
    });
  } catch (error: any) {
    console.error('OCR Endpoint error:', error);
    return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
  }
}
