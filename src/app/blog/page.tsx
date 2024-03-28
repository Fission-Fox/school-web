import { posts } from "@/data/post";
import dayjs from "dayjs";
import Pagination from "./components/pagination";
import Post from "./components/post";
export default function page() {
  return (
    <div>
      <main className="container mx-auto flex flex-col p-3">
        <p className="text-4xl inline font-bold text-left ml-0  sm:ml-0 md:ml-10 lg:ml-10 xl:ml-10 2xl:ml-24  my-16 leading-[normal] text-[rgba(35,46,82,1)]">
          All posts
        </p>

        {posts?.map((item: itemProps) => {
          let GetDate = dayjs(item.date).format("DD-MMM , YYYY");

          return (
            <Post
              key={item.id}
              tag={item.tags[0]}
              date={GetDate.toString()}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          );
        })}

        <Pagination />
      </main>
    </div>
  );
}

interface homePageProps {
  posts: {
    map: any;
    date: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    author: string;
    category: string[];
    id: string;
  };
}

interface itemProps {
  date: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  author: string;
  category: string[];
  id: string;
}
