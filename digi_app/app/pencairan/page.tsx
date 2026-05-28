import React from "react";
import { Filter, Download, XCircle, CheckCircle2, Clock } from "lucide-react";

export default function PencairanPage() {
  // Data dummy tiruan berdasarkan teks persis di gambar Figma
  const queueList = [
    {
      id: "RB-2026-004",
      title: "Gramedia Merdeka",
      project: "Renovasi Kantor Cabang Bandung",
      amount: "Rp 150.000",
      active: true,
    },
    {
      id: "RB-2026-003",
      title: "SPBU Pertamina 34.121",
      project: "Pembangunan Gudang Fase 2",
      amount: "Rp 450.000",
      active: false,
    },
  ];

  return (
    <>
      {/* ================= KOLOM KIRI: ANTRIAN LIST ================= */}
      <section className="w-80 border-r border-zinc-200 bg-white flex flex-col shrink-0">
        {/* Header List */}
        <div className="p-4 border-b border-zinc-200">
          <h1 className="text-xl font-bold text-zinc-900">Antrian Pencairan</h1>
          <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
            Pengajuan yang telah divalidasi PM dan siap dicairkan. Jurnal Debit-Kredit akan ter-generate otomatis.
          </p>

          {/* Tab Kategori & Filter */}
          <div className="flex gap-1.5 mt-4 text-xs">
            <button className="px-3 py-1.5 font-medium rounded-full bg-zinc-100 text-zinc-700 shadow-sm">
              Diteruskan (2)
            </button>
            <button className="px-3 py-1.5 font-medium rounded-full text-zinc-400 hover:text-zinc-600 transition">
              Selesai (7)
            </button>
            <button className="ml-auto p-1.5 text-zinc-500 border border-zinc-200 rounded-lg hover:bg-zinc-50 transition flex items-center gap-1 font-medium">
              <Filter size={13} />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* List Cards */}
        <div className="flex-1 overflow-y-auto p-2 space-y-2 bg-zinc-50/40">
          {queueList.map((item) => (
            <div
              key={item.id}
              className={`p-3 rounded-xl border text-left cursor-pointer transition ${
                item.active
                  ? "bg-emerald-50/60 border-emerald-200 shadow-sm"
                  : "bg-white border-zinc-200 hover:bg-zinc-50"
              }`}
            >
              <div className="flex justify-between items-start gap-2">
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-semibold text-xs flex items-center justify-center shrink-0">
                    AI
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-zinc-900 leading-tight">
                      {item.title} <span className="font-normal text-zinc-400">· {item.id}</span>
                    </h4>
                    <p className="text-[11px] text-zinc-500 mt-0.5 line-clamp-1">{item.project}</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-zinc-900 shrink-0">{item.amount}</span>
              </div>
              <div className="mt-3 flex justify-end">
                <span className="text-[10px] font-semibold text-sky-600 bg-sky-50 px-2 py-0.5 rounded border border-sky-100/70">
                  Verifikasi Keuangan
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= KOLOM KANAN: DETAIL PENGAJUAN ================= */}
      <section className="flex-1 bg-zinc-50/30 overflow-y-auto flex flex-col justify-between">
        
        {/* Konten Detail Mandiri */}
        <div className="p-6 max-w-2xl w-full mx-auto bg-white border border-zinc-200 rounded-2xl my-6 shadow-sm space-y-5">
          
          {/* Header Identitas Ringkas */}
          <div className="flex justify-between items-start border-b border-zinc-100 pb-4">
            <div>
              <span className="text-[11px] text-zinc-400 font-mono tracking-wider">RB-2026-004</span>
              <h2 className="text-2xl font-bold text-zinc-900 mt-0.5">Gramedia Merdeka</h2>
              <p className="text-xs text-zinc-400 mt-1">
                oleh <span className="font-medium text-zinc-700">Alif Ihsan</span> · 6 Mei 2026, 13:32
              </p>
            </div>
            <span className="text-xs font-semibold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
              Verifikasi Keuangan
            </span>
          </div>

          {/* Tabel Informasi Utama */}
          <div className="space-y-1 text-xs">
            <div className="grid grid-cols-3 py-2 border-b border-zinc-100">
              <span className="text-zinc-400">Proyek</span>
              <span className="col-span-2 font-medium text-zinc-800 text-right md:text-left">Renovasi Kantor Cabang Bandung</span>
            </div>
            <div className="grid grid-cols-3 py-2 border-b border-zinc-100">
              <span className="text-zinc-400">Pos Anggaran</span>
              <span className="col-span-2 font-medium text-zinc-800 text-right md:text-left">Perlengkapan & ATK</span>
            </div>
            <div className="grid grid-cols-3 py-2 border-b border-zinc-100">
              <span className="text-zinc-400">Tanggal Transaksi</span>
              <span className="col-span-2 font-medium text-zinc-800 text-right md:text-left">18 Mei 2026</span>
            </div>
            <div className="grid grid-cols-3 py-2 border-b border-zinc-100">
              <span className="text-zinc-400">Pengaju</span>
              <span className="col-span-2 font-medium text-zinc-800 text-right md:text-left">Alif Ihsan</span>
            </div>
            <div className="grid grid-cols-3 py-2 border-b border-zinc-100">
              <span className="text-zinc-400">Divalidasi PM</span>
              <span className="col-span-2 font-medium text-zinc-800 text-right md:text-left">Muhammad Alvin Ababil</span>
            </div>
            <div className="grid grid-cols-3 py-2 border-b border-zinc-100">
              <span className="text-zinc-400">Nominal</span>
              <span className="col-span-2 font-bold text-zinc-900 text-right md:text-left">Rp 150.000</span>
            </div>
          </div>

          {/* Preview Jurnal Akuntansi (Auto-generated) */}
          <div className="bg-zinc-50/50 border border-zinc-200 rounded-xl p-4">
            <div className="flex justify-between items-center text-[11px] text-zinc-400 font-mono mb-2.5">
              <span>Preview Jurnal Akuntansi (Auto-generated)</span>
              <span>6 Mei 2026</span>
            </div>
            <h4 className="text-xs font-bold text-zinc-800">JE - 2026 - 0892</h4>
            <p className="text-xs text-zinc-400 mb-4 italic mt-0.5">Pencairan reimbursement Alif Ihsan - Perlengkapan & ATK</p>
            
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between items-center">
                <span className="text-zinc-700">
                  <span className="text-emerald-600 font-bold mr-1">Dr</span> 5-5101 Beban Material Proyek
                </span>
                <span className="text-zinc-900 font-medium">Rp 1.875.000</span>
              </div>
              <div className="flex justify-between items-center pl-4">
                <span className="text-zinc-700">
                  <span className="text-red-600 font-bold mr-1">Cr</span> 1-1102 Bank BCA - Operasional
                </span>
                <span className="text-zinc-900 font-medium">Rp 1.875.000</span>
              </div>
            </div>
          </div>

          {/* Keterangan Pengaju */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-400">Keterangan dari pengaju</label>
            <div className="bg-zinc-50/60 border border-zinc-200 rounded-xl p-3 text-xs text-zinc-700 italic leading-relaxed">
              "Pembelian kertas A4, log book, dan papan klip untuk kebutuhan administrasi site".
            </div>
          </div>

          {/* Catatan Project Manager */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-400">Catatan dari Project Manager (Muhammad Alvin Ababil)</label>
            <div className="bg-zinc-50/60 border border-zinc-200 rounded-xl p-3 text-xs text-zinc-400">
              -
            </div>
          </div>

          {/* Alur Approval Line */}
          <div className="space-y-3 pt-2">
            <label className="text-xs font-semibold text-zinc-400">Alur Approval</label>
            <div className="relative pl-6 space-y-5 before:absolute before:left-[9px] before:top-2 before:bottom-2 before:w-[1.5px] before:bg-zinc-200">
              
              {/* Step 1 */}
              <div className="relative flex items-start gap-3">
                <div className="absolute -left-[23px] bg-white rounded-full text-emerald-600 p-0.5 z-10">
                  <CheckCircle2 size={15} fill="currentColor" className="text-white" />
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-zinc-800">Pengajuan dikirim</p>
                  <p className="text-zinc-400 mt-0.5">Alif Ihsan · 6 Mei 2026, 13:32</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start gap-3">
                <div className="absolute -left-[23px] bg-white rounded-full text-emerald-600 p-0.5 z-10">
                  <CheckCircle2 size={15} fill="currentColor" className="text-white" />
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-zinc-800">Validasi Project Manager</p>
                  <p className="text-zinc-400 mt-0.5">Muhammad Alvin Ababil · 7 Mei 2026, 08:14</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-start gap-3">
                <div className="absolute -left-[23px] bg-white rounded-full text-amber-500 p-0.5 z-10">
                  <Clock size={15} fill="currentColor" className="text-white" />
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-zinc-800">Verifikasi Tim Keuangan</p>
                  <p className="text-zinc-400 mt-0.5">Menunggu · -</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-start gap-3">
                <div className="absolute -left-[23px] bg-white rounded-full text-zinc-300 p-0.5 z-10">
                  <Clock size={15} fill="currentColor" className="text-white" />
                </div>
                <div className="text-xs">
                  <p className="font-medium text-zinc-400">Dicairkan</p>
                  <p className="text-zinc-400 mt-0.5">Jurnal otomatis · -</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Sticky/Fixed Footer Action Buttons */}
        <div className="border-t border-zinc-200 px-6 py-3.5 bg-zinc-50 flex items-center justify-between shrink-0">
          <button className="flex items-center gap-2 text-xs font-semibold text-zinc-600 bg-white border border-zinc-200 hover:bg-zinc-50 transition px-3 py-2 rounded-xl shadow-sm">
            <Download size={14} />
            <span>Download bukti</span>
          </button>

          <div className="flex gap-2">
            <button className="flex items-center gap-1.5 text-xs font-semibold text-white bg-red-800 hover:bg-red-900 transition px-4 py-2 rounded-xl shadow-sm">
              <XCircle size={14} />
              <span>Tolak</span>
            </button>
            <button className="flex items-center gap-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition px-4 py-2 rounded-xl shadow-sm">
              <CheckCircle2 size={14} />
              <span>Cairkan & Generate Jurnal</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}