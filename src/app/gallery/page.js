import Image from "next/image";
import nextImage from "../../assets/nextjs.jpg";

export const metadata = {
  title: "gallery",
  description: "This is gallery page",
};

const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center">Image optimization</h1>
      <h1 className="text-2xl text-center">Regular image tag</h1>
      <img
        src="https://cdn.dribbble.com/users/1222918/screenshots/4029158/media/1064033d034e75b525caeb70920931fd.jpg?resize=400x300&vertical=center"
        alt="next image"
        className="mx-auto"
      />

      <h1 className="text-2xl text-center">Next.js image component</h1>
      <Image
        src="https://cdn.dribbble.com/users/1222918/screenshots/4029158/media/1064033d034e75b525caeb70920931fd.jpg?resize=400x300&vertical=center"
        alt="next image"
        width={400}
        height={400}
        className="mx-auto"
      />
      <h1 className="text-2xl text-center">Local image</h1>
      <Image
        src={nextImage}
        alt="next image"
        width={400}
        height={400}
        className="mx-auto"
      />
    </div>
  );
};

export default GalleryPage;
