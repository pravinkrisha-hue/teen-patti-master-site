import React from "react";
import Image from "next/image";
import Link from "next/link";

const PAGE_URL = "https://www.techtonis.com/blog/teen-patti-sequence-list";

// 52 पत्तों से 3 पत्तों के कुल 22,100 हाथ बनते हैं
const hands = [
  { rank: 1, name: "ट्रेल / ट्रायो (Trail)", example: "A♠ A♥ A♦", count: 52, pct: "0.24%" },
  { rank: 2, name: "प्योर सीक्वेंस (Pure Sequence)", example: "Q♥ K♥ A♥", count: 48, pct: "0.22%" },
  { rank: 3, name: "सीक्वेंस / रन (Sequence)", example: "4♣ 5♦ 6♠", count: 720, pct: "3.26%" },
  { rank: 4, name: "कलर (Color)", example: "2♦ 7♦ J♦", count: 1096, pct: "4.96%" },
  { rank: 5, name: "पेयर (Pair)", example: "K♠ K♣ 5♥", count: 3744, pct: "16.94%" },
  { rank: 6, name: "हाई कार्ड (High Card)", example: "A♣ 9♦ 4♠", count: 16440, pct: "74.39%" },
];

const sequences = ["A-K-Q", "A-2-3", "K-Q-J", "Q-J-10", "J-10-9", "10-9-8", "9-8-7", "8-7-6", "7-6-5", "6-5-4", "5-4-3", "4-3-2"];
const trails = ["A-A-A", "K-K-K", "Q-Q-Q", "J-J-J", "10-10-10", "9-9-9", "8-8-8", "7-7-7", "6-6-6", "5-5-5", "4-4-4", "3-3-3", "2-2-2"];

const faqs = [
  {
    q: "Teen Patti में सबसे बड़ा सीक्वेंस कौन सा है?",
    a: "ज़्यादातर टेबल पर A-K-Q सबसे बड़ा सीक्वेंस है और उसके बाद A-2-3 आता है। अगर तीनों पत्ते एक ही रंग के हों (जैसे Q♥ K♥ A♥), तो यह प्योर सीक्वेंस है, जो सीक्वेंस से ऊपर है।",
  },
  {
    q: "प्योर सीक्वेंस और ट्रेल में कौन बड़ा है?",
    a: "ट्रेल बड़ा है। मज़ेदार बात यह है कि गणित के हिसाब से प्योर सीक्वेंस (48 तरीके) ट्रेल (52 तरीके) से थोड़ा कम बनता है, फिर भी पारंपरिक नियमों में ट्रेल को सबसे ऊपर रखा जाता है।",
  },
  {
    q: "क्या Q-K-A और A-2-3 दोनों सीक्वेंस माने जाते हैं?",
    a: "हाँ। इक्का (A) ऊपर K-Q के साथ भी जुड़ता है और नीचे 2-3 के साथ भी। लेकिन K-A-2 जैसा घूमता हुआ क्रम सीक्वेंस नहीं माना जाता।",
  },
  {
    q: "दो खिलाड़ियों के पास एक जैसा कलर हो तो कौन जीतेगा?",
    a: "दोनों के सबसे बड़े पत्ते मिलाए जाते हैं। वे बराबर हों तो दूसरा पत्ता, फिर तीसरा। रंग (♠ ♥ ♦ ♣) से फैसला नहीं होता। तीनों पत्ते बराबर हों तो ज़्यादातर टेबल पर Show मांगने वाला हारता है।",
  },
  {
    q: "क्या ये रैंकिंग हर गेम मोड में एक जैसी होती है?",
    a: "नहीं। Classic Teen Patti में यही रैंकिंग चलती है, लेकिन Muflis में सबसे छोटा हाथ जीतता है, और AK47 या Joker मोड में कुछ पत्ते जोकर बन जाते हैं। टेबल पर बैठने से पहले उस मोड के नियम ज़रूर देखें।",
  },
];

