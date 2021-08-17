import { render, screen, cleanup } from "@testing-library/react";
import LatestReviewCard from "../LatestReviewCard";

afterEach(() => {
  cleanup();
});

test("should render latest review card component", () => {
  const data = {
    user: "atikaxr",
    profile: ["Oily", "Medium Dark", "Warm", "19 - 24"],
    product: {
      image:
        "https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg",
      name: "Tony Moly",
      desc: "Delight Tony Tint",
    },
    star: 3,
    comment:
      "liptint pertamaku haha dengan harga yang affordable udah bisa membuat korean look di wajahku (ga cocok si haha), cairrr, mudah kering jadi",
  };

  render(
    <LatestReviewCard
      user={data.user}
      profile={data.profile}
      product={data.product}
      star={data.star}
      comment={data.comment}
      testId="latest-review-1"
    />
  );
  const cardElement = screen.getByTestId("latest-review-1");

  expect(cardElement).toBeInTheDocument();
  expect(cardElement).toHaveTextContent("atikaxr");
});

test("first page should render 2 latest review card component", () => {
  const store = {
    data: [
      {
        user: "atikaxr",
        profile: ["Oily", "Medium Dark", "Warm", "19 - 24"],
        product: {
          image:
            "https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg",
          name: "Tony Moly",
          desc: "Delight Tony Tint",
        },
        star: 3,
        comment:
          "liptint pertamaku haha dengan harga yang affordable udah bisa membuat korean look di wajahku (ga cocok si haha), cairrr, mudah kering jadi",
      },
      {
        user: "atikaxr",
        profile: ["Oily", "Medium Dark", "Warm", "19 - 24"],
        product: {
          image:
            "https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg",
          name: "Tony Moly",
          desc: "Delight Tony Tint",
        },
        star: 3,
        comment:
          "liptint pertamaku haha dengan harga yang affordable udah bisa membuat korean look di wajahku (ga cocok si haha), cairrr, mudah kering jadi",
      },
      {
        user: "atikaxr",
        profile: ["Oily", "Medium Dark", "Warm", "19 - 24"],
        product: {
          image:
            "https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg",
          name: "Tony Moly",
          desc: "Delight Tony Tint",
        },
        star: 3,
        comment:
          "liptint pertamaku haha dengan harga yang affordable udah bisa membuat korean look di wajahku (ga cocok si haha), cairrr, mudah kering jadi",
      },
    ],
    slider: {
      totalPage: 2,
      currentPage: 1,
      firstPage: true,
      lastPage: false,
    },
  };

  render(
    <div className="card-section">
      {store.data.slice(store.slider.currentPage - 1, 2).map((data, index) => (
        <LatestReviewCard
          key={index}
          user={data.user}
          profile={data.profile}
          product={data.product}
          star={data.star}
          comment={data.comment}
          testId={`latest-review-${index + 1}`}
        />
      ))}
    </div>
  );

  let count = 0;
  [...Array(2)].forEach((v, i) => {
    count = screen.getByTestId(`latest-review-${i + 1}`) ? count + 1 : count;
  });

  expect(count).toBe(2);
});

test("last page should render 1 latest review card component", () => {
  const store = {
    data: [
      {
        user: "atikaxr",
        profile: ["Oily", "Medium Dark", "Warm", "19 - 24"],
        product: {
          image:
            "https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg",
          name: "Tony Moly",
          desc: "Delight Tony Tint",
        },
        star: 3,
        comment:
          "liptint pertamaku haha dengan harga yang affordable udah bisa membuat korean look di wajahku (ga cocok si haha), cairrr, mudah kering jadi",
      },
      {
        user: "atikaxr",
        profile: ["Oily", "Medium Dark", "Warm", "19 - 24"],
        product: {
          image:
            "https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg",
          name: "Tony Moly",
          desc: "Delight Tony Tint",
        },
        star: 3,
        comment:
          "liptint pertamaku haha dengan harga yang affordable udah bisa membuat korean look di wajahku (ga cocok si haha), cairrr, mudah kering jadi",
      },
      {
        user: "atikaxr",
        profile: ["Oily", "Medium Dark", "Warm", "19 - 24"],
        product: {
          image:
            "https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg",
          name: "Tony Moly",
          desc: "Delight Tony Tint",
        },
        star: 3,
        comment:
          "liptint pertamaku haha dengan harga yang affordable udah bisa membuat korean look di wajahku (ga cocok si haha), cairrr, mudah kering jadi",
      },
    ],
    slider: {
      totalPage: 2,
      currentPage: 2,
      firstPage: false,
      lastPage: true,
    },
  };

  render(
    <div className="card-section">
      {store.data.slice(store.slider.currentPage - 1, 2).map((data, index) => (
        <LatestReviewCard
          key={index}
          user={data.user}
          profile={data.profile}
          product={data.product}
          star={data.star}
          comment={data.comment}
          testId={`latest-review-${index + 1}`}
        />
      ))}
    </div>
  );

  let count = 0;
  [...Array(2)].forEach((v, i) => {
    count = screen.queryByTestId(`latest-review-${i + 1}`) ? count + 1 : count;
  });

  expect(count).toBe(1);
});
