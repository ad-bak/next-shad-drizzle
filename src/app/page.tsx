import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images].map((image, index) => (
          <div
            className="flex h-52 w-60 flex-col p-4"
            key={image.id + "-" + index}
          >
            <img src={image.url} className="h-full" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
