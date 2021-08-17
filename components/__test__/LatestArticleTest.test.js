import { render, screen, cleanup } from "@testing-library/react";
import LatestArticleCard from "../LatestArticleCard";

afterEach(() => {
  cleanup();
});

test("should render latest article component", () => {
  const data = {
    title: "Brush dan Alat Makeup Yang Paling Sering Digunakan",
    author: "celle",
    image: "https://imgcdn.femaledaily.com/2019/06/5-makeup-tools-3-Copy.jpg",
    published_at: "4 hours ago",
  };

  render(
    <LatestArticleCard
      title={data.title}
      author={data.author}
      image={data.image}
      publishedAt={data.published_at}
      testId={"latest-article-1"}
    />
  );
  const cardElement = screen.getByTestId("latest-article-1");

  expect(cardElement).toBeInTheDocument();
  expect(cardElement).toHaveTextContent(
    "Brush dan Alat Makeup Yang Paling Sering Digunakan"
  );
});

test("should render 6 latest article component", () => {
  const data = [
    {
      title: "Brush dan Alat Makeup Yang Paling Sering Digunakan",
      author: "celle",
      image: "https://imgcdn.femaledaily.com/2019/06/5-makeup-tools-3-Copy.jpg",
      published_at: "4 hours ago",
    },
    {
      title: "Brush dan Alat Makeup Yang Paling Sering Digunakan",
      author: "celle",
      image: "https://imgcdn.femaledaily.com/2019/06/5-makeup-tools-3-Copy.jpg",
      published_at: "4 hours ago",
    },
    {
      title: "Brush dan Alat Makeup Yang Paling Sering Digunakan",
      author: "celle",
      image: "https://imgcdn.femaledaily.com/2019/06/5-makeup-tools-3-Copy.jpg",
      published_at: "4 hours ago",
    },
    {
      title: "Brush dan Alat Makeup Yang Paling Sering Digunakan",
      author: "celle",
      image: "https://imgcdn.femaledaily.com/2019/06/5-makeup-tools-3-Copy.jpg",
      published_at: "4 hours ago",
    },
    {
      title: "Brush dan Alat Makeup Yang Paling Sering Digunakan",
      author: "celle",
      image: "https://imgcdn.femaledaily.com/2019/06/5-makeup-tools-3-Copy.jpg",
      published_at: "4 hours ago",
    },
    {
      title: "Brush dan Alat Makeup Yang Paling Sering Digunakan",
      author: "celle",
      image: "https://imgcdn.femaledaily.com/2019/06/5-makeup-tools-3-Copy.jpg",
      published_at: "4 hours ago",
    },
  ];

  render(
    <div className="editor-choice inside-row">
      {data.map((data, index) => (
        <LatestArticleCard
          key={index}
          title={data.title}
          author={data.author}
          image={data.image}
          publishedAt={data.published_at}
          testId={`latest-article-${index + 1}`}
        />
      ))}
    </div>
  );
  let count = 0;
  [...Array(6)].forEach((v, i) => {
    count = screen.getByTestId(`latest-article-${i + 1}`) ? count + 1 : count;
  });

  expect(count).toBe(6);
});
