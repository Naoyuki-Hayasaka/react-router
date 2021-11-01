import { VFC } from "react";
import { Link } from "react-router-dom";
import works from "../data/works";

const Works: VFC = () => {
  return (
    <div>
      <h1>投稿一覧画面</h1>
      <ul>
        {works.map((work) => (
          <li key={work.id}>
            <Link to={`/work/${work.id}`}>{work.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Works;
