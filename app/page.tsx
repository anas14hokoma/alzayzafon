"use client";

import Link from "next/link";
import Image from "next/image";

const PHONE = "0945513938";

// Coordinates: 32°07'33.1"N 20°04'52.4"E  ->  32.125861, 20.081222
const LAT = 32.125861;
const LNG = 20.081222;

const LOCATION_NAME = "المعرض التجاري - بنغازي - ليبيا";
const LOCATION_DMS = `32°07'33.1"N 20°04'52.4"E`;

export default function Home() {
  const mapsUrl = `https://www.google.com/maps?q=${LAT},${LNG}`;
  const mapsEmbed = `https://www.google.com/maps?q=${LAT},${LNG}&z=16&output=embed`;

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden">
        {/* Global background */}
        <div className="absolute inset-0 bg-grid opacity-[0.22]" />
        <div className="absolute -top-56 left-[-200px] h-[560px] w-[560px] rounded-full bg-[var(--brand)]/10 blur-3xl" />
        <div className="absolute -bottom-56 right-[-220px] h-[620px] w-[620px] rounded-full bg-black/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pt-14 pb-10 md:pt-20 md:pb-16">
          {/* Top badge */}
          <div className="inline-flex flex-wrap items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 shadow-sm">
            <Dot />
            <span className="text-sm font-semibold text-[var(--muted)]">
              استيراد غذائي عالمي • خبرة +21 سنة
            </span>
            <span className="h-4 w-px bg-[var(--border)]" />
            <span className="text-sm font-extrabold text-[var(--text)]">
              Global Food Import • 21+ Years
            </span>
          </div>

          <div className="mt-8 grid items-center gap-10 md:grid-cols-12">
            {/* RIGHT: headline */}
            <div className="md:col-span-7">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.15]">
                شركة الزيزفون
                <span className="block mt-3 text-[var(--brand)]">
                  لاستيراد المواد الغذائية
                </span>
              </h1>

              <p className="mt-4 text-sm md:text-base font-bold tracking-wide text-[var(--muted)]">
                Alzayzafon Food Import Company
              </p>

              <p className="mt-6 text-lg md:text-xl leading-relaxed text-[var(--muted)]">
                نُورِّد أجود{" "}
                <b className="text-[var(--text)]">البقوليات</b> و{" "}
                <b className="text-[var(--text)]">التوابل</b> و{" "}
                <b className="text-[var(--text)]">المكسرات</b>{" "}
                عبر شبكة موردين عالمية متعددة المصادر، مع التزام صارم بالجودة
                واستمرارية التوريد لخدمة السوق الليبي.
              </p>

              {/* ✅ CTA تحسين: اتصال سريع + زر موقع */}
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href={`tel:${PHONE}`}
                  className="rounded-xl bg-[var(--brand)] px-7 py-4 font-extrabold text-white shadow-[0_18px_55px_rgba(236,27,36,.18)] hover:bg-[var(--brand2)] transition"
                >
                  اتصال مباشر: {PHONE}
                </a>

                <a
                  href="#location"
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-7 py-4 font-extrabold hover:shadow-md transition"
                >
                  موقعنا على الخريطة
                </a>

                <Link
                  href="/products"
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-7 py-4 font-extrabold hover:shadow-md transition"
                >
                  استعرض منتجاتنا
                </Link>

                <Link
                  href="/about"
                  className="rounded-xl border border-transparent px-2 py-4 font-extrabold text-[var(--brand)] hover:underline"
                >
                  من نحن →
                </Link>
              </div>

              {/* KPIs */}
              <div className="mt-10 grid grid-cols-3 gap-4">
                <KPI value="21+" label="سنوات خبرة" />
                <KPI value="10+" label="دول استيراد" />
                <KPI value="B2B" label="توريد للجملة" />
              </div>

              {/* ✅ سطر معلومات سريع تحت الهيرو (مفيد للشركة) */}
              <div className="mt-8 grid gap-3 md:grid-cols-2">
                <InfoPill title="هاتف" value={PHONE} />
                <InfoPill title="الموقع" value={LOCATION_NAME} />
              </div>
            </div>

            {/* LEFT: global card */}
            <div className="md:col-span-5">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow2)] overflow-hidden">
                {/* Card header */}
                <div className="px-6 py-5 border-b border-[var(--border)] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-extrabold text-[var(--muted)]">
                      SUPPLY NETWORK
                    </div>
                    <div className="mt-1 text-lg font-extrabold">
                      شبكة توريد عالمية
                    </div>
                  </div>
                  <span className="rounded-full bg-[var(--brand)]/10 text-[var(--brand)] px-3 py-1 text-xs font-extrabold">
                    Verified
                  </span>
                </div>

                {/* World map (inline SVG) */}
                <div className="p-6">
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-sm font-extrabold text-[var(--muted)]">
                          دول الاستيراد
                        </div>
                        <div className="mt-2 text-sm font-semibold text-[var(--muted)]">
                          الصين • الهند • فيتنام • أمريكا • السعودية • مصر •
                          الأرجنتين • البرازيل • ماليزيا • تركيا • سوريا
                        </div>
                      </div>

                      <div className="shrink-0 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-center">
                        <div className="text-[10px] font-extrabold text-[var(--muted)]">
                          SINCE
                        </div>
                        <div className="text-xl font-extrabold">2004</div>
                      </div>
                    </div>

                    <div className="mt-5">
                      <WorldMap />
                    </div>

                    <div className="mt-5 h-2 w-full rounded-full bg-white border border-[var(--border)] overflow-hidden">
                      <div className="h-full w-[78%] bg-[var(--brand)]/25" />
                    </div>
                    <div className="mt-2 text-xs font-semibold text-[var(--muted)]">
                      تغطية توريد قوية واستمرارية عالية
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <Mini title="بقوليات" sub="توريد ثابت" />
                    <Mini title="توابل" sub="اختيار دقيق" />
                    <Mini title="مكسرات" sub="جودة عالية" />
                  </div>
                </div>

                {/* ✅ Card footer: أضف اتصال + موقع */}
                <div className="px-6 py-5 border-t border-[var(--border)] flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-6">
                    <div className="text-sm font-semibold text-[var(--muted)]">
                      اتصال مباشر
                    </div>
                    <a
                      href={`tel:${PHONE}`}
                      className="font-extrabold text-[var(--brand)] hover:underline"
                    >
                      {PHONE}
                    </a>
                  </div>

                  <div className="flex items-center justify-between gap-6">
                    <div className="text-sm font-semibold text-[var(--muted)]">
                      موقعنا
                    </div>
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-extrabold text-[var(--brand)] hover:underline"
                    >
                      فتح على Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted row (global style) */}
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            <Trust title="موردون معتمدون" desc="شبكة علاقات دولية متنوعة." />
            <Trust title="معايير جودة" desc="اختيار ثابت وثقة سوق." />
            <Trust title="استمرارية توريد" desc="مصادر متعددة لتقليل الانقطاع." />
            <Trust title="توريد للجملة" desc="حلول موجهة للتجار والشركات." />
          </div>
        </div>
      </section>

      {/* ===================== PRODUCTS PREVIEW ===================== */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-extrabold">منتجاتنا</h2>
              <p className="mt-2 text-[var(--muted)] font-semibold">
                تقسيم عالمي واضح للأقسام الرئيسية.
              </p>
            </div>

            <Link
              href="/products"
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-6 py-3 font-extrabold hover:shadow-md transition"
            >
              مشاهدة كل المنتجات
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
          <ProductCard tag="LEGUMES" title="البقوليات" imageSrc="/images/legumes.png" />
<ProductCard tag="SPICES" title="التوابل" imageSrc="/images/spices.png" />
<ProductCard tag="NUTS" title="المكسرات" imageSrc="/images/nuts.png" />

          </div>
        </div>
      </section>

      {/* ===================== LOCATION (NEW) ===================== */}
      <section id="location" className="py-16 bg-[var(--surface)] border-y border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-xs font-extrabold text-[var(--muted)]">LOCATION</div>
              <h2 className="mt-2 text-3xl font-extrabold">موقعنا الجغرافي</h2>
              <p className="mt-2 text-[var(--muted)] font-semibold">
                {LOCATION_NAME} — الإحداثيات: {LOCATION_DMS}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-[var(--border)] bg-white px-6 py-3 font-extrabold hover:shadow-md transition"
              >
                فتح Google Maps
              </a>

              <a
                href={`tel:${PHONE}`}
                className="rounded-xl bg-[var(--brand)] px-6 py-3 font-extrabold text-white hover:bg-[var(--brand2)] transition"
              >
                اتصال فوري
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-12">
            {/* Info cards */}
            <div className="md:col-span-4 space-y-4">
              <InfoCard title="رقم الهاتف" value={PHONE} actionText="اتصل الآن" actionHref={`tel:${PHONE}`} />
              <InfoCard title="العنوان" value={LOCATION_NAME} />
              <InfoCard title="الإحداثيات" value={LOCATION_DMS} actionText="نسخ الإحداثيات" copyValue={`${LAT}, ${LNG}`} />
            </div>

            {/* Map */}
            <div className="md:col-span-8">
              <div className="rounded-2xl border border-[var(--border)] overflow-hidden shadow-[var(--shadow)] bg-white">
                <iframe
                  title="Alzayzafon Location"
                  className="w-full h-[380px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={mapsEmbed}
                />
              </div>

              <div className="mt-4 text-sm font-semibold text-[var(--muted)]">
                ملاحظة: يمكن فتح الموقع في Google Maps للحصول على مسار الوصول.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== GALLERY PREVIEW ===================== */}
      <section className="pb-20 pt-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-10 shadow-[var(--shadow)]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-7">
              <div>
                <div className="text-xs font-extrabold text-[var(--muted)]">
                  GALLERY
                </div>
                <h3 className="mt-2 text-2xl font-extrabold">
                  معرض الصور: شحنات • منتجات • مستودعات
                </h3>
                <p className="mt-2 text-[var(--muted)] font-semibold">
                  نضيف الصور الحقيقية لاحقًا وستظهر كواجهة شركة عالمية فورًا.
                </p>
              </div>

              <Link
                href="/gallery"
                className="rounded-xl bg-[var(--brand)] px-8 py-4 font-extrabold text-white hover:bg-[var(--brand2)] transition"
              >
                افتح المعرض
              </Link>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-12">
              <GalleryBlock className="md:col-span-5 h-44 md:h-56" />
              <GalleryBlock className="md:col-span-4 h-44 md:h-56" />
              <GalleryBlock className="md:col-span-3 h-44 md:h-56" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ===================== UI Blocks ===================== */

