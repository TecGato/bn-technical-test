export default function EpisodeDetail({ name, description, view }) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl">{name}</h1>
      <p
        className="text-justify"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      ></p>
      <audio controls name={name}>
        <source src={view} type="audio/mpeg" />
      </audio>
    </div>
  );
}
