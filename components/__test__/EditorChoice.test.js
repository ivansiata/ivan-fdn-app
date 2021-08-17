import { render, screen, cleanup } from "@testing-library/react";
import EditorChoiceCard from "../EditorChoiceCard";

afterEach(() => {
  cleanup();
});

test("should render editor's choice component", () => {
  const data = {
    editor: "annedean",
    role: "Associate Editor",
    product: {
      name: "Y.O.U Makeups",
      rating: 4.1,
      description: "Rouge Velvet Matte Lip Cream",
      image:
        "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
    },
  };

  render(
    <EditorChoiceCard
      key={0}
      editor={data.editor}
      role={data.role}
      product={data.product}
      testId={`editor-choice-1`}
    />
  );
  const cardElement = screen.getByTestId("editor-choice-1");

  expect(cardElement).toBeInTheDocument();
  expect(cardElement).toHaveTextContent("annedean");
});

test("should render 5 editor's choice component", () => {
  const data = [
    {
      editor: "annedean",
      role: "Associate Editor",
      product: {
        name: "Y.O.U Makeups",
        rating: 4.1,
        description: "Rouge Velvet Matte Lip Cream",
        image:
          "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      },
    },
    {
      editor: "annedean",
      role: "Associate Editor",
      product: {
        name: "Y.O.U Makeups",
        rating: 4.1,
        description: "Rouge Velvet Matte Lip Cream",
        image:
          "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      },
    },
    {
      editor: "annedean",
      role: "Associate Editor",
      product: {
        name: "Y.O.U Makeups",
        rating: 4.1,
        description: "Rouge Velvet Matte Lip Cream",
        image:
          "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      },
    },
    {
      editor: "annedean",
      role: "Associate Editor",
      product: {
        name: "Y.O.U Makeups",
        rating: 4.1,
        description: "Rouge Velvet Matte Lip Cream",
        image:
          "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      },
    },
    {
      editor: "annedean",
      role: "Associate Editor",
      product: {
        name: "Y.O.U Makeups",
        rating: 4.1,
        description: "Rouge Velvet Matte Lip Cream",
        image:
          "https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png",
      },
    },
  ];

  render(
    <div className="editor-choice inside-row">
      {data.map((data, index) => (
        <EditorChoiceCard
          key={index}
          editor={data.editor}
          role={data.role}
          product={data.product}
          testId={`editor-choice-${index + 1}`}
        />
      ))}
    </div>
  );
  let count = 0;
  [...Array(5)].forEach((v, i) => {
    count = screen.getByTestId(`editor-choice-${i + 1}`) ? count + 1 : count;
  });

  expect(count).toBe(5);
});