function Dot() {
  return <span className="h-2 w-2 rounded-full bg-[var(--brand)]" />;
}

function KPI({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 hover:shadow-md transition">
      <div className="text-2xl font-extrabold">{value}</div>
      <div className="mt-1 text-sm font-semibold text-[var(--muted)]">{label}</div>
      <div className="mt-3 h-1 w-10 rounded-full bg-[var(--brand)]/35" />
    </div>
  );
}

function Mini({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 hover:shadow-md transition">
      <div className="font-extrabold">{title}</div>
      <div className="mt-1 text-sm font-semibold text-[var(--muted)]">{sub}</div>
    </div>
  );
}

function Trust({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:shadow-md transition">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-extrabold">{title}</div>
          <div className="mt-2 text-sm font-semibold text-[var(--muted)] leading-relaxed">
            {desc}
          </div>
        </div>
        <div className="h-10 w-10 rounded-xl bg-[var(--brand)]/10 grid place-items-center">
          <span className="h-2 w-2 rounded-full bg-[var(--brand)]" />
        </div>
      </div>
    </div>
  );
}

function ProductCard({
  tag,
  title,
  imageSrc,
}: {
  tag: string;
  title: string;
  imageSrc: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 hover:shadow-[var(--shadow2)] transition">
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-xs font-extrabold text-[var(--muted)]">
          {tag}
        </span>
        <span className="text-[var(--brand)] font-extrabold">●</span>
      </div>

      <div className="mt-5 text-2xl font-extrabold">{title}</div>

      {/* ✅ صورة من public/images */}
      <div className="mt-6 h-44 rounded-2xl border border-[var(--border)] bg-white overflow-hidden relative">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* طبقة فخامة بسيطة */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/0 via-black/0 to-black/10" />
      </div>

      <div className="mt-6 font-extrabold text-[var(--brand)]">استكشاف ←</div>
    </div>
  );
}


