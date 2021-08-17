import axios from "axios";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdBanner from "../components/AdBanner";
import Card from "../components/Card";
import DefaultCard from "../components/DefaultCard";
import Footer from "../components/Footer";
import LatestArticleCard from "../components/LatestArticleCard";
import LatestReview from "../components/LatestReview";
import LatestVideo from "../components/LatestVideo";
import MatchesBanner from "../components/MatchesBanner";
import Navigation from "../components/Navigation";
import PopularGroupCard from "../components/PopularGroupCard";
import SectionTitle from "../components/SectionTitle";
import SubNavigation from "../components/SubNavigation";
import {
  setEditorChoiceData,
  setlatestArticleData,
  setlatestReviewData,
} from "../redux/actions/dataActions";

export default function Home() {
  const dispatch = useDispatch();

  const fetchDatas = async () => {
    await axios
      .get("https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp")
      .then((response) => {
        dispatch(setEditorChoiceData(response.data["editor's choice"]));
        dispatch(setlatestArticleData(response.data["latest articles"]));
        dispatch(setlatestReviewData(response.data["latest review"]));
      })
      .catch((e) => {
        console.log("Error", e);
      });
  };

  useEffect(() => {
    fetchDatas();
  }, []);

  const editorChoiceStore = useSelector((state) => state.editorChoiceStore);
  const latestArticleStore = useSelector((state) => state.latestArticleStore);
  const latestReviewStore = useSelector((state) => state.latestReviewStore);

  return (
    <div>
      <Head>
        <title>Female Daily Network</title>
      </Head>
      <div>
        <Navigation />
        <SubNavigation />
        <div className="body-container">
          <AdBanner type="top-frame" />
          <AdBanner type="billboard" />
          <div className="row">
            <SectionTitle
              seeMore={false}
              title="Editor's Choice"
              subtitle="Curated with love"
            />
            <div className="editor-choice inside-row">
              {editorChoiceStore.data.map((data, index) => (
                <Card
                  key={index}
                  editor={data.editor}
                  role={data.role}
                  product={data.product}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="row bg-pink">
          <MatchesBanner />
        </div>
        <div className="body-container">
          <div className="row">
            <AdBanner type="internal-campaign" />
          </div>
          <div className="row">
            <SectionTitle
              seeMore={true}
              title="Latest Article"
              subtitle="So you can make better purchase decision"
            />
            <div className="grid latest-article inside-row">
              {latestArticleStore.data.map((data, index) => (
                <LatestArticleCard
                  key={index}
                  title={data.title}
                  author={data.author}
                  image={data.image}
                  publishedAt={data.published_at}
                />
              ))}
            </div>
          </div>
          <div className="row">
            <SectionTitle
              title="Latest Review"
              subtitle="So you can make better purchase decision"
            />
            <LatestReview datas={latestReviewStore} />
          </div>
          <div className="row">
            <SectionTitle
              title="Popular Groups"
              subtitle="Where the beauty TALK are"
            />
            <div className="popular-groups inside-row">
              <PopularGroupCard profileImage="FDNWebImage_88" />
              <PopularGroupCard profileImage="FDNWebImage_90" />
              <PopularGroupCard profileImage="FDNWebImage_92" />
              <PopularGroupCard profileImage="FDNWebImage_94" />
            </div>
          </div>
          <div className="row">
            <SectionTitle
              title="Latest Videos"
              subtitle="Watch and learn, ladies"
            />
            <LatestVideo />
          </div>
          <div className="row">
            <SectionTitle
              title="Trending This Week"
              subtitle="See our weekly most reviewed products"
            />
            <div className="trending inside-row">
              <DefaultCard
                product={{
                  name: "JUICE BEAUTY",
                  image: "/assets/images/FDNWebImage_49.png",
                  rating: 4.9,
                  description: "Phyto-Pigments Flawless Serum... Rosy Beige",
                }}
              />
              <DefaultCard
                product={{
                  name: "JUICE BEAUTY",
                  image: "/assets/images/FDNWebImage_47.png",
                  rating: 4.9,
                  description: "Phyto-Pigments Flawless Serum... Rosy Beige",
                }}
              />
              <DefaultCard
                product={{
                  name: "JUICE BEAUTY",
                  image: "/assets/images/FDNWebImage_33.png",
                  rating: 4.9,
                  description: "Phyto-Pigments Flawless Serum... Rosy Beige",
                }}
              />
              <DefaultCard
                product={{
                  name: "JUICE BEAUTY",
                  image: "/assets/images/FDNWebImage_45.png",
                  rating: 4.9,
                  description: "Phyto-Pigments Flawless Serum... Rosy Beige",
                }}
              />
              <DefaultCard
                product={{
                  name: "JUICE BEAUTY",
                  image: "/assets/images/FDNWebImage_47.png",
                  rating: 4.9,
                  description: "Phyto-Pigments Flawless Serum... Rosy Beige",
                }}
              />
            </div>
            <div className="slider-nav inside-row">
              <div className="arrow-container">
                <i className={`arrow left clickable active`}></i>
              </div>
              <div className="index-container">
                {[...Array(2)].map((e, index) => (
                  <span
                    key={index}
                    className={`slider-index clickable ${
                      index == 0 ? "active" : null
                    }`}
                  ></span>
                ))}
              </div>
              <div className="arrow-container">
                <i className={`arrow right clickable`}></i>
              </div>
            </div>
          </div>
          <div className="row">
            <SectionTitle
              title="Top Brands"
              subtitle="We all know and love"
              seeMore={true}
            />
            <div className="top-brands">
              <div>
                <img src="assets/images/FDNWebImage_138.png" />
              </div>
              <div>
                <img src="assets/images/FDNWebImage_140.png" />
              </div>
              <div>
                <img src="assets/images/FDNWebImage_142.png" />
              </div>
              <div>
                <img src="assets/images/FDNWebImage_144.png" />
              </div>
              <div>
                <img src="assets/images/FDNWebImage_145.png" />
              </div>
              <div>
                <img src="assets/images/FDNWebImage_147.png" />
              </div>
            </div>
          </div>
          <div className="row">
            <h3>
              Female Daily - Find everything you want to know about beauty on
              Female Daily
            </h3>
            <div>
              Product Reviews, Tips & Tricks, Expert and Consumer Opinions,
              Beauty Tutorial, Discussions, Beauty Workshops, anything!
            </div>
            We are here to be your friendly solution to all things beauty,
            indside and out!
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
