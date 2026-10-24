import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import AuthorBox from "../components/AuthorBox";
import { AUTHOR, REVIEWER, LAST_REVIEWED, SITE_URL } from "../siteTeam";

const DOWNLOAD_URL = "https://www.earntp.com/m/ya5rcx?scene=&f=w&p=wa&l=en&tp=m173";
const TITLE = "टीन पट्टी मास्टर (Teen Patti Master): डाउनलोड, बोनस, नियम";
const DESCRIPTION =
  "टीन पट्टी मास्टर की आसान हिंदी गाइड: ऐप क्या है, APK सुरक्षित तरीके से कैसे डाउनलोड करें, बोनस की सच्चाई, UPI विड्रॉल, खेल के नियम और कानूनी स्थिति।";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/hi",
    languages: { "en-IN": "/", "hi-IN": "/hi", "x-default": "/" },
  },
  openGraph: { type: "article", url: "/hi", locale: "hi_IN", title: TITLE, description: DESCRIPTION, images: ["/teen-patti-master.webp"] },
};

const features = [
  ["ऐप का प्रकार", "3 पत्ती (Teen Patti) कार्ड गेम, साथ में रम्मी और कैसीनो मोड"],
  ["प्लेटफॉर्म", "सिर्फ Android (APK फाइल) — iPhone पर नहीं चलता"],
  ["फाइल साइज़", "लगभग 45–50 MB (वर्ज़न के साथ बदलता है)"],
  ["मिलता कहां है", "Play Store पर नहीं; APK फाइल से इंस्टॉल होता है"],
  ["पैसे जमा/निकासी", "UPI और बैंक ट्रांसफर, ऐप के अंदर पेमेंट पेज से"],
  ["उम्र", "सिर्फ 18 साल से ऊपर"],
];

const faqs = [
  {
    q: "टीन पट्टी मास्टर असली है या नकली?",
    a: "Teen Patti Master नाम का असली ऐप मौजूद है, लेकिन इसी नाम से कई नकली कॉपी और \"mod\" फाइलें भी घूमती हैं। एक ही भरोसेमंद लिंक से डाउनलोड करें, और जो ऐप पैसे निकालने से पहले \"फीस\" या \"टैक्स\" मांगे, उससे तुरंत दूर हो जाएं।",
  },
  {
    q: "क्या टीन पट्टी मास्टर Play Store पर है?",
    a: "नहीं। असली पैसे वाले कार्ड गेम आम तौर पर Play Store पर नहीं मिलते, इसलिए यह APK फाइल से इंस्टॉल होता है। इसी वजह से इंस्टॉल करते समय Android चेतावनी दिखाता है।",
  },
  {
    q: "बोनस कितना मिलता है?",
    a: "मोबाइल नंबर जोड़ने पर छोटा वेलकम बोनस मिलता है — हमारी पिछली जांच में यह ₹51 था। यह रकम और इसकी शर्तें समय-समय पर बदलती हैं, और बोनस को आम तौर पर सीधे निकाला नहीं जा सकता।",
  },
  {
    q: "पैसे निकालने में कितना समय लगता है?",
    a: "विड्रॉल UPI या बैंक ट्रांसफर से होता है और समय अलग-अलग होता है। बड़ी रकम से पहले KYC मांगी जा सकती है। पहले एक छोटी रकम निकालकर देखें कि पैसा सच में आपके खाते में आता है या नहीं।",
  },
];

