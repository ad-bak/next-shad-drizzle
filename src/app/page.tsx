import Link from "next/link";

export default function HomePage() {
  const mockUrls = [
    "https://www.wowmakers.com/static/Video-thumbnail-e743f3689ca0c0bac8faab39023da37f.jpeg",
    "https://static-cse.canva.com/blob/1436087/1600w-wK95f3XNRaM.jpg",
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/thumbnail-background-youtube-2023-design-template-d1ba8caa87a7e45a222132372cd336a7_screen.jpg?ts=1674608286",
    "https://ergonotes.com/wp-content/uploads/2022/11/Find-YouTube-Thumbnail-Source.jpg",
  ];

  const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
  }));

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div className="h-200 w-48 p-4" key={image.id + index}>
            <img src={image.url} className="h-full" />
          </div>
        ))}
      </div>
    </main>
  );
}
