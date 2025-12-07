
export default function VideoEmbedYoutube(
  {
    src
  } : {
    src: string
  }
) {

  return (
    <iframe
      id={"ytplayer"}
      width={"480"}
      height={"360"}
      loading={"lazy"}
      className={"bg-secondary-subtle"}
      src={src}
      allowFullScreen/>
  );

}