export default function HindiPillarPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: TITLE,
      inLanguage: "hi-IN",
      url: `${SITE_URL}/hi`,
      image: `${SITE_URL}/teen-patti-master.webp`,
      datePublished: "2026-10-24",
      dateModified: "2026-10-24",
      author: { "@type": "Person", name: AUTHOR.name, url: `${SITE_URL}/about#team` },
      reviewedBy: { "@type": "Person", name: REVIEWER.name, jobTitle: REVIEWER.role },
      lastReviewed: LAST_REVIEWED,
      publisher: { "@type": "Organization", name: "Teen Patti Master Hub", logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png` } },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: "hi-IN",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];

  return (
    <div lang="hi" className="min-h-screen bg-slate-950 text-white py-10 px-4 sm:px-6 md:px-8 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="max-w-4xl mx-auto space-y-10 text-slate-300 leading-relaxed">
        <Breadcrumbs items={[{ name: "हिंदी गाइड", href: "/hi" }]} />

        <header className="space-y-5 border-b border-slate-800 pb-8">
          <p className="text-sm">
            <Link href="/" hrefLang="en-IN" className="text-amber-400 hover:underline">Read in English →</Link>
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            टीन पट्टी मास्टर (Teen Patti Master): डाउनलोड, बोनस और नियम — पूरी हिंदी गाइड
          </h1>
          <p className="text-base sm:text-lg text-slate-400">
            टीन पट्टी मास्टर के बारे में इंटरनेट पर आधी बातें सच हैं और आधी विज्ञापन। इस पेज पर हम सीधी भाषा में बताते हैं कि
            ऐप असल में क्या है, इसे सुरक्षित तरीके से कैसे इंस्टॉल करें, बोनस और विड्रॉल कैसे काम करते हैं, और पैसा लगाने से पहले
            किन बातों का ध्यान रखें। हम ऐप बनाने वाली कंपनी नहीं हैं — एक स्वतंत्र गाइड हैं।
          </p>
          <div className="flex justify-center">
            <Image
              src="/teen-patti-master.webp"
              alt="टीन पट्टी मास्टर हिंदी गाइड"
              width={512}
              height={512}
              sizes="(max-width: 560px) 100vw, 512px"
              className="w-full max-w-[512px] h-auto rounded-2xl border border-slate-800"
              priority
            />
          </div>
        </header>

        <nav aria-label="इस पेज पर" className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5">
          <p className="font-bold text-white mb-2">इस पेज पर</p>
          <ul className="grid sm:grid-cols-2 gap-1 text-sm list-disc pl-5">
            <li><a href="#kya-hai" className="text-amber-400 hover:underline">टीन पट्टी मास्टर क्या है?</a></li>
            <li><a href="#download" className="text-amber-400 hover:underline">सुरक्षित डाउनलोड कैसे करें</a></li>
            <li><a href="#bonus" className="text-amber-400 hover:underline">बोनस की सच्चाई</a></li>
            <li><a href="#withdrawal" className="text-amber-400 hover:underline">पैसे कैसे निकलते हैं</a></li>
            <li><a href="#niyam" className="text-amber-400 hover:underline">खेल के नियम</a></li>
            <li><a href="#kanoon" className="text-amber-400 hover:underline">क्या यह कानूनी है?</a></li>
          </ul>
        </nav>

        <section id="kya-hai" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">टीन पट्टी मास्टर क्या है?</h2>
          <p>
            टीन पट्टी मास्टर एक मोबाइल ऐप है जिसमें भारत का पुराना ताश का खेल तीन पत्ती ऑनलाइन खेला जाता है। हर खिलाड़ी को तीन
            पत्ते मिलते हैं, और Blind या Chaal चलते हुए जिसका हाथ सबसे बड़ा होता है वह पॉट जीतता है। तीन पत्ती के अलावा ऐप में
            रम्मी, Dragon vs Tiger, Andar Bahar जैसे दूसरे मोड भी होते हैं। इसमें असली पैसे से खेला जाता है — यही इसकी सबसे बड़ी
            खिंचाव की वजह है और सबसे बड़ा जोखिम भी।
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full text-left text-sm sm:text-base">
              <tbody className="divide-y divide-slate-800">
                {features.map(([k, v]) => (
                  <tr key={k}>
                    <td className="p-3 font-semibold text-white whitespace-nowrap">{k}</td>
                    <td className="p-3">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="download" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">टीन पट्टी मास्टर सुरक्षित तरीके से कैसे डाउनलोड करें</h2>
          <ol className="space-y-3 list-decimal pl-6">
            <li>एक ही भरोसेमंद लिंक चुनें। WhatsApp पर आए अनजान लिंक या &quot;mod&quot; फाइलों से बचें।</li>
            <li>Wi-Fi या मज़बूत नेटवर्क पर फाइल डाउनलोड करें और पूरा होने तक स्क्रीन चालू रखें।</li>
            <li>
              फोन &quot;Install unknown apps&quot; की अनुमति मांगे, तो सिर्फ उसी ब्राउज़र के लिए दें — और इंस्टॉल के बाद वापस बंद कर दें।
            </li>
            <li>इंस्टॉल के बाद Settings → Apps → Permissions देखें। SMS पढ़ने या स्क्रीन कंट्रोल की अनुमति मांगे, तो ऐप हटा दें।</li>
            <li>गेस्ट की तरह खेलने के बजाय तुरंत मोबाइल नंबर जोड़ें, ताकि बैलेंस आपके अकाउंट में सुरक्षित रहे।</li>
          </ol>
          <p>
            &quot;App not installed&quot; या कोई और गलती आए, तो हमारी{" "}
            <Link href="/blog/teen-patti-master-download-guide" className="text-amber-400 underline">इंस्टॉल समस्या गाइड</Link> देखें।
            फाइल असली है या नकली, यह जांचने के लिए{" "}
            <Link href="/blog/teen-patti-master-apk-download" className="text-amber-400 underline">APK safe or fake</Link> पढ़ें, और
            पुराना वर्ज़न अपडेट करना हो तो{" "}
            <Link href="/blog/teen-patti-master-2027" className="text-amber-400 underline">Teen Patti Master update kaise kare</Link>।
          </p>
          <div className="text-center pt-2">
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-block bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition hover:scale-105"
            >
              टीन पट्टी मास्टर डाउनलोड करें
            </a>
            <p className="text-xs text-slate-500 mt-2">यह एक affiliate लिंक है। इससे इंस्टॉल करने पर हमें कमीशन मिल सकता है।</p>
          </div>
        </section>

        <section id="bonus" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">बोनस की सच्चाई</h2>
          <p>
            ज़्यादातर विज्ञापन बड़े-बड़े बोनस दिखाते हैं। असल में मोबाइल नंबर जोड़ने पर एक छोटा वेलकम बोनस मिलता है — हमारी पिछली
            जांच में यह ₹51 था — और पहली बार पैसे जमा करने पर अलग से ऑफर आते हैं। ये रकम बदलती रहती है। दो बातें याद रखें: बोनस
            को आम तौर पर सीधे निकाला नहीं जा सकता, उसे पहले कुछ बार खेलना पड़ता है; और जो ऐप हज़ारों रुपये &quot;मुफ्त&quot; देने का
            दावा करे, वह अक्सर नकली होता है। पूरी जानकारी:{" "}
            <Link href="/blog/teen-patti-master-51-bonus" className="text-amber-400 underline">₹51 बोनस गाइड</Link> और{" "}
            <Link href="/blog/teen-patti-master-welcome-bonus" className="text-amber-400 underline">वेलकम बोनस गाइड</Link>।
          </p>
        </section>

        <section id="withdrawal" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">पैसे कैसे निकलते हैं (UPI विड्रॉल)</h2>
          <p>
            ऐप के Withdraw सेक्शन में अपनी UPI ID या बैंक डिटेल डालकर रकम चुनी जाती है। बड़ी रकम से पहले PAN जैसी KYC मांगी जा
            सकती है, और जीत पर लगने वाला टैक्स ऐप खुद काटता है — आपको पहले से कोई &quot;टैक्स&quot; भेजना नहीं पड़ता। हमारी सलाह: पहली
            बार छोटी रकम निकालकर देखें कि पैसा सच में बैंक में आता है। कोई दिक्कत हो तो{" "}
            <Link href="/blog/teen-patti-master-customer-care" className="text-amber-400 underline">कस्टमर केयर गाइड</Link> देखें।
          </p>
        </section>

        <section id="niyam" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">टीन पट्टी मास्टर के नियम — एक मिनट में</h2>
          <p>
            हर खिलाड़ी boot (शुरुआती रकम) डालता है और तीन पत्ते पाता है। पत्ते देखे बिना खेलना Blind है, देखकर खेलना Chaal।
            कमज़ोर हाथ हो तो Pack करके निकल जाइए। आखिर में दो खिलाड़ी बचें तो Show होता है। हाथों का क्रम बड़े से छोटे: ट्रेल,
            प्योर सीक्वेंस, सीक्वेंस, कलर, पेयर, हाई कार्ड।
          </p>
          <p>
            उदाहरण और टिप्स के साथ पूरी गाइड:{" "}
            <Link href="/blog/teen-patti-master-kaise-khele" className="text-amber-400 underline">Teen Patti Master kaise khele</Link>।
          </p>
        </section>

        <section id="kanoon" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">क्या टीन पट्टी मास्टर भारत में कानूनी है?</h2>
          <p>
            इसका सीधा जवाब देना मुश्किल है। 2025 में भारत ने ऑनलाइन गेमिंग पर एक केंद्रीय कानून (Promotion and Regulation of Online
            Gaming Act) पास किया, जो असली पैसे वाले ऑनलाइन गेम्स को निशाना बनाता है, और कई राज्यों में पहले से अपने प्रतिबंध थे।
            नियम और उनका पालन बदल सकता है, इसलिए पैसा लगाने से पहले अपने राज्य की मौजूदा स्थिति ज़रूर जांचें। सिर्फ 18 साल से
            ऊपर के लोग ही खेलें।
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">अक्सर पूछे जाने वाले सवाल</h2>
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
            <strong className="text-white">सिर्फ 18+ के लिए।</strong> असली पैसे वाले गेम में पैसा हारने का जोखिम है। उतना ही लगाइए
            जितना खोने पर घर का बजट न बिगड़े। ज़्यादा जानकारी:{" "}
            <Link href="/responsible-gaming" className="text-amber-400 underline">Responsible Gaming</Link>।
          </p>
        </div>

        <AuthorBox />

        <nav aria-label="और हिंदी गाइड" className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-2">
          <h2 className="text-lg font-bold text-white">और हिंदी गाइड</h2>
          <ul className="space-y-1 text-sm">
            <li><Link href="/blog/teen-patti-master-kaise-khele" className="text-amber-300 hover:underline">Teen Patti Master Kaise Khele? नियम और टिप्स</Link></li>
            <li><Link href="/blog/teen-patti-master-2027" className="text-amber-300 hover:underline">Teen Patti Master Update Kaise Kare?</Link></li>
            <li><Link href="/blog/teen-patti-master-new-version" className="text-amber-300 hover:underline">Teen Patti Master New Version</Link></li>
            <li><Link href="/blog" className="text-amber-300 hover:underline">सभी गाइड देखें →</Link></li>
          </ul>
        </nav>
      </article>
    </div>
  );
}
