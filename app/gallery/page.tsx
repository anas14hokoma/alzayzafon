import Image from "next/image";

const GALLERY = [
  { src: "/gallery/1.jpg", alt: " " },
  { src: "/gallery/2.jpg", alt: " " },
  { src: "/gallery/3.jpg", alt: " "},
  { src: "/gallery/4.jpg", alt: "" },
  { src: "/gallery/5.jpg", alt: " " },
  { src: "/gallery/6.jpg", alt: " " },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-xs font-extrabold text-[var(--muted)]">GALLERY</div>
            <h1 className="mt-2 text-4xl font-extrabold">معرض الصور</h1>
            <p className="mt-2 text-[var(--muted)] font-semibold">
              شحنات • منتجات • مستودعات • نشاطات الشركة
            </p>
          </div>
        </div>

        {/* Masonry-like layout بدون أي onClick */}
        <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-4">
          {GALLERY.map((img, i) => (
            <a
              key={i}
              href={img.src}
              target="_blank"
              rel="noreferrer"
              className="mb-4 block break-inside-avoid rounded-2xl border border-[var(--border)] bg-white overflow-hidden hover:shadow-[var(--shadow)] transition"
            >
              <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/0 via-black/0 to-black/10" />
              </div>

              <div className="p-4">
                <div className="text-sm font-extrabold">{img.alt}</div>
                <div className="mt-1 text-xs font-semibold text-[var(--muted)]">
                  اضغط لفتح الصورة بحجم كامل
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
