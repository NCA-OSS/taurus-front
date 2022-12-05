import ImageCard from "@components/cards/image-card/ImageCard";
import Head from "next/head";

export default function LatestPromotionsPage() {
  return (
    <>
      <Head>
        <title>Latest Promotions | taurus</title>
      </Head>

      <main className="grid gap-5 place-items-center p-5 lg:max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-5">
          <ImageCard
            imageUrl="https://picsum.photos/640/360"
            title="Spin & Win Grand Bonanza"
            description="Spin & Win guaranteed e-vouchers and chances of winning smartphones, smart TV and other amazing prizes."
            buttonTitle="Spin & Win"
          />
          <ImageCard
            imageUrl="https://picsum.photos/640/361"
            title="Our Best Value Plan"
            description="Best value for money, the new plan is very affordable. Get it now and enjoy 6 months FREE speed upgrade."
            buttonTitle="I want this!"
          />
        </div>
        <div className="grid lg:grid-cols-3 gap-5">
          <ImageCard
            imageUrl="https://picsum.photos/640/362"
            title="Unlimited 5G Data, Calls, Texts"
            description="Power connections of Unlimited 5G Data, while you are on the go. Enjoy the uninterrupted mobile experience"
            buttonTitle="5G me now!"
          />
          <ImageCard
            imageUrl="https://picsum.photos/640/363"
            title="Extraordinary Broadband + Entertainment"
            description="Free speed upgrade, 30-days FREE trial and access to even more streaming apps. Enjoy these extraordinary offers."
            buttonTitle="Find Out More"
          />
          <ImageCard
            imageUrl="https://picsum.photos/640/364"
            title="ULTIMATE PACK!"
            description="70+ channels, FREE set top box, and access up to 8 streaming apps."
            buttonTitle="Get Ultimate Pack"
          />
        </div>
      </main>
    </>
  );
}
