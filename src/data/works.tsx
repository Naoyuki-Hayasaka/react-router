export type TrackRecord = {
  id: number;
  name: string;
  url: string;
};

const works: TrackRecord[] = [
  {
    id: 0,
    name: "自己紹介ページ",
    url: "https://j7e2n.csb.app/"
  },
  {
    id: 1,
    name: "Todoアプリ",
    url: "https://monado-redux-todo-app.web.app"
  },
  {
    id: 2,
    name: "オープンソース",
    url: "https://github.com/makomori/Sharaku"
  }
];

export default works;
