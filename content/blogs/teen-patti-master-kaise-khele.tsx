import React from "react";
import Image from "next/image";
import Link from "next/link";

const DOWNLOAD_URL = "https://www.earntp.com/m/ya5rcx?scene=&f=w&p=wa&l=en&tp=m173";
const PAGE_URL = "https://www.techtonis.com/blog/teen-patti-master-kaise-khele";

const handRankings = [
  { name: "ट्रेल / ट्रायो (Trail)", example: "A♠ A♥ A♦", detail: "तीनों पत्ते एक ही नंबर के। सबसे बड़ा हाथ।", chance: "0.24%" },
  { name: "प्योर सीक्वेंस (Pure Sequence)", example: "Q♥ K♥ A♥", detail: "लगातार तीन नंबर, और तीनों एक ही रंग (suit) के।", chance: "0.22%" },
  { name: "सीक्वेंस / रन (Sequence)", example: "4♣ 5♦ 6♠", detail: "लगातार तीन नंबर, लेकिन अलग-अलग रंग के।", chance: "3.26%" },
  { name: "कलर (Color)", example: "2♦ 7♦ J♦", detail: "तीनों पत्ते एक ही रंग के, पर लगातार नहीं।", chance: "4.96%" },
  { name: "पेयर (Pair)", example: "K♠ K♣ 5♥", detail: "दो पत्ते एक ही नंबर के।", chance: "16.94%" },
  { name: "हाई कार्ड (High Card)", example: "A♣ 9♦ 4♠", detail: "ऊपर का कोई हाथ नहीं बना, तो सबसे बड़ा पत्ता देखा जाता है।", chance: "74.39%" },
];

const faqs = [
  {
    q: "Teen Patti Master में कितने पत्ते मिलते हैं?",
    a: "52 पत्तों की एक गड्डी से हर खिलाड़ी को 3 पत्ते मिलते हैं। एक टेबल पर आम तौर पर 2 से 5 खिलाड़ी होते हैं।",
  },
  {
    q: "Blind और Seen (Chaal) में क्या फर्क है?",
    a: "Blind खिलाड़ी अपने पत्ते देखे बिना दांव लगाता है। पत्ते देखने के बाद आप Seen हो जाते हैं और आपको Blind खिलाड़ी से दोगुना दांव (Chaal) लगाना पड़ता है।",
  },
  {
    q: "Teen Patti में सबसे बड़ा हाथ कौन सा है?",
    a: "ट्रेल (तीनों पत्ते एक जैसे) सबसे बड़ा हाथ है, और A-A-A सबसे बड़ा ट्रेल है। उसके बाद प्योर सीक्वेंस, सीक्वेंस, कलर, पेयर और हाई कार्ड आते हैं।",
  },
  {
    q: "Show कब मांग सकते हैं?",
    a: "जब टेबल पर सिर्फ 2 खिलाड़ी बचें, तब Show मांगा जा सकता है। दोनों के पत्ते खुलते हैं और बड़ा हाथ जीतता है।",
  },
  {
    q: "क्या नए खिलाड़ी को पहले फ्री में खेलना चाहिए?",
    a: "हाँ। पहले practice या कम boot वाली टेबल पर नियम समझें। असली पैसे से तभी खेलें जब आप पूरा नुकसान सहन कर सकें, और आपकी उम्र 18 साल से ज़्यादा हो।",
  },
];

