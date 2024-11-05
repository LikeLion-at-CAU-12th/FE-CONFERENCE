import NewAutoComplete from "./NewAutoComplete";

const meta = {
  title: "MyComponent/NewAutoComplete",
  component: NewAutoComplete,
  argTypes: {
    setAnswers: { action: "setAnswers" }, // 스토리북의 액션 패널에서 호출을 확인가능
    backgroundColor: { control: "color", description: "Autocomplete 배경색" },
    textColor: { control: "color", description: "텍스트 색상" },
    borderColor: { control: "color", description: "테두리 색상" },
    options: {
      control: "array",
      description: "옵션 목록",
      defaultValue: [
        { label: "강릉", value: 1 },
        { label: "속초", value: 2 },
        { label: "양양", value: 3 },
        { label: "춘천", value: 4 },
        { label: "선택해주세요", value: 5 },
      ],
    },
  },
};

export default meta;

export const Primary = {
  args: {
    backgroundColor: "#FFFAE9",
    textColor: "black",
    borderColor: "#FFE39D",
    options: [
      { label: "강릉", value: 1 },
      { label: "속초", value: 2 },
      { label: "양양", value: 3 },
      { label: "춘천", value: 4 },
      { label: "선택해주세요", value: 5 },
    ],
  },
};
