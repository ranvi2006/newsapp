import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropsTypes from 'prop-types';


export class Newss extends Component {
  static  defultProps={
    category:"genrel"
  }
  static  propsType={
category:PropsTypes.string
  }
  
  article =  [
    {
    "source": {
    "id": "the-irish-times",
    "name": "The Irish Times"
    },
    "author": "Stefan Nicola",
    "title": "Tesla’s sales in Europe fall to 15-month low",
    "description": "Elon Musk’s car maker an exception to wider industry",
    "url": "https://www.irishtimes.com/business/2024/05/22/teslas-sales-in-europe-fall-to-15-month-low/",
    "urlToImage": "https://www.irishtimes.com/resizer/rzjwnVysG6ZO9EblLpghJ15D3OM=/1200x630/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/B266UXYKNNME766AJ2F7UIWL3E.jpg",
    "publishedAt": "2024-05-22T06:37:40Z",
    "content": "Tesla got off to a sluggish start to the second quarter in Europe, where chief executive Elon Musk was expecting a much better showing than the first few months of the year.\r\nThe carmaker registered … [+1525 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Investing.com"
    },
    "author": "Reuters",
    "title": "Xpeng shares surge on tech service income, upbeat comments on self-driving tech",
    "description": "Xpeng shares surge on tech service income, upbeat comments on self-driving tech",
    "url": "https://www.investing.com/news/stock-market-news/xpeng-shares-surge-on-tech-service-income-upbeat-comments-on-selfdriving-tech-3451272",
    "urlToImage": "https://i-invdn-com.investing.com/news/LYNXMPEA6606G_L.jpg",
    "publishedAt": "2024-05-22T06:30:41Z",
    "content": "By Sarah Wu\r\nBEIJING/SHANGHAI (Reuters) - Shares in Chinese electric vehicle maker Xpeng (NYSE:XPEV) jumped on Wednesday driven by revenue growth from research and development services offered to Vol… [+1414 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "International Business Times"
    },
    "author": "Mathieu RABECHAULT and Anne CHAON",
    "title": "Turkey Bets On Togg To Give Its Car Industry Electric Edge",
    "description": "On the shores of the Sea of Marmara, a grey and turquoise factory built at breakneck speed is churning out electric cars by the hundreds.",
    "url": "https://www.ibtimes.com/turkey-bets-togg-give-its-car-industry-electric-edge-3732572",
    "urlToImage": "https://d.ibtimes.com/en/full/4527076/togg-electric-car-rolling-off-assembly-line-gemlik-near-bursa-western-turkey.jpg",
    "publishedAt": "2024-05-22T06:27:07Z",
    "content": "On the shores of the Sea of Marmara, a grey and turquoise factory built at breakneck speed is churning out electric cars by the hundreds.\r\nTurkey is hoping its first major electric carmaker will put … [+3851 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Digital Journal"
    },
    "author": "AFP",
    "title": "Turkey bets on Togg to give its car industry electric edge",
    "description": "On the shores of the Sea of Marmara, a grey and turquoise factory built at breakneck speed is churning out electric cars by the hundreds. Turkey is hoping its first major electric carmaker will put the country in the driving seat of the automotive industry. I…",
    "url": "https://www.digitaljournal.com/world/turkey-bets-on-togg-to-give-its-car-industry-electric-edge/article",
    "urlToImage": "https://www.digitaljournal.com/wp-content/uploads/2024/05/c5f7cc4d43a6fee01c70d00bfe28d12b58f0866c.jpg",
    "publishedAt": "2024-05-22T06:24:59Z",
    "content": "A Togg electric car rolling off the assembly line in Gemlik near Bursa in western Turkey - Copyright AFP MOHD RASFAN\r\nOn the shores of the Sea of Marmara, a grey and turquoise factory built at breakn… [+3888 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": null,
    "title": "Will Tesla Stock (NASDAQ:TSLA) Tread Water Until the Robotaxi Unveiling?",
    "description": null,
    "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_d301d289-ae5c-4c6b-b4b4-c70d83d4174e",
    "urlToImage": null,
    "publishedAt": "2024-05-22T05:50:20Z",
    "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": null,
    "title": "Tesla investors urged to reject Musk's multi-billion-dollar package",
    "description": null,
    "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_64c72fa6-4b30-4763-b7ba-3d4ea8df1423",
    "urlToImage": null,
    "publishedAt": "2024-05-22T05:45:13Z",
    "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Marketscreener.com"
    },
    "author": null,
    "title": "Wall Street: double record on eve of FOMC minutes",
    "description": "(marketscreener.com) There was no stopping Wall Street on the eve of the release of the Fed's latest FOMC minutes, with Microsoft acting as the locomotive and consolidating its position as the world's largest capitalization.The S&P500 set its 25th closing rec…",
    "url": "https://www.marketscreener.com/quote/index/DOW-JONES-INDUSTRIAL-4945/news/Wall-Street-double-record-on-eve-of-FOMC-minutes-46789533/",
    "urlToImage": "https://www.marketscreener.com/images/reuters/2016-10-06T200606Z_1_LYNXNPEC951EL_RTROPTP_2_MARKETS-STOCKS.JPG",
    "publishedAt": "2024-05-22T05:44:25Z",
    "content": "There was no stopping Wall Street on the eve of the release of the Fed's latest FOMC minutes, with Microsoft acting as the locomotive and consolidating its position as the world's largest capitalizat… [+1261 chars]"
    },
    {
    "source": {
    "id": "financial-post",
    "name": "Financial Post"
    },
    "author": "Bloomberg News",
    "title": "China’s $10,000 EV is Coming for Europe’s Carmakers",
    "description": "BYD’s Seagull hatchback is set to start Europe sales next year, beating the competition on price",
    "url": "https://financialpost.com/pmn/business-pmn/chinas-10000-ev-is-coming-for-europes-carmakers",
    "urlToImage": "https://smartcdn.gprod.postmedia.digital/financialpost/wp-content/uploads/2024/05/776145093.jpg",
    "publishedAt": "2024-05-22T04:26:16Z",
    "content": "BYDs Seagull hatchback is set to start Europe sales next year, beating the competition on price\r\nAuthor of the article:\r\nBYD's Stella Li at a launch event in Mexico City. Photographer: Mariceu Erthal… [+8437 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CleanTechnica"
    },
    "author": "Steve Hanley",
    "title": "Hybrid Mania At An All-Time High",
    "description": "Hybrid sales in the US were up more than 50% in 2023 as sales of battery electric cars took a downward turn. \nThe post Hybrid Mania At An All-Time High appeared first on CleanTechnica.",
    "url": "https://cleantechnica.com/2024/05/22/hybrid-mania-at-an-all-time-high/",
    "urlToImage": "https://cleantechnica.com/wp-content/uploads/2024/02/2022.12-toyota-prius-2023-first-drive-del-mar-california-KYLE-CleanTechnica.jpg",
    "publishedAt": "2024-05-22T04:03:05Z",
    "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nI bought a 2007 Toyota Prius hybrid in the fall of 2006, believing I was a pioneer in the transition to more … [+6511 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "fortune.com",
    "title": "Investors clash over Elon Musk’s $46 billion pay package: 'The board has yet to ensure that Tesla has a full-time CEO'",
    "description": "Tesla investors are lobbying to shoot down the largest moonshot compensation plan in history. A group including the New York City pension funds filed a notice on Monday urging others to vote against Tesla CEO Elon Musk’s $46 billion stock-option package at th…",
    "url": "https://biztoc.com/x/f16d61237fdcc6c4",
    "urlToImage": "https://c.biztoc.com/p/f16d61237fdcc6c4/og.webp",
    "publishedAt": "2024-05-22T03:02:05Z",
    "content": "Tesla investors are lobbying to shoot down the largest moonshot compensation plan in history.A group including the New York City pension funds filed a notice on Monday urging others to vote against T… [+313 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "tipranks.com",
    "title": "Will Tesla Stock (NASDAQ:TSLA) Tread Water Until the Robotaxi Unveiling?",
    "description": "https://www.tipranks.com/news/article/will-tesla-stock-nasdaqtsla-tread-water-until-the-robotaxi-unveiling?utm_source=biztoc.com&utm_medium=referral",
    "url": "https://biztoc.com/x/c274be9688b4c3aa",
    "urlToImage": "https://c.biztoc.com/p/c274be9688b4c3aa/s.webp",
    "publishedAt": "2024-05-22T03:00:22Z",
    "content": "https://www.tipranks.com/news/article/will-tesla-stock-nasdaqtsla-tread-water-until-the-robotaxi-unveiling?utm_source=biztoc.com&amp;utm_medium=referral\r\nThis story appeared on tipranks.com, ."
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "aol.com",
    "title": "A fire broke out at Tesla's Fremont factory once again, this time due to an oven",
    "description": "None The Fremont Fire Department reported no injuries and is investigating the cause. • None The Tesla Fremont factory has seen several fires over the years. On Monday evening, a 2-alarm commercial fire occurred at Tesla's Fremont factory, which has experienc…",
    "url": "https://biztoc.com/x/de89df12a0ccfb79",
    "urlToImage": "https://c.biztoc.com/p/de89df12a0ccfb79/s.webp",
    "publishedAt": "2024-05-22T01:56:05Z",
    "content": "None The Fremont Fire Department reported no injuries and is investigating the cause.None The Tesla Fremont factory has seen several fires over the years.On Monday evening, a 2-alarm commercial fire … [+233 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "iPhone in Canada"
    },
    "author": "John Quintet",
    "title": "SpaceX Achieves First Video Call via Starlink Direct to Cell Satellites",
    "description": "SpaceX on Tuesday announced it had successfully tested its first video call using Starlink Direct to cell satellites, which is an ambitious plan to bring cell coverage for the entire planet, targeting faraway places that typically have no signal. “First video…",
    "url": "https://www.iphoneincanada.ca/2024/05/21/spacex-first-video-call-starlink-direct-cell/",
    "urlToImage": "https://cdn.iphoneincanada.ca/wp-content/uploads/2017/09/iic-logo-1.svg",
    "publishedAt": "2024-05-22T01:33:21Z",
    "content": "SpaceX on Tuesday announced it had successfully tested its first video call using Starlink Direct to cell satellites, which is an ambitious plan to bring cell coverage for the entire planet, targetin… [+1161 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "KLAS - 8 News Now"
    },
    "author": "Linsey Lewis",
    "title": "Teen arrested after allegedly doing donuts in grass area of Henderson park",
    "description": "A teenager faces several charges after he was accused of doing donuts in the grass area of a Henderson park, according to Henderson police.",
    "url": "https://www.8newsnow.com/news/local-news/teen-arrested-after-allegedly-doing-donuts-in-grass-area-of-henderson-park/",
    "urlToImage": "https://media.zenfs.com/en/klas_articles_549/30ebbea96a4d6ebc766a0730e4e56d09",
    "publishedAt": "2024-05-22T01:06:20Z",
    "content": "LAS VEGAS (KLAS) A teenager faces several charges after he was accused of doing donuts in the grass area of a Henderson park, according to Henderson police.\r\nOn Monday, Henderson police responded to … [+898 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "benzinga.com",
    "title": "Elon Musk Has 'Fond Memories' From Red Lobster, Expresses Sorrow At Seafood Chain's Bankruptcy News",
    "description": "Serial entrepreneur and Tesla CEO Elon Musk expressed his sorrow over the bankruptcy filing of the popular seafood chain, Red Lobster. What Happened: Red Lobster has filed for Chapter 11 bankruptcy. This news follows the company’s announcement last week about…",
    "url": "https://biztoc.com/x/806a45cc00fa816e",
    "urlToImage": "https://c.biztoc.com/p/806a45cc00fa816e/s.webp",
    "publishedAt": "2024-05-22T01:00:06Z",
    "content": "Serial entrepreneur and Tesla CEO Elon Musk expressed his sorrow over the bankruptcy filing of the popular seafood chain, Red Lobster.What Happened: Red Lobster has filed for Chapter 11 bankruptcy. T… [+280 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Futurism"
    },
    "author": "Jon Christian",
    "title": "This Pedantic Elon Musk Tweet Perfectly Illustrates Why Nobody Can Stand Him Anymore",
    "description": "The cool kids nowadays insist they never felt that way, but peering back into the mists of the 2000s, there was definitely an era when Elon Musk seemed like a pretty inspiring guy. Sure, he made his initial stack of money doing conventional software startup s…",
    "url": "https://futurism.com/elon-musk-fallout-tweet",
    "urlToImage": "https://wp-assets.futurism.com/2024/05/elon-musk-fallout-tweet.jpg",
    "publishedAt": "2024-05-22T00:57:09Z",
    "content": "The cool kids nowadays insist they never felt that way, but peering back into the mists of the 2000s, there was definitely an era when Elon Musk seemed like a pretty inspiring guy.\r\nSure, he made his… [+3100 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "tipranks.com",
    "title": "‘Don’t Ignore This Big Potential,’ Says Investor About Tesla Stock",
    "description": "Wall Street has long argued whether Tesla (NASDAQ:TSLA) should be looked at as purely an automaker or be considered a tech play. While the debate i... #tesla",
    "url": "https://biztoc.com/x/88e46d7313848e7d",
    "urlToImage": "https://c.biztoc.com/p/88e46d7313848e7d/s.webp",
    "publishedAt": "2024-05-22T00:54:15Z",
    "content": "Wall Street has long argued whether Tesla (NASDAQ:TSLA) should be looked at as purely an automaker or be considered a tech play. While the debate i...\r\n#tesla\r\nThis story appeared on tipranks.com, ."
    },
    {
    "source": {
    "id": null,
    "name": "Freerepublic.com"
    },
    "author": "Breitbart",
    "title": "Michigan Town Loses Bid to Block Chinese-Owned Electric Vehicle Battery Factory",
    "description": "The Michigan community of Green Charter Township on Friday lost a court battle to block Chinese-linked electric vehicle (EV) battery manufacturer Gotion Inc. from building a factory near the town. Michigan is generally friendly to Chinese investments and the …",
    "url": "https://freerepublic.com/focus/f-chat/4239260/posts",
    "urlToImage": null,
    "publishedAt": "2024-05-22T00:41:44Z",
    "content": "Skip to comments.\r\nMichigan Town Loses Bid to Block Chinese-Owned Electric Vehicle Battery FactoryBreitbart ^\r\n | 21May\r\n | Hayward \r\nPosted on 05/21/2024 5:41:44 PM PDT by qaz123\r\nThe Michigan commu… [+3110 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "aol.com",
    "title": "Investors clash over Elon Musk’s $46 billion pay package: ‘The board has yet to ensure that Tesla has a full-time CEO’",
    "description": "Tesla investors are lobbying to shoot down the largest moonshot compensation plan in history. A group including the New York City pension funds filed a notice on Monday urging others to vote against Tesla CEO Elon Musk’s $46 billion stock-option package at th…",
    "url": "https://biztoc.com/x/7be83349a72a59dd",
    "urlToImage": "https://c.biztoc.com/p/7be83349a72a59dd/s.webp",
    "publishedAt": "2024-05-22T00:32:05Z",
    "content": "Tesla investors are lobbying to shoot down the largest moonshot compensation plan in history.A group including the New York City pension funds filed a notice on Monday urging others to vote against T… [+307 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "forbes.com.au",
    "title": "Elon Musk topples Bezos as world’s 2nd richest person after $6 billion Tesla surge",
    "description": "Billionaire Tesla, SpaceX and X head Elon Musk saw his net worth spike to over $200 billion on Tuesday, taking back the title of world’s second-richest person from Amazon founder Jeff Bezos—though he still trails behind LVMH magnate Bernard Arnault, the world…",
    "url": "https://biztoc.com/x/63e487eb17059753",
    "urlToImage": "https://c.biztoc.com/p/63e487eb17059753/s.webp",
    "publishedAt": "2024-05-22T00:28:12Z",
    "content": "Billionaire Tesla, SpaceX and X head Elon Musk saw his net worth spike to over $200 billion on Tuesday, taking back the title of worlds second-richest person from Amazon founder Jeff Bezosthough he s… [+293 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "businessinsider.com",
    "title": "A fire broke out at Tesla's Fremont factory once again, this time due to an oven",
    "description": "A fire broke out at Tesla's Fremont Factory Monday night. Steve Granitz/FilmMagic // Stephen Lam /Reuters Tesla's Fremont, California, plant suffered a 2-alarm commercial fire Monday evening. The Fremont Fire Department reported no injuries and is investigati…",
    "url": "https://biztoc.com/x/bc9af8f4209ed07d",
    "urlToImage": "https://c.biztoc.com/p/bc9af8f4209ed07d/s.webp",
    "publishedAt": "2024-05-22T00:28:05Z",
    "content": "A fire broke out at Tesla's Fremont Factory Monday night.Steve Granitz/FilmMagic // Stephen Lam /ReutersTesla's Fremont, California, plant suffered a 2-alarm commercial fire Monday evening.The Fremon… [+302 chars]"
    },
    {
    "source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "Hannah Getahun",
    "title": "A fire broke out at Tesla's Fremont factory once again, this time due to an oven",
    "description": "A 2-alarm commercial fire at Tesla's Fremont factory, which has faced multiple fires and controversies, was quickly extinguished.",
    "url": "https://www.businessinsider.com/oven-fire-tesla-fremont-california-factory-2024-5",
    "urlToImage": "https://i.insider.com/664d358414fb5b23cc5ef32f?width=1200&format=jpeg",
    "publishedAt": "2024-05-22T00:17:37Z",
    "content": "A fire broke out at Tesla's Fremont Factory Monday night.Steve Granitz/FilmMagic // Stephen Lam /Reuters\r\n<ul><li>Tesla's Fremont, California, plant suffered a 2-alarm commercial fire Monday evening.… [+2263 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CleanTechnica"
    },
    "author": "Press Release",
    "title": "Bedrock Materials Secures $9 Million Seed Funding, Establishes R&D Headquarters in Chicago",
    "description": "CHICAGO, IL – Bedrock Materials, a pioneering battery technology startup launched out of Stanford University in 2023, [has] announced a successful close of $9 million in seed funding alongside the inauguration of its new Research & Development (R&D) headquart…",
    "url": "https://cleantechnica.com/2024/05/21/bedrock-materials-secures-9-million-seed-funding-establishes-rd-headquarters-in-chicago/",
    "urlToImage": "https://cleantechnica.com/wp-content/uploads/2023/04/Energy-Storage-Battery-CleanTechnica-Watermark.png",
    "publishedAt": "2024-05-22T00:15:29Z",
    "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nCHICAGO, IL Bedrock Materials, a pioneering battery technology startup launched out of Stanford University in… [+5893 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Gapingvoid.com"
    },
    "author": "Cierra Martin",
    "title": "It’s Not Just a Bag",
    "description": "If traditional economic theory was correct, price UP would equal demand DOWN, all the time, in every case, for every product.  And, often, that’s what …\nThe post It’s Not Just a Bag appeared first on Gapingvoid.",
    "url": "https://www.gapingvoid.com/its-not-just-a-bag/",
    "urlToImage": "https://www.gapingvoid.com/content/uploads/2024/05/why-are-we-waiting-in-line-v2-social.jpg",
    "publishedAt": "2024-05-22T00:11:32Z",
    "content": "If traditional economic theory was correct, price UP would equal demand DOWN, all the time, in every case, for every product. \r\nAnd, often, thats what happens. But sometimes it doesnt, and the revers… [+2789 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Dealcatcher.com"
    },
    "author": null,
    "title": "Amazon - Tesla Universal Wall Connector - Electric Vehicle (EV) Charger with Dual Plug Type $580",
    "description": "Amazon has this Tesla Universal Wall Connector - Electric Vehicle (EV) Charger with Dual Plug Type on sale today for $580. Free shipping.<br /><br /><strong>More Ways to Save at Amazon:</strong><ul><li>Don't already have Amazon Prime? <a rel=\"nofollow\" href=\"…",
    "url": "https://www.dealcatcher.com/automotive?offer=998236788",
    "urlToImage": "https://app.dealcatcher.com/bigly/998236788-449.jpg",
    "publishedAt": "2024-05-21T23:57:54Z",
    "content": "$580.00$620.00 (6% off) at Amazon\r\nAmazon has this Tesla Universal Wall Connector - Electric Vehicle (EV) Charger with Dual Plug Type on sale today for $580. Free shipping.\r\nMore Ways to Save at Amaz… [+111 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Freerepublic.com"
    },
    "author": "US News",
    "title": "Hertz charging Tesla renters for not refilling gas tank",
    "description": "Customers of one of the nation’s largest rental car companies are feeling the sting after renting Teslas only to pay hundreds in gratuitous fuel fees — and then being denied refunds.",
    "url": "https://freerepublic.com/focus/f-news/4239248/posts",
    "urlToImage": null,
    "publishedAt": "2024-05-21T23:44:40Z",
    "content": "Skip to comments.\r\nHertz charging Tesla renters for not refilling gas tankUS News ^\r\n | 05/18/2024\r\n | Chris Harris\r\nPosted on 05/21/2024 4:44:40 PM PDT by TexasKamaAina\r\nCustomers of one of the nati… [+3271 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "[Removed]"
    },
    "author": null,
    "title": "[Removed]",
    "description": "[Removed]",
    "url": "https://removed.com",
    "urlToImage": null,
    "publishedAt": "1970-01-01T00:00:00Z",
    "content": "[Removed]"
    },
    {
    "source": {
    "id": null,
    "name": "Slashdot.org"
    },
    "author": "theweatherelectric",
    "title": "Tesla shareholder group opposes Musk's $46B pay, slams board \"dysfunction\"",
    "description": "Jon Brodkin for Ars Technica writes, \"A Tesla shareholder group yesterday urged other shareholders to vote against Elon Musk's $46 billion pay package, saying the Tesla board is dysfunctional and 'overly beholden to CEO Musk.' The group's letter also urged sh…",
    "url": "https://slashdot.org/submission/17320877/tesla-shareholder-group-opposes-musks-46b-pay-slams-board-dysfunction",
    "urlToImage": null,
    "publishedAt": "2024-05-21T23:29:53Z",
    "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Slashdot.org"
    },
    "author": "theweatherelectric",
    "title": "Tesla puts '$25,000 electric car' on back burner despite what Elon Musk said",
    "description": "Fred Lambert of Electrek writes, \"Electrek can confirm that the program, which was internally called ‘NV9’, was postponed, according to sources familiar with the matter. Musk might take issues with claiming that it is 'canceled', but the project is effectivel…",
    "url": "https://slashdot.org/submission/17320873/tesla-puts-25000-electric-car-on-back-burner-despite-what-elon-musk-said",
    "urlToImage": null,
    "publishedAt": "2024-05-21T23:05:41Z",
    "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "New Zealand Herald"
    },
    "author": null,
    "title": "Group of Tesla shareholders ask investors to vote against Musk’s compensation package",
    "description": "Group says $65b package not an incentive, just excessive.",
    "url": "https://www.nzherald.co.nz/business/group-of-tesla-shareholders-ask-investors-to-vote-against-musks-compensation-package/UPPOWWRDAVAIHJ7HPH7BEE6NZQ/",
    "urlToImage": "https://www.nzherald.co.nz/resizer/v2/BSLJSW3XFBBMTPWI3NCDQRDTFI.jpg?auth=1fedec198c90068cf7072f732c7bce6a96e0c9b34a93e8bce0d2475b5670edf5&width=1200&height=675&quality=70&smart=true",
    "publishedAt": "2024-05-21T22:52:57Z",
    "content": "Given Teslas history of exponentially larger awards, Elon Musk may well ask for another award, the shareholder group said.A group of Tesla shareholders is asking investors to vote against a compensat… [+3301 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "electrek.co",
    "title": "Major pension fund tells Tesla investors: vote against Musk's $55B pay package",
    "description": "A large pension fund has addressed a letter to Tesla shareholders recommending that they vote against the reelection of Kimbal Musk and James Murdoch and against Elon Musk’s massive stock package, ahead of Tesla’s shareholder meeting on June 13. Tesla’s share…",
    "url": "https://biztoc.com/x/65b033fea2302fdf",
    "urlToImage": "https://c.biztoc.com/p/65b033fea2302fdf/og.webp",
    "publishedAt": "2024-05-21T22:20:07Z",
    "content": "A large pension fund has addressed a letter to Tesla shareholders recommending that they vote against the reelection of Kimbal Musk and James Murdoch and against Elon Musks massive stock package, ahe… [+295 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Quartz India"
    },
    "author": "Owen Bellwood / Jalopnik",
    "title": "Tesla drivers aren't going to play Steam games any time soon",
    "description": "Elon Musk is pretty big on making promises he can’t keep. If it’s not cars that can actually drive themselves or affordable electric vehicles, then it’s canceled features and backtracked launch dates. Now, the Tesla boss has been forced to admit defeat once a…",
    "url": "https://qz.com/tesla-steam-driving-video-games-1851492303",
    "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/0a9547e0c96e1c2fd918a79cdc9ac1b5.png",
    "publishedAt": "2024-05-21T22:19:09Z",
    "content": "Elon Musk is pretty big on making promises he cant keep. If its not cars that can actually drive themselves or affordable electric vehicles, then its canceled features and backtracked launch dates. N… [+1773 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "KSAT San Antonio"
    },
    "author": "Michelle Chapman",
    "title": "Group of Tesla shareholders ask investors to vote against Musk's compensation package",
    "description": "A group of Tesla shareholders is asking investors to vote against a compensation package worth more than $40 billion for CEO Elon Musk, saying that it’s not in the electric vehicle maker’s best interest.",
    "url": "https://www.ksat.com/business/2024/05/21/group-of-tesla-shareholders-ask-investors-to-vote-against-musks-compensation-package/",
    "urlToImage": "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/JNUUOBOBUFBSRFNV2OKWFMHBWA.jpg?_a=ATAPphC0",
    "publishedAt": "2024-05-21T22:11:52Z",
    "content": "A group of Tesla shareholders is asking investors to vote against a compensation package worth more than $40 billion for CEO Elon Musk, saying that it's not in the electric vehicle maker's best inter… [+3262 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "benzinga.com",
    "title": "Tesla Stock Is Rallying Tuesday: What's Going On? - Tesla (NASDAQ:TSLA)",
    "description": "Tesla Inc TSLA shares are trading higher. The EV maker on Tuesday increased its 72 month loan rate in the United States. What Happened: Tesla has increased its 72 month loan rate (APR) in the U.S. from 0.99% to 1.99%, according to Benzinga Pro. The loan rates…",
    "url": "https://biztoc.com/x/f71a412afae189e9",
    "urlToImage": "https://c.biztoc.com/p/f71a412afae189e9/og.webp",
    "publishedAt": "2024-05-21T22:06:06Z",
    "content": "Tesla Inc TSLA shares are trading higher. The EV maker on Tuesday increased its 72 month loan rate in the United States.What Happened: Tesla has increased its 72 month loan rate (APR) in the U.S. fro… [+300 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Daily Dot"
    },
    "author": "Alexandra Samuels",
    "title": "‘To be fair, this is a one night stand’: Expert blasts Honda for controversial new Chevy partnership that led to the 2024 Prologue",
    "description": "A man went viral on TikTok after blasting Honda for working alongside General Motors, a partnership that began in earnest earlier this year. GM owns Chevrolet, GMC, Cadillac, and Buick, and the new car it cooked up with its Asian counterpart shares characteri…",
    "url": "https://www.dailydot.com/news/honda-prologue-chevy-blazer/",
    "urlToImage": "https://uploads.dailydot.com/2024/05/honda-and-general-motors-partnership.jpg?auto=compress&fm=pjpg",
    "publishedAt": "2024-05-21T22:00:00Z",
    "content": "A man went viral on TikTok after blasting Honda for working alongside General Motors, a partnership that began in earnest earlier this year. GM owns Chevrolet, GMC, Cadillac, and Buick, and the new c… [+3406 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Marketscreener.com"
    },
    "author": null,
    "title": "Wall Street: double record on eve of FOMC minutes",
    "description": "(marketscreener.com) There's no stopping Wall Street on the eve of the publication of the minutes of the latest FOMC meeting: Microsoft served as the driving force, consolidating its position as the world's largest capitalization.The S&P500 set its 25th closi…",
    "url": "https://www.marketscreener.com/quote/index/DOW-JONES-INDUSTRIAL-4945/news/Wall-Street-double-record-on-eve-of-FOMC-minutes-46787856/",
    "urlToImage": "https://www.marketscreener.com/images/reuters/2016-12-16T211316Z_1_LYNXMPECBF1IU_RTROPTP_2_USA-STOCKS.JPG",
    "publishedAt": "2024-05-21T21:56:33Z",
    "content": "There's no stopping Wall Street on the eve of the publication of the minutes of the latest FOMC meeting: Microsoft served as the driving force, consolidating its position as the world's largest capit… [+1147 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "fortune.com",
    "title": "Investors clash over Elon Musk’s $46 billion pay package: 'The board has yet to ensure that Tesla has a full-time CEO'",
    "description": "Tesla investors are lobbying to shoot down the largest moonshot compensation plan in history. A group including the New York City pension funds filed a notice on Monday urging others to vote against Tesla CEO Elon Musk’s $46 billion stock-option package at th…",
    "url": "https://biztoc.com/x/7ab6a3cb12c76084",
    "urlToImage": "https://c.biztoc.com/p/7ab6a3cb12c76084/s.webp",
    "publishedAt": "2024-05-21T21:34:04Z",
    "content": "Tesla investors are lobbying to shoot down the largest moonshot compensation plan in history.A group including the New York City pension funds filed a notice on Monday urging others to vote against T… [+313 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "finance.yahoo.com",
    "title": "Tesla stock gains on electric Semi-Truck progress, updates",
    "description": "are trading higher ahead of Tuesday's market close, propelled by new details on the EV company's highly anticipated electric Semi truck project. First unveiled in 2017, the automaker has now set its sights on delivering these cutting-edge vehicles by 2026. Ya…",
    "url": "https://biztoc.com/x/071edc1fe0c27f17",
    "urlToImage": "https://c.biztoc.com/p/071edc1fe0c27f17/og.webp",
    "publishedAt": "2024-05-21T21:24:10Z",
    "content": "are trading higher ahead of Tuesday's market close, propelled by new details on the EV company's highly anticipated electric Semi truck project. First unveiled in 2017, the automaker has now set its … [+294 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "wolfstreet.com",
    "title": "New-Vehicle Supply Turns to Glut for Many Brands. Automakers Roll out Incentives, but Not Nearly Enough",
    "description": "Inventory gluts are resolved by lower prices that boost sales. But that part hasn’t started yet; the glut is still building. It’s a good thing for new-car and new-truck buyers to go from inventory shortages, the odious addendum stickers we saw during the pand…",
    "url": "https://biztoc.com/x/4000b3f6f061980a",
    "urlToImage": "https://c.biztoc.com/274/og.png",
    "publishedAt": "2024-05-21T21:22:07Z",
    "content": "Inventory gluts are resolved by lower prices that boost sales. But that part hasnt started yet; the glut is still building.Its a good thing for new-car and new-truck buyers to go from inventory short… [+284 chars]"
    },
    {
    "source": {
    "id": "fortune",
    "name": "Fortune"
    },
    "author": "Amanda Gerut",
    "title": "Investors clash over Elon Musk’s $46 billion pay package—'the board has yet to ensure that Tesla has a full-time CEO'",
    "description": "Investors say Musk is spread too thin among his other companies to justify such high pay.",
    "url": "https://fortune.com/2024/05/21/tesla-elon-musk-pay-compensation-plan-investors-clash/",
    "urlToImage": "https://fortune.com/img-assets/wp-content/uploads/2024/05/GettyImages-1853200567-e1716325455294.jpg?resize=1200,600",
    "publishedAt": "2024-05-21T21:17:39Z",
    "content": "Tesla investors are lobbying to shoot down the largest moonshot compensation plan in history.A group, including the New York City pension funds, filed a notice on Monday urging others to vote against… [+5920 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Boston Globe"
    },
    "author": "MICHELLE CHAPMAN",
    "title": "Group of Tesla shareholders ask investors to vote against Musk’s compensation package",
    "description": "Tesla is struggling with falling global sales, slowing electric vehicle demand, an aging model lineup, and a stock price that has tumbled 30 percent this year",
    "url": "https://www.bostonglobe.com/2024/05/21/business/tesla-shareholders-musk-compensation-package/",
    "urlToImage": "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/X2nnf_rAS8Oe8T7H8zKTkNrDxKs=/506x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/3SQRO5KUWCUMUGHJXFLQ4OZCZE.jpg",
    "publishedAt": "2024-05-21T21:16:10Z",
    "content": "A group of Tesla shareholders is asking investors to vote against a compensation package worth more than $40 billion for CEO Elon Musk, saying that its not in the electric vehicle makers best interes… [+3127 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "[Removed]"
    },
    "author": null,
    "title": "[Removed]",
    "description": "[Removed]",
    "url": "https://removed.com",
    "urlToImage": null,
    "publishedAt": "1970-01-01T00:00:00Z",
    "content": "[Removed]"
    },
    {
    "source": {
    "id": null,
    "name": "9to5google.com"
    },
    "author": "Abner Li",
    "title": "Google Calendar is still Android’s best tablet app",
    "description": "As I said in 2022, Google Calendar is my favorite first-party app for Android tablets and foldables. Following an update detailed at I/O 2024, it retains that top spot for me. \n\n\n\n more…",
    "url": "http://9to5google.com/2024/05/21/google-calendar-tablet-app/",
    "urlToImage": "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2024/04/Pixel-Tablet-Display-Usage.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2024-05-21T21:00:00Z",
    "content": "As I said in 2022, Google Calendar is my favorite first-party app for Android tablets and foldables. Following an update detailed at I/O 2024, it retains that top spot for me. \r\n9to5Google has a rebo… [+3615 chars]"
    },
    {
    "source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "John L. Dorman",
    "title": "How Trump's presidency became a roller-coaster ride for many of America's top CEOs",
    "description": "Donald Trump's relationships with many business leaders disintegrated in the aftermath of the 2017 Unite the Right rally in Charlottesville, Va.",
    "url": "https://www.businessinsider.com/trump-ceos-business-leaders-tax-cuts-regulations-infrastructure",
    "urlToImage": "https://i.insider.com/66315698ec0c696569ff55e3?width=1200&format=jpeg",
    "publishedAt": "2024-05-21T20:58:14Z",
    "content": "Then-Merck CEO Kenneth Frazier listens at right as then-President Donald Trump speaks during a meeting with manufacturing executives at the White House on February 23, 2017. Frazier resigned from Tru… [+8232 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "electrek.co",
    "title": "Tesla plans to ramp up Tesla Semi deliveries to PepsiCo",
    "description": "Tesla is planning to ramp up Tesla Semi deliveries to PepsiCo, its main customer, ahead of the electric semi truck’s volume production. The Tesla Semi program has seen some fairly serious delays. It was first unveiled in 2017 and it was supposed to come to pr…",
    "url": "https://biztoc.com/x/3ca189e146f9b8d7",
    "urlToImage": "https://c.biztoc.com/p/3ca189e146f9b8d7/og.webp",
    "publishedAt": "2024-05-21T20:56:05Z",
    "content": "Tesla is planning to ramp up Tesla Semi deliveries to PepsiCo, its main customer, ahead of the electric semi trucks volume production.The Tesla Semi program has seen some fairly serious delays.It was… [+282 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Investopedia"
    },
    "author": "Michael Bromberg",
    "title": "S&P 500 Gains and Losses Today: Bright Growth Outlook Lifts First Solar Stock",
    "description": "The S&P 500 added 0.3% on Tuesday, May 21, 2024, ahead of a noteworthy earnings report and as a Fed official expressed caution on rate cuts.",
    "url": "https://www.investopedia.com/s-and-p-500-gains-and-losses-today-bright-growth-outlook-lifts-first-solar-stock-8651894",
    "urlToImage": "https://www.investopedia.com/thmb/nw0CMLCOQFFdfT0y2r7g7bLMdbs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-154145355-7833f7eee707466f978428521ea36c17.jpg",
    "publishedAt": "2024-05-21T20:50:40Z",
    "content": "<ul><li>The S&amp;P 500 added 0.3% on Tuesday, May 21, 2024, ahead of a noteworthy earnings report and as a Federal Reserve official expressed caution on rate cuts.</li><li>First Solar shares soared … [+3598 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Boston Globe"
    },
    "author": "Alan Rappeport, Liz Alderman",
    "title": "US seeks to join forces with Europe to combat excess Chinese goods",
    "description": "Treasury Secretary Janet Yellen said Tuesday that the United States and Europe need to work together to push back against China’s excess industrial capacity, warning that a wave of cheap Chinese exports represents a grave threat to the global economy.",
    "url": "https://www.bostonglobe.com/2024/05/21/business/us-europe-excess-chinese-goods/",
    "urlToImage": "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/bbysdYaX7GTGHavUG1TqVHYA-ZA=/506x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/C7LMDQ6BX2DQEINKHG75OPC76Y.jpg",
    "publishedAt": "2024-05-21T20:44:42Z",
    "content": "Chinas excessive production of green energy technology has become a pressing trans-Atlantic concern in recent months. Officials in President Bidens administration have grown increasingly worried that… [+4655 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Autoblog"
    },
    "author": "Jonathon Ramsey",
    "title": "Polestar 3 adding a rear-wheel-drive trim later this year",
    "description": "Filed under:\n Green,Crossover,SUV,Electric,Future Vehicles,Polestar\n Continue reading Polestar 3 adding a rear-wheel-drive trim later this year\nPolestar 3 adding a rear-wheel-drive trim later this year originally appeared on Autoblog on Tue, 21 May 2024 16:37…",
    "url": "https://www.autoblog.com/2024/05/21/polestar-3-adding-a-rear-wheel-drive-trim-later-this-year/",
    "urlToImage": "https://s.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2024/05/21030746/2024_polestar_3.jpg",
    "publishedAt": "2024-05-21T20:37:00Z",
    "content": "Polestar, recently divorced from the Volvo mothership, is working through some in-house teething issues at the same time as it navigates a new EV landscape with a small and not-exactly-inexpensive mo… [+2432 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "arstechnica.com",
    "title": "Tesla shareholder group opposes Musk’s $46B pay, slams board “dysfunction”",
    "description": "A Tesla shareholder group yesterday urged other shareholders to vote against Elon Musk's $46 billion pay package, saying the Tesla board is dysfunctional and \"overly beholden to CEO Musk.\" The group's letter also urged shareholders to vote against the reelect…",
    "url": "https://biztoc.com/x/77e2d1d30e571860",
    "urlToImage": "https://c.biztoc.com/p/77e2d1d30e571860/og.webp",
    "publishedAt": "2024-05-21T20:14:08Z",
    "content": "A Tesla shareholder group yesterday urged other shareholders to vote against Elon Musk's $46 billion pay package, saying the Tesla board is dysfunctional and \"overly beholden to CEO Musk.\" The group'… [+307 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "bitcoinist.com",
    "title": "DOGE To The Moon: Dogecoin Beats Out Cardano And XRP In This Major Metric",
    "description": "has come out on top over Cardano and XRP following a recent development highlighting each token’s growth. This could reflect positively on the meme coin’s price soon enough, given how much crypto users look to be invested in the crypto token. Dogecoin Experie…",
    "url": "https://biztoc.com/x/2d5ec374d5639a3a",
    "urlToImage": "https://c.biztoc.com/p/2d5ec374d5639a3a/s.webp",
    "publishedAt": "2024-05-21T20:02:13Z",
    "content": "has come out on top over Cardano and XRP following a recent development highlighting each tokens growth. This could reflect positively on the meme coins price soon enough, given how much crypto users… [+300 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Bitcoinist"
    },
    "author": "Scott Matherson",
    "title": "DOGE To The Moon: Dogecoin Beats Out Cardano And XRP In This Major Metric",
    "description": "Dogecoin (DOGE) has come out on top over Cardano and XRP following a recent development highlighting each token’s growth. This could reflect positively on the meme coin’s price soon enough, given how much crypto users look to be invested in the crypto token. …",
    "url": "https://bitcoinist.com/dogecoin-beats-cardano-xrp/",
    "urlToImage": "https://bitcoinist.com/wp-content/uploads/2024/05/Dogecoin-XRP-Cardano.webp",
    "publishedAt": "2024-05-21T20:00:24Z",
    "content": "Dogecoin (DOGE) has come out on top over Cardano and XRP following a recent development highlighting each tokens growth. This could reflect positively on the meme coins price soon enough, given how m… [+2769 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "teslarati.com",
    "title": "Tesla Semi exec shares key program and Nevada factory details",
    "description": "Tesla Senior Manager, Semi program Dan Priestley recently spoke at the ACT Expo event in Las Vegas, Nevada. During his talk, the executive highlighted several key tidbits about the Tesla Semi program, such as its current milestones and the company’s plans for…",
    "url": "https://biztoc.com/x/156b57ead7ce165d",
    "urlToImage": "https://c.biztoc.com/p/156b57ead7ce165d/og.webp",
    "publishedAt": "2024-05-21T20:00:08Z",
    "content": "Tesla Senior Manager, Semi program Dan Priestley recently spoke at the ACT Expo event in Las Vegas, Nevada. During his talk, the executive highlighted several key tidbits about the Tesla Semi program… [+311 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Uncrate.com"
    },
    "author": "Uncrate",
    "title": "Volvo VNL Autonomous Semi Truck",
    "description": "Volvo and Aurora Innovation — an autonomous driving technology company founded by former Google, Uber, and Tesla executives — have revealed a production-ready Class 8 semi developed for long-haul autonomous transportation. The truck is based on the new VNL, V…",
    "url": "https://uncrate.com/volvo-vnl-autonomous-semi-truck/",
    "urlToImage": "https://uncrate.com/p/2024/05/volve-vnl-1.jpg",
    "publishedAt": "2024-05-21T20:00:00Z",
    "content": "Drink water and get something out of it. Cloud Water sparkling drinks have a variety of natural compounds to boost energy, support immune function, and even relax in three new mixes. Peace Love &amp;… [+578 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Securityaffairs.com"
    },
    "author": "Pierluigi Paganini",
    "title": "CISA adds NextGen Healthcare Mirth Connect flaw to its Known Exploited Vulnerabilities catalog",
    "description": "CISA adds NextGen Healthcare Mirth Connect deserialization of untrusted data vulnerability to its Known Exploited Vulnerabilities catalog. The U.S. Cybersecurity and Infrastructure Security Agency (CISA) added a NextGen Healthcare Mirth Connect vulnerability …",
    "url": "https://securityaffairs.com/163496/security/cisa-adds-nextgen-healthcare-mirth-connect-flaw-known-exploited-vulnerabilities-catalog.html",
    "urlToImage": "https://securityaffairs.com/wp-content/uploads/2020/07/CISA.jpeg",
    "publishedAt": "2024-05-21T19:59:44Z",
    "content": "CISA adds NextGen Healthcare Mirth Connect flaw to its Known Exploited Vulnerabilities catalog \r\n | Blackbasta group claims to have hacked Atlas, one of the largest US oil distributors\r\n | Experts wa… [+70329 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Slickdeals.net"
    },
    "author": "chefp",
    "title": "Tesla Universal Wall Connector $580 @ Amazon (6 replies)",
    "description": "I've been keeping an eye on the Universal Wall Connector which supports both NACS and J1772 vehicles with an ingenious built-in connector. It retailed for $595 on launch at the end of last year. It th ...",
    "url": "https://slickdeals.net/f/17508249-tesla-universal-wall-connector-580-amazon",
    "urlToImage": "https://static.slickdealscdn.com/attachment/8/1/5/4/3/7/15507309.attach",
    "publishedAt": "2024-05-21T19:53:18Z",
    "content": "Some might ask why get this when there are cheaper alternatives. 2 big reasons:Powershare: V2H supports powering your house from the car. Currently only the CyberTruck supports this, but other models… [+596 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "GlobeNewswire"
    },
    "author": "Bleichmar Fonti & Auld",
    "title": "STOCK ALERT: Sprout Social (Nasdaq: SPT) Investors are Encouraged to Contact BFA Law About Upcoming Deadline in Securities Class Action After Stock Drops Over 5% at Open",
    "description": "NEW YORK, May 21, 2024 (GLOBE NEWSWIRE) -- Top securities law firm Bleichmar Fonti & Auld LLP announces the upcoming July 12, 2024 deadline to be appointed lead in the Sprout Social (Nasdaq: SPT) Securities Class Action. If you invested in Sprout Social, you …",
    "url": "https://www.globenewswire.com/news-release/2024/05/21/2885999/0/en/STOCK-ALERT-Sprout-Social-Nasdaq-SPT-Investors-are-Encouraged-to-Contact-BFA-Law-About-Upcoming-Deadline-in-Securities-Class-Action-After-Stock-Drops-Over-5-at-Open.html",
    "urlToImage": "https://ml.globenewswire.com/Resource/Download/44a256cf-d470-4d8a-af6b-dbb1b5bbb11e",
    "publishedAt": "2024-05-21T19:46:00Z",
    "content": "NEW YORK, May 21, 2024 (GLOBE NEWSWIRE) -- Top securities law firm Bleichmar Fonti &amp; Auld LLP announces the upcoming July 12, 2024 deadline to be appointed lead in the Sprout Social (Nasdaq: SPT)… [+2579 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "finance.yahoo.com",
    "title": "Tesla stock pops after company reveals new details, deliveries for its semitruck program",
    "description": "provided a significant update Monday on its long-in-the-tooth project to develop electric semitrucks, which has experienced a series of delays since CEO Elon Musk debuted the rig back in 2017. The company confirmed its Tesla Semi remains on track for producti…",
    "url": "https://biztoc.com/x/74ea4b75ef3b5441",
    "urlToImage": "https://c.biztoc.com/p/74ea4b75ef3b5441/s.webp",
    "publishedAt": "2024-05-21T19:34:10Z",
    "content": "provided a significant update Monday on its long-in-the-tooth project to develop electric semitrucks, which has experienced a series of delays since CEO Elon Musk debuted the rig back in 2017.The com… [+284 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Slashdot.org"
    },
    "author": "feedfeeder",
    "title": "Tesla shareholder group opposes Musk’s $46B pay, slams board “dysfunction”",
    "description": "Letter urges shareholders to reject CEO pay plan and boot two board members.",
    "url": "https://slashdot.org/firehose.pl?op=view&amp;id=173937463",
    "urlToImage": null,
    "publishedAt": "2024-05-21T19:32:05Z",
    "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "theregister.com",
    "title": "Tesla's oldest factory ignites another headline by catching fire",
    "description": "A \"two-alarm commercial fire\" broke out yesterday at the Tesla factory in Fremont, California. The Fremont Fire Department said in a post on X that the fire began \"inside an oven,\" though the type of oven involved wasn't immediately clear. The blaze was signi…",
    "url": "https://biztoc.com/x/ac2c37b85b5a9701",
    "urlToImage": "https://c.biztoc.com/p/ac2c37b85b5a9701/s.webp",
    "publishedAt": "2024-05-21T19:30:05Z",
    "content": "A \"two-alarm commercial fire\" broke out yesterday at the Tesla factory in Fremont, California.The Fremont Fire Department said in a post on X that the fire began \"inside an oven,\" though the type of … [+305 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "[Removed]"
    },
    "author": null,
    "title": "[Removed]",
    "description": "[Removed]",
    "url": "https://removed.com",
    "urlToImage": null,
    "publishedAt": "1970-01-01T00:00:00Z",
    "content": "[Removed]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "bitcoinmagazine.com",
    "title": "Whistleblowing In The Surveillance Age",
    "description": "This article is featured in Bitcoin Magazine’s “The Inscription Issue”. Click here to get your Annual Bitcoin Magazine Subscription. Bitcoin allows for the permanent inscribing of data onto the public record. Still, whistleblowing on the blockchain remains a …",
    "url": "https://biztoc.com/x/f6c4cdb39b40c461",
    "urlToImage": "https://c.biztoc.com/p/f6c4cdb39b40c461/s.webp",
    "publishedAt": "2024-05-21T19:18:16Z",
    "content": "This article is featured in Bitcoin Magazines The Inscription Issue. Click here to get your Annual Bitcoin Magazine Subscription.Bitcoin allows for the permanent inscribing of data onto the public re… [+319 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Electrek"
    },
    "author": "Jameson Dow",
    "title": "Major pension fund tells Tesla investors: vote against Musk’s $55B pay package",
    "description": "A large pension fund has addressed a letter to Tesla shareholders recommending that they vote against the reelection of Kimbal Musk and James Murdoch and against Elon Musk’s massive stock package, ahead of Tesla’s shareholder meeting on June 13.\n\n\n\n more…",
    "url": "http://electrek.co/2024/05/21/major-pension-fund-tells-tesla-investors-vote-against-musks-55b-pay-package/",
    "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2022/07/Elon-Musk-Twitter-deal.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2024-05-21T19:17:10Z",
    "content": "A large pension fund has addressed a letter to Tesla shareholders recommending that they vote against the reelection of Kimbal Musk and James Murdoch and against Elon Musk’s massive stock package, ah… [+8622 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Investing.com"
    },
    "author": "U.Today",
    "title": "SpaceX Hits Major Milestone, Community Expects DOGE to the Moon",
    "description": "SpaceX Hits Major Milestone, Community Expects DOGE to the Moon",
    "url": "https://www.investing.com/news/cryptocurrency-news/spacex-hits-major-milestone-community-expects-doge-to-the-moon-3450635",
    "urlToImage": "https://i-invdn-com.investing.com/news/",
    "publishedAt": "2024-05-21T19:15:22Z",
    "content": "U.Today - Tech centibillionaire Elon Musk has announced a major new milestone achieved by one of his largest and oldest companies – SpaceX.\r\nThe community on the X platform, which also belongs to him… [+2131 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Theregister.com"
    },
    "author": "Brandon Vigliarolo",
    "title": "Tesla's oldest factory ignites another headline by catching fire",
    "description": "Fremont: Come for the toxic fumes and discrimination, stay for marshmallows? A \"two-alarm commercial fire\" broke out yesterday at the Tesla factory in Fremont, California.…",
    "url": "https://www.theregister.com/2024/05/21/fire_tesla_fremont/",
    "urlToImage": "https://regmedia.co.uk/2020/03/18/tesla_fremont.jpg",
    "publishedAt": "2024-05-21T19:15:09Z",
    "content": "A \"two-alarm commercial fire\" broke out yesterday at the Tesla factory in Fremont, California.\r\nThe Fremont Fire Department said in a post on X that the fire began \"inside an oven,\" though the type o… [+2168 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Electrek"
    },
    "author": "Peter Johnson",
    "title": "Hyundai shows off ‘bigger, better, faster’ EVs in new promo video",
    "description": "Get ready to see more Hyundai EVs on your screen. In a new promo video, Hyundai showcases its lineup of “bigger, better, faster, smarter” electric vehicles, including the IONIQ 5, IONIQ 6, and Kona Electric. Check out the full video below.\n\n\n\n more…",
    "url": "http://electrek.co/2024/05/21/hyundai-shows-off-bigger-better-faster-evs-new-promo-video/",
    "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2024/05/Hyundai-EVs-video.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2024-05-21T19:07:30Z",
    "content": "Get ready to see more Hyundai EVs on your screen. In a new promo video, Hyundai showcases its lineup of “bigger, better, faster, smarter” electric vehicles, including the IONIQ 5, IONIQ 6, and Kona E… [+2906 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "teslarati.com",
    "title": "Tesla is delivering 50 more Semi units to PepsiCo",
    "description": "It appears that PepsiCo’s Tesla Semi pilot program has been successful so far. During his talk at the ACT Expo clean transportation conference in Las Vegas, Nevada, Dan Priestley, the Senior Manager of the Tesla Semi program, revealed that efforts are now und…",
    "url": "https://biztoc.com/x/3538110e6d9862b7",
    "urlToImage": "https://c.biztoc.com/p/3538110e6d9862b7/og.webp",
    "publishedAt": "2024-05-21T19:04:07Z",
    "content": "It appears that PepsiCos Tesla Semi pilot program has been successful so far. During his talk at the ACT Expo clean transportation conference in Las Vegas, Nevada, Dan Priestley, the Senior Manager o… [+294 chars]"
    },
    {
    "source": {
    "id": "the-times-of-india",
    "name": "The Times of India"
    },
    "author": "AP",
    "title": "Group of Tesla shareholders ask investors to vote against Elon Musk's compensation package",
    "description": "A group of Tesla shareholders, including New York City Comptroller Brad Lander and SOC Investment Group, oppose a $40B pay package for CEO Elon Musk, citing falling global sales and stock prices. Concerns include lawsuits, Musk's part-time focus, and potentia…",
    "url": "https://economictimes.indiatimes.com/news/international/business/group-of-tesla-shareholders-ask-investors-to-vote-against-elon-musks-compensation-package/articleshow/110312594.cms",
    "urlToImage": "https://img.etimg.com/thumb/msid-110312597,width-1200,height-630,imgsize-31070,overlay-economictimes/photo.jpg",
    "publishedAt": "2024-05-21T19:00:08Z",
    "content": "A group of Tesla shareholders are asking investors to vote against a compensation package worth more than $40 billion for CEO Elon Musk, saying that it's not in the electric vehicle maker's best inte… [+2424 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "GlobeNewswire"
    },
    "author": "SPHERICAL INSIGHTS LLP",
    "title": "Global Light Electric Vehicles (LEVs) Market Size To Exceed USD 196.03 Billion By 2033 | CAGR Of 9.36%",
    "description": "The Global Light Electric Vehicles (LEVs) Market Size was Valued at USD 80.15 Billion in 2023 and the Worldwide Light Electric Vehicles (LEVs) Market Size is Expected to Reach USD 196.03 Billion by 2033, according to a research report published by Spherical I…",
    "url": "https://www.globenewswire.com/news-release/2024/05/21/2885978/0/en/Global-Light-Electric-Vehicles-LEVs-Market-Size-To-Exceed-USD-196-03-Billion-By-2033-CAGR-Of-9-36.html",
    "urlToImage": "https://ml.globenewswire.com/Resource/Download/b27a94e8-407e-46ae-a5c2-47bb2a1c8a2e",
    "publishedAt": "2024-05-21T19:00:00Z",
    "content": "New York, United States, May 21, 2024 (GLOBE NEWSWIRE) -- The Global Light Electric Vehicles (LEVs) Market Size Expected to Grow from USD 80.15 Billion in 2023 to USD 196.03 Billion by 2033, at a CAG… [+11487 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "NASA"
    },
    "author": "Linda E. Grimm",
    "title": "Go Back to the Future with NASA at Comicpalooza 2024",
    "description": "Celebrate your pop-culture fandom and uncover the latest science, technology, and discoveries of human spaceflight and exploration with NASA’s Johnson Space Center at Comicpalooza 2024 from May 24 to 26 at George R. Brown Convention Center in Houston. Engage …",
    "url": "https://www.nasa.gov/centers-and-facilities/johnson/go-back-to-the-future-with-nasa-at-comicpalooza-2024/",
    "urlToImage": "https://www.nasa.gov/wp-content/uploads/2024/05/jsc2023e031025.jpg",
    "publishedAt": "2024-05-21T18:59:09Z",
    "content": "Celebrate your pop-culture fandom and uncover the latest science, technology, and discoveries of human spaceflight and exploration with NASAs Johnson Space Center at Comicpalooza 2024 from May 24 to … [+8451 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Electrek"
    },
    "author": "Michelle Lewis",
    "title": "These are the best 2024 Memorial Day EV deals so far",
    "description": "CarsDirect is busy hunting down the best Memorial Day EV deals – here are three standouts from Tesla, Kia, and Ford.\n\n\n\n more…",
    "url": "http://electrek.co/2024/05/21/best-memorial-day-ev-deals-so-far/",
    "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2024/02/Kia-EV9-tax-credit.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2024-05-21T18:58:38Z",
    "content": "2024 Kia EV9 (Source: Kia)\r\nCarsDirect is busy hunting down the best Memorial Day EV deals here are three standouts from Tesla, Kia, and Ford.\r\nPhoto: Tesla\r\nAs Electrekreported earlier this month, T… [+2630 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Marketscreener.com"
    },
    "author": null,
    "title": "PepsiCo Unit to Add Tesla, Ford Vehicles to California Electric-Powered Fleet",
    "description": "(marketscreener.com) \n By Josh Beckerman \n\n\n PepsiCo's PepsiCo Beverages North America will more than triple its electric-powered fleet across California in the next several months, including 50 Class 8 Tesla Semi trucks operating from its Fresno facility and…",
    "url": "https://www.marketscreener.com/quote/stock/FORD-MOTOR-COMPANY-12542/news/PepsiCo-Unit-to-Add-Tesla-Ford-Vehicles-to-California-Electric-Powered-Fleet-46786916/",
    "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
    "publishedAt": "2024-05-21T18:56:53Z",
    "content": "By Josh Beckerman \r\nPepsiCo's PepsiCo Beverages North America will more than triple its electric-powered fleet across California in the next several months, including 50 Class 8 Tesla Semi trucks ope… [+730 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "International Business Times"
    },
    "author": "Isaiah McCall",
    "title": "5 Reasons To Accumulate More Bitcoin Right Now",
    "description": "Bitcoin's dominance in the crypto world is unshaken, and while the news media continues to say that BTC is dead—it's died 477 times.",
    "url": "https://www.ibtimes.com/5-reasons-accumulate-more-bitcoin-right-now-3732519",
    "urlToImage": "https://d.ibtimes.com/en/full/4526978/bitcoin.jpg",
    "publishedAt": "2024-05-21T18:56:52Z",
    "content": "Bitcoin's dominance in the crypto world is unshaken, and while the news media continues to say that BTC is dead—it's died 477 times, after all—it continues to be the best-performing asset of the deca… [+3509 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Erickimphotography.com"
    },
    "author": "ERIC KIM",
    "title": "Why You Are So Poor",
    "description": "You smoke weed, drink alcohol, do drugs You own a dog or pet You go to festivals You are plant based or vegan or drink juices You buy new cars, and finance, or even worse … lease You own property and or have a mortgage You don’t understand real economics You …",
    "url": "https://erickimphotography.com/blog/2024/05/21/why-you-are-so-poor/",
    "urlToImage": null,
    "publishedAt": "2024-05-21T18:56:50Z",
    "content": "Skip to content\r\n<ol><li>You smoke weed, drink alcohol, do drugs</li><li>You own a dog or pet</li><li>You go to festivals </li><li>You are plant based or vegan or drink juices </li><li>You buy new ca… [+491 chars]"
    },
    {
    "source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "Talia Lakritz,Erin McDowell,Gabbi Shaw,Mykenna Maniece",
    "title": "The richest person in every state",
    "description": "Forbes determined the richest person in all 50 states. Here's how these powerful industry leaders became so wealthy.",
    "url": "https://www.businessinsider.com/richest-person-every-state-list-2024-5",
    "urlToImage": "https://i.insider.com/6639302fb8f515beaf11f8d7?width=1200&format=jpeg",
    "publishedAt": "2024-05-21T18:52:46Z",
    "content": "Elon Musk is the richest resident of Texas.Anna Webber/Variety/Getty Images\r\n<ul><li>Forbes compiled a list of the richest person in every state in 2024.</li><li>The billionaires include members of t… [+23429 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "investorplace.com",
    "title": "Fisker Is Careening Toward a Cliff. These EV Stocks Could Follow It Off",
    "description": "Several troubled EV stocks are vying for the title of 'the next Fisker' How much stress can one company put its investors through? For months, investors have been considering that question as they watch the rollercoaster ride that is Fisker (OTCMKTS: ) stock.…",
    "url": "https://biztoc.com/x/3cb4d0369d581ca0",
    "urlToImage": "https://c.biztoc.com/p/3cb4d0369d581ca0/s.webp",
    "publishedAt": "2024-05-21T18:46:14Z",
    "content": "Several troubled EV stocks are vying for the title of 'the next Fisker'How much stress can one company put its investors through?For months, investors have been considering that question as they watc… [+289 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "investorplace.com",
    "title": "Simplify Your Investing: 3 Stocks That Can Anchor the Optimal Portfolio",
    "description": "Stick with these tech and healthcare sector stalwarts for long-term stability Trying to strike a balance between growth and stability is tough. On the one hand, you could stack too much cash into speculative stocks with near-term promises that fizzle into not…",
    "url": "https://biztoc.com/x/fc7c0ded26f6fc4b",
    "urlToImage": "https://c.biztoc.com/p/fc7c0ded26f6fc4b/s.webp",
    "publishedAt": "2024-05-21T18:46:13Z",
    "content": "Stick with these tech and healthcare sector stalwarts for long-term stabilityTrying to strike a balance between growth and stability is tough. On the one hand, you could stack too much cash into spec… [+302 chars]"
    },
    {
    "source": {
    "id": "ars-technica",
    "name": "Ars Technica"
    },
    "author": "Jon Brodkin",
    "title": "Tesla shareholder group opposes Musk’s $46B pay, slams board “dysfunction”",
    "description": "Letter urges shareholders to reject CEO pay plan and boot two board members.",
    "url": "https://arstechnica.com/tech-policy/2024/05/tesla-shareholder-group-opposes-musks-46b-pay-slams-board-dysfunction/",
    "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2020/02/elon-musk-money-pile-760x380.jpg",
    "publishedAt": "2024-05-21T18:46:09Z",
    "content": "28\r\nA Tesla shareholder group yesterday urged other shareholders to vote against Elon Musk's $46 billion pay package, saying the Tesla board is dysfunctional and \"overly beholden to CEO Musk.\" The gr… [+3339 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "siliconvalley.com",
    "title": "Pixar cuts about 175 jobs as part of wider Disney effort",
    "description": "By Thomas Buckley | Bloomberg Walt Disney Co.’s Pixar subsidiary, the pioneering animator that made Toy Story and Finding Nemo, is cutting 14% of its staff, part of an ongoing belt tightening by its parent. About 175 employees are getting layoff notices Tuesd…",
    "url": "https://biztoc.com/x/1bd15cb45bffa724",
    "urlToImage": "https://c.biztoc.com/p/1bd15cb45bffa724/s.webp",
    "publishedAt": "2024-05-21T18:40:05Z",
    "content": "By Thomas Buckley | BloombergWalt Disney Co.s Pixar subsidiary, the pioneering animator that made Toy Story and Finding Nemo, is cutting 14% of its staff, part of an ongoing belt tightening by its pa… [+308 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "entrepreneur.com",
    "title": "The Psychological Impact of Recognition on Employee Motivation and Engagement",
    "description": "By embedding strategic recognition into their core practices, companies can significantly elevate employee motivation, enhance productivity and cultivate a workplace culture that champions engagement and loyalty. Opinions expressed by Entrepreneur contributor…",
    "url": "https://biztoc.com/x/93097fb1125d83d6",
    "urlToImage": "https://c.biztoc.com/p/93097fb1125d83d6/s.webp",
    "publishedAt": "2024-05-21T18:38:07Z",
    "content": "By embedding strategic recognition into their core practices, companies can significantly elevate employee motivation, enhance productivity and cultivate a workplace culture that champions engagement… [+278 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "abcnews.go.com",
    "title": "Group of Tesla shareholders ask investors to vote against Musk's compensation package",
    "description": "They say it’s not in the electric vehicle maker’s best interest. A group of Tesla shareholders is asking investors to vote against a compensation package worth more than $40 billion for CEO Elon Musk, saying that it's not in the electric vehicle maker's best …",
    "url": "https://biztoc.com/x/abdf8da4492067db",
    "urlToImage": "https://c.biztoc.com/p/abdf8da4492067db/og.webp",
    "publishedAt": "2024-05-21T18:36:10Z",
    "content": "They say its not in the electric vehicle makers best interest.A group of Tesla shareholders is asking investors to vote against a compensation package worth more than $40 billion for CEO Elon Musk, s… [+310 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "finance.yahoo.com",
    "title": "Tesla stock pops after company reveals new details, deliveries for its semitruck program",
    "description": "provided a significant update Monday on its long-in-the-tooth project to develop electric semitrucks, which has experienced a series of delays since CEO Elon Musk debuted the rig back in 2017. The company confirmed its Tesla Semi remains on track for producti…",
    "url": "https://biztoc.com/x/756835d2e482d9c5",
    "urlToImage": "https://c.biztoc.com/p/756835d2e482d9c5/og.webp",
    "publishedAt": "2024-05-21T18:36:09Z",
    "content": "provided a significant update Monday on its long-in-the-tooth project to develop electric semitrucks, which has experienced a series of delays since CEO Elon Musk debuted the rig back in 2017.The com… [+284 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "ReadWrite"
    },
    "author": "Suswati Basu",
    "title": "Tesla shareholders challenge Elon Musk’s $46B compensation plan",
    "description": "A group of Tesla investors is urging shareholders to oppose a $46 billion compensation plan proposed for CEO Elon Musk,… Continue reading Tesla shareholders challenge Elon Musk’s $46B compensation plan\nThe post Tesla shareholders challenge Elon Musk’s $46B co…",
    "url": "https://readwrite.com/elon-musk-tesla-pay-46-billion-shareholders-oppose/",
    "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/Tesla-shareholders-challenge-Elon-Musks-46bn-compensation-plan.png",
    "publishedAt": "2024-05-21T18:11:26Z",
    "content": "A group of Tesla investors is urging shareholders to oppose a $46 billion compensation plan proposed for CEO Elon Musk, stating that it was not in the best interests of the electric vehicle manufactu… [+2972 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "WJXT News4JAX"
    },
    "author": "Michelle Chapman",
    "title": "Group of Tesla shareholders ask investors to vote against Musk's compensation package",
    "description": "A group of Tesla shareholders is asking investors to vote against a compensation package worth more than $40 billion for CEO Elon Musk, saying that it’s not in the electric vehicle maker’s best interest.",
    "url": "https://www.news4jax.com/business/2024/05/21/group-of-tesla-shareholders-ask-investors-to-vote-against-musks-compensation-package/",
    "urlToImage": "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/JNUUOBOBUFBSRFNV2OKWFMHBWA.jpg?_a=ATAPphC0",
    "publishedAt": "2024-05-21T18:09:50Z",
    "content": "A group of Tesla shareholders is asking investors to vote against a compensation package worth more than $40 billion for CEO Elon Musk, saying that it's not in the electric vehicle maker's best inter… [+3262 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Peter Valdes-Dapena, CNN",
    "title": "Federal regulators are investigating fatal crash of VinFast EV",
    "description": "Federal regulators are investigating a California crash that killed four occupants who rode in a VinFast electric SUV, which had automated steering features ...",
    "url": "https://www.cnn.com/2024/05/21/cars/vinfast-regulators-investigating-fatal-crash-ev?cid=external-feeds_iluminar_yahoo",
    "urlToImage": "https://media.zenfs.com/en/cnn_business_articles_218/a21191fa0dcb48255b5de97ec1858927",
    "publishedAt": "2024-05-21T18:09:17Z",
    "content": "Federal regulators are investigating a California crash that killed four occupants who rode in a VinFast electric SUV, which had automated steering features the owner had earlier complained about.\r\nT… [+2208 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Electrek"
    },
    "author": "Reinette LeJeune",
    "title": "Aventon e-bikes $300 off with extra batteries starting from $799, ECOFLOW power station sale, Juiced takes $200 off all e-bikes, more",
    "description": "We’ve got another day of Memorial Day sales – this time giving you quality e-bikes at affordable rates alongside backup and off-grid power options ahead of Summer. Headlining these Green Deals is the Aventon Memorial Day sale that is taking up to $300 off a l…",
    "url": "http://electrek.co/2024/05/21/aventon-e-bikes-ecoflow-power-station-sale-juiced-e-bikes-more/",
    "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2024/02/aventon-ramblas-header.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2024-05-21T18:09:08Z",
    "content": "We’ve got another day of Memorial Day sales – this time giving you quality e-bikes at affordable rates alongside backup and off-grid power options ahead of Summer. Headlining these Green Deals is the… [+10529 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "aol.com",
    "title": "Tesla stock pops after company reveals new details, deliveries for its semi-truck program",
    "description": "provided a significant update Monday on its long-in-the-tooth project to develop electric semi trucks, which has experienced a series of delays since CEO Elon Musk debuted the rig back in 2017. The company confirmed its Tesla Semi remains on for production-sp…",
    "url": "https://biztoc.com/x/961a3b2359669e50",
    "urlToImage": "https://c.biztoc.com/p/961a3b2359669e50/s.webp",
    "publishedAt": "2024-05-21T18:00:07Z",
    "content": "provided a significant update Monday on its long-in-the-tooth project to develop electric semi trucks, which has experienced a series of delays since CEO Elon Musk debuted the rig back in 2017.The co… [+282 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Planetizen.com"
    },
    "author": "Diana Ionescu",
    "title": "NHTSA Launches Investigations Into Two More Self-Driving Automakers",
    "description": "NHTSA Launches Investigations Into Two More Self-Driving Automakers \nDiana Ionescu\nTue, 05/21/2024 - 11:00\n\n \n Primary Image\r\n\n \r\n\n \n\n\n \n Primary Image Caption\r\n\n A Waymo autonomous car in San Francisco, California.\r\n\n \n\n\n The National Highway Traffic Safety …",
    "url": "https://www.planetizen.com/news/2024/05/129147-nhtsa-launches-investigations-two-more-self-driving-automakers",
    "urlToImage": "https://www.planetizen.com/files/images/AdobeStock_734373059_Editorial_Use_Only.jpeg",
    "publishedAt": "2024-05-21T18:00:00Z",
    "content": "The National Highway Traffic Safety Administration (NHTSA) is separately investigating Waymo and Zoox, two autonomous car makers, over the behavior of their self-driving vehicles.\r\nAccording to an ar… [+793 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "siliconvalley.com",
    "title": "Federal regulators are investigating fiery fatal East Bay crash of VinFast EV",
    "description": "By Peter Valdes-Dapena | CNN Federal regulators are investigating a Pleasanton crash that killed a family of four, who rode in a VinFast electric SUV, which had automated steering features the owner had earlier complained about. The VinFast VF8, made by the V…",
    "url": "https://biztoc.com/x/f4474756639efa3e",
    "urlToImage": "https://c.biztoc.com/p/f4474756639efa3e/s.webp",
    "publishedAt": "2024-05-21T17:58:04Z",
    "content": "By Peter Valdes-Dapena | CNNFederal regulators are investigating a Pleasanton crash that killed a family of four, who rode in a VinFast electric SUV, which had automated steering features the owner h… [+302 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Forbes"
    },
    "author": "Brian Bushard, Forbes Staff, \n Brian Bushard, Forbes Staff\n https://www.forbes.com/sites/brianbushard/",
    "title": "Musk Net Worth Nears $200 Billion, As He Looks To Topple Bezos As Second Wealthiest Person In The World",
    "description": "Billionaires Elon Musk and Jeff Bezos are still roughly $10 billion behind LVMH magnate Bernard Arnault.",
    "url": "https://www.forbes.com/sites/brianbushard/2024/05/21/musk-net-worth-nears-200-billion-as-he-looks-to-topple-bezos-as-second-wealthiest-person-in-the-world/",
    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/664cde23ac039a0932e4c47f/0x0.jpg?format=jpg&crop=2185,1228,x0,y0,safe&height=900&width=1600&fit=bounds",
    "publishedAt": "2024-05-21T17:50:48Z",
    "content": "Billionaire Tesla, SpaceX and X head Elon Musk saw his net worth spike to nearly $200 billion on Tuesday, putting him in arms length of reclaiming the title of worlds second-richest person from Amazo… [+2449 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": null,
    "title": "Tesla stock pops after company reveals new details, deliveries for its semi-truck program",
    "description": null,
    "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_4aad96d5-68f2-4e5f-ab1d-1e1656c06a8b",
    "urlToImage": null,
    "publishedAt": "2024-05-21T17:49:33Z",
    "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Pras Subramanian",
    "title": "Tesla stock pops after company reveals new details, deliveries for its semitruck program",
    "description": "Robotaxis, low-cost cars, and the Cybertruck aren't stopping Tesla from pushing ahead with its new semitruck, which is set to reach customers by 2026.",
    "url": "https://finance.yahoo.com/news/tesla-stock-pops-after-company-reveals-new-details-deliveries-for-its-semitruck-program-174933019.html",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/QyHmgFlxQDDN5WqhgjGk_A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDI-/https://s.yimg.com/os/creatr-uploaded-images/2023-01/66519d10-9c1e-11ed-bfb3-2fda8b14219d",
    "publishedAt": "2024-05-21T17:49:33Z",
    "content": "Tesla (TSLA) provided a significant update Monday on its long-in-the-tooth project to develop electric semitrucks, which has experienced a series of delays since CEO Elon Musk debuted the rig back in… [+2350 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AutoExpress"
    },
    "author": "Ellis Hyde",
    "title": "Car Deal of the Day: super sleek, all-electric Hyundai Ioniq 6 for £323 a month",
    "description": "Our Deal of the Day for 21 May is for Hyundai’s “electrified streamliner”, the Ioniq 6 EV",
    "url": "https://www.autoexpress.co.uk/hyundai/ioniq-6/363238/car-deal-day-super-sleek-all-electric-hyundai-ioniq-6-ps323-month",
    "urlToImage": "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1690189362/autoexpress/2023/07/Hyundai Ioniq 6_rkxcn0.jpg",
    "publishedAt": "2024-05-21T17:42:36Z",
    "content": "<ul><li>Stunning looks and hi-tech interior</li><li>339-mile range</li><li>£323 a month with £3,090 initial payment</li></ul>It would be easy for the all-electric Hyundai Ioniq 6 to sell on its looks… [+1894 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "investorplace.com",
    "title": "XPEV Stock Alert: XPeng Surges on Higher Delivery Forecast",
    "description": "XPeng (NYSE:XPEV) stock is on the climb today, up 5% as of this writing after delivering a promising first-quarter earnings report this morning. The Chinese electric vehicle (EV) maker managed to handily beat earnings, margin and guidance estimates in its fis…",
    "url": "https://biztoc.com/x/71288cdf86cdd668",
    "urlToImage": "https://c.biztoc.com/p/71288cdf86cdd668/s.webp",
    "publishedAt": "2024-05-21T17:36:07Z",
    "content": "XPeng (NYSE:XPEV) stock is on the climb today, up 5% as of this writing after delivering a promising first-quarter earnings report this morning. The Chinese electric vehicle (EV) maker managed to han… [+286 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "aol.com",
    "title": "Federal regulators are investigating fatal crash of VinFast EV",
    "description": "Federal regulators are investigating a California crash that killed four occupants who rode in a VinFast electric SUV, which had automated steering features the owner had earlier complained about. The VinFast VF8, made by the Vietnamese automaker founded in 2…",
    "url": "https://biztoc.com/x/813f7c9c980be62a",
    "urlToImage": "https://c.biztoc.com/p/813f7c9c980be62a/s.webp",
    "publishedAt": "2024-05-21T17:32:06Z",
    "content": "Federal regulators are investigating a California crash that killed four occupants who rode in a VinFast electric SUV, which had automated steering features the owner had earlier complained about.The… [+260 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "barrons.com",
    "title": "Tesla Stock Is Up",
    "description": "Tesla stock rebounded from a Monday loss sparked by disappointing results from Li Auto. XPeng’s earnings were surprisingly strong. #liauto #xpeng",
    "url": "https://biztoc.com/x/42a33b79c1a61ee3",
    "urlToImage": "https://c.biztoc.com/p/42a33b79c1a61ee3/s.webp",
    "publishedAt": "2024-05-21T17:26:19Z",
    "content": "Tesla stock rebounded from a Monday loss sparked by disappointing results from Li Auto. XPengs earnings were surprisingly strong.\r\n#liauto#xpeng\r\nThis story appeared on barrons.com, ."
    },
    {
    "source": {
    "id": null,
    "name": "Electrek"
    },
    "author": "Michelle Lewis",
    "title": "EVgo more than doubles its registered customers in just two years",
    "description": "US public fast-charging network EVgo (Nasdaq: EVGO) has reached more than 1 million registered customer accounts, doubling its 500,000 account mark in October 2022.\n\n\n\n more…",
    "url": "http://electrek.co/2024/05/21/evgo-registered-customer/",
    "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2024/04/EVgo-Plug-charge.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2024-05-21T17:15:07Z",
    "content": "Photo: EVgo\r\nUS public fast-charging network EVgo (Nasdaq: EVGO) has reached more than 1 million registered customer accounts, doubling its 500,000 account mark in October 2022.\r\nEVgo reports that it… [+1985 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "TechSpot"
    },
    "author": "Zo Ahmed",
    "title": "Autonomous trucking gets real with Volvo and Aurora's production-ready driverless big rig",
    "description": "Dubbed the Volvo VNL Autonomous, this Level 4 self-driving big rig is based on Volvo's brand new VNL Class 8 long-haul semi. It's equipped with a comprehensive suite of sensors, cameras, and computers to enable true driverless operation on highways, rural roa…",
    "url": "https://www.techspot.com/news/103088-autonomous-trucking-gets-real-volvo-aurora-production-ready.html",
    "urlToImage": "https://www.techspot.com/images2/news/bigimage/2024/05/2024-05-21-image-10.jpg",
    "publishedAt": "2024-05-21T17:07:00Z",
    "content": "In a nutshell: The race to bring self-driving trucks to real-world roads is heating up, and Volvo has just made a significant move. The Swedish automaker has unveiled its first \"production-ready\" aut… [+2758 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Marketscreener.com"
    },
    "author": null,
    "title": "Slowing EV uptake may delay Panasonic's EV battery expansion, CEO says",
    "description": "(marketscreener.com) A slowdown in the take-up of\nelectric vehicles in the U.S. may prompt Tesla-supplier\nPanasonic to delay investing in additional plants to\nboost its automotive battery capacity in North America, the\nJapanese group's chief executive said.\n …",
    "url": "https://www.marketscreener.com/quote/stock/PANASONIC-HOLDINGS-CORPOR-6492473/news/Slowing-EV-uptake-may-delay-Panasonic-s-EV-battery-expansion-CEO-says-46786410/",
    "urlToImage": "https://www.marketscreener.com/images/reuters/2024-05/2024-05-21T170539Z_1_LYNXMPEK4K0N6_RTROPTP_3_PANASONIC-CEO.JPG",
    "publishedAt": "2024-05-21T17:00:00Z",
    "content": "TOKYO, May 22 (Reuters) - A slowdown in the take-up of\r\nelectric vehicles in the U.S. may prompt Tesla-supplier\r\nPanasonic to delay investing in additional plants to\r\nboost its automotive battery cap… [+1902 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Phys.Org"
    },
    "author": "Science X",
    "title": "The case for 'math-ish' thinking",
    "description": "For everyone whose relationship with mathematics is distant or broken, Jo Boaler, a professor at Stanford Graduate School of Education (GSE), has ideas for repairing it. She particularly wants young people to feel comfortable with numbers from the start—to ap…",
    "url": "https://phys.org/news/2024-05-case-math-ish.html",
    "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2022/math-1.jpg",
    "publishedAt": "2024-05-21T16:58:04Z",
    "content": "This article has been reviewed according to Science X's \r\neditorial process\r\nand policies.\r\nEditors have highlighted\r\nthe following attributes while ensuring the content's credibility:\r\nfact-checked\r… [+7555 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Tech Xplore"
    },
    "author": "ManMohan S Sodhi",
    "title": "Electric cars: Swappable batteries could be the way to revive flagging sales",
    "description": "The rate of adoption of electric vehicles (EVs) in western countries continues to wane. In the UK, EVs' market share of all new cars for 2024 will barely hit 20%, somewhat below the government goal of 22%. New car registrations of hybrid cars have grown at al…",
    "url": "https://techxplore.com/news/2024-05-electric-cars-swappable-batteries-revive.html",
    "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2024/electric-car-charging.jpg",
    "publishedAt": "2024-05-21T16:51:04Z",
    "content": "This article has been reviewed according to Science X's \r\n editorial process\r\n and policies.\r\n Editors have highlighted\r\n the following attributes while ensuring the content's credibility:\r\nfact-chec… [+6266 chars]"
    }
    ];
  constructor() {
    super();
    console.log("i am constructor");
    this.state = {
      article: this.article,
      lording: false,
      page:1,
      
    };
  }
  async componentDidMount()
  {
    let url=`https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=1ccd57902b4d42c7835004a92496ffd1&page=1&pagesize=21`;
    let data=await fetch(url);
    let parsedData=await data.json();
    
    this.setState(
      {article : parsedData.articles,
       totalArticle:parsedData.totalResults,
       totalPage:Math.ceil(this.state.totalArticle/21)
      }
    );
  }
 
  handleNextClick=async ()=>{
    if(this.state.page<this.state.totalPage){
    let url=`https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=1ccd57902b4d42c7835004a92496ffd1&page=${this.state.page+1}&pageSize=21`;
    let data=await fetch(url);
    let parsedData=await data.json();
    
    this.setState(
      
      {
        page:this.state.page+1,
        article : parsedData.articles}
      );
      console.log(this.state.totalPage);
      console.log(this.state.page);
    }
    }


  handlePreviousClick=async ()=>{
  
    let url=`https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=1ccd57902b4d42c7835004a92496ffd1&page=${this.state.page>=1?this.state.page-1:this.state.page}&pageSize=21`;
    let data=await fetch(url);
    let parsedData=await data.json();
    
    this.setState(
      
      {
        page : this.state.page-1 ,
        article : parsedData.articles}
    );

  
  }

  

  render() {
    
    
    return (
      <div>
        <div className="container my-3">
          <div className="row">
            {this.state.article.map((element) => {
              return (
                 element.title!=='[Removed]'&&<div className="col-md-4" key={element.url}>
                  
                  
                    <NewsItem
                    title={element.title!=null?element.title:' '}
                    description={element.description!=null?element.description:" "}
                    imgurl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    
                  />
                  
                
                </div>
              );
            })}
          </div>
        </div>
        <div className="d-flex justify-content-between ">
          <button onClick={this.handlePreviousClick} disabled={this.state.page<=1} type="button" className="btn btn-success ">
          &larr; previous
          </button>
          <button  onClick={this.handleNextClick} type="button" className="btn btn-success">
            next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default Newss;
