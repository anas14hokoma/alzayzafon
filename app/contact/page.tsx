export default function Contact() {
    return (
      <section className="py-20 bg-brandBg">
        <div className="max-w-xl mx-auto px-6">
          <h1 className="text-3xl font-bold mb-8">اتصل بنا</h1>
  
          <form className="space-y-4">
            <input
              type="text"
              placeholder="الاسم"
              className="w-full p-3 border rounded"
            />
  
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full p-3 border rounded"
            />
  
            <textarea
              placeholder="رسالتك"
              className="w-full p-3 border rounded h-32"
            />
  
            <button
              type="submit"
              className="w-full bg-brandRed text-white py-3 rounded font-semibold hover:bg-red-700 transition"
            >
              إرسال
            </button>
          </form>
        </div>
      </section>
    );
  }
  