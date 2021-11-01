import { VFC } from "react";
import { useParams } from "react-router-dom";
import works, { TrackRecord } from "../data/works";

type ID = {
  id: string;
};

const Work: VFC = () => {
  const { id } = useParams<ID>();
  const data: TrackRecord = works[Number(id)];

  return (
    <div>
      <a href="/works">実績</a> ＞ {data.id}
      <h1>{data.name}</h1>
      <a target="blank" href={data.url}>
        {data.url}
      </a>
    </div>
  );
};

export default Work;
