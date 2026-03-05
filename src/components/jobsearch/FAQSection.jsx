import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I apply for a job?",
      answer:
        "Click the Apply Now button on any job listing. You can apply with your existing profile or create a new one.",
    },
    {
      question: "Can I save jobs for later?",
      answer:
        "Yes! Click the bookmark icon on any job card to save it to your profile for later review.",
    },
    {
      question: "How often are new jobs posted?",
      answer:
        "New jobs are added daily. You can set up job alerts to be notified of new postings in your field.",
    },
    {
      question: "What if I don't see the right job?",
      answer:
        "Create a job alert with your criteria, and we'll notify you when matching positions become available.",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Find answers to common questions about job searching and applying.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg border border-slate-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition"
              >
                <span className="font-semibold text-slate-900">
                  {faq.question}
                </span>
                <span
                  className={`text-2xl text-slate-400 transition ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {openIndex === index && (
                <div className="border-t border-slate-200 px-6 py-4 text-slate-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
