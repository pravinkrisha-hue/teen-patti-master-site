import React from "react";
import Image from "next/image";
import Link from "next/link";

const PAGE_URL = "https://www.techtonis.com/blog/teen-patti-ghar-par-kaise-khele";

const pointIdeas = [
  { what: "माचिस की तीलियां", how: "हर खिलाड़ी को 50 तीलियां। Boot = 1 तीली।" },
  { what: "पोकर चिप्स या बटन", how: "अलग रंग = अलग वैल्यू। बच्चों वाले परिवार के लिए सबसे साफ-सुथरा तरीका।" },
  { what: "कागज़ पर पॉइंट", how: "हर किसी के 100 पॉइंट। एक व्यक्ति स्कोर लिखता है।" },
  { what: "मिठाई या ड्राई फ्रूट", how: "काजू-बादाम से खेलिए — आखिर में सब मिलकर खा लीजिए!" },
];

const faqs = [
  {
    q: "घर पर Teen Patti खेलने के लिए कितने लोग चाहिए?",
    a: "3 से 6 लोग सबसे अच्छे रहते हैं। 2 लोगों में भी खेल सकते हैं, लेकिन 7 से ज़्यादा हों तो एक ही गड्डी में पत्ते कम पड़ने लगते हैं और बाज़ी लंबी हो जाती है।",
  },
  {
    q: "क्या पैसे के बिना Teen Patti मज़ेदार है?",
    a: "बिल्कुल। मज़ा Blind चलने, ब्लफ़ करने और Show के रोमांच में है, पैसे में नहीं। माचिस की तीलियां या पॉइंट भी उतना ही रोमांच देते हैं, और किसी का नुकसान नहीं होता।",
  },
  {
    q: "क्या दिवाली पर घर में पैसे से ताश खेलना कानूनी है?",
    a: "भारत में जुए से जुड़े कानून राज्य के हिसाब से अलग हैं, और पैसे से जुआ कई जगह कानूनन जोखिम भरा है। सबसे सुरक्षित और परिवार के लिए अच्छा तरीका है कि पॉइंट, चिप्स या तीलियों से खेलें।",
  },
  {
    q: "कौन सा पत्ता सबसे बड़ा होता है?",
    a: "इक्का (A) सबसे बड़ा है, फिर K, Q, J, 10 और नीचे 2 तक। हाथों में सबसे बड़ा ट्रेल (तीनों एक जैसे) है। पूरी लिस्ट हमारी sequence list गाइड में है।",
  },
];

