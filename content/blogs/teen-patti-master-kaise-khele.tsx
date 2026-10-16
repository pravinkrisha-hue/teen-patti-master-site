import React from "react";
import Image from "next/image";
import Link from "next/link";

const DOWNLOAD_URL = "https://www.earntp.com/m/ya5rcx?scene=&f=w&p=wa&l=en&tp=m173";
const PAGE_URL = "https://www.techtonis.com/blog/teen-patti-master-kaise-khele";

const terms = [
  { word: "Boot", meaning: "हर बाज़ी शुरू होने से पहले सबको पॉट में डालनी पड़ने वाली छोटी रकम। टेबल जितनी बड़ी, boot उतना बड़ा।" },
  { word: "Pot", meaning: "बीच का खज़ाना — सबके दांव यहीं जमा होते हैं, और जीतने वाला पूरा पॉट ले जाता है।" },
  { word: "Blind", meaning: "पत्ते देखे बिना खेलना। दांव आधा लगता है, लेकिन आपको पता नहीं होता कि हाथ में क्या है।" },
  { word: "Seen / Chaal", meaning: "पत्ते देख लेने के बाद आप Seen हैं। अब हर बारी में आप जो दांव लगाते हैं उसे Chaal कहते हैं।" },
  { word: "Pack", meaning: "बाज़ी छोड़ देना। जो लगा चुके वो गया, पर आगे का नुकसान रुक गया।" },
  { word: "Side Show", meaning: "Seen खिलाड़ी अपने ठीक पहले वाले Seen खिलाड़ी से चुपचाप पत्ते मिलाने को कहता है। कमज़ोर हाथ वाला बाहर।" },
  { word: "Show", meaning: "जब सिर्फ दो खिलाड़ी बचें, तब दोनों के पत्ते खुलते हैं और फैसला हो जाता है।" },
];

const handRankings = [
  { name: "ट्रेल / ट्रायो (Trail)", example: "A♠ A♥ A♦", detail: "तीनों पत्ते एक ही नंबर के", chance: "0.24%" },
  { name: "प्योर सीक्वेंस (Pure Sequence)", example: "Q♥ K♥ A♥", detail: "लगातार तीन नंबर, एक ही रंग", chance: "0.22%" },
  { name: "सीक्वेंस / रन (Sequence)", example: "4♣ 5♦ 6♠", detail: "लगातार तीन नंबर, रंग अलग-अलग", chance: "3.26%" },
  { name: "कलर (Color)", example: "2♦ 7♦ J♦", detail: "एक ही रंग, पर लगातार नहीं", chance: "4.96%" },
  { name: "पेयर (Pair)", example: "K♠ K♣ 5♥", detail: "दो पत्ते एक ही नंबर के", chance: "16.94%" },
  { name: "हाई कार्ड (High Card)", example: "A♣ 9♦ 4♠", detail: "कुछ नहीं बना — सबसे बड़ा पत्ता गिना जाता है", chance: "74.39%" },
];

