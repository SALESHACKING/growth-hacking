import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div class="infobox">
          <Header title="Welcome to my app!" />

          <p>Lets GROW est la référence des ressources : bonnes pratiques dans le domaine du Growth Hacking et de l&apos;entrepreneuriat au sens large.&nbsp;</p>
          <p>Nous aidons gratuitement les entrepreneurs, growth hackers et commerciaux &agrave; obtenir tout le nécessaire pour booster leur croissance.</p>
          <p><br style="box-sizing: border-box;">Qu&apos;il s&apos;agisse de novices ou de profils chevronnés, nous alimentons chaque jour une base de :</br></p>
          <p><br style="box-sizing: border-box;">✅ Des centaines de&nbsp;<a href="https://sales-hacking.com/growth-hacks" rel="noopener noreferrer" target="_blank">growth hacks</a> enrichis CHAQUE JOUR</br></p>
          <p><br style="box-sizing: border-box;">✅ Pr&egrave;s de 100&nbsp;<a href="https://www.sales-hacking.com/growth-ressources">ressources pour entrepreneurs</a> téléchargeables</br>,</p>
          <p><br style="box-sizing: border-box;">✅ 100 articles de blog autour du <a href="https://www.sales-hacking.com/blog-categories/growth-hacking">growth hacking</a>, de <a href="https://www.sales-hacking.com/blog-categories/seo-content-marketing">content marketing</a>, de techniques pour les Sales, du&nbsp;<a href="https://www.sales-hacking.com/blog-categories/web-scraping">Web scraping</a>, de Lead Generation et de l&apos;entrepreneuriat en général,</br></p>
          <p><br style="box-sizing: border-box;">✅ Des conseils de lecture avec <a href="https://www.sales-hacking.com/livres">le meilleur des livres business</a></br></p>
          <p><br style="box-sizing: border-box;">✅ Des applications SaaS</br></p>
        </div>  
    </main>

      <Footer />
    </div>
  )
}