export default function TeenPattiGharParKaiseKhele() {
  return (
    <article lang="hi" className="max-w-4xl mx-auto py-6 text-slate-300 font-sans leading-relaxed space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "घर पर और दिवाली पर Teen Patti कैसे खेलें — बिना पैसे के पूरी गाइड",
              inLanguage: "hi-IN",
              url: PAGE_URL,
              image: "https://www.techtonis.com/teen-patti-master-features.webp",
              datePublished: "2026-11-01",
              dateModified: "2026-11-01",
              author: { "@type": "Person", name: "Rohan Mehta", url: "https://www.techtonis.com/about#team" },
              publisher: { "@type": "Organization", name: "Teen Patti Master APK", logo: { "@type": "ImageObject", url: "https://www.techtonis.com/icon.png" } },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "घर पर Teen Patti कैसे खेलें",
              inLanguage: "hi-IN",
              url: PAGE_URL,
              step: [
                { "@type": "HowToStep", name: "पॉइंट तय करें", text: "पैसे की जगह तीलियां, चिप्स या पॉइंट बांटें।" },
                { "@type": "HowToStep", name: "डीलर चुनें", text: "ताश फेंटकर हर खिलाड़ी को 3-3 पत्ते उल्टे बांटें।" },
                { "@type": "HowToStep", name: "Boot डालें", text: "हर खिलाड़ी शुरुआत में 1 पॉइंट बीच में रखता है।" },
                { "@type": "HowToStep", name: "बारी-बारी से चलें", text: "Blind, Chaal या Pack करते हुए आगे बढ़ें।" },
                { "@type": "HowToStep", name: "Show और विजेता", text: "आखिरी दो खिलाड़ी Show करते हैं, बड़ा हाथ बीच के सारे पॉइंट जीतता है।" },
              ],
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
          हिंदी गाइड • परिवार के साथ
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          घर पर और दिवाली पर Teen Patti कैसे खेलें — बिना पैसे के पूरी गाइड
        </h1>
        <p className="text-base sm:text-lg text-slate-400">
          दिवाली की रात, सब रिश्तेदार एक कमरे में, बीच में ताश की गड्डी — Teen Patti का असली मज़ा यही है। इस गाइड में बताया गया है कि घर
          पर बाज़ी कैसे सेट करें, पैसे की जगह किस चीज़ से खेलें, नियम कैसे तय करें, और नए खिलाड़ियों को कैसे शामिल करें, ताकि खेल मज़ेदार
          रहे और किसी का नुकसान न हो।
        </p>
        <div className="flex justify-center">
          <Image
            src="/teen-patti-master-features.webp"
            alt="घर पर और दिवाली पर परिवार के साथ Teen Patti"
            width={512}
            height={648}
            sizes="(max-width: 560px) 100vw, 512px"
            className="w-full max-w-[420px] h-auto rounded-2xl border border-slate-800 shadow-xl"
            priority
          />
        </div>
      </header>

      <section className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 sm:p-6 space-y-2">
        <h2 className="text-xl font-bold text-amber-300">छोटा जवाब</h2>
        <p>
          3 से 6 लोग, एक ताश की गड्डी और पैसे की जगह <strong>तीलियां, चिप्स या पॉइंट</strong>। सबको 3-3 पत्ते दीजिए, हर कोई 1 पॉइंट
          boot डाले, फिर बारी-बारी से Blind या Chaal चलिए। आखिर में Show होता है और बड़ा हाथ बीच के सारे पॉइंट जीतता है।
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">क्या-क्या चाहिए</h2>
        <ul className="space-y-2 list-disc pl-6">
          <li>52 पत्तों की एक ताश की गड्डी (जोकर निकाल दें, जब तक जोकर वाला मोड न खेल रहे हों)</li>
          <li>3 से 6 खिलाड़ी</li>
          <li>पैसे की जगह कुछ गिनने लायक चीज़ — नीचे की टेबल देखें</li>
          <li>एक कागज़-पेन, अगर पॉइंट लिख रहे हों</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">पैसे की जगह किससे खेलें</h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-800">
          <table className="w-full text-left text-sm sm:text-base">
            <thead className="bg-slate-900 text-slate-400">
              <tr>
                <th className="p-3">क्या</th>
                <th className="p-3">कैसे</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {pointIdeas.map((p) => (
                <tr key={p.what}>
                  <td className="p-3 text-white font-semibold">{p.what}</td>
                  <td className="p-3">{p.how}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">बाज़ी कैसे चलती है: कदम-दर-कदम</h2>
        <ol className="space-y-3 list-decimal pl-6">
          <li><strong className="text-white">डीलर चुनिए।</strong> पहली बाज़ी में कोई भी, फिर हर बाज़ी में घड़ी की दिशा में अगला व्यक्ति।</li>
          <li><strong className="text-white">Boot डालिए।</strong> हर खिलाड़ी 1 पॉइंट बीच में रखता है।</li>
          <li><strong className="text-white">पत्ते बांटिए।</strong> हर किसी को 3 पत्ते उल्टे, एक-एक करके।</li>
          <li><strong className="text-white">Blind या Seen।</strong> डीलर के बाएं से शुरू करके हर कोई तय करता है कि पत्ते देखे बिना (Blind, 1 पॉइंट) चलना है या पत्ते देखकर (Seen, कम से कम 2 पॉइंट)।</li>
          <li><strong className="text-white">Pack।</strong> हाथ कमज़ोर हो तो Pack कर दीजिए — बीच में डाले पॉइंट वहीं रहेंगे।</li>
          <li><strong className="text-white">Show।</strong> जब दो खिलाड़ी बचें, कोई Show मांग सकता है। बड़ा हाथ बीच के सारे पॉइंट जीतता है।</li>
        </ol>
        <p>
          नियमों और Side Show की पूरी जानकारी हमारी{" "}
          <Link href="/blog/teen-patti-master-kaise-khele" className="text-amber-400 underline">Teen Patti kaise khele</Link> गाइड में है,
          और हाथों की रैंकिंग{" "}
          <Link href="/blog/teen-patti-sequence-list" className="text-amber-400 underline">sequence list</Link> में।
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">घर के नियम पहले ही तय कर लें</h2>
        <p>ज़्यादातर झगड़े नियमों की वजह से होते हैं, पत्तों की वजह से नहीं। बाज़ी शुरू होने से पहले ये बातें तय कर लीजिए:</p>
        <ul className="space-y-2 list-disc pl-6">
          <li><strong className="text-white">A-2-3</strong> दूसरा सबसे बड़ा सीक्वेंस है या सबसे छोटा?</li>
          <li><strong className="text-white">Side Show</strong> मिलेगा या नहीं?</li>
          <li>Blind ज़्यादा से ज़्यादा कितने राउंड चल सकते हैं?</li>
          <li>एक चाल में ज़्यादा से ज़्यादा कितने पॉइंट?</li>
          <li>बराबर हाथ पर कौन जीतेगा — आम तौर पर Show मांगने वाला हारता है।</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">मज़ा बढ़ाने के लिए घरेलू वैरिएशन</h2>
        <p>
          दो-तीन बाज़ी के बाद एक-एक राउंड Muflis (जिसमें सबसे छोटा हाथ जीतता है) या AK47 (जिसमें A, K, 4, 7 जोकर होते हैं) खेलकर
          देखिए — खेल एकदम बदल जाता है। हर वैरिएशन के नियम हमारी{" "}
          <Link href="/blog/teen-patti-variations" className="text-amber-400 underline">Teen Patti variations</Link> गाइड में हैं।
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">नए खिलाड़ियों को कैसे सिखाएं</h2>
        <ul className="space-y-2 list-disc pl-6">
          <li>पहली दो बाज़ियां पत्ते खोलकर खेलिए, ताकि सब देख सकें कि कौन सा हाथ किसे हराता है।</li>
          <li>हाथों की रैंकिंग का एक कागज़ टेबल पर रख दीजिए।</li>
          <li>शुरुआत में Side Show बंद रखिए — नियम आसान रहेंगे।</li>
          <li>जो बच्चे हैं, उन्हें पॉइंट गिनने और स्कोर लिखने का काम दीजिए — वे भी खेल का हिस्सा बन जाते हैं।</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Teen Patti और दिवाली की परंपरा</h2>
        <p>
          दिवाली पर ताश खेलने की परंपरा बहुत पुरानी है, और एक लोककथा भगवान शिव और देवी पार्वती के दिवाली की रात खेल खेलने की बात करती
          है। आज ज़्यादातर परिवारों के लिए यह बस साथ बैठने और हंसने का बहाना है। Teen Patti कहां से आया, यह जानने के लिए हमारा{" "}
          <Link href="/blog/teen-patti-history" className="text-amber-400 underline">Teen Patti का इतिहास</Link> पढ़िए।
        </p>
        <p className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 text-sm">
          <strong className="text-white">एक ज़रूरी बात:</strong> पैसे से जुआ कई राज्यों में कानूनन जोखिम भरा है, और ऑनलाइन money games
          पर 2025 से केंद्रीय कानून से रोक है (देखें{" "}
          <Link href="/blog/is-teen-patti-master-legal" className="text-amber-400 underline">is Teen Patti Master legal?</Link>)। पॉइंट
          और तीलियों से खेलिए — मज़ा भी उतना ही है और रिश्ते भी सलामत रहते हैं।
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
    </article>
  );
}
