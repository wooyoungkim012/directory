import "./ResultCard.css"

function ResultCard(props) {
    // const [name, setName] = useState('Set Username:')
    

    return (
            <div className="class-card">
              <a href={props.shop} target='blank'>
                <div className="class-img" id={props.name}></div>
                <div className="class-desc">
                <h1>{props.name}</h1>
                <h4>{props.star + ' stars'}</h4>
                <h4>
                    {props.desc}
                </h4>  
                </div>
                </a>
            </div>
            
    )
}

const BritaJs = {
    name: "brita",
    star: 2,
    desc: "Everyday Water Pitcher is an affordable and easy solution for better-tasting water. Just fill from your tap and keep it in the fridge.",
    picture: "https://res.cloudinary.com/clorox-dtc/image/upload/c_pad,h_602,w_650/v1/products/602c5e4187d56000107b76d1/Everyday%20Pitcher%20White%20-%20hero.webp",
    video: "https://res.cloudinary.com/clorox-dtc/image/upload/c_pad,h_602,w_650/v1/products/602c5e4187d56000107b76d1/Everyday%20Pitcher%20-%20fill.webp",
    desc2: "An important thing to know with Brita is what the filter removes and what the filter reduces. Their website provides a chart, but doesn’t specifically say what chemical is reduced and what is removed. Generally, the Brita does a better job with reducing certain toxins but doesn’t do a great job with removing them from your water. It’s important to know just what is being removed and what is reduced in order to see if the Brita can work for your water filter expectations.",
    shop: "https://www.amazon.com/Brita-Small-Filter-Pitcher-Standard/dp/B015SY3W7K/ref=sr_1_8?crid=1DU3X3R5ILKUX&keywords=brita+water+pitcher&qid=1646731571&sprefix=brita+water+pitch%2Caps%2C144&sr=8-8"
  };

  const BerkeyJs = {
    name: "Berkey ($170.00 - $500.00)",
    star: 5,
    desc: "The Berkey removes contaminants from your water, which is why it's considered a water purifier — not just a filter.",
    picture:
      "https://food.fnr.sndimg.com/content/dam/images/food/products/2020/8/18/rx_berkey-water-filter.jpg.rend.hgtvcom.616.616.suffix/1597762077930.jpeg",
    video: "https://food.fnr.sndimg.com/content/dam/images/food/products/2020/8/18/rx_big-berkey-water-filter.jpeg.rend.hgtvcom.616.616.suffix/1597761357506.jpeg",
    desc2: "The Berkey removes contaminants from your water, which is why it’s considered a water purifier — not just a filter. Its superior water quality and filtering capability is exactly why the Berkey outshines more mainstream, household names like Brita and PUR, not to mention its longevity and long-term affordability. Plus, the larger Berkey systems, like the Big Berkey and Crown, hold more water than their rivals.",
    shop: "https://www.berkeyfilters.com/products/royal-berkey?gclid=Cj0KCQiAmpyRBhC-ARIsABs2EAryDRd-1yHDtvwwGi1j2E6md0PDyO2At_3XJMbt4KJZzS3jU6yYpmcaAsT0EALw_wcB"
  };

  const HydrosJs = {
    name: "Hydros ($24.00)",
    star: 3.5,
    desc: "Various styles of yoga combine physical postures, breathing techniques, and meditation or relaxation",
    picture: "https://cdn.shopify.com/s/files/1/1838/1959/products/hydros_40oz_carafe_gray_padding_1200x.png?v=1587074813",
    video: "https://cdn.shopify.com/s/files/1/1838/1959/products/hydros_product_ls_carafe_02_1200x.jpg?v=1627487574",
    desc2: "The Hydros Multi FilterTM is independently tested to filter out chlorine and particulate matter so you have better tasting water any time and anywhere you want it.",
    shop: "https://hydroslife.com/products/40oz-carafe?currency=USD&variant=30577912938631&utm_medium=cpc&utm_source=google&utm_campaign=Google%20Shopping&gclid=Cj0KCQiAmpyRBhC-ARIsABs2EArgTDgI9dbUX2_fJC2oR1luJ07jdLVy_wa2fA_TSKsfaouI6p0LYLIaAoldEALw_wcB"
  };

  const ProPurJs = {
    name: "ProPur",
    star: 3.5,
    desc: "Bicep curls help develop beautiful arms, which can translate into a great physique.",
    picture: "https://images-na.ssl-images-amazon.com/images/I/81bkMa79OeL._AC_UL210_SR210,210_.jpg",
    video: "https://i.ytimg.com/vi/0hUxja1gVcQ/maxresdefault.jpg",
    desc2: "Water filter pitchers may all look the same, but the ProOne® Water Filter pitcher is unique. Instead of the traditional “pour through” filter, the ProOne® G2.0 water filter pitcher uses an advanced gravity filter technology, allowing a greater reduction of contaminants in your drinking water.",
    shop: "https://www.amazon.com/Propur-Filter-Pitcher-ProOne-G-element/dp/B00GJW7IV2/ref=asc_df_B00GJW7IV2/?tag=hyprod-20&linkCode=df0&hvadid=167114814898&hvpos=&hvnetw=g&hvrand=15767469213011888174&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9033256&hvtargid=pla-315306608391&th=1&psc=1"
  };

  const exercises = [BritaJs, BerkeyJs, HydrosJs, ProPurJs, BritaJs, BerkeyJs, HydrosJs, ProPurJs];

export default ResultCard