export default function TeenPattiMasterKaiseKhele() {
  return (
    <article lang="hi" className="max-w-4xl mx-auto py-6 text-slate-300 font-sans leading-relaxed space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "Teen Patti Master कैसे खेलें",
              inLanguage: "hi-IN",
              url: PAGE_URL,
              step: [
                { "@type": "HowToStep", name: "Boot अमाउंट तय होता है", text: "हर खिलाड़ी टेबल की boot अमाउंट पॉट में डालता है।" },
                { "@type": "HowToStep", name: "3 पत्ते बांटे जाते हैं", text: "हर खिलाड़ी को 3 पत्ते उल्टे बांटे जाते हैं।" },
                { "@type": "HowToStep", name: "Blind या Seen खेलें", text: "पत्ते देखे बिना Blind खेलें, या पत्ते देखकर Chaal चलें।" },
                { "@type": "HowToStep", name: "Pack, Chaal या Side Show", text: "हर बारी में Pack (फोल्ड), Chaal (दांव) या Side Show चुनें।" },
                { "@type": "HowToStep", name: "Show और जीत", text: "आखिरी 2 खिलाड़ी Show करते हैं, और बड़ा हाथ पूरा पॉट जीतता है।" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              inLanguage: "hi-IN",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ]),
        }}
      />

      {/* Header */}
      <header className="space-y-5 border-b border-slate-800 pb-8">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
          हिंदी गाइड • शुरुआती खिलाड़ियों के लिए
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Teen Patti Master Kaise Khele? नियम, Blind-Chaal और जीतने के टिप्स (हिंदी गाइड)
        </h1>
        <p className="text-base sm:text-lg text-slate-400">
          इस गाइड में आप आसान हिंदी में सीखेंगे कि Teen Patti Master कैसे खेलते हैं — boot, Blind और Seen, Chaal,
          Side Show, Show और पत्तों की रैंकिंग। अगर आपने अभी तक ऐप इंस्टॉल नहीं किया है, तो पहले हमारी{" "}
          <Link href="/" className="text-amber-400 underline hover:text-amber-300">
            Teen Patti Master APK download गाइड
          </Link>{" "}
          पढ़ें।
        </p>
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-slate-800">
          <Image
            src="/teen-patti-master-game.webp"
            alt="Teen Patti Master कैसे खेलें - हिंदी गाइड"
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
            priority
          />
        </div>
      </header>

      {/* Quick answer */}
      <section className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 sm:p-6 space-y-2">
        <h2 className="text-xl font-bold text-amber-300">छोटा जवाब</h2>
        <p>
          Teen Patti Master में हर खिलाड़ी को 3 पत्ते मिलते हैं। आप पत्ते देखे बिना (<strong>Blind</strong>) या पत्ते
          देखकर (<strong>Seen / Chaal</strong>) दांव लगाते हैं। कमज़ोर पत्ते हों तो <strong>Pack</strong> कर दें। आखिर
          में जिसके पास सबसे बड़ा हाथ होता है — जैसे <strong>ट्रेल</strong> या <strong>प्योर सीक्वेंस</strong> — वह पूरा
          पॉट जीतता है।
        </p>
      </section>

      {/* Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Teen Patti Master कैसे खेलें: स्टेप बाय स्टेप</h2>
        <ol className="space-y-4 list-decimal pl-6">
          <li>
            <strong className="text-white">टेबल चुनें:</strong> लॉबी में Classic Teen Patti चुनें और कम boot वाली टेबल से
            शुरू करें। Boot वह न्यूनतम रकम है जो हर खिलाड़ी शुरू में पॉट में डालता है।
          </li>
          <li>
            <strong className="text-white">पत्ते बांटे जाते हैं:</strong> हर खिलाड़ी को 3 पत्ते उल्टे मिलते हैं।
          </li>
          <li>
            <strong className="text-white">Blind या Seen:</strong> आप पत्ते देखे बिना Blind खेल सकते हैं। Blind दांव
            सस्ता होता है। पत्ते देखते ही आप Seen हो जाते हैं।
          </li>
          <li>
            <strong className="text-white">Chaal चलें:</strong> Seen खिलाड़ी को कम से कम Blind दांव का दोगुना लगाना पड़ता
            है। Blind खिलाड़ी Seen खिलाड़ी के दांव का आधा लगाता है।
          </li>
          <li>
            <strong className="text-white">Pack करें:</strong> पत्ते कमज़ोर हों तो Pack (फोल्ड) करें। आपने जो दांव लगाया
            है वह पॉट में ही रहता है, लेकिन आगे का नुकसान बच जाता है।
          </li>
          <li>
            <strong className="text-white">Side Show:</strong> Seen खिलाड़ी अपने से पहले वाले Seen खिलाड़ी से Side Show
            मांग सकता है। वह मान ले तो दोनों पत्ते मिलाते हैं, और कमज़ोर हाथ वाला बाहर हो जाता है।
          </li>
          <li>
            <strong className="text-white">Show:</strong> जब सिर्फ 2 खिलाड़ी बचें, तो Show मांगा जा सकता है। बड़ा हाथ
            जीतता है और पूरा पॉट ले जाता है।
          </li>
        </ol>
      </section>

      {/* Hand rankings */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Teen Patti पत्तों की रैंकिंग (बड़े से छोटे)</h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-800">
          <table className="w-full text-left text-sm sm:text-base">
            <thead className="bg-slate-900 text-slate-400">
              <tr>
                <th className="p-3">#</th>
                <th className="p-3">हाथ</th>
                <th className="p-3">उदाहरण</th>
                <th className="p-3">मतलब</th>
                <th className="p-3">संभावना</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {handRankings.map((h, i) => (
                <tr key={h.name}>
                  <td className="p-3 text-amber-400 font-bold">{i + 1}</td>
                  <td className="p-3 text-white font-semibold">{h.name}</td>
                  <td className="p-3 whitespace-nowrap">{h.example}</td>
                  <td className="p-3">{h.detail}</td>
                  <td className="p-3 whitespace-nowrap">{h.chance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-slate-400">
          ध्यान दें: ज़्यादातर टेबल पर A-K-Q सबसे बड़ा सीक्वेंस होता है, और A-A-A सबसे बड़ा ट्रेल। अगर दो खिलाड़ियों का हाथ
          बराबर हो, तो सबसे बड़ा पत्ता देखा जाता है।
        </p>
      </section>

      {/* Tips */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">नए खिलाड़ियों के लिए 7 ज़रूरी टिप्स</h2>
        <ul className="space-y-3 list-disc pl-6">
          <li>पहले practice या सबसे कम boot वाली टेबल पर खेलकर नियम पक्के करें।</li>
          <li>शुरुआत के 1–2 राउंड Blind खेलना सस्ता पड़ता है, लेकिन हर बार Blind खेलना ठीक नहीं।</li>
          <li>हाई कार्ड या छोटा पेयर हो और सामने से बड़े दांव आ रहे हों, तो Pack करना समझदारी है।</li>
          <li>हर बाज़ी में अपने कुल बजट का 5% से ज़्यादा दांव न लगाएं।</li>
          <li>हारने के बाद नुकसान वापस जीतने के लिए दांव बढ़ाना (chasing) सबसे बड़ी गलती है।</li>
          <li>रोज़ का बजट और समय पहले से तय करें, और पूरा होते ही खेल बंद करें।</li>
          <li>
            और रणनीति के लिए पढ़ें:{" "}
            <Link href="/blog/teen-patti-master-secrets" className="text-amber-400 underline">Teen Patti Master Pro Secrets</Link>{" "}
            और{" "}
            <Link href="/blog/teen-patti-master-loss-recover" className="text-amber-400 underline">लॉस कंट्रोल गाइड</Link>।
          </li>
        </ul>
      </section>

      {/* Download CTA */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white">Teen Patti Master अभी इंस्टॉल नहीं किया?</h2>
        <p className="text-sm text-slate-400">
          इंस्टॉल करने के स्टेप्स के लिए हमारी{" "}
          <Link href="/blog/teen-patti-master-download-guide" className="text-amber-400 underline">डाउनलोड गाइड</Link> देखें।
        </p>
        <a
          href={DOWNLOAD_URL}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="inline-block bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition hover:scale-105"
        >
          Teen Patti Master डाउनलोड करें
        </a>
      </section>

      {/* FAQ */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">अक्सर पूछे जाने वाले सवाल (FAQ)</h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="bg-slate-900/70 border border-slate-800 rounded-xl p-4">
              <summary className="font-semibold text-white cursor-pointer">{f.q}</summary>
              <p className="mt-2">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Responsible play */}
      <section className="bg-red-950/40 border border-red-500/40 rounded-2xl p-5 text-sm">
        <p>
          <strong className="text-white">18+ ही खेलें।</strong> असली पैसे वाले गेम में पैसा हारने का जोखिम होता है, और
          कुछ राज्यों में ये गेम प्रतिबंधित हैं। इसे सिर्फ मनोरंजन के लिए खेलें, कमाई के लिए नहीं। ज़्यादा जानकारी:{" "}
          <Link href="/responsible-gaming" className="text-amber-400 underline">Responsible Gaming</Link>।
        </p>
      </section>
    </article>
  );
}
