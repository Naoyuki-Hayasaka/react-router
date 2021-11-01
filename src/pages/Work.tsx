import { VFC } from "react";
import { useParams, Link } from "react-router-dom";
import works, { TrackRecord } from "../data/works";

const Work: VFC = () => {
  const { id } = useParams<{ id: string }>();
  const data: TrackRecord = works[Number(id)];

  return (
    <div>
      <Link to="/works">実績</Link> ＞ {data.id}
      <h1>{data.name}</h1>
      <a target="blank" href={data.url}>
        {data.url}
      </a>
    </div>
  );
};

export default Work;