export default function TeenPattiSequenceList() {
  return (
    <article lang="hi" className="max-w-4xl mx-auto py-6 text-slate-300 font-sans leading-relaxed space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Teen Patti Sequence List: सभी हाथों की पूरी रैंकिंग (हिंदी)",
              inLanguage: "hi-IN",
              url: PAGE_URL,
              image: "https://www.techtonis.com/teen-patti-master-2027.webp",
              datePublished: "2026-10-24",
              dateModified: "2026-10-24",
              author: { "@type": "Person", name: "Rohan Mehta", url: "https://www.techtonis.com/about#team" },
              publisher: { "@type": "Organization", name: "Teen Patti Master Hub", logo: { "@type": "ImageObject", url: "https://www.techtonis.com/icon.png" } },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              inLanguage: "hi-IN",
              mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            },
          ]),
        }}
      />

      <header className="space-y-5 border-b border-slate-800 pb-8">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
          हिंदी गाइड • नियम
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Teen Patti Sequence List: सभी हाथों की पूरी रैंकिंग (हिंदी में)
        </h1>
        <p className="text-base sm:text-lg text-slate-400">
          तीन पत्ती में आधी लड़ाई इस बात की होती है कि आपको पता हो कि आपका हाथ कितना मज़बूत है। कई नए खिलाड़ी कलर को सीक्वेंस से
          बड़ा समझ लेते हैं, या A-2-3 को छोटा मान बैठते हैं — और बेवजह पैसा गंवा देते हैं। इस पेज पर हर हाथ की रैंकिंग, पूरी
          सीक्वेंस लिस्ट और बराबरी के नियम एक जगह हैं। खेल के बुनियादी नियम चाहिए तो पहले{" "}
          <Link href="/blog/teen-patti-master-kaise-khele" className="text-amber-400 underline">Teen Patti Master kaise khele</Link> पढ़ें।
        </p>
        <div className="flex justify-center">
          <Image
            src="/teen-patti-master-2027.webp"
            alt="Teen Patti sequence list और हाथों की रैंकिंग"
            width={512}
            height={505}
            sizes="(max-width: 560px) 100vw, 512px"
            className="w-full max-w-[512px] h-auto rounded-2xl border border-slate-800 shadow-xl"
            priority
          />
        </div>
      </header>

      <section className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 sm:p-6 space-y-2">
        <h2 className="text-xl font-bold text-amber-300">एक लाइन में</h2>
        <p>
          बड़े से छोटे: <strong>ट्रेल → प्योर सीक्वेंस → सीक्वेंस → कलर → पेयर → हाई कार्ड</strong>। सीक्वेंस में A-K-Q सबसे बड़ा
          और 4-3-2 सबसे छोटा होता है; A-2-3 ज़्यादातर टेबल पर दूसरे नंबर पर आता है।
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">छह हाथ, बड़े से छोटे क्रम में</h2>
        <p>
          52 पत्तों की गड्डी से तीन पत्तों के कुल <strong className="text-white">22,100</strong> अलग-अलग हाथ बन सकते हैं। नीचे की टेबल
          बताती है कि हर तरह का हाथ इनमें से कितनी बार बनता है — यही वजह है कि ऊपर के हाथ इतने कीमती हैं।
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-800">
          <table className="w-full text-left text-sm sm:text-base">
            <thead className="bg-slate-900 text-slate-400">
              <tr>
                <th className="p-3">#</th>
                <th className="p-3">हाथ</th>
                <th className="p-3">उदाहरण</th>
                <th className="p-3">कितने तरीके</th>
                <th className="p-3">संभावना</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {hands.map((h) => (
                <tr key={h.name}>
                  <td className="p-3 text-amber-400 font-bold">{h.rank}</td>
                  <td className="p-3 text-white font-semibold">{h.name}</td>
                  <td className="p-3 whitespace-nowrap">{h.example}</td>
                  <td className="p-3">{h.count.toLocaleString("en-IN")}</td>
                  <td className="p-3">{h.pct}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-slate-400">
          ध्यान दें: लगभग तीन में से दो बाज़ियों में किसी के पास पेयर तक नहीं होता। इसलिए हाई कार्ड पर भी बाज़ी जीती जाती है, बशर्ते
          आपका सबसे बड़ा पत्ता सामने वाले से बड़ा हो।
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">1. ट्रेल (Trail) — पूरी लिस्ट</h2>
        <p>
          तीनों पत्ते एक ही नंबर के। यह सबसे बड़ा हाथ है। दो ट्रेल आमने-सामने हों तो बड़े नंबर वाला जीतता है:
        </p>
        <p className="flex flex-wrap gap-2">
          {trails.map((s) => (
            <span key={s} className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-white text-sm">{s}</span>
          ))}
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">2 और 3. सीक्वेंस लिस्ट (Pure Sequence और Sequence)</h2>
        <p>
          लगातार तीन नंबर सीक्वेंस बनाते हैं। अगर तीनों पत्ते एक ही रंग (suit) के हों तो वह <strong className="text-white">प्योर सीक्वेंस</strong>{" "}
          है, वरना साधारण <strong className="text-white">सीक्वेंस</strong>। दोनों में सीक्वेंस का क्रम एक ही है — बड़े से छोटे:
        </p>
        <ol className="grid grid-cols-2 sm:grid-cols-3 gap-2 list-decimal pl-6">
          {sequences.map((s) => (
            <li key={s} className="text-white">{s}</li>
          ))}
        </ol>
        <ul className="space-y-2 list-disc pl-6 text-sm sm:text-base">
          <li>इक्का (A) ऊपर भी जुड़ता है (A-K-Q) और नीचे भी (A-2-3), लेकिन K-A-2 जैसा घूमता क्रम सीक्वेंस नहीं है।</li>
          <li>ज़्यादातर टेबल पर A-2-3 दूसरा सबसे बड़ा सीक्वेंस है। कुछ घरेलू खेलों में इसे सबसे छोटा माना जाता है — इसलिए ऐप में टेबल के नियम एक बार देख लें।</li>
          <li>कोई भी प्योर सीक्वेंस, किसी भी साधारण सीक्वेंस से बड़ा होता है — 4♥ 3♥ 2♥ भी A♠ K♦ Q♣ को हरा देता है।</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">4. कलर (Color) कैसे मिलाते हैं</h2>
        <p>
          तीनों पत्ते एक ही रंग के, पर लगातार नहीं। दो कलर आमने-सामने हों तो सबसे बड़ा पत्ता मिलाया जाता है; वह बराबर हो तो दूसरा, फिर
          तीसरा। उदाहरण: A♦ 9♦ 4♦ जीतता है K♠ Q♠ 9♠ से, क्योंकि सबसे बड़ा पत्ता A है।
        </p>
        <p>
          एक आम गलती से बचिए: K♠ Q♠ J♠ जैसे एक रंग के लगातार पत्ते कलर नहीं, बल्कि प्योर सीक्वेंस हैं — जो कलर से दो दर्जे ऊपर है।
          पत्ते देखते समय पहले लाइन देखिए, फिर रंग।
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">5. पेयर (Pair) कैसे मिलाते हैं</h2>
        <p>
          पहले जोड़ी का नंबर देखा जाता है — K-K, Q-Q से बड़ी है। जोड़ी बराबर हो तो तीसरा पत्ता (kicker) फैसला करता है: 10♠ 10♦ A♣
          जीतता है 10♥ 10♣ 7♠ से।
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">6. हाई कार्ड और बराबरी के नियम</h2>
        <p>
          कोई हाथ न बने तो सबसे बड़ा पत्ता गिना जाता है, फिर दूसरा, फिर तीसरा। अगर दोनों खिलाड़ियों के तीनों पत्ते नंबर में बिल्कुल
          बराबर हों, तो ज़्यादातर टेबल पर <strong className="text-white">Show मांगने वाला हारता है</strong>। रंग (♠ ♥ ♦ ♣) से कभी फैसला
          नहीं होता।
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">याद रखने की आसान ट्रिक</h2>
        <p>
          <strong className="text-white">&quot;तीन एक, लाइन रंगीन, फिर लाइन, फिर रंग, फिर जोड़ी&quot;</strong> — यानी ट्रेल (तीनों एक),
          प्योर सीक्वेंस (रंगीन लाइन), सीक्वेंस (लाइन), कलर (रंग), पेयर (जोड़ी), और बाकी सब हाई कार्ड। सबसे आम गलती कलर को सीक्वेंस से
          ऊपर रखना है — Teen Patti में सीक्वेंस ऊपर है, क्योंकि वह कम बनता है।
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">दूसरे गेम मोड में रैंकिंग बदल जाती है</h2>
        <ul className="space-y-2 list-disc pl-6">
          <li><strong className="text-white">Muflis:</strong> सब उल्टा — सबसे छोटा हाथ जीतता है।</li>
          <li><strong className="text-white">AK47:</strong> A, K, 4 और 7 जोकर बन जाते हैं, इसलिए ट्रेल बहुत आसानी से बनते हैं।</li>
          <li><strong className="text-white">Joker / Wild Card:</strong> बाज़ी से पहले चुना गया पत्ता किसी भी पत्ते की जगह ले सकता है।</li>
        </ul>
        <p>
          इन मोड्स और रणनीति के बारे में ज़्यादा जानने के लिए{" "}
          <Link href="/blog/teen-patti-master-game" className="text-amber-400 underline">How to Play Teen Patti Master</Link> और{" "}
          <Link href="/blog/teen-patti-master-secrets" className="text-amber-400 underline">Pro Secrets</Link> पढ़ें।
        </p>
      </section>

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

      <div className="bg-red-950/40 border border-red-500/40 rounded-2xl p-5 text-sm">
        <p>
          <strong className="text-white">सिर्फ 18+ के लिए।</strong> नियम सीखना मज़ेदार है, लेकिन असली पैसे वाले गेम में हारने का जोखिम है और
          भारत व कुछ राज्यों में ये प्रतिबंधित हैं। ज़्यादा जानकारी:{" "}
          <Link href="/responsible-gaming" className="text-amber-400 underline">Responsible Gaming</Link>।
        </p>
      </div>
    </article>
  );
}