const faqs = [
  {
    q: "Teen Patti Master में एक टेबल पर कितने लोग खेलते हैं?",
    a: "आम तौर पर 2 से 5 खिलाड़ी। 52 पत्तों की एक गड्डी से हर किसी को 3 पत्ते मिलते हैं। कम खिलाड़ियों वाली टेबल पर बाज़ी जल्दी खत्म होती है, इसलिए सीखने के लिए वही बेहतर है।",
  },
  {
    q: "Blind खेलना फायदेमंद है या पत्ते देखकर खेलना?",
    a: "Blind में दांव सस्ता पड़ता है और सामने वाले पर दबाव बनता है, पर आप अंधेरे में तीर चला रहे होते हैं। शुरुआत के एक-दो राउंड Blind ठीक है, उसके बाद पत्ते देखकर फैसला लेना ज़्यादा समझदारी है।",
  },
  {
    q: "दो खिलाड़ियों के पास एक जैसा हाथ हो तो कौन जीतता है?",
    a: "पहले हाथ की कैटेगरी देखी जाती है। अगर दोनों का पेयर है, तो बड़े नंबर वाला पेयर जीतता है। वो भी बराबर हो तो तीसरा पत्ता देखा जाता है। सब कुछ बराबर हो तो Show मांगने वाला हारता है — इसलिए बराबरी पर Show मांगने से पहले सोचें।",
  },
  {
    q: "Side Show कब मांगना चाहिए?",
    a: "जब आपके पास ठीक-ठाक हाथ हो (जैसे अच्छा पेयर) और आप जानना चाहते हों कि पिछला खिलाड़ी आपसे मज़बूत है या नहीं। बहुत कमज़ोर हाथ पर Side Show मांगना अक्सर सिर्फ समय और पैसा बर्बाद करता है।",
  },
  {
    q: "क्या नए खिलाड़ी को सीधे पैसे वाली टेबल पर खेलना चाहिए?",
    a: "बिल्कुल नहीं। पहले practice या सबसे कम boot वाली टेबल पर 20–30 बाज़ियां खेलें। असली पैसा तभी लगाएं जब आपकी उम्र 18 साल से ज़्यादा हो, आपके राज्य में यह कानूनी हो, और आप पूरी रकम हारना बर्दाश्त कर सकें।",
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
              "@type": "Article",
              headline: "Teen Patti Master Kaise Khele? नियम, Blind-Chaal और जीतने के टिप्स",
              inLanguage: "hi-IN",
              url: PAGE_URL,
              image: "https://www.techtonis.com/teen-patti-master-game.webp",
              datePublished: "2026-10-16",
              dateModified: "2026-10-16",
              author: { "@type": "Person", name: "Rohan Mehta", url: "https://www.techtonis.com/about#team" },
              publisher: { "@type": "Organization", name: "Teen Patti Master Hub", logo: { "@type": "ImageObject", url: "https://www.techtonis.com/icon.png" } },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "Teen Patti Master कैसे खेलें",
              inLanguage: "hi-IN",
              url: PAGE_URL,
              image: "https://www.techtonis.com/teen-patti-master-game.webp",
              step: [
                { "@type": "HowToStep", name: "कम boot वाली टेबल चुनें", text: "लॉबी में Classic Teen Patti खोलें और सबसे कम boot वाली टेबल पर बैठें।" },
                { "@type": "HowToStep", name: "Boot पॉट में जाता है", text: "हर खिलाड़ी का boot अपने आप पॉट में चला जाता है और 3-3 पत्ते बंट जाते हैं।" },
                { "@type": "HowToStep", name: "Blind या Seen तय करें", text: "पत्ते देखे बिना Blind खेलें, या पत्ते देखकर Chaal चलें।" },
                { "@type": "HowToStep", name: "Chaal, Pack या Side Show", text: "हर बारी में हाथ के हिसाब से Chaal, Pack या Side Show चुनें।" },
                { "@type": "HowToStep", name: "Show और जीत", text: "आखिर में दो खिलाड़ी बचें तो Show होता है, और बड़ा हाथ पूरा पॉट जीतता है।" },
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
          हिंदी गाइड • पहली बार खेलने वालों के लिए
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Teen Patti Master Kaise Khele? नियम, Blind-Chaal और जीतने के टिप्स (हिंदी गाइड)
        </h1>
        <p className="text-base sm:text-lg text-slate-400">
          दिवाली की रात घर में ताश की बाज़ी तो आपने ज़रूर देखी होगी। Teen Patti Master वही खेल है, बस अब मोबाइल पर — और
          यहां सामने बैठे चाचा-मामा की जगह देश भर के खिलाड़ी होते हैं। अगर आपने ऐप अभी तक इंस्टॉल नहीं किया है, तो पहले
          हमारी{" "}
          <Link href="/" className="text-amber-400 underline hover:text-amber-300">
            Teen Patti Master APK download गाइड
          </Link>{" "}
          पढ़ लें, फिर यहां लौटकर खेल सीखें।
        </p>
        <div className="flex justify-center">
          <Image
            src="/teen-patti-master-game.webp"
            alt="Teen Patti Master कैसे खेलें — हिंदी गाइड"
            width={512}
            height={512}
            sizes="(max-width: 560px) 100vw, 512px"
            className="w-full max-w-[512px] h-auto rounded-2xl border border-slate-800 shadow-xl"
            priority
          />
        </div>
      </header>

      {/* Quick answer */}
      <section className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 sm:p-6 space-y-2">
        <h2 className="text-xl font-bold text-amber-300">एक लाइन में जवाब</h2>
        <p>
          हर खिलाड़ी को 3 पत्ते मिलते हैं। आप या तो पत्ते देखे बिना (<strong>Blind</strong>) दांव लगाते हैं या देखकर
          (<strong>Chaal</strong>)। हाथ कमज़ोर लगे तो <strong>Pack</strong> करके निकल जाइए। आखिर तक टिके रहने वालों में
          जिसका हाथ सबसे बड़ा होता है — जैसे <strong>ट्रेल</strong> या <strong>प्योर सीक्वेंस</strong> — वही पूरा पॉट
          ले जाता है।
        </p>
      </section>

      {/* Terms */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">पहले ये 7 शब्द समझ लीजिए</h2>
        <p>
          ज़्यादातर नए खिलाड़ी नियमों में नहीं, शब्दों में उलझते हैं। स्क्रीन पर बटन तो दिखते हैं, पर मतलब समझ नहीं आता।
          ये सात शब्द पक्के हो गए तो आधा खेल वहीं सीख गए:
        </p>
        <dl className="grid sm:grid-cols-2 gap-3">
          {terms.map((t) => (
            <div key={t.word} className="bg-slate-900/70 border border-slate-800 rounded-xl p-4">
              <dt className="font-bold text-amber-300">{t.word}</dt>
              <dd className="text-sm mt-1">{t.meaning}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Teen Patti Master कैसे खेलें: पहली बाज़ी, कदम-दर-कदम</h2>
        <ol className="space-y-4 list-decimal pl-6">
          <li>
            <strong className="text-white">सही टेबल चुनें।</strong> लॉबी में Classic Teen Patti खोलिए और सबसे कम boot वाली
            टेबल पर बैठिए। शुरुआत में बड़ी टेबल पर बैठना वैसा ही है जैसे साइकिल सीखे बिना हाईवे पर उतर जाना।
          </li>
          <li>
            <strong className="text-white">Boot और पत्ते।</strong> बाज़ी शुरू होते ही सबका boot पॉट में चला जाता है और हर
            खिलाड़ी को 3 पत्ते उल्टे मिलते हैं। अभी जल्दबाज़ी में पत्ते मत पलटिए।
          </li>
          <li>
            <strong className="text-white">Blind रहें या पत्ते देखें?</strong> Blind रहने पर आपका दांव Seen खिलाड़ी का आधा
            होता है। इसलिए पहले एक-दो राउंड Blind चलना सस्ता पड़ता है और सामने वालों को अंदाज़ा भी नहीं लगता।
          </li>
          <li>
            <strong className="text-white">Chaal चलिए।</strong> पत्ते देखते ही आप Seen हो गए। अब हर बारी में आपको कम से कम
            Blind दांव का दोगुना लगाना पड़ेगा। हाथ अच्छा है तो Chaal बढ़ाइए, औसत है तो बराबर चलिए।
          </li>
          <li>
            <strong className="text-white">Pack करने में शर्म नहीं।</strong> हाई कार्ड पर सामने से लगातार बड़े दांव आ रहे हों,
            तो Pack कर दीजिए। अच्छे खिलाड़ी जितनी बाज़ियां जीतते हैं, उससे ज़्यादा समझदारी से छोड़ते हैं।
          </li>
          <li>
            <strong className="text-white">Side Show का इस्तेमाल।</strong> आपके पास ठीक-ठाक पेयर है और पिछला Seen खिलाड़ी
            जोर-शोर से दांव लगा रहा है? Side Show मांगकर चुपचाप पत्ते मिला लीजिए। वो मना भी कर सकता है।
          </li>
          <li>
            <strong className="text-white">आखिरी Show।</strong> जब टेबल पर सिर्फ आप और एक और खिलाड़ी बचें, तो Show मांगा जा
            सकता है। दोनों के पत्ते खुलते हैं और बड़ा हाथ पूरा पॉट ले जाता है।
          </li>
        </ol>
      </section>

      {/* Hand rankings */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">पत्तों की रैंकिंग: कौन सा हाथ किसे हराता है</h2>
        <p>
          यह टेबल फोन में स्क्रीनशॉट करके रख लीजिए। शुरुआती दिनों में सबसे ज़्यादा गलती यहीं होती है — लोग कलर को सीक्वेंस
          से बड़ा समझ बैठते हैं, जबकि Teen Patti में सीक्वेंस ऊपर है। आखिरी कॉलम बताता है कि कोई हाथ कितनी बार बनता है।
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-800">
          <table className="w-full text-left text-sm sm:text-base">
            <thead className="bg-slate-900 text-slate-400">
              <tr>
                <th className="p-3">#</th>
                <th className="p-3">हाथ</th>
                <th className="p-3">उदाहरण</th>
                <th className="p-3">पहचान</th>
                <th className="p-3">कितनी बार बनता है</th>
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
          ध्यान दें: लगभग तीन में से दो बाज़ियों में किसी के पास पेयर तक नहीं होता। यानी हाई कार्ड पर भी बाज़ी जीती जा सकती
          है, बशर्ते आपका सबसे बड़ा पत्ता सामने वाले से बड़ा हो। ज़्यादातर टेबल पर A-K-Q सबसे बड़ा सीक्वेंस और A-A-A सबसे बड़ा
          ट्रेल माना जाता है।
        </p>
      </section>

      {/* Worked example */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">एक बाज़ी का उदाहरण: असल में खेल कैसे चलता है</h2>
        <p>
          मान लीजिए ₹10 boot वाली टेबल पर चार लोग हैं — आप, अमित, प्रिया और राहुल। पॉट में शुरू से ₹40 है।
        </p>
        <ul className="space-y-2 list-disc pl-6">
          <li>पहले राउंड में चारों Blind चलते हैं, हर कोई ₹10 डालता है। पॉट अब ₹80।</li>
          <li>
            दूसरे राउंड में आप पत्ते देखते हैं: <strong className="text-white">9♥ 9♣ K♦</strong> — नौ का पेयर। बुरा नहीं। आप
            ₹20 की Chaal चलते हैं।
          </li>
          <li>अमित पत्ते देखकर Pack कर देता है। प्रिया Seen होकर ₹20 चलती है। राहुल अब भी Blind है और ₹10 डालता है।</li>
          <li>
            तीसरे राउंड में आप फिर ₹20 चलते हैं। अब प्रिया की बारी है, और उससे ठीक पहले Seen खिलाड़ी आप हैं — तो वो आपसे Side
            Show मांगती है। आप मान जाते हैं। प्रिया के पास <strong className="text-white">J♠ J♥ 4♣</strong> है — उसका पेयर
            बड़ा निकला, आप बाहर।
          </li>
          <li>आखिर में प्रिया और राहुल बचते हैं। राहुल Show मांगता है, उसके पास सिर्फ हाई कार्ड है। प्रिया पूरा पॉट जीत जाती है।</li>
        </ul>
        <p>
          इस बाज़ी से सीख: आपने नौ के पेयर पर हर राउंड में सिर्फ न्यूनतम Chaal चली, दांव नहीं बढ़ाया, और Side Show मान लेने से
          बाज़ी सस्ते में निपट गई। जीते नहीं, पर ज़्यादा हारे भी नहीं — यही अनुशासन लंबे समय में फर्क डालता है।
        </p>
      </section>

      {/* Mistakes */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">नए खिलाड़ियों की 5 आम गलतियां</h2>
        <ul className="space-y-3 list-disc pl-6">
          <li><strong className="text-white">हर बाज़ी में आखिर तक टिके रहना।</strong> हर हाथ जीतने लायक नहीं होता। कमज़ोर हाथ पर जल्दी Pack करना सीखिए।</li>
          <li><strong className="text-white">बहुत देर तक Blind खेलना।</strong> 4–5 राउंड तक बिना पत्ते देखे पैसा डालते रहना जुआ है, रणनीति नहीं।</li>
          <li><strong className="text-white">हार के बाद दांव बढ़ाना।</strong> &quot;बस एक बाज़ी और, सब वापस आ जाएगा&quot; — यही सोच सबसे ज़्यादा नुकसान कराती है।</li>
          <li><strong className="text-white">रैंकिंग में गड़बड़।</strong> कलर और सीक्वेंस का क्रम उल्टा याद रखना। ऊपर वाली टेबल दोबारा देख लीजिए।</li>
          <li><strong className="text-white">थके हुए या गुस्से में खेलना।</strong> दिमाग शांत न हो तो फैसले भी गलत होते हैं। ब्रेक लीजिए।</li>
        </ul>
        <p>
          और गहरी रणनीति के लिए पढ़ें{" "}
          <Link href="/blog/teen-patti-master-secrets" className="text-amber-400 underline">Teen Patti Master Pro Secrets</Link>, और पैसे
          पर काबू रखने के लिए हमारी{" "}
          <Link href="/blog/teen-patti-master-loss-recover" className="text-amber-400 underline">लॉस कंट्रोल गाइड</Link>।
        </p>
      </section>

      {/* Download CTA */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-white">Teen Patti Master अभी इंस्टॉल नहीं किया?</h2>
        <p className="text-sm text-slate-400">
          इंस्टॉल करते समय &quot;Unknown Sources&quot; वाला मैसेज आए तो घबराइए नहीं — हमारी{" "}
          <Link href="/blog/teen-patti-master-download-guide" className="text-amber-400 underline">डाउनलोड गाइड</Link> में हर स्टेप
          समझाया गया है।
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

      {/* Closing + responsible play */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">आखिरी बात</h2>
        <p>
          Teen Patti Master के नियम सीखने में दस मिनट लगते हैं, लेकिन सही समय पर Pack करना और अपने बजट पर टिके रहना सीखने में
          कई हफ्ते। जल्दी मत कीजिए। छोटी टेबल पर खेलिए, हर बाज़ी के बाद सोचिए कि क्या सही किया और क्या गलत, और इसे हमेशा
          मनोरंजन की तरह लीजिए — कमाई के ज़रिये की तरह नहीं।
        </p>
        <div className="bg-red-950/40 border border-red-500/40 rounded-2xl p-5 text-sm">
          <p>
            <strong className="text-white">सिर्फ 18+ के लिए।</strong> असली पैसे वाले गेम में पैसा हारने का पूरा जोखिम है, और कुछ
            राज्यों में ये प्रतिबंधित हैं। उतना ही लगाइए जितना खोने पर आपका घर का बजट न बिगड़े। ज़्यादा जानकारी:{" "}
            <Link href="/responsible-gaming" className="text-amber-400 underline">Responsible Gaming</Link>।
          </p>
        </div>
      </section>
    </article>
  );
}