function GalleryBlock({ className }: { className: string }) {
  return (
    <div
      className={`${className} rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden hover:shadow-md transition`}
    >
      <div className="h-full w-full bg-gradient-to-br from-black/5 via-white to-[var(--brand)]/10" />
    </div>
  );
}

function InfoPill({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4">
      <div className="text-xs font-extrabold text-[var(--muted)]">{title}</div>
      <div className="mt-1 font-extrabold">{value}</div>
    </div>
  );
}

function InfoCard({
  title,
  value,
  actionText,
  actionHref,
  copyValue,
}: {
  title: string;
  value: string;
  actionText?: string;
  actionHref?: string;
  copyValue?: string;
}) {
  const hasCopy = Boolean(copyValue);
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-white p-6 hover:shadow-md transition">
      <div className="text-xs font-extrabold text-[var(--muted)]">{title}</div>
      <div className="mt-2 text-lg font-extrabold">{value}</div>

      <div className="mt-4 flex flex-wrap gap-3">
        {actionHref && actionText ? (
          <a
            href={actionHref}
            className="rounded-xl bg-[var(--brand)] px-4 py-2 font-extrabold text-white hover:bg-[var(--brand2)] transition"
          >
            {actionText}
          </a>
        ) : null}

        {hasCopy ? (
          <button
            type="button"
            onClick={() => navigator.clipboard.writeText(copyValue!)}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2 font-extrabold hover:shadow-sm transition"
          >
            نسخ
          </button>
        ) : null}
      </div>
    </div>
  );
}

