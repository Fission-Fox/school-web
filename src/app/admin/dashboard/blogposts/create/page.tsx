"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "react-quill/dist/quill.bubble.css";
import styles from "./blog.module.css";
// import { useSession } from "next-auth/react";
// import { app } from "@/utils/firebase";
import Link from "next/link";
import ReactQuill from "react-quill";
import Post from "@/app/blog/components/post";
import dayjs from "dayjs";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import Tag from "./tag";

const page = () => {
  //   const { status } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(true);
  const [file, setFile] = useState<any>();
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [Preview, setpreview] = useState(false);

  //   useEffect(() => {
  //     const storage = getStorage(app);
  //     const upload = () => {
  //       const name = new Date().getTime() + file.name;
  //       const storageRef = ref(storage, name);

  //       const uploadTask = uploadBytesResumable(storageRef, file);

  //       uploadTask.on(
  //         "state_changed",
  //         (snapshot) => {
  //           const progress =
  //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //           console.log("Upload is " + progress + "% done");
  //           switch (snapshot.state) {
  //             case "paused":
  //               console.log("Upload is paused");
  //               break;
  //             case "running":
  //               console.log("Upload is running");
  //               break;
  //           }
  //         },
  //         (error) => {},
  //         () => {
  //           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //             setMedia(downloadURL);
  //           });
  //         }
  //       );
  //     };

  //     file && upload();
  //   }, [file]);

  //   if (status === "loading") {
  //     return <div className={styles.loading}>Loading...</div>;
  //   }

  //   if (status === "unauthenticated") {
  //     router.push("/");
  //   }

  const slugify = (str: any) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style", //If not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  let GetDate = dayjs().format("DD-MMM , YYYY");
  return (
    <div className={styles.container}>
      <Link href={"/admin/dashboard/blogposts"}>
        <p className="font-semibold ml-6 "> ⬅ Back</p>
      </Link>
      <h1 className="mt-6  ml-4 font-bold">Title</h1>
      <input
        type="text"
        placeholder="Title"
        // className={styles.input}
        className="w-[90%] h-10 border ml-4 pl-4  mb-6"
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        // className={styles.select}
        className="w-32 border ml-4"
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div
      // className={styles.editor}
      >
        {/* <div className="flex items-center ml-4 ">
          <button className="font-bold"
            // className={styles.button}
            onClick={() => setOpen(!open)}
          >
            <Image src="/plus.png" alt="" width={16} height={16} />
            Image
          </button>

        </div> */}
        <div>
          <h1 className="font-bold mt-6 ml-4">Featured Image</h1>
          <div className="flex justify-center ml-4   bg-[#DADDE1] w-[250px] h-10">
            <button
              className="  flex justify-center items-center    rounded-lg"
              onClick={() => setOpen(open)}
            >
              Featured Image
            </button>
            {open && (
              <div
              //  className={styles.add}
              >
                <input
                  type="file"
                  id="image"
                  onChange={(e: any) => {
                    const file = e.target.files[0];
                    const reader: any = new FileReader();
                    reader.onloadend = () => {
                      setFile(reader.result);
                    };
                    reader.readAsDataURL(file);
                    // setFile(e.target.files[0])
                  }}
                  style={{ display: "none" }}
                />
                <button
                // className={styles.addButton}
                >
                  <label htmlFor="image">
                    <Image src="/image.png" alt="" width={16} height={16} />{" "}
                    <ImageIcon className=" " />
                  </label>
                </button>
                <button
                // className={styles.addButton}
                >
                  <Image src="/external.png" alt="" width={16} height={16} />
                </button>
                <button className={styles.addButton}>
                  <Image src="/video.png" alt="" width={16} height={16} />
                </button>
              </div>
            )}
          </div>
        </div>

        <ReactQuill
          // className={styles.textArea}
          className="border w-[90%] ml-4 mt-6"
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
        <Tag />

        <button
          className="ml-4 border mt-6 p-2"
          onClick={() => setpreview(!Preview)}
        >
          preview
        </button>
      </div>

      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
      {Preview == true && (
        <Post
          tag={catSlug}
          date={GetDate.toString()}
          title={title}
          description={value}
          image={file ?? ""}
        />
      )}
    </div>
  );
};

export default page;
