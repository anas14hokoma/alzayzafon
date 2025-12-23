export default function Footer() {
    return (
      <footer className="border-t border-[var(--border)] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 grid gap-8 md:grid-cols-3">
          <div>
            <div className="font-extrabold text-lg">شركة الزيزفون</div>
            <div className="text-sm text-[var(--muted)] font-semibold mt-2">
              Alzayzafon Food Import Company
            </div>
            <div className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
              خبرة +21 سنة في استيراد البقوليات والتوابل والمكسرات من مصادر عالمية متعددة.
            </div>
          </div>
  
          <div>
            <div className="font-extrabold">تواصل معنا</div>
            <div className="mt-3 space-y-2 text-sm font-semibold text-[var(--muted)]">
              <a className="block hover:text-[var(--brand)]" href="tel:0913260766">
                📞 0913260766
              </a>
              <div>📍 المعرض التجاري – بنغازي – ليبيا</div>
              <div>📌 32°07'33.1&quot;N 20°04'52.4&quot;E</div>
            </div>
          </div>
  
          <div>
            <div className="font-extrabold">روابط</div>
            <div className="mt-3 space-y-2 text-sm font-semibold text-[var(--muted)]">
              <a className="block hover:text-[var(--brand)]" href="/products">منتجاتنا</a>
              <a className="block hover:text-[var(--brand)]" href="/gallery">معرض الصور</a>
              <a className="block hover:text-[var(--brand)]" href="/contact">اتصل بنا</a>
            </div>
          </div>
        </div>
  
        <div className="border-t border-[var(--border)] py-5 text-center text-xs text-[var(--muted)] font-semibold">
          © {new Date().getFullYear()} شركة الزيزفون — جميع الحقوق محفوظة
        </div>
      </footer>
    );
  }
  
