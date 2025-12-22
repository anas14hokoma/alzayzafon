import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* ✅ شعار + اسم الشركة */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-11 w-11 rounded-xl overflow-hidden border border-[var(--border)] bg-white">
            <Image
              src="/images/logo.jpg"
              alt="شعار شركة الزيزفون"
              fill
              className="object-contain p-1"
              priority
            />
          </div>

          <div className="leading-tight">
            <div className="font-extrabold text-lg">الزيزفون لاستيراد المواد الغذائية</div>
            <div className="text-xs font-bold text-[var(--muted)]">
              Alzayzafon Food Import
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7 font-bold">
          <Link className="hover:text-[var(--brand)]" href="/">الرئيسية</Link>
          <Link className="hover:text-[var(--brand)]" href="/about">من نحن</Link>
          <Link className="hover:text-[var(--brand)]" href="/products">منتجاتنا</Link>
          <Link className="hover:text-[var(--brand)]" href="/gallery">معرض الصور</Link>
          <Link className="hover:text-[var(--brand)]" href="/contact">اتصل بنا</Link>

          <a
            href="tel:0945513938"
            className="rounded-xl bg-[var(--brand)] px-5 py-2 text-white hover:bg-[var(--brand2)] transition shadow-[0_16px_40px_rgba(236,27,36,.18)]"
          >
            اتصال سريع
          </a>
        </nav>

        <a
          href="tel:0945513938"
          className="md:hidden rounded-xl border border-[var(--border)] bg-white px-4 py-2 font-extrabold"
        >
          اتصال
        </a>
      </div>
    </header>
  );
}
