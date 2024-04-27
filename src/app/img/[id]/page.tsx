import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const image = await getImage(+photoId);
  return (
    <div>
      <img src={image.url} className="w-96" />
    </div>
  );
}
