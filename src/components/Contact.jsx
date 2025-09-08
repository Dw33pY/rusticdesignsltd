export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <form
          action="https://formspree.io/f/mwkavayq" 
          method="POST"
          className="space-y-4"
        >
          <input type="text" name="name" placeholder="Your Name" required
            className="w-full p-3 rounded-lg border dark:bg-gray-900 dark:border-gray-700" />
          <input type="email" name="email" placeholder="Your Email" required
            className="w-full p-3 rounded-lg border dark:bg-gray-900 dark:border-gray-700" />
          <textarea name="message" placeholder="Your Message" required rows="5"
            className="w-full p-3 rounded-lg border dark:bg-gray-900 dark:border-gray-700" />
          <button type="submit"
            className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition">
            Send Message
          </button>
        </form>
        <div className="mt-6 text-gray-700 dark:text-gray-300">
          <p>📞 +254721388388</p>
          <p>📧 rusticdesigns@gmail.com</p>
        </div>
      </div>
    </section>
  );
}