/* Inline SVG world map (minimal, clean, global feel) */
function WorldMap() {
  return (
    <svg viewBox="0 0 800 260" className="w-full h-auto">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="rgba(11,18,32,.10)" />
          <stop offset="1" stopColor="rgba(236,27,36,.12)" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="800" height="260" rx="18" fill="white" />
      <rect x="0" y="0" width="800" height="260" rx="18" fill="url(#g)" opacity="0.35" />

      <path
        d="M85 125c25-40 80-55 135-45 40 8 60 30 70 55-10 35-40 55-75 60-60 10-115-10-130-30-10-12-15-25 0-40z"
        fill="rgba(11,18,32,.12)"
      />
      <path
        d="M335 105c40-35 120-45 175-30 55 15 85 50 95 85-25 35-85 55-145 55-70 0-130-20-150-45-15-18-12-40 25-65z"
        fill="rgba(11,18,32,.10)"
      />
      <path
        d="M610 120c30-35 75-45 115-30 30 12 45 35 50 55-12 35-40 55-80 60-40 5-75-10-90-25-10-10-10-25 5-60z"
        fill="rgba(11,18,32,.09)"
      />

      <path
        d="M170 160 C 280 90, 410 210, 520 120 S 690 140, 720 110"
        fill="none"
        stroke="rgba(236,27,36,.45)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <circle cx="170" cy="160" r="6" fill="rgba(236,27,36,.85)" />
      <circle cx="320" cy="120" r="6" fill="rgba(236,27,36,.85)" />
      <circle cx="520" cy="120" r="6" fill="rgba(236,27,36,.85)" />
      <circle cx="650" cy="135" r="6" fill="rgba(236,27,36,.85)" />
      <circle cx="720" cy="110" r="6" fill="rgba(236,27,36,.85)" />

      <rect
        x="0.5"
        y="0.5"
        width="799"
        height="259"
        rx="18"
        fill="none"
        stroke="rgba(11,18,32,.10)"
      />
    </svg>
  );
}
