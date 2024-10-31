import Input from "./Input";

const meta = {
  title: "MyComponent/Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    borderColor: { control: "color" },
  },
};

export default meta;

export const Primary = {
  args: {
    children: "Button",
    backgroundColor: "#fff",
    borderColor: "#ae5959",
    color: "#ae5959",
    borderRadius: "50px",
    outline: "none",
    padding: "15px 20px",
    placeholder: "예시글입니다",
  },
};

export const Naver = {
  args: {
    children: "Button",
    backgroundColor: "#fff",
    borderColor: "#2DB400",
    color: "#000",
    borderRadius: "50px",
    outline: "none",
    padding: "10px 15px",
    placeholder: "네이버 스타일의 예시글입니다", // 새로운 placeholder
  },
};
